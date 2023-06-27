const data = {
  projects: [
    {
      title: "Expungement Petition Generator",
      siteLink:
        "https://codeforphilly.org/projects/philadelphia_lawyers_for_social_equity_-_record_expungement",
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
    {
      title: "PhilaVibes",
      siteLink:
        "https://codeforphilly.org/projects/third_places_project-launchpad_2023",
      codeLink: "https://github.com/CodeForPhilly/third-places",
      imagePath: "./assets/images/projects/phila-vibes.png",
      description: `<p>PhilaVibes is a map application that helps people in 
        Philadelphia at point A with more time than they need to get to point B 
        find a comfortable place to be between those spaces. The map will 
        feature points surrounded by word clouds describing the spaces (and 
        will show the name, address, etc, once the user clicks on that space). 
        The user can see choose to see spaces around them, along their route, 
        or around their destination. Philavibes started as a 
        <a href="https://codeforphilly.org/" target="_blank">Code for Philly</a> Launchpad 2023
        project.</p>`,
      altText:
        "Screenshot of the PhilaVibes project page on the Code for Philly website.",
      public: true,
      lastUpdated: Date.parse("10 May 2023"),
    },
    {
      title: "Green Equity Demo",
      siteLink: "https://github.com/azavea/green-equity-demo",
      codeLink: "https://github.com/azavea/green-equity-demo",
      imagePath: "./assets/images/projects/green-equity.png",
      description: `<p>A demo project by Azavea (now Element 84) developers to show Bipartisan Infrastructure Bill Spending by state.</p>`,
      altText:
        "Screenshot of the Green Equity Demo map showing BIL spending by state.",
      public: true,
      lastUpdated: Date.parse("19 Apr 2023"),
    },
    {
      title: "Azavea CS Fundamentals Group",
      siteLink: "https://github.com/azavea/cs-fundamentals-group",
      codeLink: "https://github.com/azavea/cs-fundamentals-group",
      imagePath: "./assets/images/projects/cs-fundamentals.png",
      description: `<p>A repository of the work that fellow Azavea co-workers and I went through to learn computer science fundamentals.</p>`,
      altText:
        "Screenshot of the README from the CS fundamentals group repository.",
      public: true,
      lastUpdated: Date.parse("31 Jan 2023"),
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
      <a href="https://www.azavea.com/blog/2022/12/06/why-is-some-documentation-better-than-others/" 
      target="_blank" ><p>Read the full post here.</p></a>
      `,
      altText: "",
      public: true,
      lastUpdated: Date.parse("Dec 6 2022"),
    },
    {
      title: "Solved a tricky (for me) docker-compose error!",
      siteLink: "https://travissouthard.com/blog.html",
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
      <em><p>Edit: 6/16/23 - Fixed a tab error in the code portions.</p></em>
      `,
      altText: "",
      public: true,
      lastUpdated: Date.parse("Jun 15 2023"),
    },
    {
      title: "I need a better routine",
      siteLink: "https://travissouthard.com",
      codeLink: "",
      imagePath: "./assets/images/blog/raystown-camp.jpg",
      description: `
      <p>I am still very much on <a href="./assets/Travis_Southard_Software_Engineer_Resume.pdf" target="_blank">the job
            search</a>. I am actively seeking a full-time (though ideally 32-hours-a-week) software engineering position
        in civic technology with geospatial work. I have had some great conversations and opportunities so far and I
        hope I can find something I love very soon.</p>
    <p>While I have been home, I was hoping to establish a new routine that honors my physical, emotional, and
        interpersonal needs. Ruby recently prompted me to imagine my ideal life and I struggled to even begin. I
        have the ability and strength to imagine a better world, improvements to my city, and even fantasy elements, but
        apparently not my ideal day. I also recently thought about this issue because of a <a
            href="https://www.raptitude.com/2010/07/your-lifestyle-has-already-been-designed/" target="_blank">great
            (13-year-old) blog post about feeling helpless about how we spend our non-work time</a>.</p>
    <p>But recently, Ruby and I did a 4-day camping trip at Raystown Lake in Central PA. We drove out on a Monday,
        brought our mountain bikes, an enormous borrowed tent, and a new cooler full of lovely foods to eat. At camp, I
        found I was able to live more like I want:</p>
    <ul>
        <li>woke up at about 7am</li>
        <li>took care of my morning hygiene routine</li>
        <li>started making coffee and read a book</li>
        <li>made breakfast while Ruby writes her morning pages</li>
        <li>eat breakfast and review my plan for the day</li>
        <li>do the plan for the morning (ride mountain bikes!)</li>
        <li>make and eat lunch</li>
        <li>do the plan for the afternoon (swim, read, explore)</li>
        <li>make and eat dinner</li>
        <li>enjoy a drink and spend quality time with loved ones (look at stars, birds, and bugs with Ruby)</li>
        <li>take care of my evening hygiene routine</li>
        <li>in bed at about 10pm</li>
    </ul>
    <p>I have felt this feeling before; that I feel better at camp than I do at home. This was a large part of why I did
        so much bike camping from 2016 to 2019 and tried to make bike touring my job a few years back. I have recognized
        that a campsite is a better environment for me than the one I make for myself at home.</p>
    <p>Granted, that does not mean I understand the solution suddenly. When Ruby and I were talking about this the other
        day, she asked me what made the difference. I wasn't really sure, but I did say, "WiFi." And I think there's
        some truth to that. I tend to stay up too late clicking on another YouTube video, or scrolling down a social
        media feed, or finding another reason to avoid bedtime. Part of this is a very ADHD struggle with transitioning
        activities, but I think I also feel resistant to be done with the day (even though all of those activities just
        reinforce that I am, in fact, done). Those late nights make it harder to get up when I want to and everything
        gets thrown off.</p>
    <p>I have come to recognize that I am far more capable of harder and more complex tasks in the morning, whether
        that's work, chores, or even a hobby. I was good at building that into my last job by blocking off the start of
        my day through 1 or 2pm. I think trying to build my day more like that above schedule is going to really help me
        just feel like I'm living more fully.</p>
    <p>Especially the idea that I would have a morning block for harder things to do and an afternoon block for easier
        or less complex things to do. Another huge thing that I have really been needing more and more is to
        specifically leave the house and bring my computer to a cafe or do chores outside the house (including outside
        my own backyard). I just don't go outside nearly enough if I don't already have a "thing" to go to. So it's up
        to me and my adult self to make that happen.</p>
    <p>Yes, the schedule above is simple, but having that as an established habit will be better than the current habit:
        Just throwing myself at tasks and feeling paralyzed so I just avoid them while falling in scroll holes until
        they are too urgent to avoid. To
        no surprise; that feels awful. </p>
    <p>I genuinely believe that establishing such a routine would help me shake some of
        the executive dysfunction I've
        been feeling lately. Not to mention it will help me really feel like I'm living up to my potential and living a
        fulfilling and
        actually restful life. Building habits is very hard, but I have done it before and can do it again.</p>
      `,
      altText:
        "A dithered photo of our campsite from our recent vacation to Raystown Lake PA. Featureing our camp chairs in front of our campfire pizza, our borrowed tent and our two hammocks near the lake.",
      public: true,
      lastUpdated: Date.parse("June 16 2023"),
    },
    {
      title: "Now with permalinks!",
      siteLink: "",
      codeLink:
        "https://github.com/travissouthard/travissouthard.github.io/pull/23",
      imagePath: "./assets/images/blog/permalink.png",
      description: `
      <p>I have been trying to keep <a href="https://travissouthard.com/">this portfolio</a> and its parts pretty simple
        and lightweight. Part of this is wanting to
        use free services as much as possible, but part of it is to keep my vanilla Javascript skills up to snuff. It
        also may be my recent interest in <a href="https://permacomputing.net/" target="_blank"></a>permacomputing as
        well as a great disdain for overcomplicated (and data-sucking) big tech products.</p>
      <p>Sometimes though it means I miss out on some features that come a little more "out of the box." I met up with a
          former colleague last week and we were talking about just this issue. He pointed out that while he has been
          enjoying reading these, there was no way to link to a particular post. Well no more!</p>
      <p>I did some work this morning to add support for permalinks with these posts despite not using a backend or
          database. The solution I adopted here was to use query parameters from the url and a custom function to create
          slugs from the post titles as unique-ish identifiers. This was pretty easy to set up, luckily, and you can look
          at <a href="https://github.com/travissouthard/travissouthard.github.io/pull/23" target="_blank">what I did to
              put this
              together here</a>. This also gave the the ability to refactor some functions to better organize what is
          happening where and add the navigation buttons to the top of <a href="https://travissouthard.com/blog.html">the
              blog page</a> as well.</p>
      <p>Granted, this current system using a javascript array in a <code>.js</code> file will only last so many more
          posts before I want to convert this to using a database, but I have genuinely been enjoying this set up and <a
              href="https://travissouthard.com/blog.html?post=brand-new-rss-feed">the custom RSS generator</a> to put
          these together. My tolerance for a too-long file may grow as that file does.</p>
      <p>There is something powerful about mastering the "simpler" or lower-level skills in coding. I felt this way when
          digging more deeply into bash scripting, C, and SQL queries the last few years. But I think that since I am most
          interested in building out things for the web, I will continue to work in vanilla (or close to) Javascript and
          try to make things as lightweight as can also be readable (and maintainable).</p>
      <p>Moreso than feeling more like a wizard with code, I am feeling good about having my own online space to put the
          weird
          things I am working on or just what is interesting me at any time. It is also nice to feel like I have more
          control over the presentation of that space and its <em>content</em>. I am not necessarily interested in
          becoming a <em>Content Creator&trade;</em>, I am interested in sharing what I make, how I make it, and
          especially in helping others to learn how to create spaces like these for themselves.</p>
      <p>These posts still feel good to write and especially to see them update in my RSS reader. These will likely
          continue to be a mix of project updates and personal blogs. I got a lot of good feedback on <a
              href="https://travissouthard.com/blog.html?post=i-need-a-better-routine"></a> and
          have <em>somewhat</em> improved the way I am spending my days, but that is a whole other work in progress.</p>
      <p>Thanks for reading!</p>
      `,
      altText:
        "A recursive screenshot of this blog post in tinier and tinier images as they recursively recede into themselves.",
      public: true,
      lastUpdated: Date.parse("Jun 27 2023"),
    },
  ],
};

// Uncomment to output JSON from this
// Use with `node data.js > data.json`
// console.log(JSON.stringify(data));
