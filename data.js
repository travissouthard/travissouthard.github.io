const data = {
  projects: [
    {
      title: "Expungement Petition Generator",
      siteLink: "https://www.plsephilly.org/",
      codeLink: "",
      imagePath: "./assets/images/projects/plse-expungement.png",
      description: `<p>A volunteer project I lead as part of <a 
        href="https://codeforphilly.org">Code for Philly</a> that benefits 
        the work of Philadelphia Lawyers for Social Equity</p>`,
      altText: "Screenshot of the Expungement Petition Generator",
      public: false,
      lastUpdated: Date.parse("02 Nov 2022"),
    },
    {
      title: "Bike Camping PHL",
      siteLink: "./bike_camping_PHL/index.html",
      codeLink:
        "https://github.com/travissouthard/travissouthard.github.io/tree/master/bike_camping_PHL",
      imagePath: "./assets/images/projects/bike_camping_phl.png",
      description: `<p>A Philadelphia-specific weather based packing 
        list for bike camping trips.</p>`,
      altText: "Screenshot of my Bike Camping PHL checklist app.",
      public: true,
      lastUpdated: Date.parse("01 Jul 2020"),
    },
    {
      title: "Debt Snowball Calculator",
      siteLink: "./snowball/index.html",
      codeLink:
        "https://github.com/travissouthard/travissouthard.github.io/tree/master/snowball",
      imagePath: "./assets/images/projects/debt-snowball.png",
      description: `<p>A debt snowball calculator with a chart showing how the 
        different debts pays down as you follow the plan</p>`,
      altText: "Screenshot of my debt snowball calculator app.",
      public: true,
      lastUpdated: Date.parse("13 Jan 2023"),
    },
    {
      title: "Minesweeper Clone",
      siteLink: "./games/minesweeper/index.html",
      codeLink:
        "https://github.com/travissouthard/travissouthard.github.io/tree/master/games/minesweeper",
      imagePath: "./assets/images/projects/minesweeper.png",
      description: `<p>A clone of the classic computer game, Minesweeper.</p>`,
      altText: "Screenshot of my Minesweeper game.",
      public: true,
      lastUpdated: Date.parse("30 Aug 2020"),
    },
    {
      title: "Gravity Play",
      siteLink: "https://editor.p5js.org/travissouthard/full/Fq_vEfA8O",
      codeLink: "https://editor.p5js.org/travissouthard/sketches/Fq_vEfA8O",
      imagePath: "./assets/images/projects/gravity-play.png",
      description: `<p>A small 2D simulation of particles enacting gravity on 
        each other and combining as they get close together.</p>`,
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
      imagePath: "./assets/images/pixelart/headshot-32.png",
      description: "",
      altText: "A low-color low-res pixel art portait of a man with a mustache",
      public: true,
      lastUpdated: Date.parse("26 Feb 2023"),
    },
    {
      title: "House Portrait",
      siteLink: "https://mastodon.social/@tsouthard/109485424439372092",
      imagePath: "./assets/images/pixelart/house.png",
      description: "",
      altText: "A 4-color grayscale pixelart image of a rowhome",
      public: true,
      lastUpdated: Date.parse("30 Oct 2022"),
    },
    {
      title: "1-bit Mushroom",
      siteLink: "https://mastodon.social/@tsouthard/110129547262579634",
      imagePath: "./assets/images/pixelart/mushroom.png",
      description: "",
      altText: "A 1-bit pixelart closeup image of a whitecap mushroom",
      public: true,
      lastUpdated: Date.parse("10 Oct 2022"),
    },
    {
      title: "1-bit Self Portrait",
      siteLink: "https://mastodon.social/@tsouthard",
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
      imagePath: "",
      description: `<p>This is the first dedicated blog post as an attempt to 
      make a blog from scratch that can be read by RSS readers. I have been 
      wanting to make this for some time and finally made the time to figure 
      out how to do this on a static site and without having to write out XML 
      code by hand.</p>
      <p>I have been redoing my portfolio site recently and wanted to sit down
      and figure this out. I wrote a basic JavaScript script to parse a data 
      object I was already using for the portfolio and made a way to generate 
      XML code from it. The code is pretty simple but I will include it at the 
      bottom of this post.</p>
      <p>I make no promises about the frequency of how often I will be making 
      posts here, but will update with new code projects and pixel art pieces 
      as they come up. But really, that's the beauty of using an RSS reader: 
      The reader checks for you!</p>
      <p>For the past year or so I have really re-fallen in love with using an 
      RSS reader to keep up with blogs, webcomics, and a few other things that 
      post irregularly (or that I used to follow on Twitter). It feels good to 
      read through and empty out my feed each day and really helps me to keep 
      up with creators and companies with ease. I have been using NetNewsWire's 
      iOS app for a few weeks and like how it works, especially the "reader" 
      view.</p>
      <p>Go ahead and add <a href="https://travissouthard.com/rss.xml" 
      target="blank">https://travissouthard.com/rss.xml</a> to your reader of 
      choice.</p>
      <p><em>Edit: I cleaned up how the rss is generated and adding HTML tags 
      to actually show the images and organize my writing better.</em></p>
      `,
      altText: "",
      public: true,
      lastUpdated: Date.parse("20 Apr 2023"),
    },
    {
      title: "Why is some documentation better than others?",
      siteLink:
        "https://www.azavea.com/blog/2022/12/06/why-is-some-documentation-better-than-others/",
      codeLink: "",
      imagePath: "",
      description: `
      <p>In fall of 2022, I wrote a blog post for 
      work on what makes for good documentation.</p>
      <blockquote>Documentation is vital for anything open source; from open 
      hardware, to free recipes, to DIY repair tutorials, but it is especially 
      vital when it comes to software. Whether you're a user or a developer, 
      documentation provides the “how to” for interacting with any piece of 
      software.<br/>
      Since I first started getting into software development two years ago, 
      I've learned that documentation frequently assumes you already know how 
      to use the item in question, and are using the docs as a reference. 
      While acting as a reference material is one of documentation's important 
      functions, it cannot be the only function...</blockquote>
      <a href="" target="_blank" ><p>Read the full post here.</p></a>
      `,
      altText: "",
      public: true,
      lastUpdated: Date.parse("Dec 6 2022"),
    },
    {
      title:
        "Solved: docker-compose error: cannot resolve import from 'vite' from vite.config.ts",
      siteLink: "https://travissouthard.com",
      codeLink: "https://github.com/CodeForPhilly/third-places/pull/10",
      imagePath: "",
      description: `
      <p>I am currently volunteering on a project as part of <a
            href="https://codeforphilly.org/projects/third_places_project-launchpad_2023" target="_blank">Code for
            Philly's Launchpad 2023</a>. I am working with a small team of developers and UXers to develop a project
        that will seek to connect Philadelphians to comfortable public spaces, with the focus being on finding places
        spontaneously.</p>
      <a href="#solution">
          <p>Jump to code solution.</p>
      </a>
      <p>We got started at the end of March this year and the launchpad demos will be <a
              href="https://opencollective.com/code-for-philly/events/2023-code-for-philly-launchpad-project-showcase-c95b1dc3"
              target="_blank">on May 10</a> as part of
          <a href="https://2023.phillytechweek.com/" target="_blank">Philly Tech Week 2023</a>. Come see our presentation!
          For the past few weeks we have been simultaneously going
          through the discovery of what we want to build and setting up the boilerplate to build our code on.
      </p>
      <p>One speed bump I ran into was setting up a <code>docker-compose.yml</code> file. In my work life and in my <a
              href="https://codeforphilly.org/projects/philadelphia_lawyers_for_social_equity_-_record_expungement">other
              Code for
              Philly project</a>, we use these to build, run, and manage our Docker containers for the frontend, backend,
          and
          database. However, I realized this week I have never set one up from scratch since those above projects were
          either already built or built from a template we couldn't use for this project.</p>
      <p>For context, we are going to be building a React frontend with Leaflet for our map component, and a Django
          backend with PostgreSQL and PostGIS. We also decided to set up React with Vite to avoid create-react-app.</p>
      <p>Setting up the Dockerfiles and docker-compose.yml file were easy enough using the Docker setup documentation. I
          made sure each docker container built and ran on its own, but when putting them together with compose, I was
          getting this error from Docker:</p>
      <pre><code>error: cannot resolve import from 'vite' from vite.config.ts</code></pre>
      <p>After a lot of searching, looking at forums and docs, and trying many different things, this error mostly pointed
          to the idea that vite is missing. Where a lot of the solutions pointed to an old issue with Node 14, Typescript,
          and Vite and that solving it with updating Node to 16, that wouldn't work for us since we are using Node 18.</p>
      <p>I checked to make sure it was in the package.json, and making sure that npm install was running successfully. And
          there I found it: Despite, the Dockerfile calling for <code>npm install</code> to run when building, the logs
          showed it wasn't actually running.</p>
      <p id="solution">The solution I found pointed to using the following line in the Dockerfile in our React app:</p>
      <pre><code>
          # From: 
          ADD . .
          RUN npm install
          CMD ["npm", "run", "dev", "--host"]
          # To: 
          # See the PR for the full Dockerfile.
          ADD . .
          ENTRYPOINT [ "/entrypoint.sh" ]
          CMD ["npm", "run", "dev", "--host"]
      </code></pre>
      <p>And of course adding that entrypoint.hs file with:</p>
      <pre><code>
          #!/bin/sh
          npm install
          npm rebuild esbuild
          exec "$@"
      </code></pre>
      <p>The <code>npm rebuild</code> is there as a precaution for a problem I was running into with the wrong esbuild
          coming from the Docker host, but using that entry point file did successfully get the node_modules installed
          with the correct esbuild and now we are happily boilerplated and ready to roll building out as much of our demo
          as we can in the next week!</p>
      `,
      altText: "",
      public: true,
      lastUpdated: Date.parse("Apr 30 2023"),
    },
  ],
};

// Uncomment to output JSON from this
// Use with `node data.js > data.json`
// console.log(JSON.stringify(data));
