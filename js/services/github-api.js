/**
 * Thin client for the public GitHub REST API. Responses are cached in
 * sessionStorage to stay well under the unauthenticated rate limit.
 */
(function (CV) {
  "use strict";

  const API_BASE = "https://api.github.com";
  const CACHE_PREFIX = "cv:github:";

  function readCache(key) {
    try {
      const raw = sessionStorage.getItem(CACHE_PREFIX + key);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }

  function writeCache(key, value) {
    try {
      sessionStorage.setItem(CACHE_PREFIX + key, JSON.stringify(value));
    } catch {
      // Storage may be unavailable (private mode, quota); caching is optional.
    }
  }

  async function request(path) {
    const cached = readCache(path);
    if (cached) return cached;

    const response = await fetch(API_BASE + path, {
      headers: { Accept: "application/vnd.github+json" },
    });
    if (!response.ok) {
      throw new Error(`GitHub API ${response.status} for ${path}`);
    }

    const data = await response.json();
    writeCache(path, data);
    return data;
  }

  // Returns follower, repository, and total star counts for a user.
  async function getProfileStats(username) {
    const [user, repos] = await Promise.all([
      request(`/users/${username}`),
      request(`/users/${username}/repos?per_page=100`),
    ]);

    const stars = repos
      .filter((repo) => !repo.fork)
      .reduce((total, repo) => total + repo.stargazers_count, 0);

    return {
      followers: user.followers,
      repos: user.public_repos,
      stars,
    };
  }

  CV.services = CV.services || {};
  CV.services.github = { getProfileStats };
})((window.CV = window.CV || {}));
