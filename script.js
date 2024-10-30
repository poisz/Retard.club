document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    const loadingScreen = document.getElementById('loading-screen');
    const customPage = document.getElementById('custom-page');
    
    if (loadingScreen && customPage) {
      loadingScreen.style.display = 'none';  // Hide the loading screen
      customPage.classList.remove('hidden'); // Show the custom page
    } else {
      console.error('Required elements not found in the DOM');
    }
  }, 3000); // 3 seconds
});
