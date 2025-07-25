// login form
document
  .getElementById('loginForm')
  .addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload automatically

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'admin123') {
      localStorage.setItem('isLoggedIn', 'true');
      window.location = '/boarding-house/index.html';
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'That login doesn’t match. Try again.',
      });
    }
  });

// log out button
function logout() {
  if (localStorage.getItem('isLoggedIn') !== 'true') {
    window.location = '/boarding-house/login.html';
  }
}

document.getElementById('logoutBtn').addEventListener('click', function () {
  localStorage.removeItem('isLoggedIn');
  window.location = '/boarding-house/login.html';
});
