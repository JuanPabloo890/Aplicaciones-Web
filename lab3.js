console.log("Variables const let var")
const pi = 3.14159
let cantidad = 10
var pais = "Ecuador"

//Strings - metodos - template literals
console.log("\nStrings - metodos - template literals\nMetodos")
//metodos
console.log("Longitud de la cadena:", "Hola".length);

console.log("¿La cadena contiene 'mundo'?", "Hola mundo".includes("mundo"));

console.log("Cadena en mayúsculas:", "hola".toUpperCase());

console.log("Cadena en minúsculas:", "HOLA".toLowerCase());

console.log("Cadena sin espacios:", "              Hola como estas               ".trim());

console.log("Cadena reemplazada:", "Hola mundo".replace("mundo", "amigos"));

console.log("Parte de la cadena:", "Hello world".slice(1, 8));

console.log("Parte de la cadena:", "Hola mundo".substring(0, 7));

console.log("Carácter en la posición 2:", "Miguel".charAt(2));

console.log("Cadena repetida:", "Hola ".repeat(3));

console.log("Array de substrings:", "Hola mundo".split(" "));

//template literals
console.log("template literals")
let nombre = "Miguel";
let edad = 20;
console.log(`Mi nombre es ${nombre} y tengo ${edad} años.`);

console.log("\nNumeros")
//numeros
//calculo de los gastoa que se hacen mensualmente
let gastosMensuales = 300;
let gastosDiarios = gastosMensuales / 30;
console.log(`Gasto diario estimado en 30 dias: $${gastosDiarios.toFixed(2)}`);

//conversion de dolar a euro

let dolar = 2;
let euro = 0.92
let conversion = dolar * euro
console.log(`La conversion de dolar a euro es: ${conversion.toFixed(2)}`);

//booleanos
console.log("\nBoolean")

let contraseña = "patito123";

if(contraseña === "patito123"){
    console.log("Bienvenido :D")
}else{
    console.log("Contraseña invalida :C")
}

let listaCompras = ["manzanas", "plátanos", "pan", "tomate"];
let buscar = "uvas";
let existeEnLista = listaCompras.includes(buscar);

if (existeEnLista) {
  console.log(`${buscar} está en la lista de compras.`);
} else {
  console.log(`${buscar} no está en la lista de compras.`);
}


console.log("\nCondicionales y bucles")
//Acceso a una pelicula de mayores de 18 años
let edadUsuario = 20;
let edadMinima = 18;


if (edadUsuario >= edadMinima) {
    console.log("¡Bienvenido! Puedes acceder a la película de 50 Sombras de Grey");
} else {
    console.log("Lo siento, eres demasiado joven para acceder a esta película.");
}

//Tabla de multipicar del 5
let numero = 5;
console.log("Tabla de Multiplicar del 5:");


for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(numero + " x " + i + " = " + resultado);
}

console.log("\nFunciones Declaradas")

function salarioNeto(salario){
    const seguroSocial= salario - 75.60;
    const salarioNeto = seguroSocial;
    return salarioNeto;
}


console.log(salarioNeto(2000));

console.log("\nFunciones Anonimas")

const credencialesValidas = {
    usuarioValido: "admin",
    passwordValida: "admin"
};

const validarCredenciales = function(user,pass){
    return user === credencialesValidas.usuarioValido && pass === credencialesValidas.passwordValida;
};


const user = "admin";
const pass = "admin";


if(!validarCredenciales(user,pass)){
    console.log("Credenciales invalidas, ingresar nuevamente");
} else{
    console.log("Aacceso Exitoso !");
}

console.log("\nFunciones Autoejecutadas")

// Variables que pertenecen a esta funcion
let datos = [2,4,6,8,10]
// Funcion para elevar al cuadrado los elementos de un array
function procesarDatos(){
    datos = datos.map(i=> i**2);
    console.log("Datos al cuadrado:", datos);
};
// llamar a la funcion
procesarDatos();

console.log("\nArgumentos y parámetros, Retorno")

//Argumentos y Parámetros
// A continuación creamos dos función que toma
//dos parámetros combinandolos y devolviendo un return


//Funcion para calcular area de rectangulo
function areaRectangulo(base, altura) {
    return base * altura;
}
//Funcion para combinar palabras
function combinarPalabras(palabra1, palabra2) {
    return `${palabra1} ${palabra2}`;
}


//Ahora realizamos una llamada de las funciones con argumentos
let area = areaRectangulo(5, 8);
console.log(`Área del rectángulo: ${area}`);


let combinado = combinarPalabras("Hola ", "Mundo");
console.log(combinado)

//Retorno
//El retorno nos devuelve mensajes. Verificaremos si un número es par y devolver un mensaje
function numeroPar(num) {
    if (num % 2 === 0) {
        return `${num} es un número par.`;
    } else {
        return `${num} no es un número par. `;
    }
}
//Llamamos para mostrar el resultado
let mensaje = numeroPar(7);
console.log(mensaje);

console.log("\nFunciones Flecha")
const numeros = [1, 2, 3, 4, 5];
const multiplicar = numeros.map((x) => x * x); // [1, 4, 9, 16, 25]
console.log(multiplicar);

const nombres = ["Juan", "Pedro", "Maria", "Jose"];
const nombresConP = nombres.filter((nombre) => nombre[0] === "P"); // ["Pedro"] .
console.log(nombresConP);

console.log("\nFundamentos, This")

// This 1
function Persona(nombre) {
    this.nombre = nombre;
  
    this.saludar = function() {
      console.log("Hola, soy " + this.nombre);
    };
  }
  
  // Crear una instancia
  let persona1 = new Persona("Alejandro");
  // Llamada al método saludar
  persona1.saludar();
  

// This 2: Uso de this en una función de flecha
const auto = {
    marca: "Toyota",
    modelo: "Camry",
    obtenerDetalles: function() {
      // Uso de una función de flecha para mantener el valor de this
      setTimeout(() => {
        console.log("Marca: " + this.marca + ", Modelo: " + this.modelo);
      }, 1000);
    }
  };
  
  // Llamada al método obtenerDetalles
  auto.obtenerDetalles();

  