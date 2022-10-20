let num = 0;
String numStg = "resultado";

boton = document.getElementById("boton");
mostrador = document.getElementById("mostrador");

function suma(){
    num++;
    console.warn("Valor incrementado en 1, total: " + num);
    // Hacer que el recuadro mostrador se actualice con el valor de num
    mostrador.innerHTML = num;
}
