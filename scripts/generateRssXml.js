const fs = require("fs");
const dataFile = fs.readFileSync("./data/data.json", "utf-8");
const data = JSON.parse(dataFile);

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
        for (let post of arr) {
            if (title === post.title || title === createPostSlug(post.title)) {
                return pageNames[key];
            }
        }
    }
    return;
};

const now = new Date();
const documentStart = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">

<channel>
    <title>Travis Southard Blog</title>
    <link>https://travissouthard.com/</link>
    <description>
        Travis Southard is a software engineer, cyclist, and artist living in Philadelphia, PA
    </description>
    <image>
        <url>https://travissouthard.com/assets/images/art/headshot-32.png</url>
        <title>Travis Southard Blog</title>
        <link>https://travissouthard.com/</link>
        <width>144</width>
        <height>144</height>
    </image>
    <language>en-us</language>
    <pubDate>${now.toUTCString()}</pubDate>
    <lastBuildDate>${now.toUTCString()}</lastBuildDate>
    <atom:link href="https://travissouthard.com/rss.xml" rel="self" type="application/rss+xml" />
    `;
const documentEnd = `
</channel>

</rss>
`;

const homeUrl = "https://travissouthard.com";

const fixLocalLink = (link) => {
    return link[0] === "." ? homeUrl + link.slice(1) : link;
};

const createImageFromPost = (post) => {
    const link = post.siteLink || homeUrl;
    return post.imagePath
        ? `<a href="${fixLocalLink(link)}" target="_blank">
        <img src="${fixLocalLink(post.imagePath)}" alt="${post.altText}"/>
      </a>`
        : "";
};

const encodeDescriptionFromPost = (post) => {
    const htmlEntities = {
        amp: /\&/g,
        quot: /\"/g,
        apos: /\'/g,
        lt: /\</g,
        gt: /\>/g,
    };
    const codeLink = post.codeLink
        ? `See the <a href="${post.codeLink}" target="blank">code here</a>`
        : "";
    let htmlString = `${createImageFromPost(post)}
  ${post.description}${codeLink}`;
    const encodeHtml = (html) => {
        // Convert relative img sources and links to absolute links first
        html = html.replaceAll(
            /((img\s?(\n\s*)?src)|(a\s?(\n\s*)?href))="\.{1,2}/g,
            `$1="${homeUrl}`
        );

        for (let entity in htmlEntities) {
            html = html.replace(htmlEntities[entity], () => `&${entity};`);
        }
        return html;
    };
    return `<title>${encodeHtml(post.title)}</title>
            <description>${encodeHtml(htmlString)}</description>`;
};

const createItemsFromPosts = (posts) => {
    const items = [];
    for (let post of posts) {
        const pubDate = new Date(post.lastUpdated);
        const link = post.siteLink
            ? fixLocalLink(post.siteLink)
            : `${homeUrl}/${getDetailPageName(post.title)}/${createPostSlug(
                  post.title
              )}.html`;
        const item = `
        <item>
            ${encodeDescriptionFromPost(post)}
            <link>${link}</link>
            <pubDate>${pubDate.toUTCString()}</pubDate>
            <guid>${link}</guid>
            <source url="https://travissouthard.com/rss.xml">Travis Southard's Blog</source>
        </item>`;
        items.push(item);
    }
    return items.join("");
};

const sortArrayByDate = (arr) => {
    return arr.sort((a, b) => b.lastUpdated - a.lastUpdated);
};
const posts = sortArrayByDate([...data.projects, ...data.art, ...data.blog]);

fs.writeFileSync(
    "rss.xml",
    `${documentStart}${createItemsFromPosts(posts)}${documentEnd}`
);
