/**
 * Contact page: validates the form and hands the message off to the
 * visitor's email client, since the site has no backend.
 */
(function (CV) {
  "use strict";

  const RECIPIENT = "alexarnaizaparece@gmail.com";
  const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validators = {
    name: (value) => (value ? "" : "Please enter your name."),
    email: (value) => (EMAIL_PATTERN.test(value) ? "" : "Please enter a valid email address."),
    message: (value) => (value.length >= 10 ? "" : "Message should be at least 10 characters."),
  };

  function validate(form) {
    let valid = true;

    Object.entries(validators).forEach(([field, check]) => {
      const input = form.elements[field];
      const error = check(input.value.trim());
      const errorEl = form.querySelector(`[data-error-for="${field}"]`);

      input.setAttribute("aria-invalid", String(Boolean(error)));
      if (errorEl) errorEl.textContent = error;
      if (error) valid = false;
    });

    return valid;
  }

  function buildMailtoLink(form) {
    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();

    const subject = `CV inquiry from ${name}`;
    const body = `${message}\n\n— ${name} (${email})`;
    return `mailto:${RECIPIENT}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  function initContactForm() {
    const form = document.querySelector("[data-contact-form]");
    if (!form) return;

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!validate(form)) return;
      window.location.href = buildMailtoLink(form);
    });
  }

  document.addEventListener("DOMContentLoaded", initContactForm);
})((window.CV = window.CV || {}));
