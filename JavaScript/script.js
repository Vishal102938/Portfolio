fetch('http://localhost:3000/log', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ action: 'visit' })
});


document.getElementById('downloadCvBtn').addEventListener('click', () => {
  fetch('http://localhost:3000/log', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ action: 'download' })
  });
});
