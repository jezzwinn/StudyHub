const fs = require("fs");
const path = require("path");
const root = path.resolve(__dirname, "..");
const required = ["index.html", "login.html", "css/styles.css", "js/app.js", "js/auth.js", "manifest.webmanifest", "service-worker.js"];
for (const file of required) if (!fs.existsSync(path.join(root, file))) { console.error(`Missing required file: ${file}`); process.exitCode = 1; }
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const login = fs.readFileSync(path.join(root, "login.html"), "utf8");
const js = fs.readFileSync(path.join(root, "js/app.js"), "utf8");
const auth = fs.readFileSync(path.join(root, "js/auth.js"), "utf8");
const sw = fs.readFileSync(path.join(root, "service-worker.js"), "utf8");
const checks = [
 ["separate login page exists", fs.existsSync(path.join(root,"login.html")) && login.includes('id="authForm"') && !html.includes('id="authScreen"')],
 ["login form has distinct sign-in and create-account modes", login.includes('id="tabSignIn"') && login.includes('id="tabCreate"') && auth.includes('const setMode = next =>')],
 ["login form supports Enter-key submission", login.includes('<form id="authForm"') && auth.includes('addEventListener("submit",submit)')],
 ["login form has guest mode", login.includes('id="continueGuest"') && auth.includes('studyhub-guest-mode')],
 ["password reset and recovery are handled", auth.includes('resetPasswordForEmail') && auth.includes('PASSWORD_RECOVERY') && auth.includes('updateUser({password})')],
 ["existing Supabase sessions redirect into the app", auth.includes('auth.getSession()') && auth.includes('location.replace("index.html")')],
 ["app requires a session or guest choice", js.includes('async function ensureAuthOrGuest()') && js.includes("location.replace('login.html')")],
 ["account and security has its own section", html.includes('id="page-account"') && html.includes('id="accountChangePassword"')],
 ["cloud settings are outside general preferences", html.indexOf('id="cloudSyncPanel"') > html.indexOf('id="page-account"') && html.indexOf('id="cloudSyncPanel"') < html.indexOf('id="page-settings"')],
 ["grouped navigation and mobile More drawer", html.includes('class="nav-group"') && html.includes('id="mobileMore"')],
 ["curated study-resource list is present for renderer", html.includes('id="curatedResourceList"') && js.includes('curatedResourceList') ],
 ["dedicated PYQ page and programme filter", html.includes('id="page-papers"') && html.includes('id="paperProgramme"') && html.includes('id="paperResourceGrid"') && js.includes("paperProgramme').onchange=renderPapers") && js.includes("paperSearch').oninput=renderPapers")],
 ["official SCERT higher-secondary question portal", js.includes('https://questionpool.scert.kerala.gov.in/')],
 ["official SCERT curriculum source", html.includes('https://scert.kerala.gov.in/?id=135&option=com_content&view=article')],
 ["Plus One, SSLC and Plus Two PYQ archives", js.includes('kerala-plus-one-question-papers') && js.includes('kerala-sslc-question-papers') && js.includes('kerala-plus-two-question-paper')],
 ["adaptive timetable uses priorities, chapter progress and mock marks", js.includes('function rankedSubjects()') && js.includes('state.subjectPriorities') && js.includes('examPct')],
 ["automatic planner stores school, holiday, sleep and recreation preferences", html.includes('id="profileSchoolStart"') && html.includes('id="profilePlayStart"') && js.includes('function savePlannerProfile()') && js.includes('plannerProfile')],
 ["automatic full-syllabus plan uses user-entered chapters and three learning phases", js.includes('function makeSmartSchedule()') && js.includes('Learn & understand') && js.includes('Active recall & exercises') && js.includes('Revision & PYQ practice')],
 ["automatic schedule protects recreation and sleep windows", js.includes('overlapsPlay') && js.includes('sleep-45') && js.includes('schoolEnd')],
 ["generated planner tasks retain date and time and can mark chapter mastery", js.includes('startTime:start') && js.includes('ch.done=phases.every') && js.includes('t.startTime')],
 ["upcoming exam date affects routine ranking", js.includes('state.upcomingExamDate') && js.includes('state.upcomingExamSubject')],
 ["local-first persistence", js.includes('function persistLocalOnly()') && js.includes('function save()')],
 ["automatic cloud sync after saved changes", js.includes('setTimeout(()=>pushCloudState(false),650)')],
 ["cloud sync retry after errors", js.includes('retrying shortly') && js.includes('setTimeout(()=>pushCloudState(false),5000)')],
 ["per-user Supabase storage integration", js.includes('from("studyhub_user_data")') && js.includes('user_id:cloudUser.id')],
 ["public publishable key only", js.includes('SUPABASE_PUBLISHABLE_KEY') && !js.includes('service_role')],
 ["PWA cache includes separate login page and auth script", sw.includes('"./login.html"') && sw.includes('"./js/auth.js"')],
 ["service worker fallback is valid", sw.includes('catch(()=>caches.match("./index.html"))')],
 ["PWA icon exists", fs.existsSync(path.join(root,"assets/icons/studyhub-icon.svg")) && fs.readFileSync(path.join(root,"manifest.webmanifest"),"utf8").includes("studyhub-icon.svg")]
];
for (const [name, ok] of checks) { console.log(`${ok ? "PASS" : "FAIL"} ${name}`); if (!ok) process.exitCode = 1; }
