let x = document.getElementById("loginForm");
let y = document.getElementById("registerForm");
let z = document.getElementById("btn");

function registerSwitch() {
  x.style.left = "-400px";
  y.style.left = "50px";
  z.style.left = "110px";
}

function loginSwitch() {
  x.style.left = "50px";
  y.style.left = "450px";
  z.style.left = "0px";
}

let objPeople = [{ username: "den", password: "abad" }];

let users = [];

function login() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  for (i = 0; i < objPeople.length; i++) {
    if (
      username === objPeople[i].username &&
      password === objPeople[i].password
    ) {
      alert(`${username} is logged in!`);
      nextPage();
      return;
    } else if (username === "" && password === "") {
      alert("Fields are blank!");
      return;
    }
  }

  alert("Incorrect Username or Password");
}

function register() {
  let registerUser = document.getElementById("newUsername").value;
  let registerPass = document.getElementById("newPassword").value;
  let confirmPass = document.getElementById("confirmPassword").value;
  let newUser = {
    username: registerUser,
    password: registerPass,
  };
  let createUser = {
    username: registerUser,
    balance: 0,
  };

  if (confirmPass !== registerPass) {
    alert("Passwords don't match!");
    return;
  }

  for (i = 0; i < objPeople.length; i++) {
    if (registerUser === objPeople[i].username) {
      alert("that username is taken.");
      return;
    } else if (registerPass.length < 8) {
      alert("Password too short. Minimum of 8 characters");
      return;
    }
  }
  alert("Registration Successful!");
  objPeople.push(newUser);
  users.push(createUser);
  console.log(objPeople);
  console.log(users);
  nextPage();
  //   localStorage.setItem("users", JSON.stringify(users));
  //   console.log(localStorage.getItem("users"));
}

inputPass = document.getElementById("password");

inputPass.addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("login").click();
  }
});
let registerUserBtn = document.getElementById("register");
registerUserBtn.addEventListener("click", register);
let contactBtn = document.getElementById("login");
contactBtn.addEventListener("click", login);
let formsPage = document.querySelector(".formsPage");
let mainPage = document.querySelector(".mainPage");

function nextPage() {
  formsPage.classList.add("none");
  mainPage.classList.remove("none");
}
