function ocultar(evento) {
    let componente = evento.target;
    componente.style.visibility = "hidden";
}

var botones = document.querySelectorAll("li button");

for(let boton of botones) {
    boton.addEventListener("click", ocultar);
}