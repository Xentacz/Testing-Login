// script.js

// Signup function
function signupUser(event) {
  event.preventDefault();

  const username = document.getElementById("signup-username").value.trim();
  const password = document.getElementById("signup-password").value.trim();
  const message = document.getElementById("signup-message");

  let users = JSON.parse(localStorage.getItem("users")) || [];

  if (users.find(user => user.username === username)) {
    message.style.color = "red";
    message.innerText = "Username already taken.";
    return;
  }

  users.push({ username, password });
  localStorage.setItem("users", JSON.stringify(users));

  message.style.color = "green";
  message.innerText = "Sign up successful! Redirecting to login...";

  setTimeout(() => {
    window.location.href = "index.html";
  }, 1500);
}

// Login function
function loginUser(event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  let users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
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

// Dashboard page functions:

// Check if user logged in, otherwise redirect to login
function checkLoggedIn() {
  const loggedInUser = localStorage.getItem("loggedInUser");
  if (!loggedInUser) {
    window.location.href = "index.html";
  } else {
    document.getElementById("welcome-message").innerText = `Welcome, ${loggedInUser}!`;
  }
}

// Logout function
function logoutUser() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "index.html";
}
