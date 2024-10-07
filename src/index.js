import { createItem } from './services/item.js';
import * as cartService from './services/cart.js';

// Iniciando os carrinhos
const myCart = [];
const myWishList = [];

console.log("🟠 Welcome to the your Shopee Cart🟠");

// Criando os itens
const item1 = await createItem('Calculadora', 29.90, 3);
const item2 = await createItem('Caderno', 49.99, 4);
const item3 = await createItem('PlayStation 5', 3499.99, 1);

// Adicionando itenss ao carrinho
await cartService.addItemToCart(myCart, item1);
await cartService.addItemToCart(myCart, item2);

await cartService.addItemToCart(myWishList, item3);

// Deletando itens do carrinho
// await cartService.delCartItem(myCart, item1.name);

// Removendo em 1 de algum item do carinho
await cartService.removeCartItem(myCart, item1);

// Mostrando os itens do carrinho
await cartService.displayCart(myCart);

// Cálculo final
await cartService.calculateTotal(myCart);