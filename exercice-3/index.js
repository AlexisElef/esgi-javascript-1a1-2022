const request = new XMLHttpRequest();
const fetchButton = document.getElementById("fetch");
const tableBody = document.getElementById("table-body");

function fetchArticles() {
  request.addEventListener("load", function() {
    console.log(request.responseXML);
  });

  request.open("GET", "./index.xml");
  request.send();
}

fetchButton.addEventListener("click", fetchArticles);
