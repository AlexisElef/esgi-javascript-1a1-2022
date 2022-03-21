// Je récupère la balise HTML sous la forme d'un objet JavaScript
const titleElement = document.getElementById("title");

const inputEmail = document.getElementById("email");

const formElement = document.getElementById("form");

// Je peux récupérer le contenu texte d'une balise
console.log(titleElement.innerText);

// Je peux modifier le contenu texte d'une balise
titleElement.innerText = "Bye, world!";

// Je récupère un "tableau" d'attributs
console.log(titleElement.attributes);

// Je récupère le nombre d'attributs d'une balise
console.log(titleElement.attributes.length);

// Lister les attributs
for (const attribute of titleElement.attributes) {
  // Affichage du nom de l'attribut
  console.log(`Nom de l'attribut : ${attribute.name}`);

  // Affichage de la valeur de l'attribut
  console.log(`Valeur de l'attribut : ${attribute.value}`);
}

// Affichage d'un DOMTokenList (liste de classes CSS)
console.log(titleElement.classList);

// Vérifie si une classe existe pour un élément
if (!titleElement.classList.contains("text-red")) {
  // Ajoute une nouvelle classe CSS
  titleElement.classList.add("text-red");
}

// Permet d'ajouter un attribut à un élément
titleElement.setAttribute("title", "Vous venez de passer la souris sur le titre");

// Supprimer un attribut
// inputEmail.removeAttribute("required");

// Créé un élément HTML en mémoire vive
const inputPassword = document.createElement("input");

// Ajoute un élément au DOM
formElement.appendChild(inputPassword);

// Ajouter un attribut à mon input
inputPassword.setAttribute("required", true);

// Ajouter un type password à mon input
inputPassword.setAttribute("type", "password");
