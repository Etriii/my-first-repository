/**
 * Project catalogue shown on the home page (featured entries) and the
 * projects page (full list). Sourced from public repositories on GitHub.
 */
(function (CV) {
  "use strict";

  const GITHUB_BASE = "https://github.com/Etriii/";

  const PROJECTS = [
    {
      title: "The Ocean View",
      repo: "IT223_resort_booking_and_management_system",
      category: "Full-Stack",
      description:
        "Web-based booking and management platform for a beach resort, replacing manual handling of reservations and resources.",
      tech: ["React", "JavaScript", "PHP"],
      featured: true,
    },
    {
      title: "ICSA Collection Management System",
      repo: "icsa_collection_management_system",
      category: "Full-Stack",
      description:
        "Team-built collection management system for ICSA, developed with Laravel and Blade templates.",
      tech: ["Laravel", "Blade", "PHP"],
      featured: true,
    },
    {
      title: "CharityFlow",
      repo: "charity-flow",
      live: "https://charity-flow.vercel.app/",
      category: "Full-Stack",
      description:
        "Transparent donation tracking platform where donors can follow the impact of each contribution. Uses lightweight JSON storage instead of a database.",
      tech: ["Next.js 14", "TypeScript"],
      featured: true,
    },
    {
      title: "Motorpool Management System",
      repo: "motorpool-management-system-frontend",
      category: "Frontend",
      description: "Vue-based frontend for a motorpool management system.",
      tech: ["Vue", "JavaScript"],
      featured: true,
    },
    {
      title: "RBAC API",
      repo: "rbac_api",
      category: "Backend",
      description:
        "Role-based access control API reused as the backend for several framework-specific admin panels.",
      tech: ["FastAPI", "Python"],
      featured: true,
    },
    {
      title: "FastAPI Throttling Middleware",
      repo: "fastapi-throttling-middleware",
      category: "Backend",
      description:
        "Rate limiting by user ID or IP address using SlowAPI with Redis as the request-window store.",
      tech: ["FastAPI", "Redis", "SlowAPI"],
      featured: true,
    },
    {
      title: "Next.js RBAC Admin Panel",
      repo: "nextjs-rbac-admin-panel",
      category: "Frontend",
      description: "Admin dashboard with role-based access control built with Next.js.",
      tech: ["Next.js", "TypeScript"],
    },
    {
      title: "FastAPI OAuth2 + JWT",
      repo: "fastapi-oauth2-jwt",
      category: "Backend",
      description: "OAuth2 password-grant authentication with JWT access tokens and hashed passwords.",
      tech: ["FastAPI", "JWT", "OAuth2"],
    },
    {
      title: "FastAPI Pagination",
      repo: "fastapi_pagination",
      category: "Backend",
      description: "Paginated REST endpoints using SQLModel on top of SQLAlchemy and Pydantic.",
      tech: ["FastAPI", "SQLModel"],
    },
    {
      title: "FastAPI Cancellation Request",
      repo: "fastapi_cancellation_request",
      category: "Backend",
      description:
        "Long-running endpoint that detects client disconnects and cancels work when a tab closes or the user navigates away.",
      tech: ["FastAPI", "asyncio"],
    },
    {
      title: "FastAPI SMTP Email Service",
      repo: "fastapi-smtp-email-service",
      category: "Backend",
      description: "Lightweight /send-email endpoint using Python's built-in smtplib for notification testing.",
      tech: ["FastAPI", "SMTP"],
    },
    {
      title: "FastAPI + Supabase",
      repo: "fastapi-supabase",
      category: "Backend",
      description: "Backend service integrating FastAPI with Supabase.",
      tech: ["FastAPI", "Supabase"],
    },
    {
      title: "Multi-Account Cloudinary Support",
      repo: "multiple-cloudinary-account-support-fastapi",
      category: "Backend",
      description: "Supports multiple Cloudinary accounts from a single FastAPI backend.",
      tech: ["FastAPI", "Cloudinary"],
    },
    {
      title: "React Cloudinary Signed Upload",
      repo: "react-cloudinary-signed",
      category: "Full-Stack",
      description:
        "React (Vite) and Express boilerplate for secure signed uploads to Cloudinary with proxy support and .env configuration.",
      tech: ["React", "Express", "Cloudinary"],
    },
    {
      title: "React Cloudinary Unsigned Upload",
      repo: "react-cloudinary-unsigned",
      category: "Frontend",
      description:
        "Reusable React upload module that sends images straight to a Cloudinary folder without exposing the API secret.",
      tech: ["React", "Cloudinary"],
    },
    {
      title: "Google OAuth 2.0 Login",
      repo: "GoogleOAuth2Login",
      category: "Frontend",
      description: "Google sign-in flow implemented with vanilla JavaScript and the Google Identity Services API.",
      tech: ["JavaScript", "OAuth 2.0"],
    },
    {
      title: "Gym Tutorial Website",
      repo: "itElectFinals.github.io",
      live: "https://etriii.github.io/itElectFinals.github.io/index.html",
      category: "Academic",
      description: "Second-year final project: a responsive gym tutorial website built with Bootstrap.",
      tech: ["HTML", "Bootstrap", "JavaScript"],
    },
    {
      title: "Manga Website",
      repo: "manga_website",
      live: "https://etriii.github.io/manga_website/",
      category: "Academic",
      description: "First-year HTML project: a manga showcase website.",
      tech: ["HTML", "CSS"],
    },
    {
      title: "Job Hiring & Management System",
      repo: "JobHiringAndManagementSystemGUI",
      category: "Academic",
      description: "First-year desktop application for managing job postings and applicants.",
      tech: ["Java"],
    },
    {
      title: "Hotel Reservation & Management System",
      repo: "HotelReservationAndManagementSystem",
      category: "Academic",
      description: "Java system for managing hotel room reservations.",
      tech: ["Java"],
    },
    {
      title: "Data Structures & Algorithms",
      repo: "Data_Structures_and_Algorithm",
      category: "Academic",
      description: "Implementations of core data structures and algorithms.",
      tech: ["Java"],
    },
  ].map((project) => ({ ...project, url: GITHUB_BASE + project.repo }));

  CV.data = CV.data || {};
  CV.data.projects = PROJECTS;
  CV.data.projectCategories = ["All", ...new Set(PROJECTS.map((p) => p.category))];
})((window.CV = window.CV || {}));
