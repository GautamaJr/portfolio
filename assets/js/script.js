/*--------------------------------------------------------------
# BOTÃO "LER MAIS" NA SEÇÃO SOBRE
--------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
  let readMoreBtn = document.querySelector(".read-more");
  let setTextElement = document.querySelector(".set-text");

  readMoreBtn.addEventListener("click", () => {
    setTextElement.classList.add("expand-text");
  });
});
// --------------- Fim da seção Sobre ---------------

/*--------------------------------------------------------------
# MENU MOBILE
--------------------------------------------------------------*/
const btnMobile = document.getElementById('btn-mobile');
const nav = document.getElementById("nav");
const navOptions = document.querySelectorAll(".option-mobile"); // Selecionar todas as opções do menu

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  btnMobile.setAttribute('aria-expanded', active);
  if (active) {
    btnMobile.setAttribute('aria-label', 'Fechar Menu');
    document.body.style.overflow = 'hidden'; // Impede o scroll da página
  } else {
    btnMobile.setAttribute('aria-label', 'Abrir Menu');
    document.body.style.overflow = ''; // Restaura o comportamento padrão do scroll da página
  }
}

function closeMenu() {
  nav.classList.remove('active');
  btnMobile.setAttribute('aria-expanded', false);
  btnMobile.setAttribute('aria-label', 'Abrir Menu');
  document.body.style.overflow = ''; // Restaura o comportamento padrão do scroll da página
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

navOptions.forEach((option) => {
  option.addEventListener('click', () => {
    closeMenu();
  });
});

// --------------- Fim do Menu Mobile ---------------

/*--------------------------------------------------------------
# EFEITO DE HOVER NOS CARDS DE PROJETOS PARA DISPOSITIVOS MOVEIS
--------------------------------------------------------------*/
// Verifica se o dispositivo é um dispositivo móvel
// const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

// Armazena a referência do elemento atualmente com 'hover'
let elementoAtualHover = null;

// Função para remover 'hover' do elemento atual
function removerHoverAtual() {
  if (elementoAtualHover) {
    elementoAtualHover.classList.remove("card-active");
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
    this.classList.add("card-active");

    // Atualiza o elemento atualmente com 'hover'
    elementoAtualHover = this;
  });
});
// --------------- Fim do efeito Hover nos Cards ---------------

/*--------------------------------------------------------------
# MENU ATIVO
--------------------------------------------------------------*/
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

// --------------- Fim do Menu Ativo ---------------

/*--------------------------------------------------------------
# ANIMAÇÃO SCROLL
--------------------------------------------------------------*/
function initAnimacaoScroll() {
  const sections = document.querySelectorAll(".js-scroll");

  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowMetade < 0;
        if (isSectionVisible) {
          section.classList.add("ativo");
        } else {
          section.classList.remove("ativo");
        }
      });
    }

    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}

initAnimacaoScroll();

// --------------- Fim da animação scroll ---------------

/*--------------------------------------------------------------
# ANIMAÇÃO (PLUGIN)
--------------------------------------------------------------*/
if (window.SimpleAnime) {
  new SimpleAnime();
}
// --------------- Fim da animação ---------------
