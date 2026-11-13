(() => {
  "use strict";
  const SUPABASE_URL = "https://hozrytxetztevkdpsjwe.supabase.co";
  const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_gScjjbZDQmIWps5-GGg6nKQ_Ra8jdxx7";
  const $ = id => document.getElementById(id);
  const client = window.supabase?.createClient ? window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY) : null;
  let mode = "signin", busy = false;
  const status = (message, kind = "") => { const el=$("status"); el.textContent=message; el.className="status "+kind; };
  const setMode = next => {
    mode=next; const create=mode==="create";
    $("tabSignIn").classList.toggle("active",!create); $("tabCreate").classList.toggle("active",create);
    $("tabSignIn").setAttribute("aria-selected",String(!create)); $("tabCreate").setAttribute("aria-selected",String(create));
    $("heading").textContent=create?"Create your free account.":"Welcome back.";
    $("intro").textContent=create?"One free account keeps your StudyHub learning journey in sync across devices.":"Sign in to continue your learning journey and sync your progress across devices.";
    $("submitAuth").textContent=create?"Create free account":"Sign in";
    $("password").autocomplete=create?"new-password":"current-password";
    $("forgotPassword").classList.toggle("hidden",create);
  };
  const showRecovery = () => { $("tabs").classList.add("hidden"); $("authForm").classList.add("hidden"); $("forgotPassword").classList.add("hidden"); $("resetPanel").classList.remove("hidden"); $("heading").textContent="Choose a new password."; $("intro").textContent="Your recovery link is ready. Set a new password below."; status("Enter a new password to finish account recovery."); };
  const setBusy = value => { busy=value; $("submitAuth").disabled=value; $("submitAuth").textContent=value?"Please wait…":(mode==="create"?"Create free account":"Sign in"); };
  async function submit(event){event.preventDefault();if(busy)return;if(!client){status("Account service could not load. Check your connection and reload, or continue as a guest.","error");return}
    const email=$("email").value.trim(),password=$("password").value;
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){status("Enter a valid email address.","error");$("email").focus();return}
    if(password.length<8){status("Use a password with at least 8 characters.","error");$("password").focus();return}
    setBusy(true);status(mode==="create"?"Creating your account…":"Signing in…");
    try{
      if(mode==="create"){
        const {data,error}=await client.auth.signUp({email,password});if(error)throw error;
        localStorage.removeItem("studyhub-guest-mode");
        if(data.session){status("Account created. Opening StudyHub…","success");location.replace("index.html");}
        else{status("Account created. Check your email for the confirmation link, then return here and sign in.","success");setMode("signin");}
      }else{
        const {data,error}=await client.auth.signInWithPassword({email,password});if(error)throw error;
        localStorage.removeItem("studyhub-guest-mode");status("Signed in. Opening your StudyHub…","success");location.replace("index.html");
      }
    }catch(error){status(error.message||"Something went wrong. Please try again.","error");}
    finally{setBusy(false)}
  }
  async function requestReset(){if(!client){status("Account service is unavailable. Check your connection.","error");return}const email=$("email").value.trim();if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){status("Enter your account email first.","error");$("email").focus();return}status("Sending a password-reset link…");try{const {error}=await client.auth.resetPasswordForEmail(email,{redirectTo:location.origin+location.pathname});if(error)throw error;status("If an account exists for this email, a reset link has been sent. Check your inbox.","success")}catch(error){status(error.message||"Could not send the reset email.","error")}}
  async function savePassword(){const password=$("newPassword").value;if(password.length<8){status("Use a password with at least 8 characters.","error");return}try{$("savePassword").disabled=true;const {error}=await client.auth.updateUser({password});if(error)throw error;status("Password updated. Opening StudyHub…","success");location.replace("index.html")}catch(error){status(error.message||"Could not update the password.","error");$("savePassword").disabled=false}}
  function init(){
    $("authForm").addEventListener("submit",submit);$("tabSignIn").onclick=()=>setMode("signin");$("tabCreate").onclick=()=>setMode("create");$("forgotPassword").onclick=requestReset;$("savePassword").onclick=savePassword;
    $("continueGuest").onclick=()=>{localStorage.setItem("studyhub-guest-mode","1");location.replace("index.html")};
    $("togglePassword").onclick=()=>{const el=$("password"),show=el.type==="password";el.type=show?"text":"password";$("togglePassword").textContent=show?"Hide":"Show"};
    if(!client){status("Could not connect to the account service. You can still continue as a guest.","error");return}
    const query=new URLSearchParams(location.search);if(query.has("recover")){setMode("signin");status("Enter your email, then choose Forgot password.")}
    client.auth.onAuthStateChange((event,session)=>{if(event==="PASSWORD_RECOVERY"){showRecovery();return}if(session&&event!=="INITIAL_SESSION"){localStorage.removeItem("studyhub-guest-mode");location.replace("index.html")}});
    client.auth.getSession().then(({data,error})=>{if(!error&&data?.session&&!location.hash.includes("type=recovery")&&!query.has("recover"))location.replace("index.html");}).catch(()=>{});
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
})();
