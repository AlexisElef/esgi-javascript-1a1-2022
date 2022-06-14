"use strict";

// À faire : gérer toutes les erreurs de coupure de réseau (internet, Wi-Fi, ...)
// Fait : gérer un loader qui s'affiche à l'écran (le faire apparaître uniquement tant que la réponse du serveur n'est pas arrivée)
// Fait : rajouter des images liées aux conditions météo récupérées (image de pluie s'il pleut, soleil s'il fait beau, ...)

/* eslint-disable */

/**
 * Récupère l'élément ayant l'identifiant "weather"
 * @see https://developer.mozilla.org/fr/docs/Web/API/Document/getElementById
 */
const weatherForm = document.getElementById("weather");

/**
 * Récupère l'élément ayant l'identifiant "weather-condition"
 * @see https://developer.mozilla.org/fr/docs/Web/API/Document/getElementById
 */
const weatherConditionImage = document.getElementById("weather-condition");

/**
 * Récupère l'élément ayant l'identifiant "loader"
 * @see https://developer.mozilla.org/fr/docs/Web/API/Document/getElementById
 */
const loaderElement = document.getElementById("loader");

/**
 * Récupère l'élément ayant l'identifiant "error"
 * @see https://developer.mozilla.org/fr/docs/Web/API/Document/getElementById
 */
const errorElement = document.getElementById("error");

/**
 * Écoute l'événement "submit" déclenché lorsqu'un utilisateur essaie de soumettre le formulaire
 * @see https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener
 * @see https://developer.mozilla.org/fr/docs/Web/API/HTMLFormElement/submit_event
 */
weatherForm.addEventListener("submit", function(event) {
  /**
   * Récupère un élément HTML par son identifiant (attribut "id")
   * @see https://developer.mozilla.org/fr/docs/Web/API/Document/getElementById
   */
  const cityInput = document.getElementById("city");

  /**
   * Récupérer la valeur d'une ville et retire tous les espaces avant et après qui sont en trop
   * @see https://developer.mozilla.org/fr/docs/Web/API/HTMLInputElement#properties
   * @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
   */
  const city = cityInput.value.trim();

  /**
   * Créer un nouvel objet de la classe XMLHttpRequest
   * @see https://developer.mozilla.org/fr/docs/Web/API/XMLHttpRequest
   */
  const request = new XMLHttpRequest();

  /**
   * Empêche que le formulaire ne déclenche une requête HTTP par le navigateur (comportement par défaut)
   * @see https://developer.mozilla.org/fr/docs/Web/API/Event/preventDefault
   */
  event.preventDefault();

  /**
   * Si la ville n'est pas renseignée, ne rien faire (champ de texte du formulaire vide)
   */
  if (city.length === 0) {
    return;
  }

  /**
   * Écoute l'événement "load" déclenché lorsqu'une réponse HTTP est reçue par le navigateur
   * @see https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener
   * @see https://developer.mozilla.org/fr/docs/Web/API/HTMLFormElement/submit_event
   */
  request.addEventListener("load", function() {
    /**
     * Récupère la réponse au format XML
     * @see https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseXML
     */
    const xmlResponse = request.responseXML;

    /**
     * Récupère le premier enfant de la réponse XML
     * @see https://developer.mozilla.org/fr/docs/Web/API/Element/children
     */
    const currentElement = xmlResponse.children[0];

    /**
     * Récupère le 10ème enfant de la réponse XML
     * @see https://developer.mozilla.org/fr/docs/Web/API/Element/children
     */
    const weatherElement = xmlResponse.getElementsByTagName("weather")[0];

    /**
     * Récupère le deuxième enfant
     * @see https://developer.mozilla.org/fr/docs/Web/API/Element/children
     */
    const temperatureElement = currentElement.children[1];

    /**
     * Récupère un attribut en fonction de son nom
     * @see https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap/getNamedItem
     */
    const temperatureAttribute = temperatureElement.attributes.getNamedItem("value");

    /**
     * Récupère la valeur d'un attribut
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Attr
     */
    const temperature = temperatureAttribute.value;

    /**
     * Récupère le paragraphe
     * @see https://developer.mozilla.org/fr/docs/Web/API/Document/getElementById
     */
    const outputParagraph = document.getElementById("output");

    /**
     * Modifie le texte d'un élément HTML
     * @see https://developer.mozilla.org/fr/docs/Web/API/HTMLElement/innerText
     */
    outputParagraph.innerText = temperature + "°C";

    /**
     * Ajoute l'icône de la condition météo
     * @see https://developer.mozilla.org/fr/docs/Web/API/Element/setAttribute
     * @see https://developer.mozilla.org/fr/docs/Web/API/Element/getAttribute
     */
    weatherConditionImage.setAttribute("src", "https://openweathermap.org/img/wn/" + weatherElement.getAttribute("icon") + "@2x.png");

    /**
     * Suppression de la classe "loader--hidden"
     * Affiche l'image en supprimant la classe qui la dissimule
     * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/remove
     */
    weatherConditionImage.classList.remove("weather-condition--hidden");
  });

  request.addEventListener("error", function() {
    /**
     * Ajout d'un texte d'erreur à l'élément contenant les erreurs
     * @see https://developer.mozilla.org/fr/docs/Web/API/HTMLElement/innerText
     */
    errorElement.innerText = "An error occurred, please try again later";
  });

  request.addEventListener("loadstart", function() {
    /**
     * Ajout d'un texte d'erreur à l'élément contenant les erreurs
     * @see https://developer.mozilla.org/fr/docs/Web/API/HTMLElement/innerText
     */
    errorElement.innerText = "";

    /**
     * Ajout de la classe "loader"
     * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/add
     */
    loader.classList.add("loader");

    /**
     * Suppression de la classe "loader--hidden"
     * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/remove
     */
    loader.classList.remove("loader--hidden");
  });

  request.addEventListener("loadend", function() {
    /**
     * Ajout de la classe "loader--hidden"
     * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/add
     */
    loader.classList.add("loader--hidden");

    /**
     * Suppression de la classe "loader"
     * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/remove
     */
    loader.classList.remove("loader");
  });

  /**
   * Paramètre la requête HTTP
   * @see https://developer.mozilla.org/fr/docs/Web/API/XMLHttpRequest/open
   */
  request.open("GET", "https://api.openweathermap.org/data/2.5/weather?mode=xml&units=metric&q=" + city + "&appid=f31995fb1e1d69ac2f5d2053ca040a3b");

  /**
   * Demande au navigateur d'envoyer la requête HTTP au serveur
   * @see https://developer.mozilla.org/fr/docs/Web/API/XMLHttpRequest/send
   */
  request.send();
});

