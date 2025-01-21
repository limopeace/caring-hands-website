document.addEventListener('DOMContentLoaded', function () {
    // Navbar Burger Menu
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
        burger.forEach(el => {
            el.addEventListener('click', () => {
                menu.forEach(menuEl => menuEl.classList.toggle('hidden'));
            });
        });
    }

    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
        close.forEach(el => {
            el.addEventListener('click', () => {
                menu.forEach(menuEl => menuEl.classList.toggle('hidden'));
            });
        });
    }

    if (backdrop.length) {
        backdrop.forEach(el => {
            el.addEventListener('click', () => {
                menu.forEach(menuEl => menuEl.classList.toggle('hidden'));
            });
        });
    }
    document.querySelectorAll('.faq-question').forEach((button) => {
        button.addEventListener('click', () => {
          const faqAnswer = button.nextElementSibling;
          const isExpanded = button.getAttribute('aria-expanded') === 'true';
      
          // Toggle the "aria-expanded" attribute
          button.setAttribute('aria-expanded', !isExpanded);
      
          // Expand or collapse the content
          if (isExpanded) {
            faqAnswer.style.maxHeight = null; // Collapse
            button.querySelector('span').textContent = '+'; // Change icon back to "+"
          } else {
            faqAnswer.style.maxHeight = faqAnswer.scrollHeight + 'px'; // Expand
            button.querySelector('span').textContent = '-'; // Change icon to "-"
          }
        });
      });

    // Smooth Scrolling
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth',
                });
            }
        });
    });
});