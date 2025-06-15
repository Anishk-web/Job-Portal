// Toggle Mobile Menu
const menuToggle = document.querySelector('.menu-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('is-active');
  navbarMenu.classList.toggle('active');
});

// Search Button Functionality
const searchBtn = document.querySelector('.search-button');
const searchInput = document.querySelector('.search-input');

searchBtn.addEventListener('click', () => {
  const keyword = searchInput.value.trim();
  if (keyword) {
    alert(`Searching for: ${keyword}`);
    // Implement actual search functionality here
  }
});

// Filter Dropdown Handling
const filterSelects = document.querySelectorAll('.filter-select');
const filterChosen = document.querySelector('.filter-chosen');

filterSelects.forEach(select => {
  select.addEventListener('change', e => {
    const selectedValue = e.target.value;
    if (selectedValue) {
      const exists = [...filterChosen.children].some(card => card.textContent === selectedValue);
      if (!exists) {
        const chosenCard = document.createElement('span');
        chosenCard.className = 'chosen-card';
        chosenCard.textContent = selectedValue;

        // Click to remove
        chosenCard.addEventListener('click', () => {
          filterChosen.removeChild(chosenCard);
        });

        filterChosen.appendChild(chosenCard);
      }
      e.target.selectedIndex = 0; // Reset selection
    }
  });
});

// Load More Button (Optional)
const loadMoreBtn = document.querySelector('.job-more');
loadMoreBtn.addEventListener('click', () => {
  alert("Loading more jobs...");

  // Add job cards dynamically if needed here
  // Example: jobList.appendChild(newJobCard);
});
