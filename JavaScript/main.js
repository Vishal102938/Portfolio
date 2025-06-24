const toggle = document.getElementById('menu-toggle');
const navContainer = document.querySelector('.nav-container');

toggle.addEventListener('click', () => {
  navContainer.classList.toggle('show');
});

var typed = new Typed(".text", {
    strings : ["Web Developer" , "Java Developer" ,"AI&ML Engineer"],
    typeSpeed:120,
    backSpeed:60,
    backDelay:1000,
    loop:true
});

window.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelectorAll(".skill-bar-fill");

  bars.forEach(bar => {
    const level = bar.getAttribute("data-level");
    setTimeout(() => {
      bar.style.width = level;
    }, 200); 
  });
});

const popup = document.getElementById("imgPopup");
const popupImg = document.getElementById("popupImage");
const closeBtn = document.getElementById("closePopup");

document.querySelectorAll('.item-image img').forEach(img => {
  img.addEventListener('click', () => {
    popupImg.src = img.src;
    popup.classList.add('active');
  });
});

closeBtn.addEventListener('click', () => {
  popup.classList.remove('active');
});

popup.addEventListener('click', e => {
  if (e.target === popup) {
    popup.classList.remove('active');
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    popup.classList.remove('active');
  }
});




document.querySelector('.subscribe button').addEventListener('click', function() {
  const email = document.querySelector('.subscribe input').value;
  if (email) {
    alert(`Thank you for subscribing with ${email}`);
  } else {
    alert('Please enter a valid email address.');
  }
});






