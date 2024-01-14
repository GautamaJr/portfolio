// JS do botão "Ler mais" na sessão Sobre
document.addEventListener("DOMContentLoaded", () => {
  let readMoreBtn = document.querySelector(".read-more");
  let setTextElement = document.querySelector(".set-text");

  readMoreBtn.addEventListener("click", () => {
    setTextElement.classList.add("expand-text");
  });
});

// Fim do JS da sessão Sobre

// JS do Menu Mobile
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

// Fim do JS do Menu Mobile

// Efeito Hover nos cards de projetos em dispositivos mobile
// Verifica se o dispositivo é um dispositivo móvel
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (isMobile) {
  // Armazena a referência do elemento atualmente com 'hover'
  let elementoAtualHover = null;

  // Função para remover 'hover' do elemento atual
  function removerHoverAtual() {
    if (elementoAtualHover) {
      elementoAtualHover.classList.remove("card-hover");
      elementoAtualHover = null;
    }
  }

  document.addEventListener("click", function (event) {
    // Verifica se o clique ocorreu fora do elemento
    if (!event.target.closest(".card")) {
      removerHoverAtual();
    }
  });

  // Adiciona o ouvinte de evento de clique a todos os elementos
  document.querySelectorAll(".card").forEach(function (elemento) {
    elemento.addEventListener("click", function () {
      // Remove 'hover' do elemento atual
      removerHoverAtual();

      // Adiciona 'hover' ao elemento clicado
      this.classList.add("card-hover");

      // Atualiza o elemento atualmente com 'hover'
      elementoAtualHover = this;
    });
  });
}

// JS do Menu Ativo
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

// Fim do JS do Menu Ativo

// Animação
if (window.SimpleAnime) {
  new SimpleAnime();
}
