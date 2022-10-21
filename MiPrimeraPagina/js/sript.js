let num = 0;

boton = document.getElementById("boton");
mostrador = document.getElementById("mostrador");
win = document.getElementById("win");

function suma(){
    num++;
    console.warn("Valor incrementado en 1, total: " + num);
    mostrador.value = num;

    if (num == 3){
        win.innerHTML = "¡Has ganado!";
    }
}
