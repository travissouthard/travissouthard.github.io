const data = {
  projects: [
    {
      title: "Expungement Petition Generator",
      siteLink: "https://www.plsephilly.org/",
      codeLink: "",
      imageSize: 106543,
      imagePath: "./assets/images/projects/plse-expungement.png",
      description: "",
      altText: "Screenshot of the Expungement Petition Generator",
      public: false,
      lastUpdated: Date.parse("02 Nov 2022"),
    },
    {
      title: "Bike Camping PHL",
      siteLink: "./bike_camping_PHL/index.html",
      codeLink:
        "https://github.com/travissouthard/travissouthard.github.io/tree/master/bike_camping_PHL",
      imageSize: 202444,
      imagePath: "./assets/images/projects/bike_camping_phl.png",
      description: "",
      altText: "Screenshot of my Bike Camping PHL checklist app.",
      public: true,
      lastUpdated: Date.parse("01 Jul 2020"),
    },
    {
      title: "Debt Snowball Calculator",
      siteLink: "./snowball/index.html",
      codeLink:
        "https://github.com/travissouthard/travissouthard.github.io/tree/master/snowball",
      imageSize: 199269,
      imagePath: "./assets/images/projects/debt-snowball.png",
      description: "",
      altText: "Screenshot of my debt snowball calculator app.",
      public: true,
      lastUpdated: Date.parse("13 Jan 2023"),
    },
    {
      title: "Minesweeper Clone",
      siteLink: "./games/minesweeper/index.html",
      codeLink:
        "https://github.com/travissouthard/travissouthard.github.io/tree/master/games/minesweeper",
      imageSize: 38036,
      imagePath: "./assets/images/projects/minesweeper.png",
      description: "",
      altText: "Screenshot of my Minesweeper game.",
      public: true,
      lastUpdated: Date.parse("30 Aug 2020"),
    },
    {
      title: "Gravity Play",
      siteLink: "https://editor.p5js.org/travissouthard/full/Fq_vEfA8O",
      codeLink: "https://editor.p5js.org/travissouthard/sketches/Fq_vEfA8O",
      imageSize: 263287,
      imagePath: "./assets/images/projects/gravity-play.png",
      description: "",
      altText:
        "Screenshot of small colorful planets orbiting each other in a gravity simulation.",
      public: true,
      lastUpdated: Date.parse("16 Jan 2021"),
    },
  ],
  pixelArt: [
    {
      title: "1-Bit Beach Scene",
      siteLink: "https://mastodon.social/@tsouthard/109934647644450793",
      imageSize: 24303,
      imagePath: "./assets/images/pixelart/beach.png",
      description: "",
      altText:
        "A 1-bit, low-res pixel art image of an outlet pipe and it protective beams on a beach",
      public: true,
      lastUpdated: Date.parse("26 Feb 2023"),
    },
    {
      title: "CRT Flower",
      siteLink: "https://mastodon.social/@tsouthard/109411109868393841",
      imageSize: 11525,
      imagePath: "./assets/images/pixelart/crt-flower.png",
      description: "",
      altText:
        "A low-color pixel art image of a potted flowering plant growing inside of an empty CRT TV",
      public: true,
      lastUpdated: Date.parse("6 Nov 2022"),
    },
    {
      title: "32x32 Self Portrait",
      siteLink: "https://mastodon.social/@tsouthard/109931960684000706",
      imageSize: 9569,
      imagePath: "./assets/images/pixelart/headshot-32.png",
      description: "",
      altText: "A low-color low-res pixel art portait of a man with a mustache",
      public: true,
      lastUpdated: Date.parse("26 Feb 2023"),
    },
    {
      title: "House Portrait",
      siteLink: "https://mastodon.social/@tsouthard/109485424439372092",
      imageSize: 32559,
      imagePath: "./assets/images/pixelart/house.png",
      description: "",
      altText: "A 4-color grayscale pixelart image of a rowhome",
      public: true,
      lastUpdated: Date.parse("30 Oct 2022"),
    },
    {
      title: "1-bit Mushroom",
      siteLink: "https://mastodon.social/@tsouthard/110129547262579634",
      imageSize: 9779,
      imagePath: "./assets/images/pixelart/mushroom.png",
      description: "",
      altText: "A 1-bit pixelart closeup image of a whitecap mushroom",
      public: true,
      lastUpdated: Date.parse("10 Oct 2022"),
    },
    {
      title: "1-bit Self Portrait",
      siteLink: "https://mastodon.social/@tsouthard",
      imageSize: 12583,
      imagePath: "./assets/images/pixelart/pixel-art-portrait.png",
      description: "",
      altText: "A 1-bit pixelart self portrait of a man using a keyboard",
      public: true,
      lastUpdated: Date.parse("16 Oct 2022"),
    },
  ],
  blogs: [
    {
      title: "Brand new RSS feed!",
      siteLink: "https://travissouthard.com",
      codeLink:
        "https://github.com/travissouthard/travissouthard.github.io/blob/master/generateRssXml.js",
      imageSize: 0,
      imagePath: "",
      description: `This is the first dedicated blog post as an attempt to make a blog from scratch that can be read by RSS readers. I have been wanting to make this for some time and finally made the time to figure out how to do this on a static site and without having to write out XML code by hand.
      I have been redoing my portfolio site recently and wanted to sit down and figure this out. I wrote a basic JavaScript script to parse a data object I was already using for the portfolio and made a way to generate XML code from it. The code is pretty simple but I will include it at the bottom of this post.
      I make no promises about the frequency of how often I will be making posts here, but will update with new code projects and pixel art pieces as they come up. But really, that's the beauty of using an RSS reader: The reader checks for you!
      For the past year or so I have really re-fallen in love with using an RSS reader to keep up with blogs, webcomics, and a few other things that post irregularly (or that I used to follow on Twitter). It feels good to read through and empty out my feed each day and really helps me to keep up with creators and companies with ease. I have been using NetNewsWire's iOS app for a few weeks and like how it works, especially the "reader" view.
      Go ahead and add https://travissouthard.com/rss.xml to your reader of choice.
      `,
      altText: "",
      public: true,
      lastUpdated: Date.parse("16 Apr 2023"),
    },
  ],
};

// Uncomment to output JSON from this
// Use with `node data.js > data.json`
// console.log(JSON.stringify(data));
