document.addEventListener("DOMContentLoaded", () => {
  /* hamburger menu */

  const menu = document.querySelector(".menu");
  const hamburger = document.querySelector(".hamburger");

  function toggleMenu() {
    menu.classList.toggle("active");
  }

  if (hamburger && menu) {
    hamburger.addEventListener("click", toggleMenu);

    /* kívülre kattintás = menü bezárása */
    document.addEventListener("click", (e) => {
      const isInsideMenu = menu.contains(e.target);
      const isHamburger = hamburger.contains(e.target);

      if (!isInsideMenu && !isHamburger) {
        menu.classList.remove("active");
      }
    });
  }

  /* kereső kezelés */

  const searchInputs = document.querySelectorAll("#searchInput, #searchNav");

  searchInputs.forEach((input) => {
    if (!input) return;

    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        alert("Sajnáljuk, a kereső jelenleg nem működik.");
        input.value = "";
      }
    });
  });

  /* scroll funkciók */

  const backToTopBtn = document.getElementById("backToTop");
  const logo = document.getElementById("logo");
  const searchNav = document.getElementById("searchNav");

  function handleScroll() {
    const scrollY = window.scrollY;
    const isMobile = window.innerWidth < 1024;

    /* back-to-top gomb megjelenítése */
    if (backToTopBtn) {
      backToTopBtn.style.display = scrollY > 300 ? "block" : "none";
    }

    /* logo elrejtése mobilon scrollnál */
    if (logo) {
      if (isMobile && scrollY > 200) {
        logo.classList.add("active");
      } else {
        logo.classList.remove("active");
      }
    }

    /* mobil kereső megjelenítése scrollnál */
    if (searchNav) {
      if (isMobile && scrollY > 200) {
        searchNav.classList.add("active");
      } else {
        searchNav.classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", handleScroll);

  /* hírlevél feliratkozás */

  const form = document.getElementById("newsletterForm");
  const overlay = document.querySelector(".newsletter-atfedes");

  if (form && overlay) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      /* popup megjelenítése */
      overlay.classList.add("active");

      /* automatikus bezárás 3 másodperc után */
      setTimeout(() => {
        overlay.classList.remove("active");
      }, 3000);

      form.reset();
    });

    /* háttérre kattintás = bezárás */
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        overlay.classList.remove("active");
      }
    });
  }

  /* modal bezárása */

  window.atfedestBezar = function () {
    const overlay = document.querySelector(".newsletter-atfedes");

    if (overlay) {
      overlay.classList.remove("active");
    }
  };
});