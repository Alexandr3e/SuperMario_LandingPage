

const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector(".modal");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const linkDoVideo = video.src;

function alternarModal() {
  modal.classList.add("aberto");
}

// Abrir a modal (clicar no botão e abrir o video)

botaoTrailer.addEventListener("click", () => {
  alternarModal();
  video.setAttribute("src", linkDoVideo);
});


// Fechar a modal (clicar no "X" e fechar)

botaoFecharModal.addEventListener("click", () => {
  alternarModal();
  video.setAttribute("src", "");
});




