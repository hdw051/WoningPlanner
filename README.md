# WoningPlanner

WoningPlanner is a simple single‑page planner that provides a daily schedule of renovation tasks. The timeline allows you to quickly see each planned workday and click a day to view details.

The page is completely client‑side. All data is stored in `localStorage` so your notes and edits stay in your browser. No build or server is required.

## Features

- **Interactive timeline** – scroll through days and select one to view tasks.
- **Personal checklist** – tick off completed tasks or resident actions.
- **Edit mode** – add, modify or delete tasks directly in the browser.
- **Progress indicator** – based on completed tasks and actions.
- **Backup & reset** – download a JSON backup or reset the planning to defaults.

The interface uses a clean design with CSS custom properties for all brand colors, making future theming straightforward.

## Usage

Open `index.html` in a modern browser. The default schedule is loaded and saved to your local storage. If you edit the planning, your changes are stored only on your own device.

No build step is needed. You can serve the file with any static web server or open it directly from the filesystem.

## Development

The project uses TailwindCSS from a CDN and vanilla JavaScript. Edits to the schedule are persisted with `localStorage`.

```
- index.html  – main application
- style.css   – page styles
- script.js   – application logic
- README.md   – project information
```

Feel free to fork the repository and adapt the planning to your own renovation project.
