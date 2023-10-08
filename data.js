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
<h3>Parts 2 and 3 coming soon!</h3>
<p>Add the <a href="https://travissouthard.com/rss.xml" target="_blank">RSS feed</a> to your favorite RSS reader to get it as soon as it comes out</p>
            `,
            altText:
                "Our partially done Minesweeper game with randomly placed bombs and safe squares",
            public: true,
            lastUpdated: Date.parse("Oct 8 2023"),
        },
    ],
};

// Uncomment to output JSON from this
// Use with `node data.js > data.json`
// console.log(JSON.stringify(data));
