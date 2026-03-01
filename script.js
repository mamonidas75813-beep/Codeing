let savedEmail = "";
let savedPass = "";

/* Toggle forms */
function showSignup(){
    document.querySelector(".login").classList.remove("active");
    document.querySelector(".signup").classList.add("active");
}

function showLogin(){
    document.querySelector(".signup").classList.remove("active");
    document.querySelector(".login").classList.add("active");
}

/* SIGN UP */
function signup(){
    const email = document.getElementById("signupEmail").value.trim();
    const pass  = document.getElementById("signupPass").value.trim();
    const error = document.getElementById("signupError");

    error.innerText = "";

    if(email === "" || pass === ""){
        error.innerText = "Email and Password required";
        return;
    }

    if(!email.includes("@")){
        error.innerText = "Invalid Email format";
        return;
    }

    if(pass.length < 5){
        error.innerText = "Password must be 5+ characters";
        return;
    }

    savedEmail = email;
    savedPass  = pass;

    alert("Signup Successful! Please Login.");
    showLogin();
}

/* LOGIN */
function login(){
    const email = document.getElementById("loginEmail").value.trim();
    const pass  = document.getElementById("loginPass").value.trim();
    const error = document.getElementById("loginError");

    error.innerText = "";

    /* 🔥 MAIN FIX */
    if(email === "" || pass === ""){
        error.innerText = "Email and Password required";
        return;
    }

    if(email !== savedEmail || pass !== savedPass){
        error.innerText = "Invalid Email or Password";
        return;
    }

    /* ✅ ONLY VALID LOGIN OPENS DASHBOARD */
    window.location.href = "dashboard.html";
}

