(function () {
  var yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Fade + rise when in view, fade + sink when scrolling out
  var aboutPhoto = document.querySelector(".about-photo");
  if (aboutPhoto) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            aboutPhoto.classList.add("about-photo--in-view");
          } else {
            aboutPhoto.classList.remove("about-photo--in-view");
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(aboutPhoto);
  }
})();
