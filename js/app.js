// CARROUSEL

// Seleccionamos los elementos
const carousel = document.querySelector("#carrusel");
const content = document.querySelector("#contenido");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

//Espacio entre elementos en el carrusel
const space = 20;

// obtener la acnchura del carrusel al cargar la pagina o redimensionar la ventana
let width = carousel.offsetWidth;
window.addEventListener("resize", () => {
  width = carousel.offsetwidth; //cada vez que se modifquue la pantalla, actualizamos la anchura
});

// Funcion para desplazarse hacia la derecha
next.addEventListener("click", () => {
  carousel.scrollBy(width + space, 0); //Desplazar hacia la dercha sumando la anchura del contenido y el espacio entre elementos
  if (carousel.scrollWidth !== 0) prev.style.display = "flex"; //Mostrar el boton "Anterior" si hay mas contenido hacia la izquierda

  if (content.scrollWidth - width - space <= carousel.scrollLeft + width)
    next.style.display = "none"; //ocultar el boton siguiente si no hay mas contenido
});

// Funcion para desplazarse hacia la izquierda
prev.addEventListener("click", () => {
  carousel.scrollBy(-(width - space), 0); //Desplazar hacia la izquierda restando la anchura del contenido y el espacio entre elementos
  if (carousel.scrollLeft - width - space <= 0) prev.style.display = "none"; //Ocultar el boton "Anterior" si hay mas contenido hacia la derecha

  if (!content.scrollWidth - width - space <= carousel.scrollLeft + width)
    next.style.display = "flex"; //mostrar el boton siguiente si no hay mas contenido
});
