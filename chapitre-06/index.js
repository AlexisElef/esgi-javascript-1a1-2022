// Variable à tester
const age = 28;

// > : superiorité
// < : infériorité
// <= : infériorité ou égalité
// == : égalité de valeur
// === : égalité de valeur & de type
// != : inégalité de valeur
// !== : inégalité de valeur & de type
// && : associativité (ET)
// || : associativité (OU)
if (age < 18) {
  console.log("Trop jeune");
} else if (age < 70) {
  console.log("Tu peux passer ton permis");
} else {
  console.log("Tu es trop vieux");
}

const role = "ADMINISTRATOR";

switch (role) {
  case "ADMINISTRATOR":
    console.log("Tu es administrateur");
    break;

  case "USER":
  case "ANONYMOUS":
    console.log("Tu es utilisateur");
    break;

  default:
    console.log("Je ne te reconnais pas");
    break;
}
