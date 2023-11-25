// Datos recibidos del formulario
const formData = {
  username: 'Jared77',
  email: 'jared@hotmail.com',
  password: 'admin'
};
// Desestructuración para extraer campos
const { username, email, password } = formData;


console.log(`Usuario: ${username}, Correo Electrónico: ${email}, Contraseña: ${password}`);

//Modificar usuarios de un formulario
const usuario = {
  nombre: "Jared",
  apellido: "Valenzuela",
  Edad: 21
};


Object.freeze(usuario);


// Intentar modificar el objeto (esto no tendrá efecto)
usuario.apellido = "Fernandez";


console.log(usuario);

//Copiar Objetos
//En este caso copiaremos la informacion con objetos para que combine la información de un usuario y detalles
'use strict';
const user = {
  nombre: "Heyer",
  apell: "Tinoco",
  edad: 20
};


const infoExtra = {
  direccion: {
      ciudad: "Quito",
      telefono: "0987542666",
      calle: "Calderon"
  },
  videojuegos: ['League of Legends', 'Valorant', 'Hollow Knight'],
}


const todaInfo = { ...user, ...infoExtra};
console.log(todaInfo);

//this en Objetos:
'use strict';
//Usaremos el this para referirse a propiedades del objeto
const carro = {
  marca: "Toyota",
  modelo: "Camry",
  anio: 2022,
  iniciarMecanismo(){
      console.log(`${this.marca} ${this.modelo}' inicio el mecanismo`);
  },
  detenerMecanismo: function(){
      console.log(`${this.modelo} ${this.modelo}' detener el mecanismo`);
  }
};


carro.iniciarMecanismo(); //Imprime "Toyota Camry inicio el mecanismo"
carro.detenerMecanismo(); //Imprime "Toyota Camry detener el mecanismo"


// Métodos
const automovil = {
marca: "Toyota",
modelo: "Corolla",
año: 2022,
características: ["Bluetooth", "Cámara de retroceso", "Control de crucero"],
estáDisponible: true,
iniciarMotor() {
  return "¡Motor encendido!";
},
detenerMotor() {
  return "¡Motor apagado!";
}
};

console.log("Recuperar las claves del objeto:", Object.keys(automovil));
console.log("Obtener los valores del objeto:", Object.values(automovil));
console.log("Obtener las claves y valores del objeto en un array:", Object.entries(automovil));

//Nombres Abreviados

const productName = "Smartphone";
const productPrice = 800;

const newProduct = {
name: productName,
price: productPrice
};

console.log(newProduct);

// Crear un arreglo
let arr = [1, 2, 3, 4, 5];


// Método forEach para iterar sobre el arreglo
arr.forEach(function (item, index) {
console.log(`El elemento en el índice ${index} es ${item}`);
});


// Método push para agregar un elemento al final del arreglo
arr.push(6);


// Método pop para eliminar el último elemento del arreglo
arr.pop();


// Método splice para eliminar el elemento en el índice 2
arr.splice(2, 1);


// Método map para crear un nuevo arreglo con los resultados de la llamada a una función para cada elemento del arreglo
let newArr = arr.map(function (item) {
return item * 2;
});


console.log(arr); // Imprime el arreglo original
console.log(newArr); // Imprime el nuevo arreglo



// Crear un array con elementos
const array = [1, 2, 3, 4, 5];


// Recorrer el array utilizando un bucle for
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
 
}
console.log('------------------');
// Recorrer el array utilizando el método forEach
array.forEach((element) => {
  console.log(element);
});
console.log('------------------');


// Recorrer el array utilizando el método map
const newArray = array.map((element) => {
  return element * 2;
});
console.log(newArray);
console.log('------------------');
// Recorrer el array utilizando el método for...of
for (const element of array) {
  console.log(element);
}

//RECORRIDO


//Un local de cosmeticos quiere saber las ventas diarias que tiene y en un nuevo arreglo quiere saber la cantidad duplicada.


//FOR


let ventasDiarias = [98.5, 88, 102.30, 77,7, 103, 110];


for (let i = 0; i < ventasDiarias.length; i++) {
  console.log(`Día ${i + 1}: ${ventasDiarias[i]} ventas`);
}


//for-of


console.log("\nUsando for-of:");
let dia = 1;
for (let ventas of ventasDiarias) {
  console.log(`Día ${dia}: ${ventas} ventas`);
  dia++;
}


//foreach


console.log("\nUsando forEach:");
ventasDiarias.forEach(function (ventas, index) {
  console.log(`Día ${index + 1}: ${ventas} ventas`);
});


//map


console.log("\nUsando map:");
let ventasDuplicadas = ventasDiarias.map(function (ventas) {
  return ventas * 2;
});


ventasDuplicadas.forEach(function (ventas, index) {
  console.log(`Día ${index + 1}: ${ventas} ventas (duplicadas)`);
});

//Rest
// Creamos una lista de estudiantes


const listaEstudiantes = [
  {nombre: "Juan",edad:21,especialidad: "desarrollador web"},
  {nombre: "Diego",edad: 22,especialidad: "analista de sistemas"},
  {nombre: "Pablo",edad:23,especialidad:"Desarrollador aplicaciones mov"}
];
// Aplicamos Rest Operator, donde mostraremos el primer estudiante
// y despues los demas
const [primerEstudiante,...restoEstudiantes] = listaEstudiantes;


console.log(primerEstudiante);
console.log(restoEstudiantes);

// Spread
// Creamos un objeto estudiante con dos atributos
const estudiante = {asignatura:"IoT", numeroMaterias:23}
// Aplicamos Spread que nos traera los atributos del objeto
// estudiantes y despues se establece un nuevo atributo
// al imprimir en consola vemos los astributos del estudiante
// y el nuevo atributo del nuevoEstudiante
const nuevoEstudiante = {...estudiante,nombreCompleto:"Diego Cordova"}


console.log(nuevoEstudiante);
