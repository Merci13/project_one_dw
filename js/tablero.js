$(document).ready(function() {
  //traer el tablero actual
  var tablero = JSON.parse(localStorage.getItem('tablero-actual'));
  document.getElementById("tablero").innerHTML = tablero[1];
});


function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
