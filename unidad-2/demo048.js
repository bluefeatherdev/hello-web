// JavaScript for demo048.html

// CONDICIONALES: if, else, ...
let a = 16;
let b = 4 * 4;
if (a === b) {
    console.log(a, "es igual a", b);
} else {
    console.log(a, "es diferente a", b);
}

// CONDICIONALES: switch
let dia = prompt("Ingrese un número del 1 al 7:");
switch (dia) {
    case "1":
        console.log("El día es lunes.");
        break;
    case "2":
        console.log("EL día es martes.");
        break;
    case "3":
        console.log("EL día es miércoles.");
        break;
    case "4":
        console.log("EL día es jueves.");
        break;
    case "5":
        console.log("EL día es viernes.");
        break;
    case "6":
        console.log("EL día es sábado.");
        break;
    case "7":
        console.log("EL día es domingo.");
        break;
    default:
        console.error("¡Error! Solo números del 1 al 7...");
}

// CÍCLICAS: for
for (let i = 0; i < 10; i++) {
    console.log("(for) Número:", i);
}

// CÍCLICAS: while
let cont = 0;
while (cont < 10) {
    console.log("(while) Número:", cont);
    cont++;
}
