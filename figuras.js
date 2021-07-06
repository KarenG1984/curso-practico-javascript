// Cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado) {
  return lado * 4;
} 

function areaCuadrado(lado) {
  return lado * lado;
} 

console.groupEnd();

// Triángulo
console.group("Triángulos");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

console.groupEnd();

// Círculos
console.group("Círculos");

// Diámetro
function diametroCirculo(radio) {
  return radio * 2;
} 

// PI
// const PI = 3.1415;
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Área
function areaCirculo(radio) {
  return (radio * radio) * PI;
}

console.groupEnd();

// Interacción con HTML

function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}