// open mobile menu
$("#hamburger").on("click", function (e) {
  if ($("#nav").hasClass("display")) {
    $("#nav").removeClass("display");
    $("#nav").addClass("no-display");
    $("#hamburgerIcon").attr("src", "images/hamburger.svg");
  } else {
    $("#nav").removeClass("no-display");
    $("#nav").addClass("display");
    $("#hamburgerIcon").attr("src", "images/delete.svg");
  }

  e.preventDefault();
});

// close mobile menu
$("nav a").on("click", function (e) {
  if ($(window).width() < 880) {
    $("#nav").addClass("no-display");
    $("#hamburgerIcon").attr("src", "images/hamburger.svg");
  } else {
    $("#nav").addClass("display");
  }
});

// smooth scroll when clicking on anchor link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});