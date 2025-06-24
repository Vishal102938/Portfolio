function showContent(id, btn) {
  // Hide all content
  const contents = document.querySelectorAll('.content');
  contents.forEach(c => c.classList.remove('active'));

  // Remove active class from buttons
  const buttons = document.querySelectorAll('.tab-btn');
  buttons.forEach(b => b.classList.remove('active'));

  // Show selected content and activate button
  document.getElementById(id).classList.add('active');
  btn.classList.add('active');
}