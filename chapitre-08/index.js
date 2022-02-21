// Création d'un tableau
const fruits = [
  "banana",
  "apple",
  "pear"
];

// Accès à une valeur
const firstFruit = fruits[0];

// Modifier une valeur à un index donné
fruits[1] = "lemon";

// Supprime (garde l'emplacement intacte)
// delete fruits[1];

// Boucle sur les valeurs d'un tableau
for (const fruit of fruits) {
  console.log(fruit);
}

// Optimisaton pour la boucle for
const fruitsLength = fruits.length;

// Boucler sur les indexes du tableau (1ère version)
for (let index = 0; index < fruitsLength; index++) {
  console.log(index);
}

// Boucler sur les indexes du tableau (2ème version)
for (const index in fruits) {
  console.log(index);
}

// Ajouter un élément par son index directement
fruits[fruitsLength] = "strawberry";

console.log(fruits);

// Permet d'ajouter un élément à la fin sans utilisation d'index
fruits.push("apple");

console.log(fruits);
