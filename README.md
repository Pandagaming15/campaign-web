# SPARK Partylist Website

## Preview locally
Open `index.html` in a browser. Some browsers restrict `data.json` when opened directly from disk, so for the most accurate preview, use GitHub Pages or a local static server.

## Publish with GitHub Pages
1. Create a GitHub repository (for example, `spark-partylist`).
2. Upload `index.html`, `style.css`, `script.js`, `data.json`, and the `assets` folder to the repository root.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then Save.
6. Wait for GitHub Pages to publish the site. Your public URL will appear in Settings → Pages.
7. Open that public URL and test the QR code. The QR generator encodes the page URL at runtime, so it will work once the site is live.

## Add candidates
Edit `data.json`. For each candidate, set `name`, `position`, `photo`, and `bio`. Put image files inside `assets/` and use paths such as `assets/candidate-01.jpg`.

## Add pubmats
Copy each Facebook graphic into `assets/`, then add an item under `pubmats` in `data.json`, e.g.
`{"title":"Platform 1","image":"assets/platform-1.jpg","description":"Our platform graphic."}`

## Important
This starter uses a static JSON file. Editing the data file requires committing changes to GitHub. A built-in editor that saves changes across all visitors would require an additional backend or database. The QR code library is loaded from a CDN, so QR generation requires an internet connection.
