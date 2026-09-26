/**
 * Home (CV) page: renders featured projects, loads live GitHub stats, and
 * wires the print/download button.
 */
(function (CV) {
  "use strict";

  const GITHUB_USERNAME = "Etriii";

  function renderFeaturedProjects() {
    const container = document.querySelector("[data-featured-projects]");
    if (!container) return;

    const featured = CV.data.projects.filter((project) => project.featured);
    container.replaceChildren(...featured.map(CV.components.createProjectCard));
  }

  // Replaces the static fallback numbers with live counts when the API responds.
  async function loadGithubStats() {
    const fields = document.querySelectorAll("[data-github-stat]");
    if (!fields.length) return;

    try {
      const stats = await CV.services.github.getProfileStats(GITHUB_USERNAME);
      fields.forEach((field) => {
        const value = stats[field.dataset.githubStat];
        if (typeof value === "number") field.textContent = value.toLocaleString();
      });
    } catch (error) {
      console.warn("Using fallback GitHub stats:", error.message);
    }
  }

  function initPrintButton() {
    const button = document.querySelector("[data-print]");
    if (button) button.addEventListener("click", () => window.print());
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderFeaturedProjects();
    loadGithubStats();
    initPrintButton();
  });
})((window.CV = window.CV || {}));
