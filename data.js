const data = {
    projects: [
        {
            title: "Expungement Petition Generator",
            siteLink:
                "https://codeforphilly.org/projects/philadelphia_lawyers_for_social_equity_-_record_expungement",
            codeLink: "",
            imagePath: "./assets/images/projects/plse-expungement.png",
            description: `<p>From the project page: The project we are 
                currently working on is building out an expungement 
                petition generator for PLSE. The application takes in 
                PDFs of clients' criminal dockets and returns fully 
                formatted petitions to expunge the clients' criminal 
                records. Having a clear criminal record helps those 
                clients to better find work, housing, and services.</p>`,
            altText: "Screenshot of the Expungement Petition Generator",
            public: false,
            lastUpdated: Date.parse("11 Sep 2023"),
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
            codeLink:
                "https://editor.p5js.org/travissouthard/sketches/Fq_vEfA8O",
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
            siteLink: "",
            imagePath: "./assets/images/pixelart/beach.png",
            description: "",
            altText:
                "A 1-bit, low-res pixel art image of an outlet pipe and it protective beams on a beach",
            public: true,
            lastUpdated: Date.parse("26 Feb 2023"),
        },
        {
            title: "CRT Flower",
            siteLink: "",
            imagePath: "./assets/images/pixelart/crt-flower.png",
            description: "",
            altText:
                "A low-color pixel art image of a potted flowering plant growing inside of an empty CRT TV",
            public: true,
            lastUpdated: Date.parse("6 Nov 2022"),
        },
        {
            title: "32x32 Self Portrait",
            siteLink: "",
            imagePath: "./assets/images/pixelart/headshot-32.png",
            description: "",
            altText:
                "A low-color low-res pixel art portait of a man with a mustache",
            public: true,
            lastUpdated: Date.parse("26 Feb 2023"),
        },
        {
            title: "House Portrait",
            siteLink: "",
            imagePath: "./assets/images/pixelart/house.png",
            description: "",
            altText: "A 4-color grayscale pixelart image of a rowhome",
            public: true,
            lastUpdated: Date.parse("30 Oct 2022"),
        },
        {
            title: "1-bit Mushroom",
            siteLink: "",
            imagePath: "./assets/images/pixelart/mushroom.png",
            description: "",
            altText: "A 1-bit pixelart closeup image of a whitecap mushroom",
            public: true,
            lastUpdated: Date.parse("10 Oct 2022"),
        },
        {
            title: "1-bit Self Portrait",
            siteLink: "",
            imagePath: "./assets/images/pixelart/pixel-art-portrait.png",
            description: "",
            altText: "A 1-bit pixelart self portrait of a man using a keyboard",
            public: true,
            lastUpdated: Date.parse("16 Oct 2022"),
        },
    ],
    blog: [
        {
            title: "Brand new RSS feed!",
            siteLink: "",
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
            siteLink: "",
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
            siteLink: "",
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
        {
            title: "Cautiously considering creating content",
            siteLink: "",
            codeLink: "",
            imagePath: "./assets/images/blog/cityview.jpg",
            description: `
      <p>
        I have been arguing with myself for a while now about getting back into <b><em>content creation</em></b> for the
        past few years. I have started and <s>abandoned</s> moved on from <a
            href="https://www.youtube.com/watch?v=99BRZOOC30s&list=PL8hP1JY9f2dh7vnCpoVDSIknMWIk4s55H&pp=gAQBiAQB"
            target="_blank">so many projects</a> over the years. None of them necessarily "gained traction", but I also
        never gave things enough time to really find their audience. I've been consistently thinking for a year now that
        I did enjoy making those things at the time and probably would again.
      </p>
      <p>
          Theoretically this is the "right reason" to be <b><em>creating content</em></b>: Just feeling a drive to make
          things. However, I really despise the phrase/title <em><b>content creator</b></em> for both its
          hand-wavey vagueness and especially the implication that one is not a filmmaker or an illustrator or a writer
          but a machine akin to a meat grinder whose main output is "stuff". This is especially shakey ground to even
          acknowledge considering AI generated <em><b>content</b></em>.
      </p>
      <p>But I suppose I am considering making intentional, scheduled work again. And while I am not quitting my day job
          (certainly not in week 3), I do have an interest in trying to grow an audience and add some commerce to the art.
          And thats where I start to get nervous: When I have started to treat making things for fun as a job they have
          gotten less fun. Specifically resenting time pressure, feeling like I <em>have</em> to make a thing <em>or
              else</em>, and that the things I am making are just not good. Often I felt like the "just to get it done"
          factor was hurting how I felt about making things.
      </p>
      <p>
          Granted, I say all that and yet: I was always far happier having made the thing and seeing it posted than I ever
          was not posting the things that didn't make it. I genuinely enjoy the act of editing a video, hand-placing a
          pixel, and writing a blog post. Making things is fun, and as long as it stays fun I'll be happy to make things.
          If I can continue to make things that make me happy <em>and</em> make some income from it without feeling burned
          out by it, then that would be genuinely dreamy.
      </p>
      <p>
          This is not an announcement of anything in particular. I don't have a specific plan right now, but I suppose
          keep an ear out because I'll be making <em>something</em> soon. Which of course reminds me to remind you that
          you can get this blog delivered to you automatically by subscribing to <a
              href="https://travissouthard.com/rss.xml" target="_blank">the RSS
              feed</a> I maintain for <a href="https://travissouthard.com">this website</a>!
      </p>
      <p>
          So definitely no promises, but lately I have been interested in:
          <ul>
            <li>making code tutorials at an intermediate level for both small projects and language proficiencies</li>
            <li>writing articles about better documentation and project/code organizing</li>
            <li>posting about current projects I'm working on in a journal blog style</li>
          </ul>
      </p>
      `,
            altText:
                "Gray buildings amongst green trees under a blue sky. A dithered pixel-art of a view of Fairmount, The Art Museum, the Schuylkill River, and the ridges beyond.",
            public: true,
            lastUpdated: Date.parse("Jul 31 2023"),
        },
        {
            title: "Web development streams coming soon!",
            siteLink: "",
            codeLink: "",
            imagePath: "./assets/images/blog/travis-flowers.jpg",
            description: `
            <p>
                I have been working on personal projects in my spare time for a few weeks: stepping into a leadership role at <a
                    href="https://codeforphilly.org" target="_blank">Code for
                    Philly</a>, writing tutorials for upcoming streaming I'll be doing, and working with Ruby to improve our
                house.
            </p>
            <p>
                The <a href="https://codeforphilly.org/projects/philadelphia_lawyers_for_social_equity_-_record_expungement"
                    target="_blank">PLSE Expungement team at Code for Philly</a> has been putting in a ton of work lately and I
                am thrilled to work with such stellar volunteers. I recently wrote a <a
                    href="https://codeforphilly.org/projects/philadelphia_lawyers_for_social_equity_-_record_expungement/updates/5"
                    target="_blank">new
                    update</a> for our project page
                talking about the progress we've made over the past year. We're actively accepting new volunteers if
                you live in Philly and are interested in meaningful work and expanding your skills.
            </p>
            <p>
                I decided to start writing out tutorials for weekend-sized projects in browser-only,
                native tech (i.e. just HTML, CSS and JavaScript). I have one tutorial completely done, a second almost ready,
                and
                a third one in the wings. Once I have all three done I will start hosting <a
                    href="https://www.youtube.com/channel/UCv75JMz-8JkuhGZVRBbrZbQ" target="_blank">weekly streams</a>
                teaching those
                tutorials as well as working through personal projects and pixel art. I plan to do those bigger tutorials
                monthly and edit them into more digestible videos and written blogs. I have found a lack of beginner-friendly
                written content in this area and am seeking to fill that gap.
            </p>
            <p>
                There's a few motivations for doing the streaming and content creation despite <a
                    href="https://travissouthard.com/blog.html?post=cautiously-considering-creating-content"
                    target="_blank">being concerned about getting back into creating content</a>. One is that I do like making
                videos. I spent years growing my video production skills and genuinely love making them. Another is that with
                the streaming, writing, and developing, I will become a better developer and
                continue growing my skills. The last is that I am interested in doing more independent work and that likely
                means trying to grow an audience (Hi!) and build out some options beyond just working for a boss.
            </p>
            <p>
                That being said, I still plan to work full-time and you should<a
                    href="https://travissouthard.com/assets/Travis_Southard_Software_Engineer_Resume.pdf" target="_blank">hire
                    me full time as a Software Engineer</a>, I am certainly still interested in working on
                civic technology and geospatial projects that improve people's lives. Doing work that is meaningful to me will
                always be one of the most important factors in how I choose to spend my days. A salary and healthcare are
                important to
                me but I work best when I am working to make the world a better place. And that's a huge part of why I'm
                interested in trying to take more of my workday decisions into my own hands. My goal with these projects is to
                plant seeds so that I can begin to cultivate a career aligned with my values.
            </p>
            <p>
                The best way to keep up with what's happening is to check here or subscribe to <a
                    href="https://travissouthard.com/rss.xml" target="_blank">this blog's RSS feed</a>. To see my upcoming
                streams <a href="https://www.youtube.com/channel/UCv75JMz-8JkuhGZVRBbrZbQ" target="_blank">subscribe to my
                    YouTube channel</a> where I'll be streaming them.
            </p>
      `,
            altText:
                "Travis holding a bouquet of flowers in a field of flowers!",
            public: true,
            lastUpdated: Date.parse("Sep 24 2023"),
        },
        {
            title: "September Updates and October Upcoming",
            siteLink: "",
            codeLink: "",
            imagePath: "./assets/images/blog/sunset-graveyard.jpg",
            description: `
            <p>
                I have some updates from the past week and a <em>content schedule</em> for the next month!
            </p>
            <p>
                Firstly I am honored that last Monday I was named one of <a href="https://technical.ly/"
                    target="_blank">Technical.ly</a>'s <a
                    href="https://technical.ly/software-development/philly-reallist-engineers-2023/" target="_blank">RealLIST
                    Engineers of Philadephia for 2023</a>! It always feels nice to be recognized for work and this is the first
                professional recognition I've received since transitioning into tech. I am especially honored that my work with
                <a href="https://codeforphilly.org/" target="_blank">Code for Philly</a> was specifically mentioned because I am
                incredibly proud of the work that I've done there over the past three years.
            </p>
            <p>
                Speaking of Code for Philly, my second update this week is that I am stepping up to join Code for Philly's
                leadership team as the Operations Lead. Over the next few months I will be learning more about the different
                projects we facilitate, who the players are (that I don't already know), and what needs and strengths each
                project team has. I will also be supporting the teams' operational needs like making sure teams have the tools
                they need to thrive. I have loved volunteering on the <a
                    href="https://codeforphilly.org/projects/philadelphia_lawyers_for_social_equity_-_record_expungement"
                    target="_blank">PLSE Expungement team</a> for
                the past three years and will continue to support them as team lead until a new lead is fully in place.
            </p>
            <p>
                My final update from the week is that I have put in some work on updates to <a
                    href="https://travissouthard.com/">my personal website and portfolio</a>! I
                have made the home page a little less scattered so that now it only shows my most recent
                projects, blogs, and pixel art pieces. There is also a separate about page so that it is easier to link to. The
                biggest change is that the projects, blogs, and pixel art all have their own pages. Each of the pages shows a
                list of the content and when clicked on, shows a detailed view with the ability to navigate to previous and next
                posts.
            </p>
            <p>
                This change felt relevant to my interest in writing blogs, doing streams, and making more pixel art. The thought
                was "If I will be making more content, it should be easier to look at content on my portfolio." Granted this has
                been an
                upgrade to my website I have been wanting to do for a long time. But of course, priorities for a long time were
                elsewhere and finally I was able to make those changes. There's always more to do but I'm pleased with this
                update and excited to post more and find need for things like pagination and a more robust database than a JSON
                file.
            </p>
            <p>
                Speaking of content: I made a content schedule for myself for the next month! I am still figuring out a good way
                to do streams from my refurbished early-2015 MacBook Pro, so those will not be announced yet, but I will be sure
                to post them when they are officially scheduled. For now what I can say is that they will be Mondays from 7-9pm
                Eastern Time. The blogs though are certainly ready to be sheduled! In the month of October, I will be
                publishing:
            </p>
            <ul>
                <li><b>October 8</b>: Minesweeper Tutorial (this is a big post)</li>
                <li><b>October 15</b>: Money, Tech, & Motivation</li>
                <li><b>October 22</b>: Code Should Be Smaller</li>
                <li><b>October 28</b>: Monthly updates and next schedule (similar to this post)</li>
            </ul>
            <p>
                The titles and topics may change, like everything in life, really. And once streaming is figured out I will add
                that to the schedule as well. But, like always, the best way to keep up with this blog is to subscribe to <a
                    href="https://travissouthard.com/rss.xml" target="_blank">this blog's RSS feed</a> and to my <a
                    href="https://www.youtube.com/channel/UCv75JMz-8JkuhGZVRBbrZbQ" target="_blank">subscribe to my
                    YouTube channel</a> where I'll be streaming (once I figure out the tech for it). You're also welcome to join
                the test streams as they pop up.
            </p>
            `,
            altText: "Sunset over a local church and graveyard",
            public: true,
            lastUpdated: Date.parse("Oct 1 2023"),
        },
        {
            title: "How to make Minesweeper part 1",
            siteLink: "",
            codeLink: "",
            imagePath: "./assets/images/blog/minesweeper06.jpg",
            description: `
<h3 id="overview">Overview</h3>
<p>Let’s make minesweeper with just native web tools! Using only native web components we can build this classic video game using some loops, array methods, and recursion. Specifically we&#39;ll be using HTML5, CSS3 with Flexbox, and ES6 JavaScript.</p>
<h3 id="prerequisites">Prerequisites</h3>
<p>To make this project you will need:</p>
<ul>
<li>A code editor (I’ll be using VS Code)</li>
<li>A web browser</li>
<li>A basic understanding of HTML, JavaScript, and CSS</li>
</ul>
<h3 id="how-to-make-minesweeper-part-1-">How to make Minesweeper part 1:</h3>
<h3 id="make-your-files">Make your files</h3>
<p>Start a project folder called “minesweeper” and in it create 3 files:</p>
<ul>
<li>index.html</li>
<li>style.css</li>
<li>app.js</li>
</ul>
<p>Note: If you don’t already navigate your machine and manage your code files in the terminal or shell I recommend it! To do the above:</p>
<pre><code class="lang-sh"># Make your folder <span class="hljs-built_in">and</span> <span class="hljs-keyword">change</span> directories <span class="hljs-keyword">to</span> it
<span class="hljs-built_in">mkdir</span> minesweeper
<span class="hljs-keyword">cd</span> minesweeper

# Create the <span class="hljs-keyword">files</span>
touch <span class="hljs-built_in">index</span>.html style.css app.js
</code></pre>
<h3 id="add-your-boilerplate-code">Add your boilerplate code</h3>
<p>Open all three files into your editor of choice. In index.html start with the boilerplate code (in VS Code you can type <code>!</code> and click the first option, this fills it out as a snippet):</p>
<pre><code class="lang-html"><span class="hljs-meta">&lt;!DOCTYPE html&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">html</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">"en"</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">head</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">charset</span>=<span class="hljs-string">"UTF-8"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"viewport"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"width=device-width, initial-scale=1.0"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">title</span>&gt;</span>Title<span class="hljs-tag">&lt;/<span class="hljs-name">title</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">head</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>

<span class="hljs-tag">&lt;/<span class="hljs-name">html</span>&gt;</span>
</code></pre>
<p>In the <code>&lt;body&gt;</code> section, add: <code>&lt;h1&gt;Minesweeper&lt;/h1&gt;</code> and change the text in the <code>&lt;title&gt;</code> tag to also read Minesweeper.
Open index.html in your browser. You can drag and drop the file into the browser or use <code>open index.html</code> in your terminal or even use the <code>file://</code> protocol if you’re feeling fancy.</p>
<p>This isn’t much of a website yet, and certainly not a game or stylish. But to get either of those qualities we need to connect our <code>app.js</code> and <code>style.css</code> files. To do so we need two lines in the head section of the html:</p>
<pre><code class="lang-html">    <span class="hljs-tag">&lt;<span class="hljs-name">link</span> <span class="hljs-attr">rel</span>=<span class="hljs-string">"stylesheet"</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"style.css"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"app.js"</span>&gt;</span><span class="undefined"></span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
<p>Then in the <code>style.css</code> file we will need the following:</p>
<pre><code class="lang-css"><span class="hljs-selector-tag">h1</span> {
    <span class="hljs-attribute">color</span>: pink;
}
</code></pre>
<p>It doesn&#39;t have to be pink, but it does help to have something stand out pretty dramatically. Now in our <code>app.js</code> file let&#39;s add:</p>
<pre><code class="lang-js">console.log(<span class="hljs-string">"This is connected"</span>)<span class="hljs-comment">;</span>
</code></pre>
<p>Note: I want to establish a pattern here that whenever we add new code to our files, we should test it. In this case, we’ll refresh the browser to see what we changed. So each time we make a change I’ll refer to this step as “refresh and check”. Also, each section in this is designed to be its own commit (and the titles of the sections work as <a href="https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/">good commit messages</a>).</p>
<p>When we refresh and check, we should see our title on a pink background. To see the console.log message, we’ll have to right-click, and choose “inspect” from the context menu. If it’s your first time opening the inspector, welcome! Most browsers open by default to to the Elements inspector tab to let you see the html and css as it’s rendered on the page. And we’ll come back to that later. For now, let’s choose the Console tab and we should see our message!</p>
<img src="./assets/images/blog/minesweeper01.jpg" alt="Our Minesweeper title with a pink background and message in the console" />
<h3 id="add-the-board-and-put-stuff-in-it">Add the board and put stuff in it</h3>
<p>A key part of the minesweeper game is a board of squares on a grid. So let’s add a <code>&lt;div&gt;</code> element with the id: “board” (this will look like <code>&lt;div id=&quot;board&quot;&gt;&lt;/div&gt;</code>). A div by itself will not really do much. So we&#39;ll add our squares with JavaScript.</p>
<p>There’s no prescriptive size that our “minefield” should be, and in fact many implementations use many different sizes, but a 10x10 grid has an appeal for both easy numbers and a nice size for playing.</p>
<p>So to make a 10x10 board we will need to make 100 squares. But rather than using 10 and 100, let’s use variables like <code>width</code> and <code>boardSize</code> so we can make this easier to work on later. So in our <code>app.js</code> file we&#39;ll replace our <code>console.log</code> line with:</p>
<pre><code class="lang-js"><span class="hljs-keyword">const</span> width = <span class="hljs-number">10</span>;
<span class="hljs-keyword">const</span> boardSize = width * width;

<span class="hljs-keyword">const</span> board = <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">"board"</span>);

<span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">100</span>; i++) {
    <span class="hljs-keyword">const</span> square = <span class="hljs-built_in">document</span>.createElement(<span class="hljs-string">"p"</span>);
    square.innerHTML = <span class="hljs-string">\`<span class="hljs-subst">\${i + <span class="hljs-number">1</span>}</span>\`</span>;
    board.appendChild(square);
}
</code></pre>
<p>Let&#39;s check and refresh. Here we run into an interesting bit of trouble, there should be 100 numbers on the screen and there are none and an error is in the console telling us no element exists with an id of &quot;board.&quot; Code in HTML, CSS, and JS is read by the browser from top to bottom. The HTML file asks for the <code>&lt;link&gt;</code> to the style sheet in the <code>&lt;head&gt;</code> and then asks for the <code>&lt;script&gt;</code> containing the Javascript. Then once the <code>&lt;head&gt;</code> is read and rendered, the browser executes the <code>&lt;body&gt;</code> code.</p>
<p>This means that in this case the <code>&lt;div&gt;</code> with the id of &quot;board&quot; hasn&#39;t been rendered yet when the JavaScript is executed. There is a <code>window.load</code> event we can ask for, but another way to handle this is to move the <code>&lt;script&gt;</code> tag to the bottom of the <code>&lt;body&gt;</code> section. This way the Javascript is only run once the whole page is rendered.</p>
<p>Refresh and check again and we have 100 numbers in our &quot;board&quot;.</p>
<img src="./assets/images/blog/minesweeper02.jpg" alt="Our Minesweeper title with a vertical list of increasing integers" />
<h3 id="style-the-board-to-be-square">Style the board to be square</h3>
<p>Now we have 100 numbers in a weirdly long list, but that’s not much of a board. For a moment we will need to write some CSS. </p>
<p>Note: For a lot of engineers, CSS can be very daunting, especially where page layout is concerned. And yes there are many component libraries that will handle this for us, but those libraries compile or otherwise eventually render CSS. Therefore, knowing how CSS works natively, it will help us to diagnose and solve design and UX issues because they come up with libraries too.</p>
<p>We will worry about the aesthetic style of the game later, for now we want to get the board to be functional. And for now, we only have a few elements on the page to worry about first. We have the board itself and 100 <code>&lt;p&gt;</code> elements within it.</p>
<p>The board is a <code>&lt;div&gt;</code> with an <code>id</code> of &quot;board&quot; so we can easily grab that with <code>#board</code> in our CSS. We&#39;ll set an arbitrary width (ideally one that will make math easy later), center it, and add a border so we can see the board.</p>
<pre><code class="lang-css"><span class="hljs-selector-id">#board</span> {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">500px</span>;
    <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span> auto;
    <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid black;
}
</code></pre>
<p>A refresh and check shows us a square with a border at the center of our page, but the numbers are still falling down the page. There&#39;s a few ways to get our elements to sit in a grid in the board, and my go-to is Flexbox, which is natively supported in CSS3. In this case it&#39;s appropriate since we have one array that we are arranging as a 2-dimensional grid and flexbox will treat them that way as well.</p>
<p>Note: <a href="https://flexboxfroggy.com/">Flexbox Froggy</a> is a great way to learn how to use the basics of Flexbox and CSS Tricks has <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">an excellent reference guide</a>.</p>
<p>Let&#39;s add the following lines to our <code>#board</code> CSS block to use Flexbox and display its children (our squares) as rows that wrap to the next row when they run out of horizontal space.</p>
<pre><code class="lang-css"><span class="hljs-attribute">display</span>: flex;
<span class="hljs-attribute">flex-flow</span>: row wrap;
</code></pre>
<p>We still need to style the numbers to get them to fit nicely since their defaults will change depending on what text is in them. We will want to give them a fixed width and height, a border so we can see them for now, and center the text in each square.</p>
<p>Above, we (completely arbitrarily) chose <code>500px</code> as our board width and a game board size of 10 squares by 10 squares. So each square should be <code>50px</code>, but if we just set height and width to be <code>50px</code>, the squares wouldn&#39;t fit. HTML elements render width as the content (in this case: text) width. Padding, border, and margin will add more size to the box and will not fit on our grid.</p>
<p>We don&#39;t want any margin, since each square will sit directly against its neighbors. We also don&#39;t want padding since we&#39;re just centering with <code>text-align</code>. However, we do want a border so we can see where the boxes are.</p>
<p>So, we will start our squares with the following styles: A width and height of <code>48px</code> to leave room for the <code>1px</code> of border on each side (e.g. for width, the left and right borders both add to the overall width).</p>
<pre><code class="lang-css"><span class="hljs-selector-id">#board</span> <span class="hljs-selector-tag">p</span> {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">48px</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">48px</span>;
    <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span>;
    <span class="hljs-attribute">padding</span>: <span class="hljs-number">0</span>;
    <span class="hljs-attribute">line-height</span>: <span class="hljs-number">48px</span>;
    <span class="hljs-attribute">text-align</span>: center;
    <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid gray;
}
</code></pre>
<p>A refresh and check should now show us a board with 100 squares arranged in a nice grid.</p>
<img src="./assets/images/blog/minesweeper03.jpg" alt="Our Minesweeper title with a square of squares with numbers in them" />
<h3 id="make-the-squares-clickable">Make the squares clickable</h3>
<p>Now that we have a grid, let&#39;s make it interactive! This is typically an expectation of any video game. The <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document"><code>document</code> API</a> has an <a href="https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener"><code>addEventListener</code> method</a> that is incredibly useful for this. The best place to add these event listeners will be as we make each square. So let&#39;s make our loop that creates the squares look like this.</p>
<pre><code class="lang-js">for (<span class="hljs-name">let</span> i = <span class="hljs-number">0</span><span class="hljs-comment">; i &lt; 100; i++) {</span>
    const clickedClass = <span class="hljs-string">"clicked"</span><span class="hljs-comment">;</span>
    const square = document.createElement(<span class="hljs-string">"p"</span>)<span class="hljs-comment">;</span>
    square.innerHTML = \`\${i + <span class="hljs-number">1</span>}\`<span class="hljs-comment">;</span>
    square.addEventListener(<span class="hljs-string">"click"</span>, (<span class="hljs-name">e</span>) =&gt; {
        if (!square.classList.contains(<span class="hljs-name">clickedClass</span>)) {
            square.classList.add(<span class="hljs-name">clickedClass</span>)<span class="hljs-comment">;</span>
        }
    })<span class="hljs-comment">;</span>
    board.appendChild(<span class="hljs-name">square</span>)<span class="hljs-comment">;</span>
}
</code></pre>
<p>Note: <code>clickedClass</code> may be extraneous for now, but we wanted to use the string <code>&quot;clicked&quot;</code> more than once and it often helps to set that with a constant to ensure they match (and to make changing it easier later). I have had plenty of projects get stalled for a little too long trying to find a typo in a string.</p>
<p>And now that we are adding a &quot;clicked&quot; class to each square, let&#39;s change the color to see if our event handling works by adding this to our CSS:</p>
<pre><code class="lang-css"><span class="hljs-selector-class">.clicked</span> {
    <span class="hljs-attribute">background-color</span>: green;
}
</code></pre>
<p>Refresh and check and click around the board. Any unclicked squares will change color now! However, as it&#39;s written above, we are only adding a class if it&#39;s not already there. If you&#39;d like it to change the color back on the second click instead, try <code>square.classList.toggle(clickedClass)</code></p>
<img src="./assets/images/blog/minesweeper04.jpg" alt="Our board now with green squares indicating which have been clicked" />
<h3 id="refactor-board-to-build-from-array-of-values">Refactor board to build from array of values</h3>
<p>Now that we have a grid of 100 numbers ready to be built and clicked, let&#39;s add some mines to our minefield! In our javascript, let&#39;s create an array of 100 elements, with 20 bombs and 80 empties.</p>
<p>But what data should we put in this array? We have a lot of options, but since we are developing this as a webpage, adding classes to our square elements gives us an easy way to check if that square is a bomb (and then style it) by checking <code>square.classList.contains()</code>.</p>
<p>Note: For a savvy game player, this does expose the locations via the inspector if a player wanted to cheat. If we were building something that needed to be competitive, a better choice would be to refer back to our array and check the value there. While less likely, that savvy player could still have access to that array via the console. In that case, a backend server would probably be necessary to keep things competitive. This is certainly outside our scope here, but it&#39;s always worth thinking about security especially when practicing.</p>
<p>So if we are going to use classes on each square, an array of strings would be a good choice. The strings in this case will be &quot;bomb&quot; and &quot;valid&quot;, as in: There is either a bomb in this square or this square is a valid place to click. Booleans like <code>true</code> and <code>false</code> could also work, however, with enough distance it may become muddy wondering if it&#39;s <code>true</code> this is a bomb or <code>true</code> that we can safely click it.</p>
<p>Note: In this case I&#39;ve chosen the word &quot;bomb&quot; instead of &quot;mine&quot; since &quot;mine&quot; has a few common meanings (place to dig for ores, belonging to me, etc), but &quot;bomb&quot; commonly is just that (though I suppose it is also sometimes a cake). But the goal of naming like this is to choose something as clear as possible.</p>
<p>In our <code>app.js</code> file let&#39;s add the following after the <code>boardSize</code> is declared but before the <code>board</code> is defined:</p>
<pre><code class="lang-js">const <span class="hljs-keyword">bombCount </span>= <span class="hljs-number">20</span><span class="hljs-comment">;</span>
const validCount = <span class="hljs-keyword">boardSize </span>- <span class="hljs-keyword">bombCount;
</span>const squareValues = []<span class="hljs-comment">;</span>

for (let i = <span class="hljs-number">0</span><span class="hljs-comment">; i &lt; boardSize; i++) {</span>
    if (i &lt; <span class="hljs-keyword">bombCount) </span>{
        squareValues.push(<span class="hljs-string">"bomb"</span>)<span class="hljs-comment">;</span>
    } else {
        squareValues.push(<span class="hljs-string">"valid"</span>)<span class="hljs-comment">;</span>
    }
}
</code></pre>
<p>Now we have an array of 20 bombs and 80 valids. We&#39;ll randomize that later so that the board is not just bombs at the top. But for now, let&#39;s use this array to create the board. So let&#39;s change our loop to live within a function (with a clear name) and use that array:</p>
<pre><code class="lang-js"><span class="hljs-keyword">const</span> createBoard = () =&gt; {
    <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> <span class="hljs-keyword">value</span> of squareValues) {
        <span class="hljs-keyword">const</span> clickedClass = <span class="hljs-string">"clicked"</span>;
        <span class="hljs-keyword">const</span> square = document.createElement(<span class="hljs-string">"p"</span>);
        square.innerHTML = <span class="hljs-keyword">value</span> === <span class="hljs-string">"bomb"</span> ? <span class="hljs-string">"💣"</span> : <span class="hljs-string">"😀"</span>;
        square.classList.<span class="hljs-keyword">add</span>(<span class="hljs-keyword">value</span>);
        square.addEventListener(<span class="hljs-string">"click"</span>, (e) =&gt; {
            <span class="hljs-keyword">if</span> (!square.classList.contains(clickedClass)) {
                square.classList.<span class="hljs-keyword">add</span>(clickedClass);
            }
        });
        board.appendChild(square);
    }
};

createBoard();
</code></pre>
<p>Note: If you&#39;re not familiar with <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of">for...of loops</a>, they are very useful for iterating over every value in an array. Another option could be using <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach"><code>squareValues.forEach()</code></a>, but in this case I prefer how the for...of loop looks.</p>
<p>Now when we refresh and check, we should see the 20 bomb icons in the top two rows of the board and the remaining of the board should be smiley faces.</p>
<img src="./assets/images/blog/minesweeper05.jpg" alt="Our Minesweeper board with two rows of bombs and many others of smiley faces" />
<h3 id="randomize-the-board-when-building">Randomize the board when building</h3>
<p>Our minesweeper game is going to get very stale very fast if the board is always populated with all the bombs up at the very top. So let&#39;s randomize the array we are building the board from each time we build the board.</p>
<p>Let&#39;s make a <code>shuffleValues</code> function and call it on the first line inside the <code>createBoard</code> function.</p>
<pre><code class="lang-js"><span class="hljs-keyword">const</span> shuffleValues = <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
    <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; squareValues.length; i++) {
        <span class="hljs-keyword">const</span> randomIndex = <span class="hljs-built_in">Math</span>.floor(<span class="hljs-built_in">Math</span>.random() * squareValues.length);
        <span class="hljs-keyword">let</span> temp = squareValues[i];
        squareValues[i] = squareValues[randomIndex];
        squareValues[randomIndex] = temp;
    }
};
</code></pre>
<p>This is a very simple method of scrambling our array, but it is pretty sufficient. Every element will switch with a random element, which could mean that an element will switch with itself, but that&#39;s okay since it&#39;s unlikely all 100 will switch with just themselves.</p>
<p>There&#39;s two steps to this function, for every element:</p>
<ul>
<li>Choose a random index</li>
<li>Switch the element&#39;s value with the value at that index</li>
</ul>
<p>Note: Instead of the temp switch method, another option with ES6 is to use destructuring: <code>[squareValues[i], squareValues[randomIndex]] = [squareValues[randomIndex], squareValues[i]]</code> to switch them in a single line. Both are valid, though neither are immediately better than the other so choose accordingly.</p>
<p>Refresh and check and now our values should be randomized for every time we refresh the page.</p>
<img src="./assets/images/blog/minesweeper06.jpg" alt="Our Minesweeper board with randomized bombs and smiley faces" />
<h3>Part 2 out now! Part 3 coming soon!</h3>
<p> Check out <a href="https://travissouthard.com/blog.html?post=how-to-make-minesweeper-part-2">part 2</a> to build out most of the gameplay. Add the <a href="https://travissouthard.com/rss.xml" target="_blank">RSS feed</a> to your favorite RSS reader to get it as soon as it comes out</p>
            `,
            altText:
                "Our partially done Minesweeper game with randomly placed bombs and safe squares",
            public: true,
            lastUpdated: Date.parse("Oct 8 2023"),
        },
        {
            title: "How to make Minesweeper part 2",
            siteLink: "",
            codeLink: "",
            imagePath: "./assets/images/blog/minesweeper12.jpg",
            description: `
            <h3 id="how-to-make-minesweeper-part-2">How to make Minesweeper part 2</h3>
    <p>This is part 2 of 3 and I recommend starting with <a
            href="https://travissouthard.com/blog.html?post=how-to-make-minesweeper-part-1">part 1</a> before moving on
        to this part. If you have already worked through part 1, welcome back! In the previous part, we built a board of
        100 squares with 20 bombs, and randomized them around the board. In this part we will build out most of the
        gameplay.</p>
    <h3 id="refactor-click-handler-to-own-function">Refactor click handler to own function</h3>
    <p>To help keep our <code>createBoard</code> function from getting too cluttered, we can start refactoring out some
        functionality into its own function.</p>
    <p>Note: Refactoring is a specific action in which the functionality of our code stays the same, but we change the
        code to (ideally) be more readable or more efficient. At the end of any refactor, nothing should be different
        from the user perspective.</p>
    <p>A great candidate here is to take our callback code in the <code>addEventListener</code> to its own function. So
        we will add the following above our <code>createBoard</code> function.</p>
    <pre><code class="lang-js"><span class="hljs-keyword">const</span> handleClick = <span class="hljs-function">(<span class="hljs-params">squareObj</span>) =&gt;</span> {
                <span class="hljs-keyword">const</span> clickedClass = <span class="hljs-string">"clicked"</span>;
                <span class="hljs-keyword">if</span> (!squareObj.classList.contains(clickedClass)) {
                    squareObj.classList.add(clickedClass);
                }
            };
            </code></pre>
    <p>And the <code>addEventListener</code> line will be:
        <code>square.addEventListener(&quot;click&quot;, () =&gt; handleClick(square));</code>
    </p>
    <p>Note: The <code>clickedClass</code> declaration is also likely a good candidate for a global constant or a
        <code>classes</code> object if we find ourselves adding other classes later. Especially if we create bigger
        boards, we want to be mindful of memory efficiency, and not be redeclaring the same string every loop.
    </p>
    <h3 id="add-reset-feature-and-game-over-if-click-bomb">Add reset feature and game over if click bomb</h3>
    <p>And now we should add one last bit of infrastructure before adding in gameplay. We want to be able to reset the
        board without refreshing the whole page. Let&#39;s start that by adding a new button to the page by adding
        <code>&lt;button id=&quot;reset&quot;&gt;Reset&lt;/button&gt;</code> between the <code>&lt;h1&gt;</code> and
        board.
    </p>
    <p>Now let&#39;s set up the reset logic. At the top of <code>app.js</code>: we&#39;ll add
        <code>let isGameOver = false;</code> to the bottom of our constants block. We&#39;ll use this more in the next
        section.
    </p>
    <p>Next we&#39;ll go down to where we select and declare the board and add
        <code>const reset = document.getElementById(&quot;reset&quot;);</code>
    </p>
    <p>Then, just above our <code>handleClick</code> function, we&#39;ll add in our reset function:</p>
    <pre><code class="lang-js">const resetGame = <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
                isGameOver = <span class="hljs-literal">false</span>;
                board.innerHTML = <span class="hljs-string">""</span>;
            };
            </code></pre>
    <p>At the top of our <code>createBoard</code> function, we will call <code>resetGame();</code> to ensure we clear
        the board before building it again.</p>
    <p>And finally we will add an event listener to the <code>reset</code> DOM object just before we create the board at
        the bottom.</p>
    <pre><code class="lang-js"><span class="hljs-selector-tag">reset</span><span class="hljs-selector-class">.addEventListener</span>(<span class="hljs-string">"click"</span>, createBoard);
            </code></pre>
    <p>Note: On looking at this again, it may make more sense to call <code>createBoard</code> at the bottom of the
        <code>resetGame</code> function and have the <code>onClick</code> callback be <code>resetGame</code> instead.
        This will need some rearranging but is very likely worth the work for a little clarity.
    </p>
    <p>Refresh and check to make sure the reset button does what we expect. Right now the two ways to see if it&#39;s
        working is to see the squares get rearranged. If there are any green squares from clicking on the board, those
        should also be cleared from the board during the reset.</p>
    <img src="./assets/images/blog/minesweeper07.jpg"
        alt="Our Minesweeper board with a few green selected squares and one exploded one" />
    <h3 id="add-game-over-condition-and-bomb-to-click-handler">Add game over condition and bomb to click handler</h3>
    <p>Let&#39;s add some actual gameplay features! The one we&#39;ll start with is getting a game over, which is not
        the most fun feature, but is one that we&#39;ll need a lot going forward. We already have an
        <code>isGameOver</code> boolean, and our reset function already sets it back to <code>false</code> but we
        haven&#39;t set it to <code>true</code> anywhere yet.
    </p>
    <p>In Minesweeper, there&#39;s only two reasons why the game would be over:</p>
    <ul>
        <li>The player successfully flagged all the bombs or revealed all the valid squares, thus winning</li>
        <li>The player clicked on a bomb, thus losing</li>
    </ul>
    <p>We don&#39;t have the ability to flag bombs yet, but the player is able to click them. What we will want to do is
        check if the square that was clicked has a &quot;bomb&quot; class. DOM objects have a <code>classList</code>
        object and we can check if a string is among those classes with the <code>classList.contains()</code> method. So
        at the top of <code>handleClick</code> let&#39;s add:</p>
    <pre><code class="lang-js"><span class="hljs-keyword">if</span> (squareObj.classList.contains(<span class="hljs-string">"bomb"</span>)) {
                <span class="hljs-attr">isGameOver</span> = <span class="hljs-literal">true</span>;
                squareObj.<span class="hljs-attr">innerHTML</span> = <span class="hljs-string">"💥"</span>;
            }
            </code></pre>
    <p>Once the game is over, we want to make the board stay put and no longer be clickable. So we can add a check to
        <code>handleClick</code> to check if the game is over, and in that case return from the function early,
        effectively stopping the click action. At the top of <code>handleClick</code> add
        <code>if (isGameOver) return;</code>
    </p>
    <p>Refresh and check and let&#39;s test a few things now. Click some smiley faces, and these should still turn
        green. Click a bomb and it should &quot;explode&quot;. Then click more smiley faces or bombs to confirm that no
        click actions are happening now that the game is over. Finally click the reset button to reset the game and be
        able to click in the game again.</p>
    <h3 id="add-ability-to-check-neighbors">Add ability to check neighbors</h3>
    <p>A key feature in minesweeper is to check how many bombs are next to the square you just clicked. This helps the
        player know which square to click next or where a bomb might be. Each square that&#39;s not on an edge has eight
        neighbors, and we can visualize how to access those neighbors by displaying their array index numbers instead of
        the emojis.</p>
    <p>We do still want to keeo track of where the bombs are, so let&#39;s add the following to the CSS file:</p>
    <pre><code class="lang-css"><span class="hljs-selector-class">.bomb</span> {
                <span class="hljs-attribute">background-color</span>: pink;
            }
            </code></pre>
    <p>Now instead of adding emojis let&#39;s change the line in <code>createBoard</code> where we declare the
        square&#39;s <code>innerHTML</code> to: <code>square.innerHTML = \`\${i}\`;</code></p>
    <p>Also rather than adding the <code>i</code> as a class; we know these will be unique to each square and would be a
        good candidate to set the squares&#39; <code>id</code> attributes to that <code>i</code> value. Under our
        <code>square.innerHTML</code> line let&#39;s add: <code>square.id = \`\${i}\`;</code>
    </p>
    <p>When we refresh and check we should see the squares numbered 0-99 with 20 randomly-placed pink squares.</p>
    <p>Now that we can see the numbers, we can examine how we can use those numbers to check each of the square&#39;s
        neighbors. Let&#39;s look at square 12, it&#39;s neighbors are (top to bottom, left to right):
        1, 2, 3, 11, 13, 21, 22, 23
        In our case, the difference between each and 12 is:
        -11, -10, -9, -1, +1, +9, +10, +11</p>
    <p>Every board with 10 squared squares will follow this pattern, but for us wanting to choose any size in the
        future, we can make the top and bottom neighbors relative to the <code>width</code> of the board. For example to
        get 1 from an <code>index</code> of 12 we would say it is <code>index - width - 1</code> and extrapolate our
        other neighbor values from that.</p>
    <p>Let&#39;s add a <code>checkNeighbors</code> function above the <code>handleClick</code> function that looks like
        this and then break that down:</p>
    <pre><code class="lang-js"><span class="hljs-keyword">const</span> checkNeighbors = <span class="hljs-function">(<span class="hljs-params">squareObj</span>) =&gt;</span> {
                <span class="hljs-keyword">const</span> index = <span class="hljs-built_in">parseInt</span>(squareObj.id);
                <span class="hljs-keyword">const</span> neighborIndexes = [
                    index - width - <span class="hljs-number">1</span>,
                    index - width,
                    index - width + <span class="hljs-number">1</span>,
                    index - <span class="hljs-number">1</span>,
                    index + <span class="hljs-number">1</span>,
                    index + width - <span class="hljs-number">1</span>,
                    index + width,
                    index + width + <span class="hljs-number">1</span>,
                ];
                <span class="hljs-keyword">let</span> count = <span class="hljs-number">0</span>;
            
                <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> neighborId <span class="hljs-keyword">of</span> neighborIndexes) {
                    <span class="hljs-keyword">const</span> neighbor = <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">\`<span class="hljs-subst">\${neighborId}</span>\`</span>);
                    <span class="hljs-keyword">if</span> (neighbor &amp;&amp; neighbor.classList.contains(<span class="hljs-string">"bomb"</span>)) {
                        count++;
                    }
                }
            
                squareObj.innerHTML = <span class="hljs-string">\`<span class="hljs-subst">\${count}</span>\`</span>;
            };
            </code></pre>
    <p>There are three steps to this function:</p>
    <ul>
        <li>Establish our constants and variables</li>
        <li>For each neighbor in the array, increment the <code>count</code> when that neighbor has a bomb</li>
        <li>Set the <code>innerHTML</code> of the clicked square to be the <code>count</code></li>
    </ul>
    <p>And then of course we have to call <code>checkNeighbors</code> as part of our <code>handleClick</code> function.
        So we&#39;ll add <code>checkNeighbors(squareObj);</code> within the <code>if</code> block where we check if the
        square is not clicked.</p>
    <p>When we refresh and check now, we should be able to click any non-pink square and be shown the number of pink
        squares next to each clicked square.</p>
    <img src="./assets/images/blog/minesweeper08.jpg"
        alt="Our Minesweeper board with a few green selected squares that show how many bombs are next to them" />
    <h3 id=" fix-counting-for-squares-at-edges">Fix counting for squares at edges</h3>
    <p>Our function to check neighbors is working pretty well, but if you can find a board configuration where a square
        on the left edge has a pink square in the right-most square of the row above or a square on the right has a pink
        square on the left-most square of the row below, you may notice that the count has too many bombs in it.</p>
    <p>From the user perspective a square on an edge only has five neighbors, and a corner square only has three. But
        our array-based method has a drawback: It doesn&#39;t know where the edges are. An array has no concept of
        edges. It is only a line of numbers we tricked into forming rows. So we will have to add a way to check the
        edges in our <code>checkNeighbors</code> function.</p>
    <p>Because we are asking the DOM for elements with specific IDs (the <code>neighbor</code> in the loop above) if it
        doesn&#39;t exist then it will return <code>undefined</code>. Naturally, an <code>undefined</code> object
        won&#39;t have a &quot;bomb&quot; and will not increment our <code>count</code>. For example, if we&#39;re on
        square &quot;94&quot; it&#39;s nonexistent lower neighbors would be 103, 104, &amp; 105 and would return
        <code>undefined</code> when we try to <code>getElementById</code> for those values.
    </p>
    <p>However, for square &quot;90&quot; its left neighbors are 79, 89, &amp; 99, which all exist, but are all over on
        the right side of the board, and for our gameplay need to not be checked. For the purposes of this tutorial and
        showing the concept we will check for all the edges. This will also make our loop skip unnecessary checks and
        make it more efficient, even if by a little.</p>
    <p>So let&#39;s define some edges. Top and bottom will be pretty easy since those are rows made of consecutive
        numbers and we have a constant defined for how big our rows are. The top row is
        <code>0, 1, 2, 3, 4, 5, 6, 7, 8, 9</code>, so we know that they are all less than 10. But like above, we want
        our boards to be variably sized and don&#39;t want to update this check every time, so we can use the
        <code>width</code> constant. We know our square is on the top edge if <code>index &lt; width</code>.
    </p>
    <p>Likewise we know that the bottom row indeces (<code>90, 91, 92, 93, 94, 95, 96, 97, 98, 99</code>) are all within
        one <code>width</code> of 100. We are storing 100 in the constant <code>boardSize</code> that we haven&#39;t
        used in a while. So we know a square is in the bottom row if <code>index &gt;= boardSize - width</code>.</p>
    <p>So we can add to our <code>checkNeighbors</code> function after we define our <code>index</code> but before we
        define the <code>neighborIndexes</code> the following:</p>
    <pre><code class="lang-js"><span class="hljs-keyword">const</span> topEdge = index &lt; <span class="hljs-built_in">width</span>;
            <span class="hljs-keyword">const</span> bottomEdge = index &gt;= boardSize - <span class="hljs-built_in">width</span>;
            </code></pre>
    <p>The right and left edges will also be kind of paired so let&#39;s look at the numbers for our 10x10 grid:</p>
    <pre><code><span class="hljs-symbol">Left:</span> <span class="hljs-number">0</span>, <span class="hljs-number">10</span>, <span class="hljs-number">20</span>, <span class="hljs-number">30</span>, <span class="hljs-number">40</span>, <span class="hljs-number">50</span>, <span class="hljs-number">60</span>, <span class="hljs-number">70</span>, <span class="hljs-number">80</span>, <span class="hljs-number">90</span>
            <span class="hljs-symbol">Right:</span> <span class="hljs-number">9</span>, <span class="hljs-number">19</span>, <span class="hljs-number">29</span>, <span class="hljs-number">39</span>, <span class="hljs-number">49</span>, <span class="hljs-number">59</span>, <span class="hljs-number">69</span>, <span class="hljs-number">79</span>, <span class="hljs-number">89</span>, <span class="hljs-number">99</span>
            </code></pre>
    <p>The &quot;ones&quot; digit of each number has the same value. This looks like multiples of 10 (and 0) and numbers
        that are each 1 off of multiples of 10. For multiples of any number we can check the <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder">modulo</a> of
        that number.</p>
    <pre><code class="lang-js"><span class="hljs-keyword">const</span> leftEdge = index % <span class="hljs-built_in">width</span> === <span class="hljs-number">0</span>;
            <span class="hljs-keyword">const</span> rightEdge = (index + <span class="hljs-number">1</span>) % <span class="hljs-built_in">width</span> === <span class="hljs-number">0</span>;
            </code></pre>
    <p>Note: Those parens in <code>rightEdge</code> are key if you are using Prettier for formatting because it loves
        autoformatting to <code>index + (1 % width)</code> which will never work how you want and only lead to
        frustration. But also because modulo comes before addition in the order of operations and the parens help give
        you control.</p>
    <p>So once these four get added we will want to change our <code>neighborIndexes</code> to include our edge checks.
        While I feel like this next part was pretty clever, clever solutions make me nervous:</p>
    <p><code>Everyone knows that debugging is twice as hard as writing a program in the first place. So if you&#39;re as clever as you can be when you write it, how will you ever debug it?</code>
        - <a href="http://www.linusakesson.net/programming/kernighans-lever/">Kernighan&#39;s lever</a></p>
    <p>We&#39;ll be changing <code>neighborIndexes</code> to be a 2D array (an array full of arrays), each inner array
        will be a pair of values being: the edge check logic and the index of that neighbor. In this case we&#39;ll also
        rename the constant to <code>neighborEdgesAndIndexes</code> though this likely still needs a better name.</p>
    <pre><code class="lang-js">const neighborEdgesAndIndexes = [
                [ !leftEdge &amp;&amp; !topEdge    , index - width - <span class="hljs-number">1</span> ],
                [ !topEdge                 , index - width     ],
                [ !rightEdge &amp;&amp; !topEdge   , index - width + <span class="hljs-number">1</span> ],
                [ !leftEdge                , index - <span class="hljs-number">1</span>         ],
                [ !rightEdge               , index + <span class="hljs-number">1</span>         ],
                [ !leftEdge &amp;&amp; !bottomEdge , index + width - <span class="hljs-number">1</span> ],
                [ !bottomEdge              , index + width     ],
                [ !rightEdge &amp;&amp; !bottomEdge, index + width + <span class="hljs-number">1</span> ],
            ];
            </code></pre>
    <p>Most of my trepidation with this constant is that it looks pretty intimidating at first glance, but I did give it
        some whitespace here to make it a little clearer what&#39;s what. What I like about it is how it gets used in
        our loop for each neighbor, because we&#39;ll be using destructuring! Instead of just <code>neighborId</code>,
        we&#39;ll have <code>shouldCheck and neighborId</code> and make it very easy to skip if we should not check.</p>
    <pre><code class="lang-js"><span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> [shouldCheck, neighborId] <span class="hljs-keyword">of</span> neighborEdgesAndIndexes) {
                <span class="hljs-keyword">if</span> (!shouldCheck) <span class="hljs-keyword">continue</span>;
                <span class="hljs-keyword">const</span> neighbor = <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">\`<span class="hljs-subst">\${neighborId}</span>\`</span>);
                <span class="hljs-keyword">if</span> (neighbor &amp;&amp; neighbor.classList.contains(<span class="hljs-string">"bomb"</span>)) {
                    count++;
                }
            }
            </code></pre>
    <p>Note: On second look, the <code>shouldCheck</code> value is a bit of a double negative how we&#39;re using it.
        Rather than all those <code>!</code>s in the arrays and the <code>!</code> in the <code>if</code>, we could
        remove all the <code>!</code>s and rename <code>shouldCheck</code> to <code>shouldNotCheck</code> or
        <code>shouldSkip</code>.
    </p>
    <p>Now with a refresh and check we should see accurate counts of pink squares when we click on the non-pink squares.
        We should check corners and edges to make sure they work as expected.</p>
    <img src="./assets/images/blog/minesweeper09.jpg"
        alt="Our Minesweeper board with a few green selected squares that show the correct counts of bombs at the edges" />
    <h3 id="add-recursive-calls-if-square-is-zero">Add recursive calls if square is zero</h3>
    <p>One of the more satisfying parts about playing minesweeper is clicking on an empty square with no bombs
        surrounding it because it then reveals all its neighbors and if those neighbors are empty then <strong>each of
            those neaighbors&#39;</strong> neighbors are revealed and then <strong>each of THOSE
            neaighbors&#39;</strong> neighbors are revealed and so on. When we see a pattern like that it&#39;s probably
        a good case for recursion!</p>
    <p>Note: Recursion can be a scary concept and in our case the recursion will be a little removed but is still there.
        One thing to remember with recursion is that we want to avoid infinite loops and thus need an exit condition.
        Luckily we already have one built in, and I&#39;ll explain below.</p>
    <p>Let&#39;s add the following chunk after the <code>for</code> loop where we increment the <code>count</code>:</p>
    <pre><code class="lang-js"><span class="hljs-keyword">if</span> (count === <span class="hljs-number">0</span>) {
                <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> [shouldCheck, neighborId] <span class="hljs-keyword">of</span> neighborEdgesAndIndexes) {
                    <span class="hljs-keyword">if</span> (!shouldCheck) <span class="hljs-keyword">continue</span>;
                    <span class="hljs-keyword">const</span> neighbor = <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">\`<span class="hljs-subst">\${neighborId}</span>\`</span>);
                    handleClick(neighbor);
                }
            }
            </code></pre>
    <p>What does this loop do? If the count for this square is 0, loop over each of its neighbors, if we should check
        them, and run <code>handleClick</code> on that neighbor. <code>handleClick</code> will check if the neighbor has
        already been clicked and if not, will run <code>checkNeighbors</code> on it. This is our recursive call:
        <code>checkNeighbors</code> will call <code>handleClick</code> on those neighbors it&#39;s checking which will
        call <code>checkNeighbors</code> which will call <code>handleClick</code> and so on until all the 0s and their
        neighbors have been clicked.
    </p>
    <p>Above I mentioned we have a buit in exit condition for our recursion, which is that in <code>handleClick</code>,
        this only calls <code>checkNeighbors</code> if the square hasn&#39;t been clicked. If it has been, then we end
        the function there. This prevents a square checking all eight of its neighbors and then those neighbors checking
        the original square that checked them causing an infinite loop.</p>
    <p>Refresh and check by clicking on a square with no pink squares around it so we can see all those 0s appear!
        Groups of 0s should now show up like little seas with continents of bombs with shores of 1s and 2s.</p>
    <img src="./assets/images/blog/minesweeper10.jpg"
        alt="Our Minesweeper board with many green selected squares showing that many squares have zero bombs next to them" />
    <h3 id="refactor-our-repeated-loops-into-own-function">Refactor our repeated loops into own function</h3>
    <p>Eagle-eyed learners will notice that we have two nearly identical loops. stepping through neighbors and doing
        something to them. The principle of <a href="https://en.wikipedia.org/wiki/Don%27t_repeat_yourself">DRY code
            (Don&#39;t repeat yourself)</a> tells us this loop should be its own function that gets called multiple
        times to make our code easier to read, debug, and develop in the future.</p>
    <p>Let&#39;s start by writing out what code is shared in both loops:</p>
    <pre><code class="lang-js"><span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> [shouldCheck, neighborId] <span class="hljs-keyword">of</span> neighborEdgesAndIndexes) {
                <span class="hljs-keyword">if</span> (!shouldCheck) <span class="hljs-keyword">continue</span>;
                <span class="hljs-keyword">const</span> neighbor = <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">\`<span class="hljs-subst">\${neighborId}</span>\`</span>);
                <span class="hljs-comment">// Some stuff we want to do to the neighbor</span>
            }
            </code></pre>
    <p>We do still want access to <code>neighborEdgesAndIndexes</code> so we should keep our new function inside
        <code>checkNeighbors</code> and I think we should declare our new function in between where we declare
        <code>neighborEdgesAndIndexes</code> and where we declare <code>count</code>:
    </p>
    <pre><code class="lang-js"><span class="hljs-keyword">const</span> doForEachNeighbor = <span class="hljs-function">(<span class="hljs-params">callBack</span>) =&gt;</span> {
                <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> [shouldCheck, neighborId] <span class="hljs-keyword">of</span> neighborEdgesAndIndexes) {
                    <span class="hljs-keyword">if</span> (!shouldCheck) <span class="hljs-keyword">continue</span>;
                    <span class="hljs-keyword">const</span> neighbor = <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">\`<span class="hljs-subst">\${neighborId}</span>\`</span>);
                    callBack(neighbor);
                }
            };
            </code></pre>
    <p>Where we want to &quot;do stuff&quot; to the neighbor, we will use a <code>callBack</code> function or one that
        we give as an argument to our new function. And when we call <code>doForEachNeighbor</code>, we will have to set
        a parameter that will accept <code>neighbor</code> as an argument in our callbacks. This is starting to sound
        like recursion again, but it really is just an oddity of callback functions.</p>
    <p>So instead of our two loops, let&#39;s replace them with:</p>
    <pre><code class="lang-js">doForEachNeighbor(<span class="hljs-function"><span class="hljs-params">(neighborObj)</span> =&gt;</span> {
                <span class="hljs-keyword">if</span> (neighborObj.classList.contains(<span class="hljs-string">"bomb"</span>)) {
                    count++;
                }
            });
            <span class="hljs-keyword">if</span> (count === <span class="hljs-number">0</span>) {
                doForEachNeighbor(<span class="hljs-function"><span class="hljs-params">(neighborObj)</span> =&gt;</span> handleClick(neighborObj));
            }
            </code></pre>
    <p>And let&#39;s break this down. First we call <code>doForEachNeighbor</code> and our anonymous callback accepts a
        <code>neighborObj</code> parameter and checks if that <code>neighborObj</code> contains a bomb class. If it
        does, it increments the count. Once that&#39;s complete, if <code>count</code> is 0, we call
        <code>doForEachNeighbor</code> again, but this time, we pass in an anonymous function that also accepts a
        <code>neighborObj</code> parameter and calls <code>handleClick</code> on that <code>neighborObj</code>.
    </p>
    <p>Like I wrote up above, refactoring means changing our code but that the functionality remains the same as before
        we changed anything. So let&#39;s refresh and check and make sure that everything is still working as before.
    </p>
    <h3 id="show-number-only-if-count-is-greater-than-0">Show number only if count is greater than 0</h3>
    <p>Now that we have the ability to show empty areas of the board with our recursive checks, let&#39;s make the board
        a little less noisy. Rather than showing <code>0</code> in squares that have no bombs as neighbors, let&#39;s
        only show the <code>count</code> if the <code>count</code> is greater than 0. So then these empty areas will
        also be visually empty and the board will be easier to look at.</p>
    <p>To do this let&#39;s cut <code>squareObj.innerHTML = \`\${count}\`;</code> from the bottom of
        <code>checkNeighbors</code>. We&#39;ll then change our <code>if (count === 0)</code> block to be:
    </p>
    <pre><code class="lang-js"><span class="hljs-keyword">if</span> (count &gt; <span class="hljs-number">0</span>) {
                squareObj.innerHTML = \`<span class="javascript">\${count}</span>\`;
            } <span class="hljs-keyword">else</span> {
                doForEachNeighbor(<span class="hljs-function"><span class="hljs-params">(neighborObj)</span> =&gt;</span> handleClick(neighborObj));
            }
            </code></pre>
    <p>So now, we will only print the <code>count</code> if it actually indicates a nearby bomb and otherwise just let
        the squares be empty. This will cut down on visual overload to the player.</p>
    <p>Another bit of visual overload we can remove is our <code>index</code> values since we only needed that to write
        and debug <code>checkNeighbors</code>. So remove <code>square.innerHTML = \`\${i}\`;</code> from the
        <code>createBoard</code> function.
    </p>
    <p>When we refresh and check we should see blank squares but still be able to identify our bombs by the pink squares
        they&#39;re sitting in. Now the game should be much easier to parse. Also if the black-text-on-green-squares
        bother you, you can also add <code>color: white;</code> to the <code>.clicked</code> block in the CSS.</p>
    <img src="./assets/images/blog/minesweeper11.jpg"
        alt="Our Minesweeper boardthat only shows numbers for squares with known bomb counts of more than zero" />
    <h3 id="add-difficulty-settings">Add difficulty settings</h3>
    <p>Next it makes sense to me to add some difficulty settings to our game. Yes, this may seem early since our player
        cannot actually win yet, so why add multiple difficulties? To make testing easier too. Later when we add flags,
        20 flags are a lot to place over and over.</p>
    <p>Different implementations of the game had different settings but for a board of 100, it seems to me to make sense
        that &quot;easy&quot; have 10 bombs, &quot;medium&quot; have 20, and &quot;hard&quot; have 40. But on different
        sized boards those may be way too many or too little, so let&#39;s set this up with a ratio instead.</p>
    <p>An object make sense to store these values so instead of setting <code>bombCount</code> as <code>20</code>,
        let&#39;s declare: </p>
    <pre><code class="lang-js">const <span class="hljs-keyword">bombCount </span>= { 
            <span class="hljs-symbol">    easy:</span> <span class="hljs-keyword">boardSize </span>* .<span class="hljs-number">1</span>,
            <span class="hljs-symbol">    medium:</span> <span class="hljs-keyword">boardSize </span>* .<span class="hljs-number">2</span>,
            <span class="hljs-symbol">    hard:</span> <span class="hljs-keyword">boardSize </span>* .<span class="hljs-number">4</span> 
            }<span class="hljs-comment">;</span>
            let <span class="hljs-keyword">difficulty </span>= <span class="hljs-string">"easy"</span><span class="hljs-comment">;</span>
            </code></pre>
    <p>Now in our loop where we populate <code>squareValues</code> we&#39;ll check if
        <code>i &lt; bombCount[difficulty]</code>. Also this loop is a little odd sitting between our constants and our
        DOM elements, especially since we will want to create the array more than just on loading now. We will want to
        build this array every time we reset the game, so let&#39;s add it to the end of <code>resetGame</code>!
    </p>
    <p>If we refresh and check everything should work the same, except that when we hit reset, will will have too many
        extra squares! This is because that loop is just pushing new values into the array and the array isn&#39;t
        actually be reset to empty. We got away with this before since we were also scrambling the array with
        <code>shuffleValues</code> everytime the board was created.
    </p>
    <p>To fix this we just have to add <code>squareValues.length = 0;</code> right before the loop which effectively
        deletes all the elements in the <code>squareValues</code> array.</p>
    <p>Okay now that we have the ability to build different difficulties, let&#39;s add a way for the player to choose
        their difficulty. In the HTML (which we haven&#39;t touched in a while), lets add the following between the
        reset button and the board <code>div</code>:</p>
    <pre><code class="lang-html"><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"easy"</span>&gt;</span>Easy<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"medium"</span>&gt;</span>Medium<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"hard"</span>&gt;</span>Hard<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
            </code></pre>
    <p>Then back in our <code>js</code> file, we&#39;ll add the following after we declare <code>board</code> and
        <code>reset</code>:
    </p>
    <pre><code class="lang-js"><span class="hljs-keyword">const</span> easy = <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">"easy"</span>);
            <span class="hljs-keyword">const</span> medium = <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">"medium"</span>);
            <span class="hljs-keyword">const</span> hard = <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">"hard"</span>);
            </code></pre>
    <p>So now we have the buttons and a way to access them, so we&#39;ll write a simple function that takes in a string,
        sets the <code>difficulty</code> to that string, and immediately creates the board anew:</p>
    <pre><code class="lang-js">const setDifficultyAndReset = (<span class="hljs-keyword">difficultyStr) </span>=&gt; {
                <span class="hljs-keyword">difficulty </span>= <span class="hljs-keyword">difficultyStr;
            </span>    createBoard()<span class="hljs-comment">;</span>
            }<span class="hljs-comment">;</span>
            </code></pre>
    <p>Finally we have to call <code>setDifficultyAndReset</code> whenever those buttons are clicked: so between the
        <code>reset.addEventListener</code> and the <code>createBoard</code> call at the bottom of the <code>js</code>
        file add:
    </p>
    <pre><code class="lang-js">easy.addEventListener(<span class="hljs-string">"click"</span>, <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> setDifficultyAndReset(<span class="hljs-string">"easy"</span>));
            medium.addEventListener(<span class="hljs-string">"click"</span>, <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> setDifficultyAndReset(<span class="hljs-string">"medium"</span>));
            hard.addEventListener(<span class="hljs-string">"click"</span>, <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> setDifficultyAndReset(<span class="hljs-string">"hard"</span>));
            </code></pre>
    <p>Let&#39;s do a refresh and check to make sure that our reset button still works, we can click squares and rest as
        many times as we like. Then each of the difficulty buttons also reset the game and we can see they change the
        number of bombs (by roughly counting the pink squares).</p>
    <img src="./assets/images/blog/minesweeper12.jpg"
        alt="Our Minesweeper board alongside the reset, easy, medium, and hard difficulty buttons" />
        <h3>Finish your game!</h3>
        <p><a href="https://travissouthard.com/blog.html?post=how-to-make-minesweeper-part-3">Finish the gameplay and style the board in part 3</a>! Add the <a href="https://travissouthard.com/rss.xml" target="_blank">RSS feed</a> to your favorite RSS reader for more tutorials and blogs every Sunday!</p>
            `,
            altText:
                "Our partially done Minesweeper game with blank squares, some pink ones, and an array of buttons reading 'reset', 'easy', 'medium', and 'hard'",
            public: true,
            lastUpdated: Date.parse("Oct 15 2023"),
        },
        {
            title: "How to make Minesweeper part 3",
            siteLink: "",
            codeLink: "",
            imagePath: "./assets/images/blog/minesweeper19.jpg",
            description: `
            <h3 id="how-to-make-minesweeper-part-2">How to make Minesweeper part 3</h3>
    <p>This is the final part of this 3-part series! I recommend starting with <a href="https://travissouthard.com/blog.html?post=how-to-make-minesweeper-part-1">part 1</a> and also working through <a href="https://travissouthard.com/blog.html?post=how-to-make-minesweeper-part-2">part 2</a> before moving on
        to this one. If you have already worked through parts 1 and 2, welcome back! In the previous parts, we built a board of
        100 squares with variable amount of bombs depending on the difficulty, randomized them around the board, and gave the player ways to find those bombs. In this part we will finish the gameplay, including adding the win condition and styling the board to look nice.</p>
            <h3 id="show-all-bombs-when-one-is-clicked">Show all bombs when one is clicked</h3>
<p>Another feature of Minesweeper is that when the player clicks a bomb, we want to show them all the bombs so that they can see where they made their mistake. So in <code>handleClick</code> let&#39;s add the following to our <code>if (squareObj.classList.contains(&quot;bomb&quot;))</code> block between setting <code>isGameOver</code> to <code>true</code> and setting the clicked bomb to an explosion:</p>
<pre><code class="lang-js">const <span class="hljs-keyword">bombs </span>= document.querySelectorAll(<span class="hljs-string">".bomb"</span>)<span class="hljs-comment">;</span>
<span class="hljs-keyword">bombs.forEach((bomb) </span>=&gt; {
    <span class="hljs-keyword">bomb.innerHTML </span>= <span class="hljs-string">"💣"</span><span class="hljs-comment">;</span>
    <span class="hljs-keyword">bomb.classList.add("clicked");
</span>})<span class="hljs-comment">;</span>
</code></pre>
<p>The <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll"><code>document.querySelectorAll</code></a> method is pretty powerful. It takes a CSS selector string as an argument (e.g. <code>.clicked</code> for the clicked class, <code>p</code> for paragraph elements) and returns a <a href="https://developer.mozilla.org/en-US/docs/Web/API/NodeList"><code>NodeList</code></a> which acts <strong>kind of</strong> like an array and has many of the same methods and properties as an array like <code>.length</code> and <code>.forEach()</code>.</p>
<p>We want to use the <code>.forEach()</code> method to both set set each bomb square to show a bomb emoji and to add the &quot;clicked&quot; class for styling later. We want to add the above code <strong>before</strong> setting the square-that-was-clicked to an explosion so that we don&#39;t overwrite that explosion when we set all the bombs to bomb emojis.</p>
<p>Let&#39;s refresh and check and immediately click a bomb to see all the bombs show up and to see the one we clicked explode!</p>
<img src="./assets/images/blog/minesweeper13.jpg"
alt="Our Minesweeper board in game over mode showing all the bombs in the pink squares" />
<h3 id="add-feature-to-place-flag">Add feature to place flag</h3>
<p>Finally we can start making it so the player can actually win the game! In minesweeper, the player can click to see how many bombs are nearby. But once they think they know where a bomb is, they can right-click to place a flag. The flag tells the player where they already think bombs are and to help them no click on them. And for us, we can keep track of them later to let us know when the player has found them all!</p>
<p>But first, let&#39;s allow the player to right-click the squares at all. We&#39;ll start by adding a function after the <code>handleClick</code> function:</p>
<pre><code class="lang-js">const handlePlaceFlag = <span class="hljs-function"><span class="hljs-params">(squareObj)</span> =&gt;</span> {
    <span class="hljs-keyword">if</span> (isGameOver) <span class="hljs-keyword">return</span>;
    <span class="hljs-keyword">if</span> (!squareObj.classList.contains(<span class="hljs-string">"clicked"</span>)) {
        squareObj.innerHTML = squareObj.classList.contains(<span class="hljs-string">"flag"</span>) ? <span class="hljs-string">"🚩"</span> : <span class="hljs-string">""</span>;
        squareObj.classList.toggle(<span class="hljs-string">"flag"</span>);
    }
};
</code></pre>
<p>The above function makes sure the game is not over, makes sure the square that was right-clicked has not already been clicked, and then fills in the appropriate text and class. This function as written will add a flag if there isn&#39;t one and will remove a flag if there is one.</p>
<p>We are using a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator">ternary operator</a> to set the <code>square.innerHTML</code>. If you haven&#39;t seen these before the following phrases work the same:</p>
<pre><code class="lang-js">// With ternary operator
squareObj.<span class="hljs-attr">innerHTML</span> = squareObj.classList.contains(<span class="hljs-string">"flag"</span>) ? <span class="hljs-string">"🚩"</span> : <span class="hljs-string">""</span>;

// With <span class="hljs-keyword">if</span>/<span class="hljs-keyword">else</span>
<span class="hljs-keyword">if</span> (squareObj.classList.contains(<span class="hljs-string">"flag"</span>)) {
    squareObj.<span class="hljs-attr">innerHTML</span> = <span class="hljs-string">"🚩"</span>
} <span class="hljs-keyword">else</span> {
    squareObj.<span class="hljs-attr">innerHTML</span> = <span class="hljs-string">""</span>
}
</code></pre>
<p>Now that we have our function, we can call it with a new event listener. Add the following after the <code>click</code> event listener in <code>createBoard</code>:</p>
<pre><code class="lang-js">square.addEventListener(<span class="hljs-string">"contextmenu"</span>, <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span>
    handlePlaceFlag(square)
);
</code></pre>
<p>&quot;contextmenu&quot; is the event that is called with the player right-clicks. When we refresh and check, we can now add and remove flags whenever. Except that the actual context menu (the right-click menu) is getting in the way! We can prevent that by adding the <code>event</code> as an argument to <code>handlePlaceFlag</code>. So let&#39;s change the anonymous callback we just added to be:</p>
<pre><code class="lang-js">square.addEventListener(<span class="hljs-string">"contextmenu"</span>, <span class="hljs-function"><span class="hljs-params">(e)</span> =&gt;</span> handlePlaceFlag(e, square));
</code></pre>
<p>We don&#39;t have to call the <code>event</code> <code>e</code>, but that is a pretty established pattern that other developers will also understand. Also we do have to use the <code>e</code> argument <strong>before</strong> the <code>square</code> argument, this is an odd JavaScript thing, but it is required. Now let&#39;s add the <code>e</code> to the <code>handlePlaceFlag</code> parameters which should now look like:</p>
<pre><code class="lang-js">const handlePlaceFlag = <span class="hljs-function"><span class="hljs-params">(e, squareObj)</span> =&gt;</span> {
</code></pre>
<p>And then before anything else in the <code>handlePlaceFlag</code> function we&#39;ll add <code>e.preventDefault();</code> This is a great little <a href="https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault">method</a> that helps us stop that context menu from appearing.</p>
<p>Now another refresh and check will let us place and remove flags as much as we want. No menus in the way anymore.</p>
<img src="./assets/images/blog/minesweeper14.jpg"
alt="Our Minesweeper board showing mostly green squares as well as pink squares, some of which have flags in them" />
<h3 id="make-it-so-only-finite-flags-can-be-placed">Make it so only finite flags can be placed</h3>
<p>Now we are able to place flags, but we are able to place infinite flags. This does not make for very fun gameplay so we should limit the amount of flags to the amount of bombs on the field. This way if the player has placed 10 flags and there are 10 bombs, but they haven&#39;t won, then it lets them know that one or more of their flags are misplaced.</p>
<p>Similar to adding our difficulty levels above, let&#39;s first create a DOM element to place our number. Let&#39;s place it between the buttons and the board:</p>
<pre><code class="lang-html">&lt;<span class="hljs-selector-tag">p</span> id=<span class="hljs-string">"flagCounter"</span>&gt;Flags <span class="hljs-attribute">left</span>:&lt;/p&gt;
</code></pre>
<p>Next we&#39;ll grab with with <code>document.getElementByID</code> calling this in a similar place to our other <code>document</code> calls:</p>
<pre><code class="lang-js"><span class="hljs-keyword">const</span> flagCounter = <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">"flagCounter"</span>);
</code></pre>
<p>We want this element to update each time a flag is removed or placed and when the game updates. So we will need to have a variable that keeps track of how many flags are left, functionality to change that value when necessary, and a function to update the DOM element whenever the variable is changed.</p>
<p>Let&#39;s start by adding <code>let flagsLeft = bombCount[diffculty];</code> up in our constants and variables at the top of the JS file (It can go anywhere in that block as long as it&#39;s after both <code>bombCount</code> &amp; <code>difficulty</code>).</p>
<p>Next we&#39;ll add an <code>updateFlagCounter</code> function above our <code>resetGame</code> function:</p>
<pre><code class="lang-js"><span class="hljs-keyword">const</span> updateFlagCounter = <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
    flagCounter.innerHTML = <span class="hljs-string">\`Flags left: <span class="hljs-subst">\${flagsLeft}</span>\`</span>;
};
</code></pre>
<p>And then within <code>resetGame</code>, before we build our array of square values, we&#39;ll also reset the <code>flagsLeft</code> and update the <code>flagCounter</code>:</p>
<pre><code class="lang-js"><span class="hljs-attribute">flagsLeft</span> = bombCount[difficulty]<span class="hljs-comment">;</span>
updateFlagCounter()<span class="hljs-comment">;</span>
</code></pre>
<p>Finally, we will change our <code>handlePlaceFlag</code> logic. When the player right-clicks, a flag should only be placed if:</p>
<ul>
<li>they right click an unclicked square</li>
<li>AND there are flags left to place
And they should only be removed if that square has a flag to remove.</li>
</ul>
<p>In both scnarios we want to show the right icon in the square, add or remove the &quot;flag&quot; class, increment or decrement the <code>flagsLeft</code>, and update the <code>flagCounter</code>. But if has no flag and there are no more flags we want to do nothing. So in this case we&#39;ll actually remove the ternary operator and <code>classList.toggle</code> method and add the following in their place:</p>
<pre><code class="lang-js">if (squareObj.classList.contains(<span class="hljs-string">"flag"</span>)) {
    squareObj.innerHTML = <span class="hljs-string">""</span><span class="hljs-comment">;</span>
    squareObj.classList.remove(<span class="hljs-string">"flag"</span>)<span class="hljs-comment">;</span>
    flagsLeft++<span class="hljs-comment">;</span>
    updateFlagCounter()<span class="hljs-comment">;</span>
} else if (flagsLeft &gt; <span class="hljs-number">0</span>) {
    squareObj.innerHTML = <span class="hljs-string">"🚩"</span><span class="hljs-comment">;</span>
    squareObj.classList.<span class="hljs-keyword">add("flag");
</span>    flagsLeft--<span class="hljs-comment">;</span>
    updateFlagCounter()<span class="hljs-comment">;</span>
}
</code></pre>
<p>Now when we refresh and check, we should be able to place 10 flags anywhere but not an 11th flag. We should also be able to remove flags once they have been placed. For each addition or removal, the counter above the board should display the correct amount of flags remaining.</p>
<img src="./assets/images/blog/minesweeper15.jpg"
alt="Under our Minesweeper board's difficulty and reset buttons, is now text that reads 'Flags left: 10' and we expect the number to decrease as we add flags to the board." />
<h3 id="add-win-condition">Add win condition</h3>
<p>One last bit of functionality we need to add is the ability for the player to win the game (and for us to tell them). There are two win conditions:</p>
<ul>
<li>the player places a flag correctly on each bomb</li>
<li>the player clears all of the non-bomb spaces without hitting a bomb first?</li>
</ul>
<p>So there are two values we want to check:</p>
<ul>
<li>How many squares have both the &quot;bomb&quot; and &quot;flag&quot; classes?</li>
<li>How many squares have the &quot;clicked&quot; class</li>
</ul>
<p>So for this a great way to check the classes of the squares is to once again use <code>document.querySelectorAll()</code> to check the entire document for those values. As above, <code>document.querySelectorAll()</code> receives one argument of a CSS Selector string and returns a <code>NodeList</code> that behaves very similarly to an array. For the values we want to grab, we can use the <code>.length</code> property to figure out how many of each type we have.</p>
<p>But to make it very obvious the player has won, we&#39;ll take advantage of the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach"><code>.forEach()</code> method</a> to change the board to be fully revealed and show all the squares.</p>
<p>So we need a function that will check that at least one of our two win conditions is met and then change the board to show the player they won. Let&#39;s add a <code>checkForWin</code> function after the <code>resetGame</code> function:</p>
<pre><code class="lang-js"><span class="hljs-keyword">const</span> checkForWin = () =&gt; {
    <span class="hljs-keyword">const</span> flaggedBombsCount = <span class="hljs-built_in">document</span>.<span class="hljs-built_in">querySelectorAll</span>(<span class="hljs-string">".flag.bomb"</span>).length;
    <span class="hljs-keyword">const</span> clickedCount = <span class="hljs-built_in">document</span>.<span class="hljs-built_in">querySelectorAll</span>(<span class="hljs-string">".clicked"</span>).length;
    <span class="hljs-keyword">if</span> (
        flaggedBombsCount === bombCount[difficulty] ||
        clickedCount === boardSize - bombCount[difficulty]
    ) {
        isGameOver = <span class="hljs-keyword">true</span>;
        <span class="hljs-built_in">document</span>.<span class="hljs-built_in">querySelector</span>(<span class="hljs-string">"h1"</span>).innerHTML = <span class="hljs-string">"You win!"</span>;
        <span class="hljs-built_in">document</span>.<span class="hljs-built_in">querySelectorAll</span>(<span class="hljs-string">".bomb"</span>).forEach((b) =&gt; (b.innerHTML = <span class="hljs-string">"💣"</span>));
        <span class="hljs-built_in">document</span>
            .<span class="hljs-built_in">querySelectorAll</span>(<span class="hljs-string">"#board p"</span>)
            .forEach((p) =&gt; p.classList.add(<span class="hljs-string">"clicked"</span>));
    }
};
</code></pre>
<p>And you can see above, since we want to check for both the &quot;flag&quot; and &quot;bomb&quot; classes, we can use <code>.flag.bomb</code>, which for CSS reads as &quot;flag class AND bomb class&quot;. But then lower down since we only want to grab <code>p</code> elements that are inside the board (specifically to exclude the flag counter element), we we <code>#board p</code> which reads to CSS as &quot;paragraphs IN the board ID&quot;. I strongly recommend learning <a href="https://css-tricks.com/how-css-selectors-work/">how CSS selectors work</a> because it&#39;s pretty powerful. But also this is a <a href="https://www.w3schools.com/cssref/css_selectors.php">great CSS selector reference resource</a> for you to look through to see all the neat tricks.</p>
<p>The last thing we have to do then is to call <code>checkForWin</code> in both places where the player interacts with the board to see if that interaction won or lost the game. So well add those calls to the end of both the <code>handlePlaceFlag</code> and <code>handleClick</code> functions.</p>
<p>Now when we refresh and check we should be able to flag each bomb and trigger a win, and then reset the game and click each of the non-bomb squares and trigger a win. And now we have a fully playable Minesweeper game!</p>
<img src="./assets/images/blog/minesweeper16.jpg"
alt="Our Minesweeper board but the title text has changed to 'You win!' and the board is fully marked as clicked" />
<h3 id="style-the-board">Style the board</h3>
<p>Before we&#39;re done though we should make the game look good. We have all of our functionality together but we are still revealing where the bombs are and do want to make our game look attractive.</p>
<p>Aesthetically, I wanted to imitate some early looks of the game, but also I wanted to have a chiseled stone look similar to an old chess game my grandmother had on her computer in the late nineties.</p>
<p>Note: Like I said above, CSS invokes the fear of the ancients in many developers, but it really is a powerful thing to learn. Even if you mostly use component libraries like Bootstrap or Tailwind, understanding CSS means you will understand how those components work &quot;under the hood&quot; and how best to interact with those libraries&#39; APIs.</p>
<p>The first things we will change is to remove out current <code>.clicked</code> and <code>.bomb</code> blocks. They only existed for us to test the game with but don&#39;t really contribute to the look of the game. And now let&#39;s make our <code>#board</code> block look like:</p>
<pre><code class="lang-css"><span class="hljs-selector-id">#board</span> {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">500px</span>;
    <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span> auto;
    <span class="hljs-attribute">display</span>: flex;
    <span class="hljs-attribute">flex-flow</span>: row wrap;
    <span class="hljs-attribute">border-top</span>: <span class="hljs-number">4px</span> solid lightgray;
    <span class="hljs-attribute">border-right</span>: <span class="hljs-number">4px</span> solid gray;
    <span class="hljs-attribute">border-bottom</span>: <span class="hljs-number">4px</span> solid gray;
    <span class="hljs-attribute">border-left</span>: <span class="hljs-number">4px</span> solid lightgray;
}
</code></pre>
<p>The <code>border</code> attribute (as well as other box model striibutes like <code>padding</code>) can be broken out into its individual sides. This lets us color and size the sides individually and in this case let&#39;s us create a faux-shadow effect that looks like of like a flat-topped pyramid.</p>
<p>Next we want to style each of our squares. The squares are all <code>p</code> elements in the board so we can use the same selector we want our existing <code>#board p</code> block to look like this:</p>
<pre><code class="lang-css"><span class="hljs-selector-id">#board</span> <span class="hljs-selector-tag">p</span> {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">42px</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">42px</span>;
    <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span>;
    <span class="hljs-attribute">padding</span>: <span class="hljs-number">0</span>;
    <span class="hljs-attribute">line-height</span>: <span class="hljs-number">42px</span>;
    <span class="hljs-attribute">text-align</span>: center;
    <span class="hljs-attribute">background-color</span>: darkgray;
    <span class="hljs-attribute">border-top</span>: <span class="hljs-number">4px</span> solid lightgray;
    <span class="hljs-attribute">border-right</span>: <span class="hljs-number">4px</span> solid gray;
    <span class="hljs-attribute">border-bottom</span>: <span class="hljs-number">4px</span> solid gray;
    <span class="hljs-attribute">border-left</span>: <span class="hljs-number">4px</span> solid lightgray;
}
</code></pre>
<p>It was noted towards the beginning of the project that borders, margin, and padding add to the  width and to keep the squares only 50 pixels wide so we have to subtract both sides&#39; border and  from the <code>width</code> and <code>line-height</code>. In this case the borders will also give a faux-shadow look for each of the squares.</p>
<p>Finally we want to re-add a <code>.clicked</code> block to show a clear difference when the squares are clicked. So let&#39;s add a <code>#board .clicked</code> block:</p>
<pre><code class="lang-css"><span class="hljs-selector-id">#board</span> <span class="hljs-selector-class">.clicked</span> {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">50px</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">50px</span>;
    <span class="hljs-attribute">border</span>: none;
}
</code></pre>
<p>So now when we refresh and check, the board should appear like raised stone except when we click on a square and then clicked squares should appear flat. Also this is the first time we&#39;re seeing the game as a fully-working game where you aren&#39;t shown where all the bombs are at the start. So now is a good time to test the game and check over how it&#39;s playing in full.</p>
<img src="./assets/images/blog/minesweeper17.jpg"
alt="Our Minesweeper board styled to look like cut stone with raised squares representing that they are unclicked" />
<h3 id="color-the-numbers">Color the numbers</h3>
<p>Another feature of most Minesweeper implementations is color-coding the different numbers to see the &quot;urgency&quot; of squares at a glance, but also I have a bias towards color-coding because it helps my particular way of thinking. This will require adding a little more JavaScript to set those colors with more classes.</p>
<p>So back in our <code>app.js</code> file, let&#39;s add a little extra code to our <code>checkNeighbors</code> function starting with a new constant after the <code>neighborEdgesAndIndexes</code>:</p>
<pre><code class="lang-js"><span class="hljs-attribute">const numberClasses</span> = [
    <span class="hljs-string">"one"</span>,
    <span class="hljs-string">"two"</span>,
    <span class="hljs-string">"three"</span>,
    <span class="hljs-string">"four"</span>,
    <span class="hljs-string">"five"</span>,
    <span class="hljs-string">"six"</span>,
    <span class="hljs-string">"seven"</span>,
    <span class="hljs-string">"eight"</span>,
];
</code></pre>
<p>Then at the bottom inside our <code>if (count &gt; 0)</code> block, we will add <code>squareObj.classList.add(numberClasses[count - 1]);</code>. CSS classes don&#39;t like to start with numbers so we want to manually set the classes with the number words instead. Once we&#39;ve set these classes we can update our CSS:</p>
<pre><code class="lang-css"><span class="hljs-selector-class">.one</span> {
    <span class="hljs-attribute">color</span>: blue;
}

<span class="hljs-selector-class">.two</span> {
    <span class="hljs-attribute">color</span>: green;
}

<span class="hljs-selector-class">.three</span> {
    <span class="hljs-attribute">color</span>: yellow;
}

<span class="hljs-selector-class">.four</span> {
    <span class="hljs-attribute">color</span>: darkorange;
}

<span class="hljs-selector-class">.five</span> {
    <span class="hljs-attribute">color</span>: red;
}

<span class="hljs-selector-class">.six</span> {
    <span class="hljs-attribute">color</span>: purple;
}

<span class="hljs-selector-class">.seven</span> {
    <span class="hljs-attribute">color</span>: pink;
}

<span class="hljs-selector-class">.eight</span> {
    <span class="hljs-attribute">color</span>: blue;
}
</code></pre>
<p>When we refresh and check the game, if we find as many number as we can we can see the different number colors. The top half of the numbers are pretty rare, but you can also edit the classes in the Elements inspector so that you can check the different classes are working (and whether or not you like the colors.)</p>
<img src="./assets/images/blog/minesweeper18.jpg"
alt="Our Minesweeper board with blue 1s and green 2s to help differentiate them and make them easier to read" />
<h3 id="finish-styling-rest-of-game">Finish styling rest of game</h3>
<p>Now we have a pretty well put together game and just need to add some polish. To better accomplish this, we&#39;ll rearrange our HTML a little bit:</p>
<pre><code class="lang-html"><span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">header</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>Minesweeper<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">nav</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"reset"</span>&gt;</span>Reset<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"easy"</span>&gt;</span>Easy<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"medium"</span>&gt;</span>Medium<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"hard"</span>&gt;</span>Hard<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"flagCounter"</span>&gt;</span>Flags left:<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">nav</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">header</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">main</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"board"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">main</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"app.js"</span>&gt;</span><span class="undefined"></span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
</code></pre>
<p>Now we have some specific elements to grab and arrange better. Next we&#39;ll change our CSS file to look like:</p>
<pre><code class="lang-css"><span class="hljs-selector-pseudo">:root</span> {
    <span class="hljs-attribute">--highlight</span>: <span class="hljs-built_in">rgba</span>(255, 255, 255, 0.5);
    <span class="hljs-attribute">--lowlight</span>: <span class="hljs-built_in">rgba</span>(0, 0, 0, 0.3);
}

<span class="hljs-selector-tag">html</span> {
    <span class="hljs-attribute">font-family</span>: monospace;
    <span class="hljs-attribute">background-color</span>: lightgray;
}

<span class="hljs-selector-tag">header</span> {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">492px</span>;
    <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span> auto;
    <span class="hljs-attribute">border-top</span>: <span class="hljs-number">8px</span> solid <span class="hljs-built_in">var</span>(--highlight);
    <span class="hljs-attribute">border-right</span>: <span class="hljs-number">8px</span> solid <span class="hljs-built_in">var</span>(--lowlight);
    <span class="hljs-attribute">border-bottom</span>: <span class="hljs-number">8px</span> solid <span class="hljs-built_in">var</span>(--lowlight);
    <span class="hljs-attribute">border-left</span>: <span class="hljs-number">8px</span> solid <span class="hljs-built_in">var</span>(--highlight);
}

<span class="hljs-selector-tag">h1</span> {
    <span class="hljs-attribute">text-align</span>: center;
}

<span class="hljs-selector-tag">nav</span> {
    <span class="hljs-attribute">display</span>: flex;
    <span class="hljs-attribute">flex-flow</span>: row nowrap;
    <span class="hljs-attribute">justify-content</span>: space-around;
    <span class="hljs-attribute">width</span>: <span class="hljs-number">476px</span>;
    <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span> auto;
    <span class="hljs-attribute">padding</span>: <span class="hljs-number">8px</span>;
}

<span class="hljs-selector-tag">nav</span> <span class="hljs-selector-tag">button</span> {
    <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">0</span>;
    <span class="hljs-attribute">background-color</span>: transparent;
    <span class="hljs-attribute">border-top</span>: <span class="hljs-number">4px</span> solid <span class="hljs-built_in">var</span>(--highlight);
    <span class="hljs-attribute">border-right</span>: <span class="hljs-number">4px</span> solid <span class="hljs-built_in">var</span>(--lowlight);
    <span class="hljs-attribute">border-bottom</span>: <span class="hljs-number">4px</span> solid <span class="hljs-built_in">var</span>(--lowlight);
    <span class="hljs-attribute">border-left</span>: <span class="hljs-number">4px</span> solid <span class="hljs-built_in">var</span>(--highlight);
}

<span class="hljs-selector-tag">nav</span> <span class="hljs-selector-tag">button</span><span class="hljs-selector-pseudo">:hover</span> {
    <span class="hljs-attribute">background-color</span>: <span class="hljs-built_in">var</span>(--lowlight);
}

<span class="hljs-selector-tag">nav</span> <span class="hljs-selector-tag">button</span><span class="hljs-selector-pseudo">:active</span> {
    <span class="hljs-attribute">border-top</span>: <span class="hljs-number">4px</span> solid <span class="hljs-built_in">var</span>(--lowlight);
    <span class="hljs-attribute">border-right</span>: <span class="hljs-number">4px</span> solid <span class="hljs-built_in">var</span>(--highlight);
    <span class="hljs-attribute">border-bottom</span>: <span class="hljs-number">4px</span> solid <span class="hljs-built_in">var</span>(--highlight);
    <span class="hljs-attribute">border-left</span>: <span class="hljs-number">4px</span> solid <span class="hljs-built_in">var</span>(--lowlight);
}

<span class="hljs-selector-class">.one</span> {
    <span class="hljs-attribute">color</span>: blue;
}
<span class="hljs-selector-class">.two</span> {
    <span class="hljs-attribute">color</span>: green;
}
<span class="hljs-selector-class">.three</span> {
    <span class="hljs-attribute">color</span>: yellow;
}

<span class="hljs-selector-class">.four</span> {
    <span class="hljs-attribute">color</span>: darkorange;
}

<span class="hljs-selector-class">.five</span> {
    <span class="hljs-attribute">color</span>: red;
}
<span class="hljs-selector-class">.six</span> {
    <span class="hljs-attribute">color</span>: purple;
}
<span class="hljs-selector-class">.seven</span> {
    <span class="hljs-attribute">color</span>: pink;
}
<span class="hljs-selector-class">.eight</span> {
    <span class="hljs-attribute">color</span>: blue;
}
<span class="hljs-selector-id">#board</span> {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">500px</span>;
    <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span> auto;
    <span class="hljs-attribute">display</span>: flex;
    <span class="hljs-attribute">flex-flow</span>: row wrap;
    <span class="hljs-attribute">cursor</span>: pointer;
    <span class="hljs-attribute">border-top</span>: <span class="hljs-number">4px</span> solid <span class="hljs-built_in">var</span>(--highlight);
    <span class="hljs-attribute">border-right</span>: <span class="hljs-number">4px</span> solid <span class="hljs-built_in">var</span>(--lowlight);
    <span class="hljs-attribute">border-bottom</span>: <span class="hljs-number">4px</span> solid <span class="hljs-built_in">var</span>(--lowlight);
    <span class="hljs-attribute">border-left</span>: <span class="hljs-number">4px</span> solid <span class="hljs-built_in">var</span>(--highlight);
}

<span class="hljs-selector-id">#board</span> <span class="hljs-selector-tag">p</span> {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">42px</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">42px</span>;
    <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span>;
    <span class="hljs-attribute">padding</span>: <span class="hljs-number">0</span>;
    <span class="hljs-attribute">line-height</span>: <span class="hljs-number">42px</span>;
    <span class="hljs-attribute">text-align</span>: center;
    <span class="hljs-attribute">border-top</span>: <span class="hljs-number">4px</span> solid <span class="hljs-built_in">var</span>(--highlight);
    <span class="hljs-attribute">border-right</span>: <span class="hljs-number">4px</span> solid <span class="hljs-built_in">var</span>(--lowlight);
    <span class="hljs-attribute">border-bottom</span>: <span class="hljs-number">4px</span> solid <span class="hljs-built_in">var</span>(--lowlight);
    <span class="hljs-attribute">border-left</span>: <span class="hljs-number">4px</span> solid <span class="hljs-built_in">var</span>(--highlight);
}

<span class="hljs-selector-id">#board</span> <span class="hljs-selector-tag">p</span><span class="hljs-selector-pseudo">:active</span> {
    <span class="hljs-attribute">border-top</span>: <span class="hljs-number">4px</span> solid <span class="hljs-built_in">var</span>(--lowlight);
    <span class="hljs-attribute">border-right</span>: <span class="hljs-number">4px</span> solid <span class="hljs-built_in">var</span>(--highlight);
    <span class="hljs-attribute">border-bottom</span>: <span class="hljs-number">4px</span> solid <span class="hljs-built_in">var</span>(--highlight);
    <span class="hljs-attribute">border-left</span>: <span class="hljs-number">4px</span> solid <span class="hljs-built_in">var</span>(--lowlight);
}

<span class="hljs-selector-id">#board</span> <span class="hljs-selector-class">.clicked</span> {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">50px</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">50px</span>;
    <span class="hljs-attribute">border</span>: none;
}

<span class="hljs-selector-id">#board</span> <span class="hljs-selector-class">.clicked</span><span class="hljs-selector-pseudo">:active</span> {
    <span class="hljs-attribute">border</span>: none;
}
</code></pre>
<p>And we&#39;ll go through what that changes from top to bottom. If you refresh and check, you can see the changes as you read about them below: </p>
<p>At the very top with the <code>:root</code> block we set some custom colors that add a somewhat transparent highlight or shadow to the borders instead of using <code>lightgray</code> and <code>gray</code>. That transparency will also help later if we want to set different background colors to the game.</p>
<p>Speaking of in the <code>html</code> block we set a new <code>background-color</code> attribute. Doing so at this level sets that color for the whole page (with some exceptions, elements have a <code>transparent</code> background by default). Also you can change the <code>background-color</code> to any color you like and the board will now still create realistic(-ish) looking shadows since the custom colors are just lightly-transparent white and black. Try some colors out!</p>
<p>Next we add a <code>header</code> block to get the page&#39;s header to match the decor of the game board. The notable change here is that we are using the <code>var()</code> function to set our custom colors from the <code>:root</code> block.</p>
<p>Now we move on to the <code>nav</code> where we want to use Flexbox to arrange the buttons as a row with space around them. The buttons are one of those rare elements that come with some default styling. So to get them to match the styling pattern we&#39;ve been using so far, we have to undo the <code>border-radius</code> &amp; <code>background-color</code>. The other attribute that has a default is the <code>border</code>, but we want to style that anyway so that&#39;s taken care of.</p>
<p>The buttons have some <code>:hover</code> and <code>:active</code> state defaults as well. But also if we switch the colors of the border segments while the player is clicking (aka: the element is <code>:active</code>), the shadow appears to invert creating an illusion that the button is now concave. We&#39;ll also visit these with the squares in a second.</p>
<p>Most of the rest of the changes are switching the border colors to use the custom colors and use the transparency that comes with them. Notably we also are adding an <code>:active</code> state to the squares that also invert the border colors and help make the squares look &quot;pressed in&quot; when the player clicks on them. </p>
<p>And finally the last change here is to set an <code>:active</code> state for the <code>.clicked</code> squares that takes away the <code>border</code> so that there is no difference than the regular <code>.clicked</code> squares. If the player clicks a square that is otherwise unclickable, but responds as if it should be doing something that will confuse the player.</p>
<img src="./assets/images/blog/minesweeper19.jpg"
alt="Our fully done Minesweeper game with styling to make it look like cut stone."/>
<h3 id="conclusion">Conclusion</h3>
<p>We have a fully working game built entirely in native web tooling. This is just a static page that takes very little data to store or run (about 78 kilobytes as built here)! Web pages are pretty powerful and (while sometimes opaque or obtuse) the JavaScript and CSS can do a lot with very little.</p>
<p>Lately I have found myself interested in <a href="https://permacomputing.net/">permacomputing principles</a> and one of the principles is to <a href="https://permacomputing.net/Principles/">&quot;Keep it small&quot;</a>. Making pages smaller also helps users use less resources to play your games or visit your sites, and to put less burdern on the user to &quot;keep up&quot; with system requirements for more and more complex games and sites. As I continue building out more tutorials, this is going to be a driving part of how I design projects. Small games like this will be similarly complex, but even more complex works will be designed to use as few dependencies and power as possible.</p>
<p>Thanks for following along with this tutorial! Find more of my projects and writing at <a href="https://travissouthard.com/">my portfolio</a> and <a href="https://travissouthard.com/blog/">blog</a>.</p>

            `,
            altText:
                "Our fully done Minesweeper game with styling to make it look like cut stone.",
            public: true,
            lastUpdated: Date.parse("Oct 22 2023"),
        },
        {
            title: "Smaller code and bigger plans",
            siteLink: "",
            codeLink: "",
            imagePath: "./assets/images/blog/ruby-beach.jpg",
            description: `
            <p>
                Over the past few weeks I have released a tutorial to make the classic video game, Minesweeper, from scratch
                using native web tools (being HTML, CSS, and Javascript). (Check out parts <a 
                    href="./blog.html?post=how-to-make-minesweeper-part-1" target="_blank">1</a>, <a 
                    href="./blog.html?post=how-to-make-minesweeper-part-2" target="_blank">2</a>, & <a 
                    href="./blog.html?post=how-to-make-minesweeper-part-3" target="_blank">3</a>!) I was motivated to write tutorials in general to help
                new developers bridge the gap between what they currently know and what they need to know to get a job
                developing code. The other half of that motivation is to help me become a better developer by teaching.
            </p>
            <p>
                I chose to write tutorials about native web tools because developers do need to know what the browser is
                actually reading and rendering and why it does what it does. Part of this is that frameworks and libraries
                compile down to HTML, CSS, and Javascript, so developers should be aware of what is happening 'under the hood.' I
                was taught to try to be aware of how the tech is working at least one or two layers down to ensure my code will
                behave how I want it to. The other part of that motivation has been feeling more and more that we should be
                delivering smaller websites to end users.
            </p>
            <p>
                I have been reading a lot of work around <a href="http://permacomputing.net/"
                    target="_blank">permacomputing</a>, <a href="https://solar.lowtechmagazine.com/" target="_blank">more
                    sustainable technology</a>, and <a
                    href="https://bookshop.org/p/books/the-digital-closet-how-the-internet-became-straight-alexander-monea/17170660?ean=9780262545952"
                    target="_blank">making the web better for
                    people</a>, including <a href="https://abookapart.com/products/you-deserve-a-tech-union"
                    target="_blank">developers</a>. And one of the easiest ways I can do that as a developer is to write my
                own code that is easier on both storage and compute power and also to encourage others to do the same. One of
                <a href="http://permacomputing.net/Principles/" target="_blank">permacomputing's principles</a> is to "Keep
                it small" since:
            </p>
            <blockquote>
                Small systems are more likely to have small hardware and energy requirements, as well as high understandability.
                They are easier to understand, manage, refactor and repurpose. -<a href="http://permacomputing.net/Principles/"
                    target="_blank">Permacomputing Principles page</a>
            </blockquote>
            <p>
                There's certainly more to permacomputing and sustainability than just making things smaller, and there is also a
                <a href="https://en.wikipedia.org/wiki/Code_golf" target="_blank">"code golf"</a> tradeoff where the code
                becomes so small that it makes it harder to understand and thus will be harder to maintain. This blog and my
                portfolio site in general are built as just a static webpage and the only library I'm using is JQuery, though it
                could be rewritten in vanilla Javascript. Granted, there are downsides to this setup: one is that I cannot tell how many
                people are visiting the site unless they tell me directly. For now this is fine since I am writing these for fun
                and practice more than relying on them for any sort of income just yet.
            </p>
            <p>
                Along the lines of not knowing who is reading, I have no plans to track readers ever. User tracking is
                creepy and invasive. I personally use tools to protect my privacy as much as I can, and I recommend you do too.
                At some point, I will want to know how many times posts are being read (and if possible how many unique readers,
                if there is a non-tracking way to do that). I currently have the site and blog hosted on GitHub Pages, which is
                easy to use and free. But to start seeing some readership numbers, I would have to set up my own server. I would
                like to do this anyway to improve how I'm coding the different posts, to fulfill my own DIY desires, and to take
                more control over my work and the resources it uses.
            </p>
            <p>
                In the meantime, I am reasonably happy with this site. It serves my need of having a consistent site for software
                projects, pixel art, and blog posts. One of my <code>TODOs</code> is to create a <code>resume.html</code> page
                with a list of all my past jobs and download link for <a
                    href="./assets/travis_southard_software_engineer_resume.pdf" target="_blank">the PDF</a>. If you enjoy what
                I'm building here, please consider <a href="https://ko-fi.com/travissouthard">supporting my work</a> to help me
                make more tutorials, blogs, pixel art, and everything.
            </p>
            `,
            altText: "Ruby standing on an autumn beach on her birthday weekend",
            public: true,
            lastUpdated: Date.parse("Oct 29 2023"),
        },
        {
            title: "Season of Change",
            siteLink: "",
            codeLink: "",
            imagePath: "./assets/images/blog/wiss-fall.jpg",
            description: `
            <p>
                Autumn is in full show here in Philadelphia, at least up in the Northwest of Philly where I now live. The colors
                are a great time to reflect on the passage of time. It being the weekend daylight savings ends is also a big
                hint that time is always changing, even if only arbitrarily.
            </p>
            <p>
                I am grateful to see the leaves change like this and for consistent access to more trees in general than I had
                experienced in South Philly. Despite being much closer to the Wissahickon park, I still don't go there often
                enough (at least not as often as I'd like to). I also appreciate the irony that as a teenager, I completely took
                for granted the massive forests around me in Northeast PA, but mostly because I wanted to be closer to my
                friends.
            </p>
            <p>
                I've gone through a lot of changes to my daily life this year: My employer got acquired, the new employer laid
                me off, I am
                joining the <a href="https://codeforphilly.org/" target="_blank">Code for Philly</a> leadership team, and <a
                    href="https://spokesandstitches.com/" target="_blank">Ruby is kicking up her business again</a>! I'm still
                expecting more changes to my daily life before the end of the year.
            </p>
            <p>
                Changes can be very hard, and many people are resistant to them. I had to learn to weather changes as a child
                who attended at least one new school every year until the sixth grade. Then in my late teens and early twenties
                I welcomed changes to help get me into better places. When I can afford to, I also bring on daily changes as
                recreation in the form of bike tours. Each day is a different ride to a different place and I rarely wake up in
                the same place twice on those trips. I even <a
                    href="https://www.instagram.com/explore/tags/ridealongecg/">planned a trip</a> in 2019 along the <a
                    href="https://www.greenway.org/">East Coast Greenway</a> to follow the beginning of the changing leaves that
                year.
            </p>
            <p>
                A huge change for me in the last year was buying a house with Ruby. What's especially wild about that is that we
                effectively signed up to be involved with this one house and piece of land for thirty years! Granted, we don't
                <em>have</em> to stay here for thirty years if we don't want, but a mortgage is still on that <em>scale</em> of
                financial planning. And for most future plans, selling this house would lead to buying another.
            </p>
            <p>
                This is often a "stage" of American life where a person really wants to stop changes. They want to keep their
                neighborhood exactly like it was when they bought their home. But I try to remember change is inevitable.
                Planets and stars continue moving through space. Water pulls mountains down towards oceans. Winds push leaves
                and seeds off plants. I hope I can continue to take on changes with grace and never try to lock my life in
                place.
            </p>
            <p>
                I still don't feel ready for winter, but there is certainly still time to prepare. And arguably, that is the
                purpose of a transitional time like the fall to help us get ready for the cold and dark. That we can slowly
                approach the hard things and steel ourselves to them as they creep closer. I tend to be an optimist and one way
                that hurts me is that I spend most of the winter just looking ahead to springtime rather than embracing what
                winter has to offer.
            </p>
            <p>
                This year I want to commit to changing my approach to winter: To use the inside time to improve my engineering
                and my art. To make more time for friends to get together. To take advantage of the slowed plant growth to
                prepare an overgrown lot to become a garden. To spend time decorating my house. This winter I want to resist
                hibernating.
            </p>
            `,
            altText:
                "The Wissahickon Creek flowing from around the corner through orange leaved tees that have dropped about 20% of their leaves",
            public: true,
            lastUpdated: Date.parse("Nov 5 2023"),
        },
        {
            title: "A personal financial project",
            siteLink: "",
            codeLink:
                "https://github.com/travissouthard/travissouthard.github.io/tree/master/snowball",
            imagePath: "./assets/images/projects/debt-snowball.png",
            description: `
            <p>
                Earlier this year <a href="https://travissouthard.com/snowball/index.html" target="_blank">I built a project</a>
                that came from a personal need. I have three student loans from my time at University of the Arts, my time at
                Temple University, and my coding bootcamp. My spouse Ruby has her own loans from undergraduate and graduate
                school. We also share a mortgage on our home. I have been exploring different options to ideally pay down these
                debts early and save both money on interest and time for ourselves in the future with less debt payment burden.
            </p>
            <p>
                As part of my research, the most personally compelling plan I found is called the <a
                    href="https://en.wikipedia.org/wiki/Debt_snowball_method" target="_blank">debt snowball plan</a>. The
                essence of the plan is:
            </p>
            <ul>
                <li>Order your debts from smallest to largest by remaining principle on each loan.</li>
                <li>Pay only the minimums on each loan.</li>
                <li>Optionally if you are able and want to pay extra to accelerate the process, only apply the extra amount to
                    the smallest loan’s monthly payments.</li>
                <li>Once the smallest is paid off, take what you were paying each month and add that to the monthly payment of
                    the next smallest plan.</li>
                <li>Repeat the last step until all of your debts are paid off.</li>
            </ul>
            <p>
                What is nice about this plan is that, unless you are adding extra each month to accelerate the plan, the amount
                you pay towards your debts each month stays the same. Arguably this is also a drawback, since the monthly
                payment burden stays the same, even as debts are resolved. I am not a financial expert but appreciate the
                simplicity and effectiveness of this plan. There are similar approaches like the debt avalanche, which works
                similarly except that the first step is to order the debts from highest interest rate to lowest. My
                understanding is that while also effective, the avalanche is slower overall, but especially slower to start
                feeling the benefits of paying off the first debt in the sequence.
            </p>
            <p>
                For our situation, without going too deeply into our personal finances, following this plan would allow us to
                pay off our student loans a few years early. However, the much bigger effect is that our mortgage would be paid
                off about 14 years earlier than the 30 years our mortgage is planned for. If all goes to plan, this would save
                us a lot in interest and dramatically cut down our living expenses. Granted, all our loan terms allow us to pay
                down the principal ahead of schedule, and not all loans allow this (although they absolutely should). You should
                check your terms on your loans before making any plans.
            </p>
            <p>
                Now that I understood this plan, I wanted to show Ruby how this may benefit us, but needed a way to show her how
                it works. There are many debt snowball calculators, and most have great written descriptions, but almost none of
                the ones I came across had any sort of chart showing how the plan is paid off over time. I am always one to make
                a plan with a spreadsheet (including vacation plans) and my favorite part of any spreadsheet is creating charts.
            </p>
            <p>
                Having charts would also help me explain the concept and benefits to Ruby, but also would help me visualize for
                myself the differences between different plans and also continuing to pay the minimums. Faced with a serious
                dearth of charts amongst the existing resources, I did what all engineers do when faced with a missing tool: I
                began to build it myself.
            </p>
            <p>
                To build this out I had to do some research on <a href="https://en.wikipedia.org/wiki/Amortizing_loan"
                    target="_blank">how loans, interest, and amortization work</a> at a more detailed level than I had really
                thought about since learning about complex and simple interest in high school math classes. I started with a
                spreadsheet for myself, but quickly realized that what I wanted was a webpage. I found it much easier to create
                loops and recursive functions with JavaScript than with spreadsheet macros. Besides, if I was looking for debt
                snowball charts, others likely were too, so once I had a complete site, I could share it publicly as well. You
                should <a href="https://travissouthard.com/snowball/index.html" target="_blank">try it out</a> and see if a plan
                like this might work for you.
            </p>
            <p>
                I built this early on in my learnings about <a href="http://permacomputing.net/"
                    target="_blank">permacomputing</a> and <a href="./blog.html?post=smaller-code-and-bigger-plans"
                    target="_blank">building out smaller websites</a> with just HTML, CSS, and JavaScript. I wanted to lean on
                and design around the HTML tags as they exist. I think I did an okay job with this but some of the parts of how
                this is built go against some of my better design sensibilities.
            </p>
            <p>
                In particular, I think the site uses too much text without intentional visual hierarchy and too little color to
                help orient a person to what to use or read first. I do still think this project works but I learned some things
                about designing a project from scratch and would like to revisit the aesthetics of this project sometime.
                Overall, I am still happy with how it came out for a weekend project. Plus, I do still use this to occasionally
                to recheck my own financial plans as our life and the world around us changes.
            </p>
            <p>
                Excitingly, we have our snowball rolling down the hill and are just this week starting to see it picking up some
                momentum. My loans from my time at UArts were fully paid off at the beginning of this month and I was able to use
                what I was paying towards that and put it towards my boot camp loan payments. It feels wonderful so far and I look
                forward to completing this plan.
            </p>
            `,
            altText:
                "A screenshot of the debt snowball chart showing the paydown of the debts compared to the traditional payment plan",
            public: true,
            lastUpdated: Date.parse("Nov 12 2023"),
        },
    ],
    resume: [
        {
            title: "Software Engineer",
            company: "Brooksource",
            coLink: "https://www.brooksource.com/",
            start: Date.parse("1 Jul 2023"),
            end: Date.parse("1 Dec 2023"),
            location: "Philadelphia, PA",
            description:
                "Worked as a consultant full time at Comcast helping to build and launch the Iris tool built in Node.js, Express.js, MongoDB, Unity, and Angular.",
        },
        {
            title: "Junior Software Engineer",
            company: "Element 84",
            coLink: "https://element84.com/",
            start: Date.parse("1 Feb 2023"),
            end: Date.parse("1 May 2023"),
            location: "Philadelphia, PA",
            description:
                "Element 84 acquired Azavea. I continued to work on the Civic Applications team working on client services projects to build and maintain geospatial web applications built in React, Django, MapBoxGL, and PostGIS for governments, non-profits, and corporations.",
        },
        {
            title: "Software Engineer",
            company: "Azavea",
            coLink: "https://www.azavea.com/",
            start: Date.parse("1 Dec 2021"),
            end: Date.parse("1 Feb 2023"),
            location: "Philadelphia, PA",
            description:
                "I worked on the Civic Applications team working on client services projects to build and maintain geospatial web applications built in React, Django, MapBoxGL, and PostGIS for governments, non-profits, and corporations.",
        },
        {
            title: "Apprentice Software Engineer",
            company: "Azavea",
            coLink: "https://www.azavea.com/",
            start: Date.parse("1 May 2021"),
            end: Date.parse("1 Dec 2021"),
            location: "Philadelphia, PA",
            description:
                "Spent 6 months with a mentor extending my knowledge of React, Django, and geospatial tools like PostGIS and MapboxGL.js with reading materials, hands-on 'breakable toy' projects, as well as independent and supervised client work. Besides my mentor, I also worked with a small cohort of two other apprentices sharing what we worked on each bi-weekly sprint and helping to bridge each other's skillsets.",
        },
        {
            title: "Junior Front End Engineer",
            company: "Urality",
            coLink: "https://www.urality.com/",
            start: Date.parse("1 Feb 2021"),
            end: Date.parse("1 May 2021"),
            location: "Philadelphia, PA",
            description:
                "Built new features for and maintained a community mapping and digital placemaking web application and content management system using React Hooks, Bootstrap, MapboxGL, and various NPM modules.",
        },
        {
            title: "Shop Manager",
            company: "Cycles PHL",
            coLink: "",
            start: Date.parse("1 Apr 2017"),
            end: Date.parse("1 Jan 2021"),
            location: "Philadelphia, PA",
            description:
                "Repaired and sold bicycles in a community-oriented shop in North Philadelphia. We also provided adult camping programming and fix-your-own-bike workshops. Our shop catered to local neighbors and university students. I worked on bicycles, kept the shop in order, and ran programming like our Cycles Campout overnight camping trips and Bike Salon, our do it yourself repair program. We helped adults and youth alike keep rolling and to enjoy their bikes.",
        },
        {
            title: "Software Engineering Immersive Fellow",
            company: "General Assembly",
            coLink: "https://generalassemb.ly/",
            start: Date.parse("1 May 2020"),
            end: Date.parse("1 Aug 2020"),
            location: "Philadelphia, PA",
            description:
                "Learning frontend and backend programming alongside frameworks and languages like Javascript, jQuery, React, Python, and MongoDB. Building and deploying a portfolio of functional projects that all address various needs.",
        },
        {
            title: "Video Producer",
            company: "Freelance",
            coLink: "https://www.youtube.com/playlist?list=PL8hP1JY9f2dh7vnCpoVDSIknMWIk4s55H",
            start: Date.parse("1 Oct 2013"),
            end: Date.parse("1 Apr 2020"),
            location: "Philadelphia, PA",
            description:
                "I have been making digital content like video, photography, and comics from a few different outlets. My video works have been a variety of works ranging from music videos to talk shows to fiction stories to vlogs to documentary style shorts",
        },
        {
            title: "Service Counter",
            company: "Bicycle Revolutions",
            coLink: "",
            start: Date.parse("1 Feb 2016"),
            end: Date.parse("1 Jan 2017"),
            location: "Philadelphia, PA",
            description: "",
        },
        {
            title: "Trip Leader",
            company: "Bike & Build",
            coLink: "https://bikeandbuild.org/",
            start: Date.parse("1 Dec 2015"),
            end: Date.parse("1 Aug 2016"),
            location: "Providence to Seattle",
            description:
                "I co-led a group of 29 young people on a bike tour from Providence, RI to Seattle, WA to raise money and awareness for affordable housing. We rode roughly 4000 miles, built in 13 different cities, and raised roughly $60,000 to give away in affordable housing grants.",
        },
        {
            title: "After School Program Facilitator",
            company: "CORA Services",
            coLink: "https://www.coraservices.org/",
            start: Date.parse("1 July 2012"),
            end: Date.parse("1 Feb 2016"),
            location: "Philadelphia, PA",
            description:
                "With CORA Services I worked at 3 different schools in different capacities working with a variety of students, age-groups, and lesson materials. I have worked with all grades between Kindergarten and 8th grade and have taught acting, better behavior, science lessons, photography and film lessons, a variety of crafts, and even managing a public group profile for projects with my current group. I have also helped all of my students in countless hours of homework help and different tutoring sessions.",
        },
        {
            title: "Intern",
            company: "WHYY",
            coLink: "https://whyy.org/",
            start: Date.parse("1 Sep 2015"),
            end: Date.parse("1 Jan 2016"),
            location: "Philadelphia, PA",
            description:
                "Served as a production assistant on the WHYY Friday Arts show providing field production assistance, transcribing interviews, and editing shorts and extras for the web.",
        },
        {
            title: "Rider",
            company: "Bike & Build",
            coLink: "https://bikeandbuild.org/",
            start: Date.parse("1 May 2013"),
            end: Date.parse("1 Aug 2013"),
            location: "South Carolina to Santa Cruz",
            description:
                "n the summer of 2013, I and 27 other young people crossed a continent by the power of our own legs. We saw the United States at a pace, scale, and perspective that few have or will ever have. We crossed plains and deserts, climbed hills and mountains, and built homes along the way. As a team we rode 4,250 miles through 13 states, raised $154,895 for affordable housing, ate countless peanut butter and jelly sandwiches, and built for a collective 3,584 hours with Habitat for Humanity. ",
        },
        {
            title: "Diplomas Now Team Leader",
            company: "City Year Philadelphia",
            coLink: "https://www.cityyear.org/philadelphia",
            start: Date.parse("1 Jun 2011"),
            end: Date.parse("1 Jun 2012"),
            location: "Philadelphia, PA",
            description:
                "I served as a Diplomas Now Team Leader for City Year and will lead a team in addressing the Drop-Out Crisis at a Philadelphia school. I will be in charge of tracking the data for my team, building and maintaining relationships with service partners, collaborating with a School Transformation Facilitator from the Philadelphia Education Fund and a Site Director from Communities in Schools in helping to create a beautiful environment for our students to work in and to tutor and mentor students to help make sure they are on-track and inspired to graduate high school.",
        },
        {
            title: "Corps Member",
            company: "City Year Philadelphia",
            coLink: "https://www.cityyear.org/philadelphia",
            start: Date.parse("1 Aug 2010"),
            end: Date.parse("1 Jun 2011"),
            location: "Philadelphia, PA",
            description:
                "My corps year, I served on the TEVA Pharmaceuticals Team at Thurgood Marshall Elementary. I followed a class of 8th graders from class to class providing classroom support, tutoring, behavior and attendance coaching, and helping to make sure my students had everything they needed to work hard in school. I also created and ran a project to have all the students at Marshall write letters to the President of the United States, helped to run our after school programming, played at recess with my students, and helped to organize many assemblies including a play at the end of the year.",
        },
        {
            title: "Technical Director",
            company: "Shawnee Playhouse",
            coLink: "",
            start: Date.parse("1 Dec 2009"),
            end: Date.parse("1 Apr 2009"),
            location: "Shawnee-on-Delaware, PA",
            description: "",
        },
        {
            title: "Intern",
            company: "Shawnee Playhouse",
            coLink: "",
            start: Date.parse("1 Nov 2009"),
            end: Date.parse("1 Dec 2009"),
            location: "Shawnee-on-Delaware, PA",
            description: "",
        },
        {
            title: "Server",
            company: "Siamsa Irish Pub",
            coLink: "",
            start: Date.parse("1 Oct 2008"),
            end: Date.parse("1 Aug 2009"),
            location: "Stroudsburg, PA",
            description: "",
        },
        {
            title: "Server",
            company: "Five Star Staffing",
            coLink: "",
            start: Date.parse("1 Oct 2008"),
            end: Date.parse("1 Aug 2009"),
            location: "Philadelphia, PA",
            description: "",
        },
        {
            title: "River Room Server",
            company: "Shawnee Inn and Golf Resort",
            coLink: "",
            start: Date.parse("1 Sep 2007"),
            end: Date.parse("1 Jun 2009"),
            location: "Shawnee-on-Delaware, PA",
            description: "",
        },
        {
            title: "Cabin Leader",
            company: "Brainerd Presbyterian Center",
            coLink: "",
            start: Date.parse("1 Jun 2007"),
            end: Date.parse("1 Aug 2007"),
            location: "Philadelphia, PA",
            description: "",
        },
        {
            title: "Server",
            company: "Aramark",
            coLink: "",
            start: Date.parse("1 Sep 2004"),
            end: Date.parse("1 Aug 2005"),
            location: "East Stroudsburg, PA",
            description: "",
        },
    ],
};

// Uncomment to output JSON from this
// Use with `node data.js > data.json`
console.log(JSON.stringify(data));
