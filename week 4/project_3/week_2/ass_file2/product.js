// Product catalog
const products = [
  { id: 1, name: 'Tablet', price: 25000, stock: 20, category: 'electronics' },
  { id: 2, name: 'Smartwatch', price: 12000, stock: 30, category: 'electronics' },
  { id: 3, name: 'Bluetooth Speaker', price: 4000, stock: 40, category: 'accessories' },
  { id: 4, name: 'Gaming Mouse', price: 1500, stock: 60, category: 'accessories' },
  { id: 5, name: 'Keyboard', price: 3500, stock: 35, category: 'accessories' }
];

// Get product by ID
export function getProductById(id) {
  return products.find(p => p.id === id);
}

// Get all products
export function getAllProducts() {
  return products;
}

// Get products by category
export function getProductsByCategory(category) {
  return products.filter(p => p.category === category);
}

// Search products by name
export function searchProducts(query) {
  return products.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));
}

// Check stock availability
export function checkStock(productId, quantity) {
  const product = getProductById(productId);
  if (!product) return false;
  return product.stock >= quantity;
}

// Reduce stock after purchase
export function reduceStock(productId, quantity) {
  const product = getProductById(productId);
  if (product) product.stock -= quantity;
}
