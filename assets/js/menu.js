// Menu Mobile
let btnMenu = document.getElementById("btn-menu");
let menu = document.getElementById("menu-mobile");
let closeButton = document.querySelector(".btn-close");
let overlay = document.getElementById("overlay-menu");
let navOptions = document.querySelectorAll(".option-mobile");

btnMenu.addEventListener("click", () => {
  menu.classList.add("open-menu");
});

closeButton.addEventListener("click", () => {
  menu.classList.remove("open-menu");
});

overlay.addEventListener("click", () => {
  menu.classList.remove("open-menu");
});

navOptions.forEach((option) => {
  option.addEventListener("click", () => {
    menu.classList.remove("open-menu");
  });
});

// Menu Ativo
// document.addEventListener("DOMContentLoaded", function () {
//   const links = document.querySelectorAll("header .navigation-list a");

//   function verificarVisibilidade() {
//     links.forEach(function (link) {
//       const href = link.getAttribute("href");

//       if (href) {
//         const sectionId = href.substring(1);
//         const section = document.getElementById(sectionId);

//         if (section) {
//           const sectionRect = section.getBoundingClientRect();
//           const isSectionVisible =
//             sectionRect.top >= 0 && sectionRect.top <= window.innerHeight / 2;

//           if (isSectionVisible) {
//             link.classList.add("ativo");
//           } else {
//             link.classList.remove("ativo");
//           }
//         }
//       }
//     });
//   }

//   window.addEventListener("scroll", function () {
//     verificarVisibilidade();
//   });

//   verificarVisibilidade(); // Ativar ao carregar a página
// });
