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