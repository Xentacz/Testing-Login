function loginUser(event) {
  event.preventDefault(); // Prevent form from submitting

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  // Replace these with your desired credentials
  const correctUsername = "admin";
  const correctPassword = "password123";

  if (username === correctUsername && password === correctPassword) {
    message.style.color = "green";
    message.innerText = "Login successful! Redirecting...";

    // Redirect to dashboard page after 1 second (you can change the URL)
    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1000);
  } else {
    message.style.color = "red";
    message.innerText = "Invalid username or password.";
  }
}
