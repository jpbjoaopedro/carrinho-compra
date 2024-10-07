// Adicionar item ao carrinho
async function addItemToCart(userCart, item) {
    userCart.push(item);
};

// Deletar item do carrinho
async function delCartItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);

    if (index !== -1) {
        userCart.splice(index, 1)
    };
};

// Remover item do carrinho - diminui em um a quantidade    
async function removeCartItem(userCart, item) {
    const indexFound = userCart.findIndex((p) => p.name === item.name);

    if (indexFound === -1) {
        console.log("Item não encontrado");
        return;
    };
    if (userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1;
        return;
    };
    if (userCart[indexFound].quantity === 1) {
        userCart.splice(indexFound, 1);
    };
};

// Mostrar itens do carrinho
async function displayCart(userCart) {
    console.log('\nShopee cart list: ')
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal: ${item.subtotal()}`)
    });
};

// Calcular o total
async function calculateTotal(userCart) {
    const total = userCart.reduce((total, item) => total + item.subtotal(), 0)
    const msg = `\n🛒 Shopee Cart total is: R$ ${Number.parseFloat(total).toFixed(2)} 💵`
    console.log(msg);
};

export {
    addItemToCart,
    delCartItem,
    removeCartItem,
    calculateTotal,
    displayCart
};