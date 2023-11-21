const nav = document.querySelector(".nav"),
  searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");
searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  nav.classList.remove("openNav");
  if (nav.classList.contains("openSearch")) {
    return searchIcon.classList.replace("uil-search", "uil-times");
  }
  searchIcon.classList.replace("uil-times", "uil-search");
});
navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});

document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    let slideIndex = 0;
  
    function showSlides() {
      slideIndex++;
      if (slideIndex >= slider.children.length) {
        slideIndex = 0;
      }
      const translateValue = -slideIndex * 100;
      slider.style.transform = `translateX(${translateValue}%)`;
    }
  
    setInterval(showSlides, 3000); 
  });

  