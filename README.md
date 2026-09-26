# my-first-repository
Assignment for IT415_BSIT4B-26-27-1stsem Lesson 3-4 Task 3

## Student Information

| Field           | Details                 |
| --------------- | ----------------------- |
| **Name**        | Alex, Jr. A. Aparece    |
| **Year Level**  | 4                       |
| **Set/Section** | BSIT 4B                 |
| **Subject**     | IT415                   |

## Personal CV Web Page

A static, responsive CV site with light/dark themes, a printable layout, and live GitHub stats.

### Project Structure

```
.
├── index.html                  # CV home page (entry point)
├── README.md
├── assets/
│   └── images/profile.png      # Profile photo
├── html/
│   ├── projects.html           # Filterable project list
│   └── contact.html            # Contact form and social links
├── css/
│   ├── base.css                # Design tokens, reset, typography, themes
│   ├── layout.css              # Header, navigation, sections, grids, footer
│   ├── components.css          # Buttons, cards, chips, timeline, forms
│   └── print.css               # Print / PDF export styles
└── js/
    ├── data/projects.js        # Project records
    ├── services/github-api.js  # GitHub REST API client with session caching
    ├── components/project-card.js  # Project card builder
    ├── utils/theme.js          # Theme persistence and toggle
    ├── utils/navigation.js     # Mobile menu, scroll spy, footer year
    └── pages/                  # Page controllers (home, projects, contact)
```

### Running Locally

No build step or dependencies are required. Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`. Use **Download CV** to print or save the page as a PDF.
