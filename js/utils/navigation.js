/**
 * Shared page chrome: mobile menu toggle, active-section highlighting for
 * in-page links, and the footer year.
 */
(function (CV) {
  "use strict";

  function initMobileMenu() {
    const toggle = document.querySelector("[data-nav-toggle]");
    const list = document.querySelector("[data-nav-list]");
    if (!toggle || !list) return;

    const setOpen = (open) => {
      list.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
    };

    toggle.addEventListener("click", () => setOpen(!list.classList.contains("is-open")));
    list.addEventListener("click", (event) => {
      if (event.target.closest("a")) setOpen(false);
    });
  }

  // Highlights the nav link whose section is currently in view.
  function initScrollSpy() {
    const links = Array.from(document.querySelectorAll('.nav__link[href^="#"]'));
    if (!links.length || !("IntersectionObserver" in window)) return;

    const linkById = new Map(links.map((link) => [link.getAttribute("href").slice(1), link]));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          links.forEach((link) => link.classList.remove("is-active"));
          linkById.get(entry.target.id)?.classList.add("is-active");
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    linkById.forEach((_, id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
  }

  function setFooterYear() {
    document.querySelectorAll("[data-year]").forEach((el) => {
      el.textContent = new Date().getFullYear();
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initMobileMenu();
    initScrollSpy();
    setFooterYear();
  });

  CV.navigation = { initMobileMenu, initScrollSpy };
})((window.CV = window.CV || {}));
