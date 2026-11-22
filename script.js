/**
 * Venkata Bhuvan Lolla — Portfolio Interaction Engine
 * Zero-dependency, lightweight, high-performance interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Dynamic Matrix Filter (All Systems, Full-Stack, AI & ML)
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const targetCategory = button.getAttribute('data-category');

      // Update button active state & ARIA
      filterButtons.forEach((btn) => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      });
      button.classList.add('active');
      button.setAttribute('aria-selected', 'true');

      // Filter projects with subtle fade
      projectCards.forEach((card) => {
        const cardCategory = card.getAttribute('data-category');
        if (targetCategory === 'all' || cardCategory === targetCategory) {
          card.removeAttribute('data-hidden');
          card.style.opacity = '1';
        } else {
          card.setAttribute('data-hidden', 'true');
        }
      });
    });
  });

  // Keyboard shortcut to toggle filters (1 = All, 2 = Full-Stack, 3 = AI/ML)
  document.addEventListener('keydown', (e) => {
    if (['input', 'textarea'].includes(document.activeElement.tagName.toLowerCase())) return;
    if (e.key === '1' && filterButtons[0]) filterButtons[0].click();
    if (e.key === '2' && filterButtons[1]) filterButtons[1].click();
    if (e.key === '3' && filterButtons[2]) filterButtons[2].click();
  });

  // 2. Email Copy Helper
  const copyBtn = document.getElementById('copyEmailBtn');
  const copyFeedback = document.getElementById('copyFeedback');
  const emailAddress = 'lollavenkatbhuvan@gmail.com';

  if (copyBtn && copyFeedback) {
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(emailAddress);
        copyFeedback.style.display = 'inline';
        setTimeout(() => {
          copyFeedback.style.display = 'none';
        }, 2500);
      } catch (err) {
        window.location.href = `mailto:${emailAddress}`;
      }
    });
  }

  // 3. Smooth header scroll enhancement
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId.length > 1) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
});
