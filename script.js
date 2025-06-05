// Save new user in localStorage
function signupUser(event) {
  event.preventDefault();
  const username = document.getElementById("signup-username").value.trim();
  const password = document.getElementById("signup-password").value.trim();
  const message = document.getElementById("signup-message");

  let users = JSON.parse(localStorage.getItem("users")) || [];

  // Check if username already exists
  const exists = users.find(u => u.username === username);
  if (exists) {
    message.style.color = "red";
    message.innerText = "Username already exists.";
    return;
  }

  users.push({ username, password });
  localStorage.setItem("users", JSON.stringify(users));
  message.style.color = "green";
  message.innerText = "Signup successful! Redirecting...";

  // Save logged-in user
  localStorage.setItem("loggedInUser", username);

  setTimeout(() => {
    window.location.href = "dashboard.html";
  }, 1000);
}

// Login user by checking localStorage
function loginUser(event) {
  event.preventDefault();
  const username = document.getElementById("login-username").value.trim();
  const password = document.getElementById("login-password").value.trim();
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
