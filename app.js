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

$(() => {
  const $projectsDiv = $("#projects");
  const sortedProjects = sortArrayByDate([...data.projects, ...data.pixelArt]);

  for (let project of sortedProjects) {
    const $projectCard = assembleProjectCard(project);

    $projectsDiv.append($projectCard);
  }
});
