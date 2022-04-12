/**
 * Récupère notre formulaire
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
 */
const todoForm = document.getElementById("todo-form");

/**
 * Récupère notre input
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
 */
const todoInput = document.getElementById("todo-input");

/**
 * Récupère notre liste non-ordonnées
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
 */
const todoList = document.getElementById("todos");

/**
 * Récupère notre bouton de réinitialisation
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
 */
const todoResetButton = document.getElementById("todo-reset");

/**
 * Lorsque le formulaire est soumis, exécute une fonction anonyme
 * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget
 */
todoForm.addEventListener("submit", function(event) {
  /**
   * Récupère la valeur de l'input
   * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement
   */
  const todoInputValue = todoInput.value;

  /**
   * Créer un nouvel élément li
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
   */
  const todoListItem = document.createElement("li");

  /**
   * Créé un nouvel élément span
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
   */
  const todoListItemText = document.createElement("span");

  /**
   * Créé un nouvel élément button
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
   */
  const todoListItemRemoveButton = document.createElement("button");

  /**
   * Empêche le comportement du navigateur d'envoyer le formulaire à un serveur (et de recharger la page et vider toutes nos todos)
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
   */
  event.preventDefault();

  /**
   * Ajoute du texte à notre span
   * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText
   */
  todoListItemText.innerText = todoInputValue;

  /**
   * Ajoute du texte à notre button
   * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText
   */
  todoListItemRemoveButton.innerText = "Remove";

  /**
   * Lorsque le bouton de suppression est cliqué
   * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget
   */
  todoListItemRemoveButton.addEventListener("click", function() {
    /**
     * Supprime l'élément du DOM
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/remove
     */
    todoListItem.remove();
  });

  /**
   * Ajoute notre span à notre élément de liste
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
   */
  todoListItem.appendChild(todoListItemText);

  /**
   * Ajoute notre button à notre élément de liste
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
   */
  todoListItem.appendChild(todoListItemRemoveButton);

  /**
   * Ajoute notre élément de liste à notre liste non-ordonnées
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
   */
  todoList.appendChild(todoListItem);

  /**
   * Réinitialise le formulaire, vide tous les champs input
   * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reset
   */
  todoForm.reset();
});

/**
 * Lorsque le bouton de réinitialisation est cliqué
 * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget
 */
todoResetButton.addEventListener("click", function() {
  /**
   * Supprime toutes les balises HTML de notre liste non-ordonnées
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
   */
  todoList.innerHTML = "";
});

// Bonus: Pouvoir modifier un input (champ input, bouton "save", bouton "cancel")
