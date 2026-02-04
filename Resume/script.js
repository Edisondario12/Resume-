const form = document.getElementById("recommendation-form");
const list = document.getElementById("recommendations-list");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nameInput = document.getElementById("rec-name");
  const msgInput = document.getElementById("rec-message");

  const name = nameInput.value.trim();
  const message = msgInput.value.trim();

  if (message.length === 0) return;

  // Create new card
  const card = document.createElement("div");
  card.className = "recommendation-card";

  const text = document.createElement("p");
  text.className = "recommendation-text";
  text.textContent = `"${message}"`;

  const author = document.createElement("p");
  author.className = "recommendation-author";
  author.textContent = name ? `— ${name}` : "— Anonymous";

  card.appendChild(text);
  card.appendChild(author);

  // Task 7: append to existing list
  list.appendChild(card);

  // Task 9: confirmation pop-up
  alert("Thank you! Your recommendation was submitted.");

  // Clear inputs
  nameInput.value = "";
  msgInput.value = "";
});
