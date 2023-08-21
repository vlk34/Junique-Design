const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const mainNav = document.querySelector(".main-nav");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

document.querySelectorAll(".nav, .nav-cta").forEach((n) =>
  n.addEventListener("click", () => {
    headerEl.classList.remove("nav-open");
  })
);

// Smooth scrolling animation for internal links
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      // Navigate to external links
      window.location.href = href;
    }
  });
});

///////////////////////////////////////////////////////////
