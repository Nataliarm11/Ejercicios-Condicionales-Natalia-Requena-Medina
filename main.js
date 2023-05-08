// //1 ejercicio



// let numeroUno = Number (prompt ("Ingrese el primer numero"))
// let numeroDos = Number (prompt ("Ingrese el segundo numero"))
// console.log (numeroUno)
// console.log(numeroDos)

// let mayor = numeroUno > numeroDos

// console.log ("el numero uno es mayor que el numero dos: " , mayor)


//2 ejercicio 

// let numeroUno = Number (prompt ("Ingrese el primer numero"))
// let numeroDos = Number (prompt ("Ingrese el segundo numero"))
// console.log (numeroUno)
// console.log(numeroDos)

// let igual = numeroUno === numeroDos

// if (igual) {
//     console.log("El numero uno y el numero dos son iguales")
// }else {
//     console.log("el numero uno y el numero dos son diferentes")
// }

//3 ejercicio

// let numeroUno = Number (prompt ("Ingrese el primer numero"))
// let numeroDos = Number (prompt ("Ingrese el segundo numero"))
// console.log (numeroUno)
// console.log(numeroDos)


// if( numeroUno == numeroDos ) {
//     console.log ("los numeros son iguales")
// } else if ( numeroUno > numeroDos ) {
//     console.log ("el numero mayor es:" , numeroUno)
// }else {
//     console.log ("el numero mayor es:" , numeroDos)
// }


//4 ejercicio

// let numeroUno = Number (prompt ("Ingrese el primer numero"))
// let numeroDos = Number (prompt ("Ingrese el segundo numero"))
// let numeroTres = Number (prompt ("Ingrese el tercer numero"))
// console.log (numeroUno)
// console.log(numeroDos)
// console.log(numeroTres)

// if (numeroUno < numeroDos && numeroUno < numeroTres) {
//     console.log ("El numero menor es:", numeroUno)
// } else if (numeroDos < numeroUno && numeroDos < numeroTres) {
//     console.log ("El numero menor es:", numeroDos)
// }else {
//     console.log ("El numero menor es:", numeroTres)
// }

//5 ejercicio

// const personaUno = {
//     nombre: "Julian",
//     edad: 22,
//     altura: 1.75,
// }

// const personaDos = {
//     nombre: "Miguel",
//     edad: 12,
//     altura: 1.65,
// }

// if ()

//6 ejercicio Realizar un programa que permita ingresar por pantalla tu nombre, edad, altura, visión y  permita determinar si estás capacitado para conducir. La persona deberá cumplir con una  edad mínima de 18 años, medir más de 150 cm y tener una visión de 8 de 10 como mínimo.


//  let nombre = prompt("Ingresa tu nombre:");
//  let edad = Number ( prompt ("Ingrese su edad"))
//  let altura = Number ( prompt ( "Ingrese su altura en cms"))
//  let vision = Number ( prompt ("Ingrese su visión de 0 a 10"))


//  let capacitadoParaConducir = edad >= 18 && altura > 150 && vision >= 8;

//  console.log("Nombre: " + nombre);
//  console.log("Edad: " + edad);
//  console.log("Altura: " + altura + " cm");
//  console.log("Visión: " + vision + " / 10");

//  if (capacitadoParaConducir) {
//    console.log("Estás capacitado para conducir.");
//  } else {
//    console.log("No estás capacitado para conducir.");
//  }

// 7ejercicio Realizar un programa que permita el ingreso de los siguientes datos: Nombre, pase (vip o normal), si posee entrada (si o no, s o n, true o false). Las personas que posean tu mismo nombre tienen ingreso libre así como también los que posean un pase vip, mostrar un mensaje de bienvenida. Si posee entrada preguntar si desea utilizarla, en caso afirmativo mostrar  mismo mensaje de bienvenida. Y por último de no tener el mismo nombre o poseer un pase vip  o entrada, preguntar si desea comprar, caso afirmativo solicitar dinero disponible, si posee  $1000 o mas, mostrar mensaje de venta de entrada y bienvenida, caso contrario mostrar  mensaje de rechazo de venta, y en caso contrario a no querer comprar, mostrar mensaje de  despedida

// let nombre = prompt("Ingresa tu nombre:");
// let pase = prompt("Ingresa tu tipo de pase (VIP o NORMAL):");
// let entrada = prompt("¿tiene entrada? (Sí o No):");

// entrada = entrada.toLowerCase() === "sí" || entrada.toLowerCase() === "si" || entrada.toLowerCase() === "true";


// let ingreso = nombre === "Natalia" || pase === "VIP";

// if (ingreso || entrada) {
//   console.log("Bienvenido/a, " + nombre + "!");
// } else {

//   let comprar = confirm("¿Compra entrada?");

//   if (comprar) {
 
//     let dinero = parseInt(prompt("Ingresa su dinero disponible:"));

//     if (dinero >= 1000) {
//       console.log("Venta de entrada realizada. Bienvenido/a, " + nombre + "!");
//     } else {
//       console.log("Lo siento, no posees suficiente dinero para comprar una entrada.");
//     }
//   } else {
//     console.log("Chao, " + nombre + ". ¡Que tengas un buen día!");
//   }
// }




//8 ejercicio Realizar un juego de adivinanza estableciendo un valor entre 1 y 10 en una variable  llamada numeroIncognita y que permita en 3 intentos adivinar el número. El usuario deberá  ingresar un numero del 1 al 10 por pantalla en 3 intentos el cual se deberá guardar en una variable llamada numeroIngresado, y en cada intento deberás mostrarle un mensaje al usuario diciendo: “el numero ingresado es mayor, vuelve a intentarlo” o “el numero ingresado es menor, vuelve a intentarlo” o en caso de adivinar, un mensaje que diga: “Ganaste, has adivinado el número.” 

// let numeroIncognita = 8;

// let intentos = 3;

// while (intentos > 0) {
//   let numeroIngresado = Number(prompt("Intento " + (4 - intentos) + ": Ingresa un número del 1 al 10:"));
//   if (numeroIngresado > numeroIncognita) {
//     console.log("El número ingresado es mayor, vuelve a intentarlo.");
//   } else if (numeroIngresado < numeroIncognita) {
//     console.log("El número ingresado es menor, vuelve a intentarlo.");
//   } else {
//     console.log("Ganaste, Has adivinado el número.");
//     break;
//   }
//   intentos--;
// }
// if (intentos === 0) {
//   console.log("Tenias 3 intentos,El número era " + numeroIncognita + ".");
// }

//No. 9 Crear un programa que permita ingresar tu edad y decir si eres un infante (0 a 12 años),  adolescente(13 a 18 años), un mayor joven (19 a 45 años) o un anciano (más de 45 años), y en  caso de ingresar una edad mayor a 100 mostrar un mensaje preguntando si en realidad tiene  esa edad.

// let edad = Number (prompt("Ingrese su edad"))

// if (edad >= 0 && edad <= 12) {
//   console.log("Eres un infante.");
// } else if (edad >= 13 && edad <= 18) {
//   console.log("Eres un adolescente.");
// } else if (edad >= 19 && edad <= 45) {
//   console.log("Eres un mayor joven.");
// } else if (edad > 45 && edad <= 100) {
//   console.log("Eres un anciano.");
// } else if (edad > 100) {
//   let confirmacion = confirm("¿Estás seguro de que tienes " + edad + " años?");
//   if (confirmacion) {
//   }  
// }


//No.10 Crear un programa que permita el ingreso de “PIEDRA”, “PAPEL” o “TIJERAS” a 2  jugadores y muestre en pantalla cuál de los 2 ha ganado o si han empatado. En caso de algún  ingreso incorrecto mostrar por pantalla que uno de los jugadores ha hecho trampa.

//  let jugador1 = prompt("Jugador 1: Ingresa tu jugada (piedra, papel o tijeras):").toLowerCase();
//  let jugador2 = prompt("Jugador 2: Ingresa tu jugada (piedra, papel o tijeras):").toLowerCase();


//  let opcionesValidas = ["piedra", "papel", "tijeras"];

// if (!opcionesValidas.includes(jugador1) || !opcionesValidas.includes(jugador2)) {
//    console.log("Uno de los jugadores ha hecho trampa. Ingresaste una opción inválida.");
//  } else {
   

//    if (jugador1 === jugador2) {
//      console.log("¡Empate!");
//    } else if (
//      (jugador1 === "piedra" && jugador2 === "tijeras") ||
//      (jugador1 === "papel" && jugador2 === "piedra") ||
//      (jugador1 === "tijeras" && jugador2 === "papel")
//    ) {
//      console.log("¡Jugador 1 gana!");
//    } else {
//      console.log("¡Jugador 2 gana!");
//   }
//  }



// No. 11Realizar un programa que permita el ingreso de un color y utilizando “switch” mostrar 
// por pantalla los siguientes mensajes según las opciones: 
// ● Blanco o Negro: Falta de color.
// ● Verde: El color de la naturaleza.
// ● Azul: El color del agua.
// ● Amarillo: El color del sol.
// ● Rojo: El color del fuego.
// ● Marrón: el color de la tierra.
// ● y para cualquier otro valor: Excelente elección, no lo teníamos pensado.

//let color = prompt("Ingrese un color:").toLowerCase();


// switch (color) {
//   case "blanco":
//   case "negro":
//     console.log("Falta de color");
//     break;
//   case "verde":
//     console.log("El color de la naturaleza");
//     break;
//   case "azul":
//     console.log("El color del agua");
//     break;
//   case "amarillo":
//     console.log("El color del sol");
//     break;
//   case "rojo":
//     console.log("El color del fuego");
//     break;
//   case "marrón":
//     console.log("El color de la tierra");
//     break;
//   default:
//     console.log("Excelente elección, no lo teníamos pensado");
//     break;
// }


//No. 12  Realizar un programa que permita el ingreso de 2 valores numéricos y una operación. Según sea la operación ingresada (suma, resta, multiplicación, división) el programa deberá  mostrar en pantalla un mensaje junto con el resultado. En caso de haber elegido división realizar la operación siempre que sea posible o mostrar un mensaje de ERROR si el divisor ingresado fue 0.

//  let valor1 = parseFloat(prompt("Ingrese el primer numero:"));


//  let valor2 = parseFloat(prompt("Ingrese el segundo numero:"));


//  let operacion = prompt("Ingrese la operación deseada (suma, resta, multiplicación, división):");


//  let resultado;


//  switch (operacion) {
//    case "suma":
//      resultado = valor1 + valor2;
//      console.log("El resultado de la suma es:", resultado);
//      break;
//    case "resta":
//      resultado = valor1 - valor2;
//      console.log("El resultado de la resta es:", resultado);
//      break;
//    case "multiplicación":
//      resultado = valor1 * valor2;
//      console.log("El resultado de la multiplicación es:", resultado);
//      break;
//    case "división":
//      if (valor2 !== 0) {
//        resultado = valor1 / valor2;
//       console.log("El resultado de la división es:", resultado);
//      } else {
//        console.log("ERROR: No se puede dividir entre cero.");
//      }
//      break;
//    default:
//      console.log("Operación no válida. Por favor, elija suma, resta, multiplicación o división.");
//  }


///No. 13  Crear un programa que permita ingresar todos los datos de tu documento nacional de  identidad, mostrar por pantalla un mensaje que imprima todos los datos ingresados y  pregunte si están correctos los mismos. En caso afirmativo, crear un objeto llamado dni con  todos los datos ingresados y mostrarlos por consola con console.table() más un mensaje de  registro exitoso, en caso de que la persona rechace confirmar los datos, mostrar un mensaje  que diga: vuelva a intentarlo en 1 mes.


// let numeroDNI = prompt("Ingrese el número de DNI:");
// let nombres = prompt("Ingrese sus nombres:");
// let apellidos = prompt("Ingrese sus apellidos:");
// let fechaNacimiento = prompt("Ingrese su fecha de nacimiento (DD/MM/AAAA):");
// let lugarNacimiento = prompt("Ingrese su lugar de nacimiento:");
// let direccion = prompt("Ingrese su dirección:");


// console.log("Datos ingresados:");
// console.log("Número de DNI:", numeroDNI);
// console.log("Nombres:", nombres);
// console.log("Apellidos:", apellidos);
// console.log("Fecha de Nacimiento:", fechaNacimiento);
// console.log("Lugar de Nacimiento:", lugarNacimiento);
// console.log("Dirección:", direccion);

// let confirmarDatos = confirm("¿Son correctos los datos ingresados?");


// if (confirmarDatos) {

//   let dni = {
//     numeroDNI: numeroDNI,
//     nombres: nombres,
//     apellidos: apellidos,
//     fechaNacimiento: fechaNacimiento,
//     lugarNacimiento: lugarNacimiento,
//     direccion: direccion
//   };


//   console.log("Registro exitoso. Datos del DNI:");
//   console.table(dni);
// } else {
//   console.log("Vuelva a intentarlo en 1 mes.");
// }

