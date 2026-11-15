document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('greet-btn');

  if (btn) {
    btn.addEventListener('click', () => {
      btn.textContent = 'Hello from JavaScript!';
    });
  }
});
