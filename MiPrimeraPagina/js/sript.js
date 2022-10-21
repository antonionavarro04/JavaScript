let num = 0;

boton = document.getElementById("boton");
mostrador = document.getElementById("mostrador");

function suma(){
    num++;
    console.warn("Valor incrementado en 1, total: " + num);
    mostrador.value = num;
}
