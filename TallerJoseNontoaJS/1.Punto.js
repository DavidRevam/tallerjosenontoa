/* 1. Dado dos números ingresados por el usuario realizar las 4 operaciones básicas, suma, resta, multiplicación, división e imprimir las operaciones. Validar la división entre 0(cero) */

'use strict'


//---------------------------------------------------SUMA
//Declarar función
const sumar=(num1, num2) => {
    return (num1 + num2);
}

//Pedir datos
let num1 = parseFloat (prompt('Dame el primer valor: '));
let num2 = parseFloat (prompt('Dame el segundo valor'));

let suma = sumar(num1, num2);
alert('Esto es una suma: ' + suma);


//--------------------------------------------------RESTA
const restar=(num1, num2) => {
    return (num1 - num2);
}

let resta = restar(num1, num2);
alert('Esto es una resta: '+ resta);

//--------------------------------------------------MULTIPLICACIÓN
const multiplicar=(num1, num2) => {
    return (num1 * num2);
}

let multiplicacion = multiplicar(num1, num2);
alert('Esto es una multiplicacion:'+ multiplicacion);

//--------------------------------------------------DIVISIÓN
const dividir=(num1, num2) => {
    return (num1 / num2);
}

let division = dividir(num1, num2);
alert('Esto es una division:'+ division);