// Guarda la cantidad seleccionada por producto mientras la pagina esta abierta.
const productQuantities = {};

function formatPrice(price) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0
  }).format(price);
}

function getProductsByCategory(category) {
  const allProducts = window.GGamerData.products;

  if (category === "destacados") {
    return allProducts.filter(function (product) {
      return product.featured;
    });
  }

  return allProducts.filter(function (product) {
    return product.category === category;
  });
}

function createProductCard(product) {
  if (typeof productQuantities[product.id] !== "number") {
    productQuantities[product.id] = 0;
  }

  const siteContext = window.GGamerData.getSiteContext();

  return (
    '<article class="product-card" data-product-id="' + product.id + '">' +
      '<div class="product-media">' +
        '<img src="' + siteContext.productImagePath(product.image) + '" alt="' + product.alt + '">' +
      "</div>" +
      '<div class="product-info">' +
        '<span class="card-tag">' + product.tag + "</span>" +
        "<h3>" + product.title + "</h3>" +
        "<p>" + product.description + "</p>" +
        '<div class="product-footer">' +
          '<span class="price">' + formatPrice(product.price) + "</span>" +
          '<div class="quantity-controls" aria-label="Cantidad del producto">' +
            '<button class="quantity-button" type="button" data-action="decrease" aria-label="Restar una unidad">-</button>' +
            '<span class="quantity-value" data-quantity-value aria-live="polite">' + productQuantities[product.id] + "</span>" +
            '<button class="quantity-button" type="button" data-action="increase" aria-label="Sumar una unidad">+</button>' +
          "</div>" +
        "</div>" +
      "</div>" +
    "</article>"
  );
}

function renderProducts() {
  const productContainers = document.querySelectorAll("[data-products-container]");

  productContainers.forEach(function (container) {
    const category = container.dataset.category;
    const categoryProducts = getProductsByCategory(category);

    container.innerHTML = categoryProducts.map(createProductCard).join("");
  });
}

function updateProductQuantity(productCard, action) {
  const productId = productCard.dataset.productId;
  const quantityElement = productCard.querySelector("[data-quantity-value]");
  const currentQuantity = productQuantities[productId] || 0;

  if (action === "increase") {
    productQuantities[productId] = currentQuantity + 1;
  }

  if (action === "decrease") {
    productQuantities[productId] = Math.max(0, currentQuantity - 1);
  }

  quantityElement.textContent = productQuantities[productId];
}

function setupQuantityControls() {
  document.addEventListener("click", function (event) {
    const actionButton = event.target.closest("[data-action]");

    if (!actionButton) {
      return;
    }

    const productCard = actionButton.closest("[data-product-id]");

    if (!productCard) {
      return;
    }

    updateProductQuantity(productCard, actionButton.dataset.action);
  });
}

renderProducts();
setupQuantityControls();
