/* ==========================================================================
   AduKit - Interactive Script
   1. Top Reading Progress Bar + Dual Scrollspy (Main Navbar & 6 Reagents Bar)
   2. Virtual Test Tube Reaction Simulator for the 6 Kit Reagents
   3. Category Filter + Home Detective Checklist for DART Everyday Tests
   4. Gentle Scroll Reveal Animations
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  /* ------------------------------------------------------------------------
     1. SCROLL PROGRESS BAR & DUAL SCROLLSPY
     ------------------------------------------------------------------------ */
  const progressBar = document.getElementById('scroll-progress-bar');
  const mainSections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const reagentCards = document.querySelectorAll('.reagent-card[id]');
  const reagentPills = document.querySelectorAll('.reagent-pill');

  function handleScroll() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (progressBar && docHeight > 0) {
      const pct = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));
      progressBar.style.width = `${pct}%`;
    }

    // Main Navbar Scrollspy
    const mainCheckPos = scrollTop + 170;
    mainSections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (mainCheckPos >= top && mainCheckPos < top + height) {
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });

    // 6 Reagents Sub-Navbar Scrollspy
    const reagentCheckPos = scrollTop + 260;
    let activeFound = false;

    reagentCards.forEach((card) => {
      const top = card.offsetTop;
      const height = card.offsetHeight;
      const id = card.getAttribute('id');

      if (reagentCheckPos >= top && reagentCheckPos < top + height) {
        activeFound = true;
        card.classList.add('in-view');
        reagentPills.forEach((pill) => {
          pill.classList.toggle('active', pill.getAttribute('href') === `#${id}`);
        });
      } else {
        card.classList.remove('in-view');
      }
    });

    if (!activeFound) {
      reagentPills.forEach((pill) => pill.classList.remove('active'));
    }
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll();

  /* ------------------------------------------------------------------------
     2. VIRTUAL TEST TUBE REACTION SIMULATOR (Inside each of the 6 Reagent Cards)
     ------------------------------------------------------------------------ */
  const simButtons = document.querySelectorAll('.sim-toggle-btn');

  simButtons.forEach((btn) => {
    const originalBtnText = btn.textContent.trim();

    btn.addEventListener('click', () => {
      const simBox = btn.closest('.reaction-sim-box');
      const liquid = simBox.querySelector('.tube-liquid');
      const titleEl = simBox.querySelector('.sim-status-title');
      const descEl = simBox.querySelector('.sim-status-desc');

      const isTested = btn.classList.toggle('tested');

      if (isTested) {
        liquid.style.backgroundColor = liquid.getAttribute('data-adult-color');
        liquid.style.height = '82%';
        titleEl.textContent = btn.getAttribute('data-adult-label');
        descEl.textContent = 'Color change indicates adulteration! Click to reset.';
        btn.textContent = '🔄 Reset Tube';
      } else {
        liquid.style.backgroundColor = liquid.getAttribute('data-pure-color');
        liquid.style.height = '62%';
        titleEl.textContent = btn.getAttribute('data-pure-label');
        descEl.textContent = 'Pure sample state restored.';
        btn.textContent = originalBtnText;
      }
    });
  });

  /* ------------------------------------------------------------------------
     3. CATEGORY FILTER & HOME DETECTIVE CHECKLIST FOR DART SECTION
     ------------------------------------------------------------------------ */
  const categoryTabs = document.querySelectorAll('.cat-tab');
  const dartCards = document.querySelectorAll('.dart-card');

  categoryTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      categoryTabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');

      const selectedCategory = tab.getAttribute('data-category');

      dartCards.forEach((card) => {
        const cardCat = card.getAttribute('data-category');
        if (selectedCategory === 'all' || cardCat === selectedCategory) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  const checkButtons = document.querySelectorAll('.check-home-btn');
  const detectiveCounter = document.getElementById('detective-counter');

  function updateDetectiveCount() {
    const doneCount = document.querySelectorAll('.check-home-btn.done').length;
    if (detectiveCounter) {
      detectiveCounter.textContent = `${doneCount} / ${checkButtons.length} Home Tests Completed`;
      detectiveCounter.style.background = doneCount === checkButtons.length ? '#65B96B' : '#F28B36';
    }
  }

  checkButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const done = btn.classList.toggle('done');
      btn.textContent = done ? '✅ Tested at Home!' : '⬜ Mark Tested';
      updateDetectiveCount();
    });
  });

  /* ------------------------------------------------------------------------
     4. REVEAL ANIMATION ON SCROLL
     ------------------------------------------------------------------------ */
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1 }
  );

  revealElements.forEach((el) => revealObserver.observe(el));
});
