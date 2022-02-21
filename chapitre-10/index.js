const user = {
  email: "anairi@esgi.fr",
  // Méthode (fonction dans un objet)
  sayHello: function(context) {
    return `Hello, ${context}!`;
  }
};

// Appel ma méthode
console.log(user.sayHello("world"));

// Fonction constructrice (pour construire des objets)
function User(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.describe = function() {
    return `${this.firstname} ${this.lastname}`;
  }
}

// Appel du constructeur
const yves = new User("Yves", "SKRZYPCZYK");
const amin = new User("Amin", "NAIRI");
const frederic = new User("Frédéric", "SANANES");
const lucas = new User("Lucas", "LAVANDER");

// Appel des méthodes
console.log(yves.describe());
console.log(amin.describe());
console.log(frederic.describe());
console.log(lucas.describe());
