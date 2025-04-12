const Toggle = document.querySelector('.hamburger');
const Navbar = document.querySelector('#primary-menu');

Toggle.addEventListener('click', () => {
    Navbar.classList.toggle('slide');
    Navbar.classList.toggle('open');
    Toggle.classList.toggle('cross');
});
// Close all dropdowns
function CloseAllDropdowns() {
    document.querySelectorAll('.Mblmenu-item').forEach(item => {
      item.classList.remove('Mblmenu-active');
      const dropdownContent = item.nextElementSibling;
      if (dropdownContent) {
        dropdownContent.classList.remove('Mblmenu-collapsed');
        dropdownContent.style.maxHeight = null;
      }
    });
  }

  // Dropdown functionality
  document.querySelectorAll('.Mblmenu-item').forEach(item => {
    item.addEventListener('click', function (event) {
      event.stopPropagation();

      // Check Dropdown is already active
      const isActive = this.classList.contains('Mblmenu-active');

      // Closing all Dropdowns
      CloseAllDropdowns();

      // If Dropdown was not already active
      if (!isActive) {
        this.classList.add('Mblmenu-active');
        const dropdownContent = this.nextElementSibling;
        if (dropdownContent) {
          dropdownContent.classList.add('Mblmenu-collapsed');
          dropdownContent.style.maxHeight = dropdownContent.scrollHeight + "px";
        }
      }
    });
  });

  


