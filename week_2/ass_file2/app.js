
import { getAllProducts, searchProducts} from './product.js';
import { addToCart, getCartItems, getCartTotal, updateQuantity, removeFromCart } from './cart.js';
import { processPayment } from './payment.js';

console.log('E-Commerce Store');

console.log('ll Products:', getAllProducts());
console.log('Search Results for "phone":', searchProducts('phone'));

console.log(`Adding to Cart`);
addToCart(1, 2);
addToCart(3, 3);
addToCart(1, 1);

console.log('Current Cart');
console.log(getCartItems(), 'Total:', getCartTotal());

console.log('Updating Quantities');
updateQuantity(1, 2);

console.log('Removing Item');
removeFromCart(3);

console.log('Updated Cart');
console.log(getCartItems(), 'Total:', getCartTotal());

console.log('Checkout');
console.log(processPayment('upi', 'WELCOME10'));
