/**
 * Projects page: renders category filters and the filtered project grid.
 */
(function (CV) {
  "use strict";

  const state = { category: "All" };

  function getVisibleProjects() {
    if (state.category === "All") return CV.data.projects;
    return CV.data.projects.filter((project) => project.category === state.category);
  }

  function renderProjects() {
    const grid = document.querySelector("[data-project-grid]");
    const count = document.querySelector("[data-project-count]");
    const projects = getVisibleProjects();

    if (projects.length) {
      grid.replaceChildren(...projects.map(CV.components.createProjectCard));
    } else {
      const empty = document.createElement("p");
      empty.className = "empty-state";
      empty.textContent = "No projects in this category yet.";
      grid.replaceChildren(empty);
    }

    if (count) {
      count.textContent = `${projects.length} project${projects.length === 1 ? "" : "s"}`;
    }
  }

  function renderFilters() {
    const bar = document.querySelector("[data-filter-bar]");

    const buttons = CV.data.projectCategories.map((category) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "filter-btn";
      button.textContent = category;
      button.dataset.category = category;
      button.setAttribute("aria-pressed", String(category === state.category));
      if (category === state.category) button.classList.add("is-active");
      return button;
    });

    bar.replaceChildren(...buttons);
    bar.addEventListener("click", (event) => {
      const button = event.target.closest("[data-category]");
      if (!button) return;

      state.category = button.dataset.category;
      buttons.forEach((btn) => {
        const active = btn === button;
        btn.classList.toggle("is-active", active);
        btn.setAttribute("aria-pressed", String(active));
      });
      renderProjects();
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderFilters();
    renderProjects();
  });
})((window.CV = window.CV || {}));
