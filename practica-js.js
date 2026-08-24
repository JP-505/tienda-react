// Reto 1: funciones, parámetros y return

// console.log("JavaScript listo para practicar");

function calcularTotal(precio, cantidad) {
const total = precio * cantidad;
return total;
}
const resultado = calcularTotal(50000, 3);
console.log(resultado);

function sumar(a, b) {
    const suma = a + b;
    return suma;
}

const resultadoSuma = sumar(10, 5);
console.log(resultadoSuma);

function restar(a, b) {
    const resta = a - b;
    return resta;
}

const resultadoResta = restar(10, 5);
console.log(resultadoResta);

function multiplicar(a, b){
    const multiplicacion = a * b;
    return multiplicacion;
}

const resultadoMultiplicacion = multiplicar(10, 5);
console.log(resultadoMultiplicacion);

function dividir(a, b){
    const division = a / b;
    return division;
}

const resultadoDivision = dividir(10, 5);
console.log(resultadoDivision);

function promedio(a, b, c){
    const promedio = (a + b + c) / 3;
    return promedio;
}

const resultadoPromedio = promedio(4.0, 3.7, 4.5);
console.log(resultadoPromedio);


// Reto 2: funciones flecha

/*
function aplicarIva(precio) {
return precio * 1.19;
}

const aplicarIva = (precio) => {
return precio * 1.19;
};

const aplicarIva = precio => precio * 1.19;
*/

const cuadrado = (numero) => {
    return numero * numero;
}
console.log(cuadrado(5));


const esMayorEdad = (edad) => {
    return edad >= 18;
}
console.log(esMayorEdad(17));

const nombreCompleto = (nombre, completo) => {
    return nombre + " " + completo;
}
console.log(nombreCompleto("Juan", "Fuentes"));


// Reto 3: arreglos y objetos

const productos = [
  { id: 1, nombre: 'Mouse', precio: 50000, categoria: 'Perifericos', stock: 5 },
  { id: 2, nombre: 'Teclado', precio: 90000, categoria: 'Perifericos', stock: 0 },
  { id: 3, nombre: 'Monitor', precio: 650000, categoria: 'Pantallas', stock: 3 },
  { id: 4, nombre: 'Audífonos Gaming', precio: 180000, categoria: 'Audio', stock: 8 },
  { id: 5, nombre: 'Cámara Web Full HD', precio: 120000, categoria: 'Perifericos', stock: 0 },
  { id: 6, nombre: 'Silla Ergonómica', precio: 450000, categoria: 'Mobiliario', stock: 2 },
  { id: 7, nombre: 'Pad Mouse XL', precio: 35000, categoria: 'Accesorios', stock: 15 },
  { id: 8, nombre: 'Micrófono USB', precio: 220000, categoria: 'Audio', stock: 4 },
  { id: 9, nombre: 'Soporte para Monitor', precio: 85000, categoria: 'Mobiliario', stock: 10 },
  { id: 10, nombre: 'Televisor Smart 43"', precio: 1200000, categoria: 'Pantallas', stock: 6 }
];
