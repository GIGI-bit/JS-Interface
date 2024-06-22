// function createProductCard(productName, price, imageUrl) {
//   const card = document.createElement("div");
//   card.className = "product-card";
//   const img = document.createElement("img");
//   img.className = "product-image";
//   img.src = imageUrl;
//   img.alt = productName;
//   const name = document.createElement("h2");
//   name.className = "product-name";
//   name.textContent = productName;
//   const priceElement = document.createElement("p");
//   priceElement.className = "product-price";
//   priceElement.textContent = price;
//   card.appendChild(img);
//   card.appendChild(name);
//   card.appendChild(priceElement);
//   return card;
// }

// const productCard = createProductCard(
//   "Sample Product",
//   "$19.99",
//   "https://via.placeholder.com/150"
// );
// document.body.appendChild(productCard);

// function createCommentMessage(author, message, timestamp) {
//   const comment = document.createElement("div");
//   comment.className = "comment-message";
//   const authorElement = document.createElement("h4");
//   authorElement.className = "comment-author";
//   authorElement.textContent = author;
//   const messageElement = document.createElement("p");
//   messageElement.className = "comment-text";
//   messageElement.textContent = message;
//   const timestampElement = document.createElement("span");
//   timestampElement.className = "comment-timestamp";
//   timestampElement.textContent = timestamp;
//   comment.appendChild(authorElement);
//   comment.appendChild(messageElement);
//   comment.appendChild(timestampElement);
//   return comment;
// }

// const comment = createCommentMessage(
//   "John Doe",
//   "This is a comment.",
//   "2024-06-22 12:34"
// );
// document.body.appendChild(comment);

// function createMenuItem(name, price, description) {
//   const menuItem = document.createElement("div");
//   menuItem.className = "menu-item";
//   const nameElement = document.createElement("h3");
//   nameElement.className = "menu-item-name";
//   nameElement.textContent = name;
//   const priceElement = document.createElement("span");
//   priceElement.className = "menu-item-price";
//   priceElement.textContent = price;
//   const descriptionElement = document.createElement("p");
//   descriptionElement.className = "menu-item-description";
//   descriptionElement.textContent = description;
//   menuItem.appendChild(nameElement);
//   menuItem.appendChild(priceElement);
//   menuItem.appendChild(descriptionElement);
//   return menuItem;
// }
// const menuItem = createMenuItem(
//   "Spaghetti Bolognese",
//   "$12.99",
//   "A classic Italian pasta dish with a rich meat sauce."
// );
// document.body.appendChild(menuItem);
