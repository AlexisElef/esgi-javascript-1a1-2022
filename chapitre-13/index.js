const request = new XMLHttpRequest();

function onLoad() {
  const xmlDocument = request.responseXML;
  const champions = xmlDocument.children[0];

  for (const champion of champions.children) {
    const championAttributes = champion.attributes;

    // TODO: Créer une ligne dans le tableau

    for (const championAttribute of championAttributes) {
      if (championAttribute.name === "side") {
        // TODO: ajouter le side au tableau
      }
    }

    for (const child of champion.children) {
      if (child.nodeName !== "skills") {
        // TODO: ajouter le contenu de enfant au tableau
      }
    }
  }
}

request.addEventListener("load", onLoad);

request.open("GET", "../chapitre-12/lol.xml");

request.send();
