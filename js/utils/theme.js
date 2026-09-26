/**
 * Light/dark theme handling. Loaded in <head> so the saved theme is applied
 * before first paint; the toggle button is wired up once the DOM is ready.
 */
(function (CV) {
  "use strict";

  const STORAGE_KEY = "cv:theme";
  const root = document.documentElement;

  function getStoredTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch {
      return null;
    }
  }

  function storeTheme(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Preference simply won't persist when storage is blocked.
    }
  }

  function getPreferredTheme() {
    const stored = getStoredTheme();
    if (stored === "light" || stored === "dark") return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
  }

  function initThemeToggle() {
    const toggle = document.querySelector("[data-theme-toggle]");
    if (!toggle) return;

    toggle.addEventListener("click", () => {
      const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next);
      storeTheme(next);
    });
  }

  applyTheme(getPreferredTheme());
  document.addEventListener("DOMContentLoaded", initThemeToggle);

  CV.theme = { applyTheme };
})((window.CV = window.CV || {}));
