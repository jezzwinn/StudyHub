const fs = require("fs");
const path = require("path");
const root = path.resolve(__dirname, "..");
const required = [
  "index.html",
  "css/styles.css",
  "js/app.js",
  "manifest.webmanifest",
  "service-worker.js"
];
for (const file of required) {
  if (!fs.existsSync(path.join(root, file))) {
    console.error(`Missing required file: ${file}`);
    process.exitCode = 1;
  }
}
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const js = fs.readFileSync(path.join(root, "js/app.js"), "utf8");
const checks = [
  ["dashboard page", html.includes('id="page-dashboard"')],
  ["notebook page", html.includes('id="page-notebook"')],
  ["planner page", html.includes('id="page-planner"')],
  ["service worker registration", js.includes("serviceWorker.register")],
  ["manifest link", html.includes('rel="manifest"')]
];
for (const [name, ok] of checks) {
  console.log(`${ok ? "PASS" : "FAIL"} ${name}`);
  if (!ok) process.exitCode = 1;
}
