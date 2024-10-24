const fs = require("fs");
const dataFile = fs.readFileSync("./data/data.json", "utf-8");
const data = JSON.parse(dataFile);

const LOCALNAV = [
    { name: "Home", linkUrl: "index.html" },
    { name: "Projects", linkUrl: "projects.html" },
    { name: "Art", linkUrl: "art.html" },
    { name: "Blog", linkUrl: "blog.html" },
    { name: "About", linkUrl: "about.html" },
];

const LOWERLINKS = [
    { name: "Webring", linkUrl: "webring.html" },
    { name: "RSS Feed", linkUrl: "rss.xml" },
    { name: "GitHub", linkUrl: "https://github.com/travissouthard" },
    { name: "Resumé", linkUrl: "resume.html" },
];

const stripHTML = (html) => {
    return html.replace(/(<([^>]+)>)/gi, "");
};

const createPostSlug = (title) => {
    const justWords = title.replace(/[.,\/#!$%\^&\*;:{}=_`~()\?]/g, "");
    const wordsArr = justWords.toLowerCase().split(" ");
    return wordsArr.join("-");
};

const getDetailPageName = (title) => {
    const pageNames = {
        projects: "projects",
        art: "art",
        blog: "blog",
    };
    for (let [key, arr] of Object.entries(data)) {
        for (let i = 0; i < arr.length; i++) {
            const post = arr[i];
            if (title === post.title || title === createPostSlug(post.title)) {
                return [pageNames[key], i];
            }
        }
    }
    return;
};

const sortArrayByDate = (arr) => {
    const isResume = !arr[0].lastUpdated && arr[0].end;
    const sortCallback = isResume
        ? (a, b) => {
              const endA = a.end === null ? Infinity : a.end;
              const endB = b.end === null ? Infinity : b.end;
              return endB - endA;
          }
        : (a, b) => b.lastUpdated - a.lastUpdated;
    return arr.sort(sortCallback);
};

const buildNav = (linkArr, isPost) => {
    let navList = [];
    for (let { name, linkUrl } of linkArr) {
        const isLocal = linkUrl.slice(0, 4) !== "http";
        navList.push(`
            <a href="${isPost && isLocal ? "../" : ""}${linkUrl.toLowerCase()}">
                <li>${name}</li>
            </a>`);
    }
    return `<ul>${navList.join("")}</ul>`;
};

const buildResumeCard = (entry) => {
    const { title, start, end, company, coLink, description, location } = entry;
    const formatDate = (dateNum) => {
        if (dateNum === null) return "Present";
        return new Intl.DateTimeFormat("en-US", {
            month: "long",
            year: "numeric",
        }).format(dateNum);
    };
    const companyLink = (child) => {
        return coLink
            ? `<a href="${coLink}" target="_blank">${child}</a>`
            : child;
    };

    return `<article class="resume-card">
        <h3>${title}</h3>
        <p>${companyLink(`<b>${company}</b>`)} | ${location} | <em>${formatDate(
        start
    )}-${formatDate(end)}</em></p>${
        description ? `\n<p>${description}</p>` : ""
    }
    </article>\n`;
};

const buildPostCard = (post, listIndex, isIndexPage) => {
    const postLink =
        post.siteLink ||
        `${getDetailPageName(post.title)[0]}/${createPostSlug(
            post.title
        )}.html`;
    const imagePath = post.imagePath || "./assets/images/art/headshot-32.png";
    let descText = post.description || post.altText;
    descText = stripHTML(descText);
    const shouldFeature = listIndex === 0 && isIndexPage;
    const previewLength = shouldFeature ? 560 : 240;
    descText =
        descText.length > previewLength
            ? `${descText.slice(
                  0,
                  previewLength
              )}... <a href="${postLink}">Read more</a>`
            : descText;
    const pubDate = new Date(post.lastUpdated).toDateString();

    return `<article class="project-card${shouldFeature ? " feature" : ""}">
            <h3>${post.title}</h3>
            <a href="${postLink}">
                <img src="${imagePath}" alt="${post.altText}"/>
            </a>
            <p>${shouldFeature ? `<b>${pubDate}:</b>` : ""}${descText}</p>
        </article>
    `;
};

const buildPostDetail = (post) => {
    const pubDate = new Date(post.lastUpdated);
    const [postType, postIndex] = getDetailPageName(post.title);
    const postArray = data[postType];
    const getNavButton = (i, bool, button) => {
        return `${
            bool
                ? `<a href="${createPostSlug(
                      postArray[i].title
                  )}.html"><li>${button}</li></a>`
                : "<li></li>"
        }`;
    };

    const postNav = `<ul class="blog-nav">
        ${getNavButton(
            postArray.length - 1,
            postIndex < postArray.length - 1,
            "&lt;&lt;"
        )}
        ${getNavButton(postIndex + 1, postIndex < postArray.length - 1, "&lt;")}
        ${getNavButton(postIndex - 1, postIndex > 0, "&gt;")}
        ${getNavButton(0, postIndex > 0, "&gt;&gt;")}
    </ul>`;

    const postImage = post.imagePath
        ? `
            <img src="../${post.imagePath}" alt="${post.altText}" width="100%">
            <p class="image-desc"><em>${post.altText}</em></p>
        `
        : "";
    return `${postNav}
    <article class="blog-post">
        <h5>Last updated: ${pubDate.toDateString()} | <a href="https://travissouthard.com/${postType}/${createPostSlug(
        post.title
    )}.html">Permalink</a> | <a href="https://travissouthard.com/rss.xml" target="_blank">RSS</a></h5>
        ${postImage}
        ${post.description}
        <p>
            <em>
                Thank you for reading! 
                <a href="https://ko-fi.com/travissouthard" target="_blank">
                    Please consider supporting this blog.
                </a>
            </em>
        </p>
    </article>
    ${postNav}`;
};

const buildWebring = () => {
    class Node {
        constructor(name, link) {
            this.name = name;
            this.link = link;
            this.edges = [];
        }

        addEdge(neighbor) {
            this.edges.push(neighbor);
            neighbor.edges.push(this);
        }

        printNode() {
            return `<article class="webring">
                <p><a href="${this.link}" target="_blank">${this.name}</a></p>
                <p>${this.edges
                    .map((e) => `<span class="topic">${e.name}</span>`)
                    .join(" ")}</p>
            </article>`;
        }
    }

    class Graph {
        constructor() {
            this.topics = {};
            this.sites = {};
        }

        addNode(n) {
            const key = n.link ? "sites" : "topics";
            if (this.getNode(n.name) === null) {
                this[key][n.name] = n;
            }
        }

        getNode(name) {
            let node = this.topics[name] || this.sites[name] || null;
            return node;
        }

        printGraph() {
            return `
                <article style="width: 100%">
                    <h3>What is a webring?</h3>
                    <p>
                        <a href="https://en.wikipedia.org/wiki/Webring" target="_blank">Webrings</a> are lists of websites that (ideally) link to each other creating a web of sites. This was a way to help people find good websites before search engines started to work well. The <a href="https://web.archive.org/web/19991013135810/http://webring.org/" target="_blank">classic web ring</a> was having a few websites that each linked to each other in series, but often also were lists of sites organized by topic or region. This webring is more like the latter and is a way for me to share the web I typically interact with.
                    </p>
                </article>
                ${Object.values(this.sites)
                    .map((node) => node.printNode())
                    .join("\n")}`;
        }
    }

    const graph = new Graph();

    for (let site of data.webring) {
        let sNode = graph.getNode(site.name);
        if (sNode === null) {
            sNode = new Node(site.name, site.link);
            graph.addNode(sNode);
        }
        for (let topic of site.topics) {
            let tNode = graph.getNode(topic);
            if (tNode === null) {
                tNode = new Node(topic, null);
                graph.addNode(tNode);
            }
            tNode.addEdge(sNode);
        }
    }

    return `${graph.printGraph()}`;
};

const buildMain = (page, isPost) => {
    if (isPost) return buildPostDetail(page);
    if (page.name === "resume") {
        return `
        <a href="./assets/travis_southard_software_engineer_resume.pdf">
            <p id="print-resume">Print resume</p>
        </a>
        <div class="list-view">
        ${sortArrayByDate(data.resume)
            .map((job) => buildResumeCard(job))
            .join("")}
        </div>\n`;
    }
    if (page.name === "about") {
        return `<article id="about">
            <img src="./assets/images/blog/travis-flowers.jpg"
                alt="Travis and Ruby standing in front of a castle in County Kerry, Ireland on their honeymoon bike tour"
                style="width: 100%; height: 200px; object-fit: cover;" />
            <p>
                My name is Travis, and I am a software engineer living in Philadelphia with my spouse, <a
                    href="https://spokesandstitches.com/" target="_blank">Ruby</a>, and our two cats, Topaz and Basil. I
                am interested in gardening, bike touring, and solarpunk living.
            </p>
            <p>
                I am currently working as a Developer & Data Analyst in the Digital Innovation Lab at <a
                    href="https://clsphila.org/" target="_blank">Community Legal Services of Philadelphia</a>. I have
                previously worked at <a href="https://www.element84.com/" target="_blank">Element 84</a>, <a
                    href="https://www.azavea.com/" target="_blank">Azavea</a>, and <a href="https://www.urality.com/"
                    target="_blank">Urality</a>.</p>
            <p>
                I am actively volunteering as one of the co-directors of <a href="https://codeforphilly.org/"
                    target="_blank">Code for Philly</a>. I previously served as the tech lead for the Expungement
                Petition Generator benefitting <a href="https://www.plsephilly.org/" target="_blank">Philadelphia
                    Lawyers for Social Equity</a>, and helped put together a <a
                    href="https://codeforphilly.org/projects/third_places_project-launchpad_2023" target="_blank">third
                    places finder</a> as part of Code for Philly's Launchpad 2023.
            </p>
            <p>
                Before transitioning into working in tech, I spent about 5 years working in the bicycle industry as a
                mechanic and bike tour organizer. I am also an Americorps alum who served in City Year Philadelphia. I
                have ridden two cross-country bike tours with <a href="https://bikeandbuild.org/" target="_blank">Bike &
                    Build</a>, and another on the full <a href="https://www.greenway.org/" target="_blank">East Coast
                    Greenway</a> with <a href="https://www.instagram.com/explore/tags/ridealongecg/" target="_blank">my
                    best friend.</a>
            </p>
            <img src="./assets/images/about2.jpg"
                alt="Travis and Ruby standing in front of a castle in County Kerry, Ireland on their honeymoon bike tour"
                style="width: 100%; height: 200px; object-fit: cover;" />
        </article>`;
    }
    if (page.name === "webring") {
        return buildWebring();
    }
    let listData;
    if (page.name === "index") {
        listData = sortArrayByDate([
            ...data.art,
            ...data.blog,
            ...data.projects,
        ]).slice(0, 7);
    } else {
        listData = sortArrayByDate(data[page.name]);
    }

    return listData
        .map((post, index) => buildPostCard(post, index, page.name === "index"))
        .join("");
};

const buildHCard = (isPost) => {
    return `<section class="h-card">
                <div>
                    <a class="u-url" rel="me" href="travissouthard.com">
                        <p class="p-name">Travis Southard</p>
                    </a>
                    <p><span class="p-locality">Philadelphia</span>, <span class="p-region">PA</span></p>
                </div>
                <img class="u-photo" src="${
                    isPost ? "../" : "./"
                }/assets/images/profile.png">
            </section>`;
};

const createPage = (pageData, isPost = false) => {
    const hasOwnImage = isPost && pageData.imagePath;
    const imageLink = hasOwnImage
        ? `https://travissouthard.com${pageData.imagePath.slice(1)}`
        : "https://travissouthard.com/assets/images/blog/travis-flowers.jpg";
    const [imgWidth, imgHeight] = hasOwnImage ? pageData.imageSize : [600, 450];
    const imgAlt = hasOwnImage
        ? pageData.altText
        : "Travis holding a bouquet of flowers in a field of flowers!";
    const imageType = (link) => {
        const types = {
            ".jpg": "jpeg",
            jpeg: "jpeg",
            ".png": "png",
            ".gif": "gif",
        };
        const nameLength = link.length;
        const fileExtension = link.slice(nameLength - 4).toLowerCase();
        return types[fileExtension];
    };
    const className = isPost ? "detail-view" : "list-view";
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${pageData.title} | Travis Southard</title>
    <meta property="og:title" content="${pageData.title} | Travis Southard">
    <meta property="og:description"
        content="${stripHTML(pageData.description).slice(0, 240)}">
    <meta property="og:image" content="${imageLink}">
    <meta property="og:image:secure_url" content="${imageLink}">
    <meta property="og:image:type" content="image/${imageType(imageLink)}">
    <meta property="og:image:width" content="${imgWidth}">
    <meta property="og:image:height" content="${imgHeight}">
    <meta property="og:image:alt" content="${imgAlt}">
    <meta name="author" content="Travis Southard">
    <meta name="robots" content="noai, noimageai">
    <link href="https://jawns.club/@travissouthard" rel="me">
    <link href="https://ko-fi.com/travissouthard" rel="me">
    <link href="https://codeforphilly.org/people/travissouthard" rel="me">
    <link href="https://dev.to/travissouthard" rel="me">
    <link href="https://github.com/travissouthard" rel="me">
    <link rel="webmention" href="https://webmention.io/travissouthard.com/webmention" />
    <link rel="stylesheet" href="${isPost ? "../" : ""}style.css">
    <link rel="apple-touch-icon" sizes="180x180" href="${
        isPost ? "../" : "./"
    }assets/favicon_io/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="${
        isPost ? "../" : "./"
    }assets/favicon_io/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="${
        isPost ? "../" : "./"
    }assets/favicon_io/favicon-16x16.png">
    <link rel="manifest" href="${
        isPost ? "../" : "./"
    }assets/favicon_io/site.webmanifest">
</head>
<body>
    <header>
        <h1>Travis Southard</h1>
        <p>Philadelphian Software Engineer</p>
    </header>
    <nav>${buildNav(LOCALNAV, isPost)}</nav>
    <main>
        <h2>${pageData.title}</h2>
        <div class="${className}">${buildMain(pageData, isPost)}</div>
    </main>
    <script src="app.js"></script>
    <footer>
        ${buildNav([...LOCALNAV, ...LOWERLINKS], isPost)}
        ${buildHCard(isPost)}
    </footer>
</body>
</html>
    `;
};

data.pages.forEach((page) => {
    fs.writeFileSync(`${page.name}.html`, createPage(page));
});
fs.writeFileSync(
    "webring.html",
    createPage({
        title: "Webring",
        description:
            "Travis Southard's webring of the sites he usually visits.",
        name: "webring",
    })
);
["blog", "art", "projects"].forEach((type) => {
    data[type].forEach((page) => {
        fs.writeFileSync(
            `${type}/${createPostSlug(page.title)}.html`,
            createPage(page, (isPost = true))
        );
    });
});
