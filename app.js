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

$(() => {
  const sectionData = {
    "#projects": data.projects,
    "#pixelArt": data.pixelArt,
  };

  Object.entries(sectionData).map(([key, value]) =>
    fillOutSections(key, value)
  );
});
