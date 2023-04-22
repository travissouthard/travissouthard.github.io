const assembleBlogPost = (blog) => {
  const pubDate = new Date(blog.lastUpdated);
  const $blogPost = $("<article></article>").attr("class", "blog-post");
  const $title = $(`<h3>${blog.title}</h3>`);
  const $dateLine = $(`<h5>Last updated: ${pubDate.toDateString()}</h5>`);
  const blogHtml = $.parseHTML(blog.description);

  $blogPost.append($title);
  $blogPost.append($dateLine);
  $blogPost.append(blogHtml);

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
    $("<a>Visit Site</a>").attr({ href: project.siteLink, target: "_blank" })
  );
  if (project.public && project.codeLink) {
    $projectText.append(" | ");
    $projectText.append(
      $("<a>See code</a>").attr({ href: project.codeLink, target: "_blank" })
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

const fillOutBlogSection = (blogs, choice = null) => {
  if (choice === null) choice = blogs.length - 1;
  const orderedBlogs = sortArrayByDate(blogs).reverse();
  const $blogNav = $("<ul></ul>").attr("class", "blog-nav");
  const $first = $("<li>&lt;&lt;</li>").click(() =>
    fillOutBlogSection(blogs, 0)
  );
  const $prev = $("<li>&lt;</li>").click(() =>
    fillOutBlogSection(blogs, choice - 1)
  );
  const $next = $("<li>&gt;</li>").click(() =>
    fillOutBlogSection(blogs, choice + 1)
  );
  const $last = $("<li>&gt;&gt;</li>").click(() =>
    fillOutBlogSection(blogs, blogs.length - 1)
  );

  if (choice > 0) {
    $blogNav.append($first);
    $blogNav.append($prev);
  } else {
    $blogNav.append($("<li></li><li></li>"));
  }
  if (choice + 1 < blogs.length) {
    $blogNav.append($next);
    $blogNav.append($last);
  } else {
    $blogNav.append($("<li></li><li></li>"));
  }

  const $blogSection = $("#blog");
  $blogSection.empty();
  const $chosenPost = assembleBlogPost(orderedBlogs[choice]);
  $blogSection.append($chosenPost);
  $blogSection.append($blogNav);
};

$(() => {
  const sectionData = {
    "#projects": data.projects,
    "#pixelArt": data.pixelArt,
  };

  Object.entries(sectionData).map(([key, value]) =>
    fillOutSections(key, value)
  );
  fillOutBlogSection(data.blogs);
});
