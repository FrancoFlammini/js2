
let personas = [];

function agregarPersona() {
  let nombre = document.formulario.nombre.value;
  let edad = parseInt(document.formulario.edad.value);
  let estatura = parseFloat(document.formulario.estatura.value);
  let peso = parseFloat(document.formulario.peso.value);
  
  let persona = {nombre: nombre, edad: edad, estatura: estatura, peso: peso};
  personas.push(persona);

  console.log("Se agregó la persona:");
  console.log(persona);

  calcularIMC(persona);
}

function calcularIMC(persona) {
  let imc = persona.peso / Math.pow(persona.estatura/100, 2);
  console.log("El IMC de " + persona.nombre + " es: " + imc.toFixed(2));
}