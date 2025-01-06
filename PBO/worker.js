// Array untuk menyimpan data produk
const products = [];

// Referensi elemen
const productForm = document.getElementById('product-form');
const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const productList = document.getElementById('product-list');

// Fungsi untuk menambah produk ke dalam daftar
function addProduct(event) {
  event.preventDefault();

  // Ambil data produk dari input
  const productName = productNameInput.value;
  const productPrice = parseFloat(productPriceInput.value);

  if (productName && !isNaN(productPrice)) {
    // Tambahkan produk ke dalam array
    const newProduct = {
      name: productName,
      price: productPrice,
    };
    products.push(newProduct);

    // Update tampilan daftar produk
    renderProductList();

    // Reset form input
    productNameInput.value = '';
    productPriceInput.value = '';
  }
}

// Fungsi untuk merender daftar produk
function renderProductList() {
  // Kosongkan daftar produk sebelumnya
  productList.innerHTML = '';

  // Render produk satu per satu
  products.forEach((product, index) => {
    const productItem = document.createElement('div');
    productItem.classList.add('product-item');
    productItem.innerHTML = `
      <strong>${product.name}</strong> - Rp ${product.price.toLocaleString()}
      <button onclick="deleteProduct(${index})">Hapus</button>
    `;
    productList.appendChild(productItem);
  });
}

// Fungsi untuk menghapus produk dari daftar
function deleteProduct(index) {
  products.splice(index, 1);
  renderProductList();
}

// Event listener untuk form penambahan produk
productForm.addEventListener('submit', addProduct);
// Mendaftar service worker jika browser mendukung
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then((registration) => {
      console.log('Service Worker terdaftar dengan sukses:', registration);
    })
    .catch((error) => {
      console.log('Pendaftaran Service Worker gagal:', error);
    });
}
