// app.js
document.addEventListener('DOMContentLoaded', () => {
    // SPA content loader placeholder (optional)
    // Example: Load content dynamically based on route
  
    // Already handled in index.html, but safe fallback
    const yearEl = document.getElementById('year');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  });
  