let nacionalidad = "Venezolana";
function suma(a, b) {
  let sumar = a + b;
  return sumar;
}

function resta(a, b) {
  let restar = a - b;
  return restar;
}

function saludo() {
  return `Hola mi nacionalidad es ${nacionalidad}`;
}

export const funciones = {
  suma: suma,
  resta, //O asi, que es mas simple
  saludo,
};
