// Payment processing
import { reduceStock } from './product.js';
import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './discount.js';

// Process payment
export function processPayment(paymentMethod, couponCode = null) {
  const items = getCartItems();
  const subtotal = getCartTotal();
  let finalAmount = subtotal;
  let discount = 0;

  if (couponCode) {
    const result = applyDiscount(subtotal, couponCode, items);
    discount = result.discount;
    finalAmount = result.finalTotal;
  }

  if (!validatePaymentMethod(paymentMethod))
    return { status: "failed", message: "Invalid payment method" };

  items.forEach(item => {
    reduceStock(item.productId, item.quantity);
  });

  clearCart();

  return {
    orderId: generateOrderId(),
    items,
    subtotal,
    discount,
    total: finalAmount,
    paymentMethod,
    status: "success",
    message: "Order placed successfully"
  };
}

// Validate payment method
export function validatePaymentMethod(method) {
  return method === "card" || method === "upi" || method === "cod";
}

// Generate order ID
function generateOrderId() {
  return 'ORD' + Date.now();
}
