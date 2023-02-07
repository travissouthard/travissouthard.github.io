const assembleProjectCard = (project) => {
  const $card = $("<div></div>").attr("class", "project-card");
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
  if (project.public) {
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

$(() => {
  const $projectsDiv = $("#projects");

  for (let project of projectData) {
    const $projectCard = assembleProjectCard(project);

    $projectsDiv.append($projectCard);
  }
});
