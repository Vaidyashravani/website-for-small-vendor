// Sample Product Data
const productData = [
    { name: "Chocolate Cake", price: 499, image: "chocolate_cake.jpg", category: "cakes" },
    { name: "Vanilla Cupcakes", price: 299, image: "vanilla_cupcake.jpg", category: "cupcakes" },
    { name: "Strawberry Shortcake", price: 599, image: "strawberry_shortcake.jpg", category: "cakes" },
    { name: "Lemon Pie", price: 450, image: "lemon_pie.jpg", category: "pies" }
  ];
  
  // Display Products on Home Page
  const productList = document.getElementById("product-list");
  productData.forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.className = "product-card";
    productDiv.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>Price: ₹${product.price}</p>
      <button onclick="viewProductDetails('${product.name}')">View Details</button>
    `;
    productList.appendChild(productDiv);
  });
  
  // Search Products by Name
  function searchProduct() {
    const query = document.getElementById("searchBar").value.toLowerCase();
    const filteredProducts = productData.filter(product => product.name.toLowerCase().includes(query));
    displayProducts(filteredProducts);
  }
  
  // Display filtered products
  function displayProducts(products) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = '';
    products.forEach(product => {
      const productDiv = document.createElement("div");
      productDiv.className = "product-card";
      productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>Price: ₹${product.price}</p>
        <button onclick="viewProductDetails('${product.name}')">View Details</button>
      `;
      productList.appendChild(productDiv);
    });
  }
  
  // View product details
  function viewProductDetails(productName) {
    const product = productData.find(p => p.name === productName);
    if (product) {
      alert(`Product: ${product.name}\nPrice: ₹${product.price}\nCategory: ${product.category}`);
    }
  }
  