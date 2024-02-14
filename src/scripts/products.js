document.addEventListener("DOMContentLoaded", async function () {
  const productsContainer = document.getElementById("products");

  try {
    const data = await fetchProducts();
    data.forEach((product) => {
      const productCard = createProductCard(product);
      productCard.addEventListener("click", function () {
        console.log(product);
      });
      productsContainer.appendChild(productCard);
    });
  } catch (error) {
    console.error("Error:", error);
  }
});

async function fetchProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) {
    throw new Error("Error");
  }
  return response.json();
}

function createProductCard(product) {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");

  const imageBlock = document.createElement("div");
  imageBlock.classList.add("image-block");

  const infoBlock = document.createElement("div");
  infoBlock.classList.add("info-block");

  const image = document.createElement("img");
  image.src = product.image;
  imageBlock.appendChild(image);

  const title = document.createElement("h3");
  title.textContent = product.title;
  infoBlock.appendChild(title);

  const price = document.createElement("p");
  price.textContent = `Price: ${product.price}`;
  infoBlock.appendChild(price);

  const description = document.createElement("p");
  description.textContent = product.description;
  infoBlock.appendChild(description);

  productCard.appendChild(imageBlock);
  productCard.appendChild(infoBlock);

  return productCard;
}
