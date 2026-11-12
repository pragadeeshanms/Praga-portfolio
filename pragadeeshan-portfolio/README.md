# Pragadeeshan MS — Portfolio

A responsive personal portfolio built with **React.js + Vite** and a small **Node.js + Express** backend.

## Included sections
- Home / introduction
- Profile and quick facts
- Technical skills
- Featured projects: FLIPSKILL and PRANOVA
- Academics and certifications
- Contact details and message form
- GitHub and LinkedIn links

## Requirements
- Node.js 18 or newer
- npm

## Run locally

1. Extract the ZIP.
2. Open the extracted `pragadeeshan-portfolio` folder in VS Code or a terminal.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the frontend and backend together:

   ```bash
   npm run dev
   ```

5. Open **http://localhost:5173** in your browser. The API runs on **http://localhost:5000**.

## Production build

```bash
npm run build
npm start
```

Then open http://localhost:5000.

## Personalize before publishing
- Update `profile` in `src/App.jsx` if your contact details or social URLs change.
- Project descriptions are expanded from the information in your supplied resume. Add further features, screenshots, demo URLs, and repository URLs when you have them.
- Your GitHub profile is currently linked to `https://github.com/pragadeeshanms`. The repository section links to that profile until you provide individual project repository URLs.
- The contact form currently validates and logs submissions through the Express API; it does **not** send email. Connect an email service or form provider in `server/index.js` before deploying if you want messages delivered to your inbox.

## Deploy
Build and run the Node server on a Node-compatible host, or deploy the Vite frontend and Express API separately. If deployed separately, configure the frontend API URL/proxy accordingly.
