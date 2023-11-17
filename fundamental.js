let numero = 42;
let isNumber = false;
let cadena = 'Es una cadena';

let suma = 10 + 5;
let multiplicacion = 5 * 10;
let division = 10 / 2 ;
let modulo = 10 % 2;

let edad = 1;

if (edad >= 18) {
    console.log("Eres mayor de edad.");
}



switch (edad) {
    case 18:
        console.log("Tienes 18 años");
        break;

    default:
        console.log("No tienes 18 años");
        break;
}



let i = 0;

while (i < 5) {
    console.log(i);
    i++;
}

for (let i = 0; i < 5; i++) {
    console.log(i);
}



function saludar() {
    let mensaje = "Hola mundo"; // mensaje es una variable local
    return mensaje;
}

saludar();

console.log(mensaje); // mensaje no esta definido en este alcance


const elemento = document.getElementById("miElemento");

elemento.innerHTML = "Nuevo contenido";

elemento.addEventListener("click", miFuncion);

