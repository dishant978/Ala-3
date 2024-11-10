let cart = [];
let totalAmount = 0;

function addToCart(productName, price) {
    const cartItem = { name: productName, price: price };
    cart.push(cartItem);
    updateCartDisplay();
    alert(${productName} has been added to your cart.);
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    const cartCount = document.getElementById('cartCount');
    const cartTotal = document.getElementById('cartTotal');

    cartCount.innerText = cart.length;

    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cartItems.innerHTML = '';
        totalAmount = 0;
        cart.forEach(item => {
            const itemElement = document.createElement('p');
            itemElement.innerText = ${item.name} - $${item.price.toFixed(2)};
            cartItems.appendChild(itemElement);
            totalAmount += item.price;
        });
    }

    cartTotal.innerText = totalAmount.toFixed(2);
}

function toggleCart() {
    const cartSection = document.getElementById('cartSection');
    cartSection.classList.toggle('hidden');
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty. Add some products first!");
    } else {
        alert(Thank you for shopping! Your total is $${totalAmount.toFixed(2)}.);
        cart = [];
        updateCartDisplay();
        toggleCart();
    }
}