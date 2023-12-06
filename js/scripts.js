window.addEventListener("load", function () {
    var generarTurnoBtn = document.getElementById("GenerarTurno");
    generarTurnoBtn.addEventListener("click", function (event) {
        event.preventDefault();
        var nombreAnimal = document.getElementById("name").value;
        var sexoAnimal = document.getElementById("sexo").value;
        mostraradvertencia("¡Hola! El turno para " + nombreAnimal + " ya ha sido agendado. " + obtenerMensaje(sexoAnimal) + " con ansias 😽");
    });

    var cerraradvertenciaBtn = document.getElementById("cerrar-advertencia");
    cerraradvertenciaBtn.addEventListener("click", function () {
        ocultaradvertencia();
    });
});

function mostraradvertencia(mensaje) {
    var advertencia = document.getElementById("advertencia");
    var advertenciamensaje = document.getElementById("advertencia-message");

    advertenciamensaje.textContent = mensaje;
    advertencia.style.display = "flex";
}

function ocultaradvertencia() {
    var advertencia = document.getElementById("advertencia");
    advertencia.style.display = "none";
}

function obtenerMensaje(sexo) {
    var mensajeGenero;

    if (sexo.toLowerCase() === "masculino") {
        mensajeGenero = "Lo";
    } else {
        mensajeGenero = "La";
    }

    return mensajeGenero + " esperamos";
}
