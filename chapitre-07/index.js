// On utilise des accolades pour créer un objet
// Chaque objet a des propriétés (firstName, lastName, age)
// Ces propriétés ont des valeurs ("Amin", "NAIRI", 28)
const user = {
  firstName: "Amin",
  lastName: "NAIRI",
  age: 28,
};

// Accéder à une propriété d'un objet
console.log(user.age);
console.log(user.firstName);
console.log(user.lastName);

// Vous essayer d'accéder à une prpopriété qui n'existe pas (undefined)
console.log(user.carName);

// Réaffecter des valeurs à des propriétés
user.age = 12;

// Affiche 12
console.log(user);

// Supprime une propriété d'un objet
delete user.age;

console.log(user);

// Propriété pas connue à l'avance
let inputValue = "firstName";

// Propriété calculée
console.log(user[inputValue]);

// Boucle sur les noms de propriétés
for (const property in user) {
  const value = user[property];
  console.log(property, value);
}
