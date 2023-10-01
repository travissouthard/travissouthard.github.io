const createPostSlug = (title) => {
    const justWords = title.replace(/[.,\/#!$%\^&\*;:{}=_`~()\?]/g, "");
    const wordsArr = justWords.toLowerCase().split(" ");
    return wordsArr.join("-");
};

const getDetailPageName = (title) => {
    const pageNames = {
        projects: "projects",
        pixelArt: "pixelArt",
        blog: "blog",
    };
    for (let [key, arr] of Object.entries(data)) {
        for (let post of arr) {
            if (title === post.title || title === createPostSlug(post.title)) {
                return pageNames[key];
            }
        }
    }
    return;
};

const assembleBlogPost = (blog) => {
    const pubDate = new Date(blog.lastUpdated);
    const $blogImage = blog.imagePath
        ? $(`<img src="${blog.imagePath}" alt="${blog.altText} width="100%">`)
        : null;
    const $blogPost = $("<article></article>").attr("class", "blog-post");
    const $title = $(`<h3>${blog.title}</h3>`);
    const $dateLine = $(
        `<h5>Last updated: ${pubDate.toDateString()} | <a href="?post=${createPostSlug(
            blog.title
        )}">Permalink</a> | <a href="https://travissouthard.com/rss.xml" target="_blank">RSS</a></h5>`
    );
    const blogHtml = $.parseHTML(blog.description);

    $blogPost.append($title);
    $blogPost.append($dateLine);
    $blogPost.append($blogImage);
    $blogPost.append(blogHtml);
    $blogPost.append(
        `<p>
            <em>
                Thank you for reading! 
                <a href="https://ko-fi.com/travissouthard" target="_blank">
                    Please consider supporting this blog.
                </a>
            </em>
        </p>`
    );

    return $blogPost;
};

const assembleProjectCard = (project) => {
    const postLink =
        project.siteLink ||
        `./${getDetailPageName(
            project.title
        ).toLowerCase()}.html?post=${createPostSlug(project.title)}`;
    const $card = $("<article></article>").attr("class", "project-card");
    const $projectImage = $("<a></a>").attr({
        href: postLink,
        target: project.siteLink ? "_blank" : "",
    });
    $projectImage.append(
        $("<img>").attr({
            src:
                project.imagePath || "./assets/images/pixelart/headshot-32.png",
            alt: project.altText,
        })
    );

    const $projectText = $("<p></p>");
    const descText = project.description || project.altText;
    const $strippedDescText = $(`<p>${descText}</p>`).text();
    const previewLength = 240;
    const $descPreview =
        $strippedDescText.length > previewLength
            ? `${$strippedDescText.slice(
                  0,
                  previewLength
              )}... <a href="${postLink}">Read more</a>`
            : $strippedDescText;
    $projectText.append($descPreview);

    $card.append($(`<h3>${project.title}</h3>`));
    $card.append($projectImage);
    $card.append($projectText);

    return $card;
};

const sortArrayByDate = (arr) => {
    return arr.sort((a, b) => b.lastUpdated - a.lastUpdated);
};

const fillOutListView = (key, value) => {
    const $section = $(key).attr("class", "list-view");
    const sortedData = sortArrayByDate(value);

    for (let entry of sortedData) {
        const $card = assembleProjectCard(entry);

        $section.append($card);
    }
};

const fillOutDetailNavigation = (blogs, choice) => {
    const makeLink = (num) => `?post=${createPostSlug(blogs[num].title)}`;
    const parts = {
        first: { link: makeLink(0), button: "&lt;&lt;" },
        prev: { link: choice > 0 ? makeLink(choice - 1) : "", button: "&lt;" },
        next: {
            link: choice < blogs.length - 1 ? makeLink(choice + 1) : "",
            button: "&gt;",
        },
        last: { link: makeLink(blogs.length - 1), button: "&gt;&gt;" },
    };

    const $blogNav = $("<ul></ul>").attr("class", "blog-nav");
    const $spacers = $("<li></li><li></li>");

    if (choice > 0) {
        $blogNav.append(
            $(
                `<a href="${parts.first.link}"><li>${parts.first.button}</li></a>`
            )
        );
        $blogNav.append(
            $(`<a href="${parts.prev.link}"><li>${parts.prev.button}</li></a>`)
        );
    } else {
        $blogNav.append($spacers);
    }
    if (choice + 1 < blogs.length) {
        $blogNav.append(
            $(`<a href="${parts.next.link}"><li>${parts.next.button}</li></a>`)
        );
        $blogNav.append(
            $(`<a href="${parts.last.link}"><li>${parts.last.button}</li></a>`)
        );
    } else {
        $blogNav.append($spacers);
    }

    return $blogNav;
};

const fillOutDetailView = (data, postSlug) => {
    if (!getDetailPageName(postSlug)) {
        const $body = $("body");
        $body.empty();
        $body.append(
            $(`
                <main>
                    <h2>404: Not found</h2>
                    <div>
                        <article>
                            <h5>We can't find that post! Please double check your link and try again.</h5>
                        </article>
                    </div>
                </main>
                `).attr("class", "blog-post")
        );
        return;
    }

    const sectionType = `#${getDetailPageName(postSlug)}`;
    const postList = data[sectionType];
    const $detailSection = $(sectionType).attr("class", "detail-view");
    const orderedData = sortArrayByDate(postList).reverse();
    let choice;
    postSlug === null
        ? (choice = postList.length - 1)
        : (choice = orderedData.findIndex(
              (blog) => createPostSlug(blog.title) === postSlug
          ));
    $detailSection.empty();

    const $chosenPost = assembleBlogPost(orderedData[choice]);
    $detailSection.append(fillOutDetailNavigation(orderedData, choice));
    $detailSection.append($chosenPost);
    $detailSection.append(fillOutDetailNavigation(orderedData, choice));
};

const buildPage = (sectionData, slug) => {
    !!slug
        ? fillOutDetailView(sectionData, slug)
        : Object.entries(sectionData).map(([key, value]) =>
              fillOutListView(key, value)
          );

    const $body = $("body");
    const $mainHtml = $body.html();
    const $header = `
        <header>
            <h1>Travis Southard</h1>
            <p>Philadelphian Software Engineer</p>
        </header>
    `;
    const $nav = $("<nav></nav>");
    const $footer = $("<footer></footer>");

    const buildNav = (linkArr) => {
        const $list = $("<ul></ul>");
        for (let { name, linkUrl } of linkArr) {
            $list.append(`
                <a href="${linkUrl}">
                    <li>${name}</li>
                </a>
            `);
        }

        return $list;
    };

    $nav.append(buildNav(LOCALNAV));
    $footer.append(buildNav(LOCALNAV));
    $footer.append(buildNav(EXTERIORLINKS));

    $body.empty();
    $body.append($header);
    $body.append($nav);
    $body.append($mainHtml);
    $body.append($footer);
};

$(() => {
    const sortedData = sortArrayByDate([
        ...data.projects,
        ...data.pixelArt,
        ...data.blog,
    ]);
    const sectionData = {
        "#projects": data.projects,
        "#pixelArt": data.pixelArt,
        "#blog": data.blog,
        "#most-recent": sortedData.slice(0, 6),
    };

    const urlParams = new URLSearchParams(window.location.search);
    const postSlug = urlParams.get("post");

    buildPage(sectionData, postSlug);
});
