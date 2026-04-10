// csikos menu kis képernyőn
function toggleMenu() {
    document.querySelector(".menu").classList.toggle("active");
}
// a kereső nem müködik üzenet
const searchInput = document.getElementById("searchInput");

  searchInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      event.preventDefault(); 
      alert("Sajnáljuk, a kereső jelenleg nem működik.");
      searchInput.value = ""; 
    }
  });

// hirlevél felirakozás üzenet
const form = document.getElementById("newsletterForm");
const atfedes = document.querySelector(".newsletter-atfedes");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // popup megjelenítése
        atfedes.classList.add("active");

        // automatikus bezárás 3 mp után
        setTimeout(() => {
            atfedes.classList.remove("active");
        }, 3000);

        // form ürítése
        form.reset();
    });
}

// popup bezárás gomb
function atfedestBezar() {
    atfedes.classList.remove("active");
}

// háttérre kattintás = bezárás
if (atfedes) {
    atfedes.addEventListener("click", function(e) {
        if (e.target === atfedes) {
            atfedes.classList.remove("active");
        }
    });
}

// vissza a tetejére gomb 

 const btn = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  });