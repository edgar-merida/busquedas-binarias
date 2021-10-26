//EJERCICIO_1 FUNCION QUE ENCUENTRE EL NUMERO MAS REPETIDO EN UN ARRAY
function buscarRepetido(lista) {
    lista.sort(function (a, b) { return a - b });
    let max = 0;
    let resultado;
    let freq = 0;
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === lista[i + 1]) {
            freq++;
        }
        else {
            freq = 0;
        }
        if (freq > max) {
            resultado = lista[i];
            max = freq;
        }
    }
    return resultado;
}
//EJERICICIO 2 Crear función que encuentre letras en un arreglo de números y regrese un nuevo arreglo de letras:
function buscarLetras(arreglo) {
    let letras = [];
    for (let index = 0; index < arreglo.length; index++) {
        const element = arreglo[index];
        if (typeof (element) == "string") {
            letras.push(element);
        }
    }
    return (letras);
}
//EJERCICIO 3 Crear una función que busque el número más grande en un arreglo:
function encontrarMayor(arreglo) {
    let indice = arreglo.length - 1;
    let mayor = arreglo.sort(function (a, b) { return a - b })[indice];
    return mayor;
}
//EJERCICIO 4 Crear una función que busque el número más pequeño en el arreglo:
function encontrarMenor(arreglo) {
    let menor = arreglo.sort(function (a, b) { return a - b })[0];
    return menor;
}

console.log("Arreglo1 es igual a: "+arreglo1);
console.log("Arreglo2 es igual a: "+arreglo2);
console.log("El numero Mas Repetido en el Arreglo1 es: "+buscarRepetido(arreglo1));
console.log("El Arreglo2 Sin extraer Letras es: " + arreglo2 + ".\nEl Nuevo Arreglo2 solo de Letras es: " + buscarLetras(arreglo2) + ".");
console.log("El numero MAYOR encontrado en el Arreglo1 es: " + encontrarMayor(arreglo1));
console.log("El numero MENOR encontrado en el Arreglo1 es: " + encontrarMenor(arreglo1));