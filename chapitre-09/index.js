// Définition d'une fonction
function sayHello() {
  console.log("Hello");
}

// Fonction avec des arguments
function divide(first, second) {
  console.log(first / second);
}

function multiply(first, second) {
  return first * second;
}

// Valeur par défaut pour les arguments
function subtract(first, second = 0) {
  return first + second;
}

// Fonction variadiques
function add(...numbers) {
  let total = 0;

  for (const number of numbers) {
    total += number;
  }

  return total;
}

console.log(add(1, 2, 3, 4, 5, 6, 7));

function describe(firstname, lastname) {
  return `${firstname} ${lastname}`;
}

console.log(`Nombre d'arguments: ${describe.length}`);
