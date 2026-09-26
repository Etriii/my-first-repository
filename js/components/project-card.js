/**
 * Builds a project card element from a project record.
 */
(function (CV) {
  "use strict";

  const GITHUB_ICON =
    '<svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.26 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"/></svg>';

  const EXTERNAL_ICON =
    '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>';

  function createElement(tag, className, text) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (text) el.textContent = text;
    return el;
  }

  function createLink(href, label, iconMarkup) {
    const link = createElement("a");
    link.href = href;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.innerHTML = iconMarkup;
    link.append(label);
    return link;
  }

  function createProjectCard(project) {
    const card = createElement("article", "card project-card");

    const top = createElement("div", "project-card__top");
    top.append(createElement("span", "project-card__category", project.category));
    if (project.live) top.append(createElement("span", "chip chip--accent", "Live"));

    const techList = createElement("ul", "chip-list");
    techList.setAttribute("aria-label", "Technologies");
    project.tech.forEach((tech) => {
      const item = createElement("li");
      item.append(createElement("span", "chip", tech));
      techList.append(item);
    });

    const links = createElement("div", "project-card__links");
    links.append(createLink(project.url, "Source", GITHUB_ICON));
    if (project.live) links.append(createLink(project.live, "Live demo", EXTERNAL_ICON));

    card.append(
      top,
      createElement("h3", "project-card__title", project.title),
      createElement("p", "project-card__desc", project.description),
      techList,
      links
    );
    return card;
  }

  CV.components = CV.components || {};
  CV.components.createProjectCard = createProjectCard;
})((window.CV = window.CV || {}));
