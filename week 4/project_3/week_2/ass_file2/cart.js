import { getProductById, checkStock } from './product.js';

let cartItems = [];

// Add product to cart
export function addToCart(productId, quantity) {
  const product = getProductById(productId);
  if (!product) return "Product Not found";
  if (!checkStock(productId, quantity)) return "No stock available";

  const existingProduct = cartItems.find(item => item.productId === productId);
  if (existingProduct) {
    existingProduct.quantity += quantity;
  } else {
    cartItems.push({ productId, quantity });
  }
  return "Item added to cart successfully";
}

// Remove product from cart
export function removeFromCart(productId) {
  cartItems = cartItems.filter(item => item.productId !== productId);
  return "Item removed from cart";
}

// Update product quantity
export function updateQuantity(productId, newQuantity) {
  if (!checkStock(productId, newQuantity)) return "Not enough stock";
  const item = cartItems.find(i => i.productId === productId);
  if (!item) return "Item not in cart";
  item.quantity = newQuantity;
  return "Quantity updated";
}

// Get all cart items with details
export function getCartItems() {
  return cartItems.map(item => {
    const product = getProductById(item.productId);
    return {
      productId: item.productId,
      name: product.name,
      price: product.price,
      quantity: item.quantity,
      category: product.category,
      total: product.price * item.quantity
    };
  });
}

// Get total cart value
export function getCartTotal() {
  return getCartItems().reduce((acc, item) => acc + item.total, 0);
}

// Clear cart
export function clearCart() {
  cartItems = [];
}
