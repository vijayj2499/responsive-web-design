const navslide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    console.log("hello");
  });
};
navslide();
