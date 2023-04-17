// Only runs in node in terminal
// Run with `node generateRssXml.js > rss.xml`
// data.json file is required
// see comment at bottom of data.js to generate

const fs = require("fs");
const dataFile = fs.readFileSync("./data.json", "utf-8");
const data = JSON.parse(dataFile);

const now = new Date();
const documentStart = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">

<channel>
    <title>Travis Southard Blog</title>
    <link>https://www.travissouthard.com</link>
    <description>
        Travis Southard is a software engineer, cyclist, and artist living in Philadelphia, PA
    </description>
    <image>
        <url>https://travissouthard.com/assets/images/pixelart/headshot-32.png</url>
        <title>Travis Southard's face, but done as pixel art</title>
        <link>https://travissouthard.com/</link>
        <width>144</width>
        <height>144</height>
    </image>
    <language>en-us</language>
    <pubDate>${now.toUTCString()}</pubDate>
    <lastBuildDate>${now.toUTCString()}</lastBuildDate>
    `;
const documentEnd = `
</channel>

</rss>
    `;

const fixLocalLink = (link, isImage = false) => {
  return link[0] === "."
    ? `http${isImage ? "" : "s"}://travissouthard.com` + link.slice(1)
    : link;
};

const createImageFromPost = (post) => {
  return post.imagePath
    ? `<enclosure url="${fixLocalLink(post.imagePath, true)}" length="${
        post.imageSize
      }" type="image/png" />`
    : "";
};

const createItemsFromPosts = (posts) => {
  const items = [];
  for (let post of posts) {
    const pubDate = new Date(post.lastUpdated);
    const item = `
        <item>
            <title>${post.title}</title>
            ${createImageFromPost(post)}
            <description>${post.description}${
      post.codeLink ? `See the code for this at ${post.codeLink}` : ""
    }</description>
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
  ...data.blogs,
]);

console.log(`${documentStart}${createItemsFromPosts(posts)}${documentEnd}`);
