// Only runs in node in terminal
// Run with `node generateRssXml.js > rss.xml`
// data.json file is required
// see comment at bottom of data.js to generate

const fs = require("fs");
const dataFile = fs.readFileSync("./data.json", "utf-8");
const data = JSON.parse(dataFile);

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
        <url>https://travissouthard.com/assets/images/pixelart/headshot-32.png</url>
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
        ? `<a href="${fixLocalLink(link)}" target="blank">
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
        for (let entity in htmlEntities) {
            html = html.replace(htmlEntities[entity], () => `&${entity};`);
        }
        return html;
    };
    return encodeHtml(htmlString);
};

const createItemsFromPosts = (posts) => {
    const items = [];
    for (let post of posts) {
        const pubDate = new Date(post.lastUpdated);
        const item = `
        <item>
            <title>${post.title}</title>
            <description>${encodeDescriptionFromPost(post)}</description>
            <link>${fixLocalLink(post.siteLink)}</link>
            <pubDate>${pubDate.toUTCString()}</pubDate>
            <source url="https://travissouthard.com/rss.xml">Travis Southard's Blog</source>
        </item>`;
        items.push(item);
    }
    return items.join("");
};

const sortArrayByDate = (arr) => {
    return arr.sort((a, b) => b.lastUpdated - a.lastUpdated);
};
const posts = sortArrayByDate([
    ...data.projects,
    ...data.pixelArt,
    ...data.blog,
]);

console.log(`${documentStart}${createItemsFromPosts(posts)}${documentEnd}`);
