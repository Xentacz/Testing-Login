// LOGIN FUNCTION
function loginUser(event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  const users = JSON.parse(localStorage.getItem("users")) || {};

  if (users[username] && users[username] === password) {
    message.style.color = "green";
    message.innerText = "Login successful! Redirecting...";

    localStorage.setItem("loggedInUser", username);

    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1000);
  } else {
    message.style.color = "red";
    message.innerText = "Invalid username or password.";
  }
}

// SIGNUP FUNCTION
function signupUser(event) {
  event.preventDefault();

  const newUsername = document.getElementById("newUsername").value.trim();
  const newPassword = document.getElementById("newPassword").value.trim();
  const message = document.getElementById("signupMessage");

  if (newUsername === "" || newPassword === "") {
    message.style.color = "red";
    message.innerText = "Please fill in all fields.";
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || {};

  if (users[newUsername]) {
    message.style.color = "red";
    message.innerText = "Username already exists. Please choose another.";
    return;
  }

  users[newUsername] = newPassword;
  localStorage.setItem("users", JSON.stringify(users));

  message.style.color = "green";
  message.innerText = "Account created successfully! Redirecting to login...";

  setTimeout(() => {
    window.location.href = "index.html";
  }, 1500);
}

// LOGOUT FUNCTION
function logoutUser() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "index.html";
}

// CHECK LOGIN ON DASHBOARD
function checkLogin() {
  const loggedInUser = localStorage.getItem("loggedInUser");
  if (!loggedInUser) {
    window.location.href = "index.html";
  } else {
    const welcome = document.getElementById("welcomeMessage");
    if (welcome) {
      welcome.innerText = `Welcome, ${loggedInUser}!`;
    }
  }
}
