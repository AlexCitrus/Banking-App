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

let c = 0;
function pop() {
  if (c === 0) {
    document.getElementById("box").style.display = "block";
    c = 1;
  } else {
    document.getElementById("box").style.display = "none";
    c = 0;
  }
}

function pop2() {
  if (c === 0) {
    document.getElementById("box2").style.display = "block";
    c = 1;
  } else {
    document.getElementById("box2").style.display = "none";
    c = 0;
  }
}

function pop3() {
  if (c === 0) {
    document.getElementById("box3").style.display = "block";
    c = 1;
  } else {
    document.getElementById("box3").style.display = "none";
    c = 0;
  }
}
function pop4() {
  if (c === 0) {
    document.getElementById("box4").style.display = "block";
    c = 1;
  } else {
    document.getElementById("box4").style.display = "none";
    c = 0;
  }
}

function pop5() {
  if (c === 0) {
    document.getElementById("box5").style.display = "block";
    c = 1;
  } else {
    document.getElementById("box5").style.display = "none";
    c = 0;
  }
}

function pop6() {
  if (c === 0) {
    document.getElementById("box6").style.display = "block";
    c = 1;
  } else {
    document.getElementById("box6").style.display = "none";
    c = 0;
  }
}

function pop7() {
  if (c === 0) {
    document.getElementById("box7").style.display = "block";
    c = 1;
  } else {
    document.getElementById("box7").style.display = "none";
    c = 0;
  }
}

function pop8() {
  if (c === 0) {
    document.getElementById("box8").style.display = "block";
    c = 1;
  } else {
    document.getElementById("box8").style.display = "none";
    c = 0;
  }
}

function pop9() {
  if (c === 0) {
    document.getElementById("box9").style.display = "block";
    c = 1;
  } else {
    document.getElementById("box9").style.display = "none";
    c = 0;
  }
}

function pop10() {
  if (c === 0) {
    document.getElementById("box10").style.display = "block";
    c = 1;
  } else {
    document.getElementById("box10").style.display = "none";
    c = 0;
  }
}

function pop11() {
  if (c === 0) {
    document.getElementById("box11").style.display = "block";
    c = 1;
  } else {
    document.getElementById("box11").style.display = "none";
    c = 0;
  }
}

function pop12() {
  if (c === 0) {
    document.getElementById("box12").style.display = "block";
    c = 1;
  } else {
    document.getElementById("box12").style.display = "none";
    c = 0;
  }
}

function pop13() {
  if (c === 0) {
    document.getElementById("box13").style.display = "block";
    c = 1;
  } else {
    document.getElementById("box13").style.display = "none";
    c = 0;
  }
}

const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

let randomDigits = Math.floor(Math.random() * 9000000000) + 1000000000;

let objPeople = [{ username: "den", password: "abad" }];

let users = [{ username: "den", balance: 0, accNumber: "3116340983" }];

function login() {
  let username = document.getElementById("usernameWeb").value;
  let password = document.getElementById("passwordWeb").value;
  //   let navHome = document.querySelector(".home");
  for (let i = 0; i < objPeople.length; i++) {
    if (
      username === objPeople[i].username &&
      password === objPeople[i].password
    ) {
      // let accNo = objPeople[i].accNumber;
      alert(`${username} is logged in!`);
      nextPage();
      userInfo.innerHTML = `${capitalizeFirstLetter(username)}`;
      for (let k = 0; k < users.length; k++) {
        if (username === users[i].username) {
          userAccNo.innerHTML = `${users[i].accNumber}`;
        }
      }
      // userAccNo.innerHTML = `Acc#${accNo}`;
      for (let i = 0; i < users.length; i++) {
        if (username === users[i].username) {
          balance.innerHTML = `₱${users[i].balance}`;
          //   navHome.classList.add("active");
        }
      }
      return;
    } else if (username === "" && password === "") {
      alert("Fields are blank!");
      return;
    }
  }

  alert("Incorrect Username or Password");
}

function numberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function capitalizeFirstLetter(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

function register() {
  let registerUser = document.getElementById("newUsername").value;
  let registerPass = document.getElementById("newPassword").value;
  let confirmPass = document.getElementById("confirmPassword").value;
  let accNoUser = randomDigits;
  let userBalance = 0;
  let newUser = {
    username: registerUser,
    password: registerPass,
  };
  let createUser = {
    username: registerUser,
    balance: userBalance,
    accNumber: accNoUser.toString(),
  };

  if (confirmPass !== registerPass) {
    alert("Passwords don't match!");
    return;
  }

  for (i = 0; i < objPeople.length; i++) {
    if (registerUser.toLowerCase() === objPeople[i].username.toLowerCase()) {
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
  userInfo.innerHTML = `${capitalizeFirstLetter(registerUser)}`;
  userAccNo.innerHTML = `${accNoUser}`;
  //   balance.innerHTML = `₱${users[0].balance}`;
  for (let i = 0; i < users.length; i++) {
    if (registerUser === users[i].username) {
      balance.innerHTML = `₱${numberWithCommas(users[i].balance)}`;
    }
  }

  //   localStorage.setItem("users", JSON.stringify(users));
  //   console.log(localStorage.getItem("users"));
}
// let logOutBtn = document.getElementById("logOutBtn");

function logOut() {
  formsPage.classList.remove("none");
  mainPage.classList.add("none");
  navBar.classList.add("none");
  withdrawPage.classList.add("none");
  depositPage.classList.add("none");
  sendMoneyPage.classList.add("none");
  settingsPage.classList.add("none");
  alert("You logged out of your account.");
  for (let i = 0; i < navLink.length; i++) {
    navLink[i].classList.remove("active");
  }
}

let inputPass = document.getElementById("passwordWeb");
let inputNewPass = document.getElementById("confirmPassword");
let inputDeposit = document.getElementById("depositAmount");
let inputWithdraw = document.getElementById("withdrawAmount");
inputPass.addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("login").click();
  }
});

inputNewPass.addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("register").click();
  }
});

inputDeposit.addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("deposit").click();
  }
});

inputWithdraw.addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("withdraw").click();
  }
});

let registerUserBtn = document.getElementById("register");
registerUserBtn.addEventListener("click", register);
let contactBtn = document.getElementById("login");
contactBtn.addEventListener("click", login);
let formsPage = document.querySelector(".formsPage");
let mainPage = document.querySelector(".mainPage");
let navBar = document.querySelector(".selector-menu");
let depositPage = document.querySelector(".depositPage");
let withdrawPage = document.querySelector(".withdrawPage");
let sendMoneyPage = document.querySelector(".sendPage");
let settingsPage = document.querySelector(".settingsPage");
function nextPage() {
  formsPage.classList.add("none");
  mainPage.classList.remove("none");
  navBar.classList.remove("none");
  depositPage.classList.add("none");
  withdrawPage.classList.add("none");
  settingsPage.classList.add("none");
  navLink[0].classList.add("active");

  //   userInfo.innerHTML = `${newUser} potek`;

  //   console.log(username);
}

function depositSection() {
  depositPage.classList.remove("none");
  mainPage.classList.add("none");
  withdrawPage.classList.add("none");
  sendMoneyPage.classList.add("none");
  settingsPage.classList.add("none");
}

function withdrawSection() {
  depositPage.classList.add("none");
  mainPage.classList.add("none");
  withdrawPage.classList.remove("none");
  sendMoneyPage.classList.add("none");
  settingsPage.classList.add("none");
}

function sendSection() {
  depositPage.classList.add("none");
  mainPage.classList.add("none");
  withdrawPage.classList.add("none");
  sendMoneyPage.classList.remove("none");
  settingsPage.classList.add("none");
}

function settingsSection() {
  depositPage.classList.add("none");
  mainPage.classList.add("none");
  withdrawPage.classList.add("none");
  sendMoneyPage.classList.add("none");
  settingsPage.classList.remove("none");
}

let userInfo = document.querySelector(".userInfo");
let userAccNo = document.querySelector(".accountNumber");
let balance = document.getElementById("balanceMoney");

$("#depositAmount").keypress(function (e) {
  if (this.value.length == 0 && e.which == 48) {
    return false;
  }
});

function depositFunction() {
  let amount = document.getElementById("depositAmount").value;

  if (parseFloat(amount) < 0) {
    pop6();
    return;
  }
  //   parseFloat(amount);
  let username = userInfo.innerHTML.toLowerCase();
  //   amount.replace(/^0+/, "");
  for (let i = 0; i < users.length; i++) {
    if (username === users[i].username) {
      users[i].balance = parseFloat(users[i].balance) + parseFloat(amount);
      console.log("test");
      console.log(`${users[i].balance}`);
      balance.innerHTML = `₱${numberWithCommas(users[i].balance.toString())}`;
      pop3();
      return console.log(`${users[i].balance}`);
    }
  }

  pop7();
}

function withdrawFunction() {
  let amount = document.getElementById("withdrawAmount").value;

  if (parseFloat(amount) < 0) {
    pop9();
    return;
  }
  //   parseFloat(amount);
  let username = userInfo.innerHTML.toLowerCase();
  //   amount.replace(/^0+/, "");
  for (let i = 0; i < users.length; i++) {
    if (username === users[i].username) {
      if (parseFloat(users[i].balance) < parseFloat(amount)) {
        console.log(`langya`);
        pop8();
        return;
      }

      users[i].balance = parseFloat(users[i].balance) - parseFloat(amount);
      console.log("test");
      console.log(`${users[i].balance}`);
      balance.innerHTML = `₱${numberWithCommas(users[i].balance.toString())}`;
      pop();
      return console.log(`${users[i].balance}`);
    }
  }

  pop7();
}

function sendMoneyFunction() {
  let amount = document.getElementById("sendAmount").value;
  let accNumberHTML = document.getElementById("sendAcc").value;
  let currentAccNo = document.querySelector(".accountNumber").innerHTML;

  if (accNumberHTML === currentAccNo) {
    return pop5();
  }

  if (parseFloat(amount) < 0) {
    pop6();
    return;
  }
  //   parseFloat(amount);
  let username = userInfo.innerHTML.toLowerCase();
  //   amount.replace(/^0+/, "");
  for (let i = 0; i < users.length; i++) {
    if (username === users[i].username) {
      if (parseFloat(users[i].balance) < parseFloat(amount)) {
        return pop2();
      }
      for (let k = 0; k < objPeople.length; k++) {
        if (accNumberHTML === users[k].accNumber) {
          users[k].balance = parseFloat(users[k].balance) + parseFloat(amount);
          users[i].balance = parseFloat(users[i].balance) - parseFloat(amount);
          console.log("test");
          console.log(`${users[i].balance}`);
          balance.innerHTML = `₱${numberWithCommas(
            users[i].balance.toString()
          )}`;
          return pop4();
          // return alert(`sent succesfully`);
        }
      }
      console.log(`${users[i].balance}`);
    }
  }
  pop7();
}

function changePasswordUser() {
  let currentPassword = document.getElementById("oldPass").value;
  let newPassword = document.getElementById("newPass").value;
  let currentUser = document.querySelector(".userInfo").innerHTML;

  if (newPassword.length < 8) {
    console.log(`test`);
    return pop12();
  }

  for (let j = 0; j < objPeople.length; j++) {
    if (currentUser.toLowerCase() === objPeople[i].username) {
      if (newPassword.length >= 8) {
        if (currentPassword === objPeople[i].password) {
          objPeople[i].password = newPassword;
          return pop10();
        }
        return pop11();
      }
    }
  }

  // return pop12();
}

/***AVATAR SCRIPT***/

$(document).ready(function () {
  var readURL = function (input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $(".profile-pic").attr("src", e.target.result);
      };

      reader.readAsDataURL(input.files[0]);
    }
  };

  $(".file-upload").on("change", function () {
    readURL(this);
  });

  $(".upload-button").on("click", function () {
    $(".file-upload").click();
  });
});
/***AVATAR SCRIPT***/
