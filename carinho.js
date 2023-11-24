let cartCount = 0;
let cartItems = [];

function addToCart(productName, price) {
    const existingItem = cartItems.find(item => item.name === productName);

    if (existingItem) {
        // Se o item já existe no carrinho, incrementa a quantidade
        existingItem.quantity++;
    } else {
        // Se o item não existe no carrinho, adiciona como um novo item
        cartItems.push({
            name: productName,
            price: price,
            quantity: 1
        });
    }

    // Atualiza o contador do carrinho
    updateCartCount();

    // Atualiza a lista do carrinho
    updateCartList();

    // Atualiza o total do carrinho
    updateCartTotal();
}

function updateCartCount() {
    cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    document.getElementById('contadorCarrinho').innerText = cartCount;
}

function updateCartList() {
    const cartItemList = document.getElementById('cartItemList');
    cartItemList.innerHTML = '';

    // Adiciona cada item à lista
    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - ${item.quantity} und - R$ ${item.price.toFixed(2)}`;
        cartItemList.appendChild(listItem);
    });
}

function updateCartTotal() {
    const cartTotalElement = document.getElementById('cartTotal');
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    cartTotalElement.textContent = total.toFixed(2);
}

function toggleCart() {
    const cartDropdown = document.getElementById('cartDropdown');
    cartDropdown.style.display = cartDropdown.style.display === 'block' ? 'none' : 'block';
}

function checkout() {
    // Aqui você pode adicionar a lógica para finalizar a compra
    // Por exemplo, limpar o carrinho e redirecionar para a página de pagamento.
    cartItems = []; // Limpa o carrinho
    updateCartList();
    updateCartTotal();
    document.getElementById('contadorCarrinho').innerText = 0;
    toggleCart(); // Fecha o dropdown do carrinho
}
function updateCartList() {
    const cartItemList = document.getElementById('cartItemList');
    cartItemList.innerHTML = '';

    // Adiciona cada item à lista
    cartItems.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            ${item.name} - ${item.quantity} und - R$ ${item.price.toFixed(2)}
            <button onclick="removeFromCart(${index})">x</button>
        `;
        cartItemList.appendChild(listItem);
    });
}

function removeFromCart(index) {
    cartItems.splice(index, 1); // Remove o item do array
    updateCartList(); // Atualiza a lista do carrinho
    updateCartTotal(); // Atualiza o total do carrinho
    updateCartCount(); // Atualiza o contador do carrinho
}
function checkout() {
    // Aqui você pode adicionar a lógica para finalizar a compra
    // Por exemplo, redirecionar para a página de pagamento.
    
    // Adicionando um exemplo de redirecionamento para a página "payment.html"
    window.location.href = 'carinho.html';
}
// ... (restante do código)
