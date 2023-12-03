function validateLogin() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var errorMessage = document.getElementById('error-message');

  // Replace these with your actual username and password
  var validUsername = 'yourUsername';
  var validPassword = 'yourPassword';

  if (username === validUsername && password === validPassword) {
      errorMessage.innerHTML = 'Login successful!';
  } else {
      errorMessage.innerHTML = 'Invalid username or password. Try again.';
  }
}