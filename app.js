const createPostSlug = (title) => {
    const justWords = title.replace(/[.,\/#!$%\^&\*;:{}=_`~()\?]/g, "");
    const wordsArr = justWords.toLowerCase().split(" ");
    return wordsArr.join("-");
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
    const $card = $("<article></article>").attr("class", "project-card");
    const $projectImage = $("<a></a>").attr({
        href: project.siteLink,
        target: "_blank",
    });
    const $projectText = $("<p></p>");

    $projectImage.append(
        $("<img>").attr({ src: project.imagePath, alt: project.altText })
    );

    $projectText.append(
        $("<a>Visit Site</a>").attr({
            href: project.siteLink,
            target: "_blank",
        })
    );
    if (project.public && project.codeLink) {
        $projectText.append(" | ");
        $projectText.append(
            $("<a>See code</a>").attr({
                href: project.codeLink,
                target: "_blank",
            })
        );
    }

    $card.append($(`<h3>${project.title}</h3>`));
    $card.append($projectImage);
    $card.append($projectText);

    return $card;
};

const sortArrayByDate = (arr) => {
    return arr.sort((a, b) => b.lastUpdated - a.lastUpdated);
};

const fillOutSections = (key, value) => {
    const $section = $(key);
    const sortedData = sortArrayByDate(value);

    for (let entry of sortedData) {
        const $card = assembleProjectCard(entry);

        $section.append($card);
    }
};

const fillOutBlogNavigation = (blogs, choice) => {
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

const fillOutBlogSection = (blogs, postSlug) => {
    const $blogSection = $("#blog");
    const orderedBlogs = sortArrayByDate(blogs).reverse();
    let choice;
    postSlug === null
        ? (choice = blogs.length - 1)
        : (choice = orderedBlogs.findIndex(
              (blog) => createPostSlug(blog.title) === postSlug
          ));

    if (choice < 0) {
        $blogSection.empty();
        $blogSection.append(
            $(
                `<article>
          <h3>404! Blog Not Found</h3>
          <h5>We can't find that blog post! Please double check your link and try again.</h5>
        </article>`
            ).attr("class", "blog-post")
        );
        return;
    }

    $blogSection.empty();

    const $chosenPost = assembleBlogPost(orderedBlogs[choice]);
    $blogSection.append(fillOutBlogNavigation(orderedBlogs, choice));
    $blogSection.append($chosenPost);
    $blogSection.append(fillOutBlogNavigation(orderedBlogs, choice));
};

$(() => {
    const sectionData = {
        "#projects": data.projects,
        "#pixelArt": data.pixelArt,
    };

    const urlParams = new URLSearchParams(window.location.search);
    const postSlug = urlParams.get("post");

    Object.entries(sectionData).map(([key, value]) =>
        fillOutSections(key, value)
    );
    fillOutBlogSection(data.blogs, postSlug);
});
