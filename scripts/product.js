init();

async function init() {
  const productId = getId();
  const product = await fetchProduct(productId);
  console.log(product);

  renderProduct(product); // {}
}

function getId() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get("id");

  return id;
}

async function fetchProduct(id) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const result = await response.json();

  return result;
}

function renderProduct(product) {
  const div = document.createElement("div");
  div.className = "product";

  const img = document.createElement("img");
  img.src = product.image;
  div.append(img);

  const title = document.createElement("p");
  title.textContent = product.title;
  div.append(title);

  const price = document.createElement("strong");
  price.textContent = product.price;
  div.append(price);

  const stars = "<span>⭐️</span>".repeat(Math.round(product.rating.rate));
  div.insertAdjacentHTML("beforeend", stars);

  const ratingCount = document.createElement("div");
  ratingCount.textContent = `(${product.rating.count})`;
  div.append(ratingCount);

  document.body.append(div);
}
