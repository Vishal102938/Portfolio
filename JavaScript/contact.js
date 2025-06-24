// Dummy user data (for demo purposes)
const dummyUser = {
  email: "vishal@example.com",
  phone: "+91 1234567890",
  password: "password123"
};

const btnEmail = document.getElementById('btnEmail');
const btnPhone = document.getElementById('btnPhone');
const emailField = document.getElementById('emailField');
const phoneField = document.getElementById('phoneField');
const form = document.getElementById('loginForm');
const msg = document.getElementById('msg');

btnEmail.onclick = () => {
  btnEmail.classList.add('sel');
  btnPhone.classList.remove('sel');
  emailField.style.display = '';
  phoneField.style.display = 'none';
  msg.textContent = '';
};

btnPhone.onclick = () => {
  btnPhone.classList.add('sel');
  btnEmail.classList.remove('sel');
  phoneField.style.display = '';
  emailField.style.display = 'none';
  msg.textContent = '';
};

form.onsubmit = e => {
  e.preventDefault();
  const useEmail = btnEmail.classList.contains('sel');
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const pass = document.getElementById('password').value;
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRe = /^\+?\d{7,15}$/;

  msg.style.color = 'red';
  if (useEmail) {
    if (!emailRe.test(email)) {
      return msg.textContent = 'Please enter a valid email.';
    }
    if (email !== dummyUser.email) {
      return msg.textContent = 'Unknown email address.';
    }
  } else {
    if (!phoneRe.test(phone)) {
      return msg.textContent = 'Please enter a valid phone.';
    }
    if (phone !== dummyUser.phone) {
      return msg.textContent = 'Unknown phone number.';
    }
  }

  if (pass !== dummyUser.password) {
    return msg.textContent = 'Incorrect password.';
  }

  msg.style.color = 'green';
  msg.textContent = '✅ Login successful!';
  console.log('User logged in:', useEmail ? email : phone);
  // here you can redirect or hide the form, etc.
};
