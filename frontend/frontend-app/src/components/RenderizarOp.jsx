function RenderizarOpcion() {
    var select = document.getElementById("opciones");
    var opcionElegida = select.options[select.selectedIndex].text;
    document.getElementById("opcionElegida").innerHTML = "Opción elegida: " + opcionElegida;
}

export default RenderizarOpcion;