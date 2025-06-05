// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  const greeting = document.getElementById('greeting');

  // After the headline animation finishes, start the rainbow color shift
  setTimeout(() => {
    greeting.classList.add('rainbow-text');
  }, 2500);
});
