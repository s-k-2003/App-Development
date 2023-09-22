import React, { useEffect, useState } from 'react';
import '../Asserts/Navbar.css'

const Navbar = () => {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

  useEffect(() => {
    let dropdowns = document.querySelectorAll('.navbar .dropdown-toggler');

    if (dropdowns.length) {
      dropdowns.forEach((dropdown) => {
        dropdown.addEventListener('click', (event) => {
          let target = document.querySelector(`#${event.target.dataset.dropdown}`);

          if (target) {
            if (target.classList.contains('show')) {
              target.classList.remove('show');
              setDropdownIsOpen(false);
            } else {
              target.classList.add('show');
              setDropdownIsOpen(true);
            }
          }
        });
      });
    }

    window.addEventListener('mouseup', (event) => {
      if (dropdownIsOpen) {
        dropdowns.forEach((dropdownButton) => {
          let dropdown = document.querySelector(`#${dropdownButton.dataset.dropdown}`);
          let targetIsDropdown = dropdown === event.target;

          if (dropdownButton === event.target) {
            return;
          }

          if ((!targetIsDropdown) && (!dropdown.contains(event.target))) {
            dropdown.classList.remove('show');
          }
        });
      }
    });

    function handleSmallScreens() {
      document.querySelector('.navbar-toggler')
        .addEventListener('click', () => {
          let navbarMenu = document.querySelector('.navbar-menu');

          if (!navbarMenu.classList.contains('active')) {
            navbarMenu.classList.add('active');
          } else {
            navbarMenu.classList.remove('active');
          }
        });
    }

    handleSmallScreens();

    return () => {
      dropdowns.forEach((dropdown) => {
        dropdown.removeEventListener('click');
      });
      window.removeEventListener('mouseup');
    }
  }, [dropdownIsOpen]);

  return (
    <nav className="navbar">
      {/* ... (rest of your JSX code) ... */}
    </nav>
  );
}

export default Navbar;
