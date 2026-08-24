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


// Reto 4: forEach()

productos.forEach((producto, indice) => {
console.log(`${indice + 1}. ${producto.nombre} - $${producto.precio} - Stock: ${producto.stock}`);
});

// Reto 5: map()

const nombres = productos.map(producto => producto.nombre);
console.log(nombres);

const preciosConIva = productos.map(producto => producto.precio * 1.19);
console.log(preciosConIva);

const nombresMayuscula = productos.map(producto => producto.nombre.toUpperCase());
console.log(nombresMayuscula);

const resumenProductos = productos.map(producto => producto.nombre + " - $" + producto.precio);
console.log(resumenProductos);


// Reto 6: filter() y find()

const mayor_a_100000 = productos.filter(producto => producto.precio > 100000);
console.log(mayor_a_100000);

const entre_50k_y_200k = productos.filter(producto => producto.precio > 50000 && producto.precio < 200000);
console.log(entre_50k_y_200k);

const categoria_1 = productos.filter(producto => producto.categoria === 'Monitores');
console.log(categoria_1);

const buscar = productos.find(producto => producto.id === 5);
console.log(buscar);

function buscar_Producto(id){
    return productos.find(producto => producto.id === id);
}
console.log(buscar_Producto(2));



// Reto 7: some(), every() y reduce()

const hayAgotados = productos.some(producto => producto.stock === 0);
console.log(hayAgotados);

const precioMayor = productos.some(producto => producto.precio > 1000000);
console.log(precioMayor);

const todosPrecioMayor = productos.every(producto => producto.precio > 0);
console.log(todosPrecioMayor);

const todosStockMayor = productos.every(producto => producto.stock > 0);
console.log(todosStockMayor);

const valorInventario = productos.reduce(
(total, producto) => total + producto.precio * producto.stock,
0
);
console.log(valorInventario);


// Reto 8: JavaScript moderno

const productoOriginal = productos[0]; 

const productoModificado = {
  ...productoOriginal,
  precio: 62000,
  stock: 0
};

const mensaje = `El producto ${productoModificado.nombre} cuesta $${productoModificado.precio} y se encuentra ${productoModificado.stock > 0 ? 'Disponible' : 'Agotado'}.`;

console.log(mensaje);
