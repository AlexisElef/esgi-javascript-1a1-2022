const request = new XMLHttpRequest();
const fetchButton = document.getElementById("fetch");
const tableBody = document.getElementById("table-body");
const loader = document.getElementById("loader");
const cancelButton = document.getElementById("cancel");
const error = document.getElementById("error");

loader.style.visibility = "hidden";

cancelButton.disabled = true;

request.addEventListener("abort", function() {
  error.innerText = "La requête a été annulée par l'utilisateur";
});

function createArticles() {
  const xml = request.responseXML;
  const articles = xml.children[0];

  for (const article of articles.children) {
    const tableRow = document.createElement("tr");

    const articleTitleCell = document.createElement("td");
    const articleDescriptionCell = document.createElement("td");
    const articleDateCell = document.createElement("td");
    const articleImageCell = document.createElement("td");
    const articleImage = document.createElement("img");

    articleTitleCell.innerText = article.children[0].textContent.trim();
    articleDescriptionCell.innerText = article.children[2].textContent.trim();
    articleDateCell.innerText = article.children[1].textContent.trim();

    articleImage.src = article.children[5].getAttribute("url");
    articleImage.style.height = "50px";
    articleImage.style.width = "50px";

    articleImageCell.appendChild(articleImage);

    tableRow.appendChild(articleTitleCell);
    tableRow.appendChild(articleDescriptionCell);
    tableRow.appendChild(articleDateCell);
    tableRow.appendChild(articleImageCell);

    tableBody.appendChild(tableRow);

    loader.style.visibility = "hidden";

    cancelButton.disabled = true;
    fetchButton.disabled = false;

    request.removeEventListener("load", createArticles);
  }
}

function fetchArticles() {
  tableBody.innerHTML = "";
  loader.style.visibility = "visible";
  error.innerHTML = "";

  cancelButton.disabled = false;
  fetchButton.disabled = true;

  request.addEventListener("load", createArticles);
  request.open("GET", "./index.xml");
  request.send();
}

fetchButton.addEventListener("click", fetchArticles);

cancelButton.addEventListener("click", function() {
  request.abort();
  fetchButton.disabled = false;
  cancelButton.disabled = true;
  loader.style.visibility = "hidden";
});
