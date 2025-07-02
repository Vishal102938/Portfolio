document.addEventListener('DOMContentLoaded', () => {
  const login = document.getElementById('loginForm');
  const signup = document.getElementById('signupForm');
  const toggleLink = document.getElementById('toggleLink');
  const backLink = document.getElementById('backLink');

  toggleLink.addEventListener('click', e => {
    e.preventDefault();
    login.classList.add('hidden');
    signup.classList.remove('hidden');
  });

  backLink.addEventListener('click', e => {
    e.preventDefault();
    signup.classList.add('hidden');
    login.classList.remove('hidden');
  });

  login.addEventListener('submit', e => {
    e.preventDefault();
    alert(`Logging in: ${login.username?.value}`);
  });

  signup.addEventListener('submit', e => {
    e.preventDefault();
    alert(`Signing up: ${signup.newUser?.value}, ${signup.email?.value}`);
  });
});
