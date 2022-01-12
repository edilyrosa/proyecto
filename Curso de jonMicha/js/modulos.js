import passWord, { PI, usuario } from "./constantes.js";
import { funciones as fun } from "./aritmetica.js";
import {
  cuentaCadena,
  recorte,
  separarPalabra,
  repite,
  revierteText,
  palabraRepetida,
  palindromo,
  palabraRepetidaWhile,
  eliminaPatron,
  numeroAleatorio,
  capicua,
  factorial,
  parImpar,
  numeroPrimo,
  convierteGrados,
  descuentoMonto,
  convertirBinarioDecimal,
  CuentaAnios,
  cuentaLetras,
} from "./ejerciciosLogica.js";

console.log("😍 Archivo: modulos.js 😍");
console.log(PI + 2); //5.141592653589793
console.log(usuario); //Edily
console.log(fun.suma(3, 4)); //7
console.log(fun.saludo()); //Hola mi nacionalidad es Venezolana
console.log(passWord);

//**Ejercicios de logica */

cuentaCadena("hola mundo"); //Ejercicio 1

console.log(recorte("hola mundo", 4)); //Ejercicio 2

console.log(separarPalabra("hola que tal", " ")); //Ejercicio 3
console.log(repite("hola", 4)); //Ejercicio 4

revierteText("Hola Mundo"); //Ejercio 5

palabraRepetida("Hola mundo", "Hola"); //Ejercio 6

palabraRepetidaWhile("karol hola hola", "hola"); //EJERCICIO 6 La palabra "hola" se repite 2 veces

palindromo("salas"); //Ejercicio 7

eliminaPatron("xuumia xUUabuela xuUes linda", "xuu"); //ejercicio 8

console.log("xhola xamigo".replace(new RegExp("x", "gi"), "")); //hola amigo

numeroAleatorio();
capicua(2002); //Numeros son capicuos

factorial(5);
factorial(0);
parImpar(3);
console.clear();
numeroPrimo(8); //El numero 8 NO es primo
convierteGrados(10, "c"); //10 C = 50 F
convierteGrados(10, "C"); //10 C = 50 F
convierteGrados(10, "P"); //La unidad debe ser "C" o "F"
convierteGrados(0, "c"); //0 C = 32 F

descuentoMonto("i", 20);
descuentoMonto(100, 20);
descuentoMonto(1000, 300);
let x = 100;
console.log(x.toString(2));
console.clear();
console.log(parseInt(100, 2)); //4
console.log(parseInt(100, 8)); //100

convertirBinarioDecimal(100, 2); //100 base 2 = 4 Base 10
convertirBinarioDecimal(1110010, 2); //1110010 base 2 = 114 Base 10
convertirBinarioDecimal(114, 10); //114 base 10 = 1110010 Base 2

let num1 = 100;
let num2 = 1100100;
console.log(parseInt(100, 2)); // TDD N umber
console.log(num1.toString(2)); //1100100 TDD String
console.log(num2.toString(10)); //1100100 TDD String
descuentoMonto(-100, 0); //El dato no puede negativo
descuentoMonto(1000, 20); //El dato no puede negativo
descuentoMonto(1000, 0); //El dato no puede negativo

let date11 = new Date();
console.log(date11 instanceof Date); //true
let nacimiento = console.log(new Date(1970, 0, 1).getTime()); //14400000
console.log(new Date().getTime()); //1641579558595 Milisegundos desde 1/1/1970
console.clear();
CuentaAnios(new Date(1987, 0, 28)); //Han pasado 35 anios desde 28/1/1987
CuentaAnios(new Date(2023, 0, 28)); //Han pasado 35 anios desde 28/1/1987

console.log(typeof descuentoMonto); //function
console.log(typeof "maria"); //string
console.log(typeof {}); //object
console.log(typeof []); //object
console.log([] instanceof Array); //true
console.log({} instanceof Array); //false
console.log({} instanceof Object); //true

let fecha22 = new Date();
console.log(fecha22 instanceof Date); //true

console.log("maria" instanceof String); //false
const maria = new String();
console.log(maria instanceof String); //true

console.log("maria".includes("a"));
console.clear();

cuentaLetras(); //Por favor introduzca la cadena
cuentaLetras(1); //Por favor introduzca una cadena de texto valida
cuentaLetras("Hola Amigos Urenos"); //La cadena pasada tiene 8 vocales y 9
