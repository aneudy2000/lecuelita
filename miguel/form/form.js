window.onload = function() {
    document.getElementById("submit")
    .addEventListener("click", function(){
        imprimirNombre(); 
    });
    
    document.getElementById("borrar")
    .addEventListener("click", function(){
        borrar(); 
    });    
    
}
function imprimirNombre(){
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var elementoResultado = document.getElementById("resultado");

    elementoResultado.innerText = nombre + " " + apellido;
}    

function borrar(){
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    var elementoResultado = document.getElementById("resultado");

       elementoResultado.innerText = "";

}