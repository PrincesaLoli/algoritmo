// document.body.onload = function (){ // documento referente al html, luego se accede al body y se ejecuta la funcion deseada
    // alert("Hola mundo")
// }

function suma() {

    alert ("Este algoritmo realiza una Suma de dos valores ingresados por el usuario");

    var A = + prompt("Por favor ingrese el primer valor"); // ya queda guardado los valores con el Prompt osea se leera automaticamente
    var B = + prompt("Por favor ingrese el segundo valor"); // se le pide al usuario los valores de A y B

    var suma = A + B;

    alert("El resultado de la suma es: "+ suma);

}

function operacionesBasicas(){
   
    alert ("Este algoritmo realiza una operaciones basicas de dos valores ingresados por el usuario");

    var A = + prompt("Por favor ingrese el primer valor");
    var B = + prompt("por favor ingrese el segundo valor");

    var SUMA = A + B;
    var RESTA = A - B;
    var MULTIPLICACION = A * B;
    var DIVISION = A / B;

    alert("El resultado de la suma es : " + SUMA);
    alert("El resultado de la Resta es : " + RESTA);
    alert("El resultado de la Multiplicacion es : " + MULTIPLICACION);
    alert("El resultado de la Division es : " + DIVISION);
// Johana la cagaste no funciona el boton y deberia funcionar
    
}

function comparacion(){
    
    alert ("Este algoritmo determina el mayor de dos numeros ingresados por el usuario");

    var A = prompt("por favor ingrese el primer valor");
    var B = prompt("Por favor ingrese el segundo valor");

    if (A == B) {
        alert ("Son numeros iguales");
    } else if (A > B) {
        alert ("El numero mayor es el primero: "+ A);
    } else {
        alert ( "El mayor es el segundo numero: "+ B);
    }
}

function menordetres(){
    
    alert("Este algoritmo determina el menor de tres numeros ingresados por el usuario");

    var A = prompt("Por favor ingrese el primer valor");
    var B = prompt("Por favor ingrese el segundo valor");
    var C = prompt("Por favor ingrese el tercer valor");

    if ((A == B) && (B == C)){
        alert ("Los numeros son iguales");
    }
    else if ((A < B)&&(A < C)){
        alert("El primer numero es el menor: " + A);
    }
    else if ((B < A)&&(B < C)){
        alert("El segundo numero es el menor: " + B);
    }
    else {
        alert ("el tercer numero es el menor" + C);
    }

}

function numeropareimpar(){
    var A =0;
    var B =0;

    alert("Este algoritmo determinara el numero ingresado por el usuario si es un numero es par o impar");

    A = parseInt(prompt("Por favor ingrese un valor"));

    
    if (A % 2 == 0){
        alert("El numero es par");
    }
    else {
        alert(" El numero es impar");
    }
}
function determinarElCuadrado(){

    alert("Este algoritmo determina el cuadrado de un numero");

    var numero = prompt("Por favor ingrese un numero: ")

    alert("El resultado es:" + (numero ** 2));

}
function areaTriangulo (){

    alert("Este algoritmo determina el area de un triangulo");

    var base = prompt("Por favor ingrese la base del triangulo:");
    var altura = prompt("Por favor escriba la altura del triangulo: ");
    
    alert("El area del triangulo es: " + (base * altura) / 2);
}
function cmaMetros () {

    alert("Este algoritmo determina los centimetros de un valor dado en metros");

    var M = prompt("Por favor ingrese los metros: ");

    alert("Los centimetros son: " + (M * 100));
}
function anoDeNaci () {

    alert("Este algoritmo determina el año en que nacio el usuario");

    var edad = prompt("Por favor escriba su edad: ");

    alert ("Nacio en el año: " + (2022 - edad));
}
function capitalBanco () {

    alert("Este algoritmo determina el interes compuesto del 2%  mensual en un determinado numero de años");

    var P = prompt("Por favor escriba su capital: ");
    var A = prompt("Por favor escriba los años: ");

    var N = A * 12
    var R = 2/100
    var resultado = P * ((1 + R)** N - 1)

    alert("capital: "+ P + "años: " + A + "Interes compuesto: " + resultado)
}
function colegioABC () {
    alert("Este algoritmo determina si aprobo o reprobo");

    var nota1 = +prompt("Escriba por favor su primer nota: ");
    var nota2 = +prompt("Escriba por favor su segunda nota: ");
    var nota3 = +prompt("Escriba por favor su tercera nota: ");
    var nota4 = +prompt("Escriba por favor su cuarta nota: ");
    var nota5 = +prompt("Escriba por favor su quinta nota: ");

    var promedio = (nota1 + nota2 + nota3 + nota4 + nota5)/5;

    if (promedio > 3) {
        alert("El estudiante aprobo: " + promedio);
    }else {
        alert("El estudiante reprobo: " + promedio)
    }
}
function manzanaKilo (){
    alert("Este algoritmo muestra cuanto debe pagar por kilo de manzanas el cliente");

    var cantidadDeKilo = prompt("Escriba por favor los kilos: ");
    var kilo = 4500;
    var total = cantidadDeKilo * kilo;
    var descuento = 0;

    if (cantidadDeKilo >= 11){
        descuento = 20;
    }else if(cantidadDeKilo >= 5){
        descuento = 15;
    }else if(cantidadDeKilo >= 2){
        descuento = 10;
    }else{
        descuento = 0;
    }
    alert("El total es: "+ total);
    alert("Su descuento es del: " + descuento + '%');
    const resultado = total - (total * (descuento/100) );
    alert("Su total: "+ resultado);
}