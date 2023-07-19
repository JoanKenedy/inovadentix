const cerrar = document.getElementById("close-promo");
const modal = document.getElementById("modal-promo");

setTimeout(function () {
    modal.classList.add("abrir");
}, 3000);

cerrar.addEventListener('click', function(){
    modal.classList.remove("abrir");
});