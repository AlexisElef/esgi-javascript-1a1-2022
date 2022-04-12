const tableBody = document.getElementById("table-body");
const request = new XMLHttpRequest();

function onLoad() {
  const xmlDocument = request.responseXML;
  const champions = xmlDocument.children[0];

  for (const champion of champions.children) {
    const championAttributes = champion.attributes;
    const tableRow = document.createElement("tr");

    for (const championAttribute of championAttributes) {
      if (championAttribute.name === "side") {
        const tableCell = document.createElement("td");

        tableCell.innerText = championAttribute.value;
        tableRow.appendChild(tableCell);
      }
    }

    for (const child of champion.children) {
      if (child.nodeName !== "skills") {
        const tableCell = document.createElement("td");

        tableCell.innerText = child.textContent;
        tableRow.appendChild(tableCell);
      }
    }

    tableBody.appendChild(tableRow);
  }
}

request.addEventListener("load", onLoad);
request.open("GET", "../chapitre-12/lol.xml");
request.send();

// TODO: ajouter les compétences de chaque champions dans le tableau
