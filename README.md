# WoningPlanner

WoningPlanner is a simple planner that provides a daily schedule of renovation tasks. The timeline allows you to quickly see each planned workday and click a day to view details.

Data is stored on the server via a small Node.js backend so changes are shared between visitors.

## Features

- **Interactive timeline** – scroll through days and select one to view tasks.
- **Personal checklist** – tick off completed tasks or resident actions.
- **Edit mode** – add, modify or delete tasks directly in the browser.
- **Progress indicator** – based on completed tasks and actions.
- **Backup & reset** – download a JSON backup or reset the planning to defaults.

The interface uses a clean design with CSS custom properties for all brand colors, making future theming straightforward.

## Usage

Install dependencies and start the server:

```bash
npm install
npm start
```

Then open `http://localhost:3000` in a browser. The planning is persisted to `data.json` on the server so edits are visible to everyone.

## Development

The project uses TailwindCSS from a CDN and vanilla JavaScript on the client. A minimal Express server stores the schedule in `data.json`.

```
- index.html  – main application
- style.css   – page styles
- script.js   – application logic
- README.md   – project information
```

Feel free to fork the repository and adapt the planning to your own renovation project.
