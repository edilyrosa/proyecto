//***********CLASE 34 */

//1. Programa una funcion que cuente el numero de caracteres de una cadena de texto.
export const cuentaCadena = (cadena = "") =>
  !cadena //Si cadena viene vacia
    ? console.warn("Digite una cadena de texto valida, por favor")
    : console.info(
        `La cadena enviada "${cadena}" tiene ${cadena.length} caracteres`
      );

//2. Programa una funcion que te devuelva el texto recortado, segun el nuemero de carcateres indicado por parametro.
export const recorte = (cadena = "", n) =>
  !cadena || !n
    ? console.warn("Digite informacion valida, por favor")
    : console.info(
        `Al cortar la cadena enviada: "${cadena}" dejandole ${n} caracteres, se lee: "${cadena.slice(
          0,
          n
        )}"`
      );

//*3. programa una funcion que dada una String, te devuelva un array de textos separados, por cierto caracter  */

export const separarPalabra = function (cadena, separador) {
  let nuevoArray = cadena.split(separador);
  return nuevoArray;
};

/**4. Programa una funcion que repita n cantidad de veces un texto,  */
export const repite = function (cadena, repeat) {
  if (!cadena) {
    return console.warn("Digite texto valida, por favor");
  }
  if (repite === undefined)
    return console.warn("Digite numero deveces valida, por favor");

  if (repite === 0) return console.error("numero de veces no puede ser 0");

  if (Math.sign(repeat) === -1)
    return console.error("numero de veces no puede ser negativo");

  let repeticion = " ";
  for (let i = 0; i < repeat; i++) {
    repeticion += cadena + " ";
  }
  return repeticion;
};

//**5. Programa una funcion que invierta las palabras de una cadena dada*/

export const revierteText = (cadena = "") => {
  if (!cadena)
    return console.warn("El texto digitado no es una cadena de texto valido");

  const arrayTexto = cadena.split(""); //el texto lo hacemos ARRAY, para poder revertir sus caracteres, ya siendo elementos.
  const arrayRvertido = arrayTexto.reverse(); //revertimos los elementos del array, manteniendodo en TDD Array

  let textoReverso = arrayRvertido.join(""); //convertimos el array en STRING

  return console.log(textoReverso);
};

//**6. Programa una funcion q devuelva el numero de veces que se repite una palabra dada en un texto largo dado*/

export const palabraRepetida = (cadena, palabra) => {
  let textoArry2 = cadena.split(" ");

  let contador = 0;
  textoArry2.forEach((el) => {
    if (el === palabra) contador++;
  });
  return console.log(
    `EJERCICIO 6. el numero de veces que la palabra "${palabra}" se repite en el texto dado es ${contador}`
  );
};

//Ejercicio 6, Otra forma de conseguir palabras repetidas.
export const palabraRepetidaWhile = (cadena, texto) => {
  if (!cadena || !texto) return console.warn("Ingrese los datos validos.");

  let i = 0;
  let contador = 0;

  while (i !== -1) {
    i = cadena.indexOf(texto, i);
    if (i !== -1) {
      i++;
      contador++;
    }
  }
  return console.info(`La palabra "${texto}" se repite ${contador} veces`);
};

//**7. Programe una funcion boleana que valide si una palabra o frase dada es un palindromo  */
export const palindromo = (palabra) => {
  palabra = palabra.toLowerCase();
  let palabraRevertida = palabra.split("").reverse().join("");

  console.log(palabraRevertida);
  console.log(palabra);

  if (palabraRevertida == palabra) {
    return console.log("true");
  } else {
    return console.log("False");
  }
};

//**8. Programe una funcion que elimine cierto patron de caracteres de un texto dado */

export const eliminaPatron = (texto, patron) => {
  !texto || !patron
    ? console.warn("Digite caracteres validos, por favor")
    : console.info(
        `el patron ${patron} ha sido eliminado del texto, quedando asi ${texto.replace(
          new RegExp(patron, "ig"),
          " "
        )}`
      );
};

//**9. programa una funcion que obtenga un numero aleatorio entre 501 y 600 */

export const numeroAleatorio = () => {
  console.info(
    `El numero aleatorio es ${Math.round(Math.random() * 100) + 500}`
  );
};

//**10. Programa una funcion que reciba un numero, y evalue si es capicua o no,  */

export const capicua = (numero) => {
  if (!numero) console.warn("Digitie un numero");

  if (typeof numero !== "number")
    console.error(`El valor "${numero}" ingresado, NO un numero`);

  let numeroDigitado = numero.toString();
  let numeroRevertido = numeroDigitado.split("").reverse().join("");

  return numeroDigitado === numeroRevertido
    ? console.info(`Numeros son capicuos`)
    : console.log("Numeros NO son capicuos");
};

//**10. Programa una funcion que calcule el factorial de un numero  (El factorial lde un entero positivo n, se define como el producto de todos los numeros  enteros positivos desde 1 hasta n) */

export const factorial = (numero = undefined) => {
  if (numero === undefined) return console.warn("Digite un numero");
  if (numero === 0) return console.warn("Numero no puede ser 0");
  if (numero < 0) return console.warn("Numero no puede ser Negativo");

  if (typeof numero !== "number")
    return console.error("Digite un numero valido");

  let factorial = 1;
  for (let i = numero; i > 1; i--) {
    factorial = factorial * i;
  }
  return console.log(`El factorial de ${numero} es ${factorial}`);
};
//**12. Programa una funcion Boleana, que determine si un numero es primo(aquel que solo es divisible por si mismo y 1) */

export const numeroPrimo = (numero = undefined) => {
  if (numero === undefined) return console.warn("Digite un numero");
  if (numero === 0) return console.warn("Numero no puede ser 0");
  if (numero < 0) return console.warn("Numero no puede ser Negativo");
  if (typeof numero !== "number")
    return console.error("Digite un numero valido");

  let divible = false;
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      //con que sea divisible con cualerquier otro numero diferente a 1 o si mismo deja de ser PRIMO
      divible = true;
      break;
    }
  }
  return divible === true
    ? console.log(`El numero ${numero} NO es primo`)
    : console.log(`El numero ${numero} ES primo`);
};

//**13. Programe una funcion que determine si un numero es par o impar  */

export const parImpar = (numero = undefined) => {
  if (numero === undefined) return console.warn("Digite un numero");
  if (!numero) return console.warn("Numero no Puede ser 0");
  numero % 2 === 0
    ? console.info(`El Numerp ${numero} es PAR`)
    : console.info(`El Numerp ${numero} es IMPAR`);
};

//**14. Programa una funcion para convertir grados Celsius a Fahrenheit y viceversa */

export const convierteGrados = (grados, unidad) => {
  if (typeof grados !== "number" || !unidad)
    console.warn("Digite correctamente los datos");

  if (unidad.length !== 1 || !/(C|F)/i.test(unidad))
    console.error('La unidad debe ser "C" o "F"');
  else if (unidad.toLowerCase() === "c") {
    //Debo devolver a F
    let gradosF = grados * (9 / 5) + 32;
    return console.log(`${grados} C = ${gradosF} F`);
  } else if (unidad.toLowerCase() === "f") {
    //Debo devolver a C
    let gradosC = (grados - 32) * (5 / 9);
    return console.log(`${grados} F = ${gradosC} C`);
  }
};

//**15. Programa una funcion para comvertir numeros de base binaria a decimales y viceversa */
export const convertirBinarioDecimal = (num, base) => {
  if (num === undefined || base === undefined)
    return console.warn("No ingreso nungun valor ");

  if (typeof num !== "number" || typeof base !== "number")
    return console.warn(`el valor digitado "${num}" NO es un numero`);

  if (base === 2) {
    //Convertir de Binaria a Decimal
    return console.info(`${num} base ${base} = ${parseInt(num, base)} Base 10`);
  } else if (base === 10) {
    return console.info(`${num} base ${base} = ${num.toString(2)} Base 2`);
  } else {
    console.error(`Esta base no esta prevista en el programa`);
  }
};

//**16. Programa una funcion que devuelva el monto final, despues de aplicar un descuento a una cantidad dada,  */
export const descuentoMonto = (precio, descuento) => {
  if (typeof precio !== "number" || typeof descuento !== "number")
    return console.warn("Dato digitado no son TDD numero ");

  if (!precio) return console.warn("El dato Precio no puede ser 0 o vacio.");

  if (Math.sign(precio) === -1 || Math.sign(descuento) === -1)
    return console.warn("El dato no puede negativo");

  return console.info(
    ` $${precio} - ${descuento}% de descuento = $${
      precio - 0.01 * descuento * precio
    }`
  );
};

//**17. Programa una funcion que dada una fecha valida, determine cuantos anos han pasado hasta el dia de hoy */
export const CuentaAnios = (fecha) => {
  if (fecha === undefined) return console.warn("No ha introducido el DATO.");
  if (fecha instanceof Date !== true)
    return console.warn("No ha introducido una fecha VALIDA.");

  let fechaDada = fecha.getTime();

  let fechaTamp = new Date().getTime();

  let milisegundosResultado = fechaTamp - fechaDada;

  let milisegundosEnUnAnio = 1000 * 60 * 60 * 24 * 365;

  let aniosTotales = Math.round(milisegundosResultado / milisegundosEnUnAnio);

  return Math.sign(aniosTotales) === -1 //metio una fecha futura, asi que dara negativo pq no alcansara con el tiempo desde 1970
    ? console.info(
        `Para la fecha  ${fecha.toLocaleDateString()} faltan: ${Math.abs(
          aniosTotales
        )} ano`
      )
    : Math.sign(aniosTotales) === 1
    ? console.info(
        `Han pasado ${aniosTotales} anios desde ${fecha.toLocaleDateString()}`
      )
    : console.info(`Estamos en el anio actual, ${fecha.toLocaleDateString()}`);
};
