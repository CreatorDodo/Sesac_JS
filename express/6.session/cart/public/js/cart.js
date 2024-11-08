document.addEventListener('DOMContentLoaded', async () => {
    const products = await fetchProducts();
    displayProducts(products);
    await displayCart();
});

const fetchProducts = async () => {
    const res = await fetch(`/products`);
    return await res.json();
};

const displayProducts = (products) => {
    const tbody = document.querySelector('tbody');
    products.forEach((product) => {
        const tr = document.createElement('tr');
        tr.classList.add('border-b');
        tr.innerHTML = `
            <td class="px-4 py-3">${product.id}</td>
            <td class="px-4 py-3">${product.name}</td>
            <td class="px-4 py-3 text-right">${product.price}</td>
            <td class="px-4 py-3 text-center">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded add-to-cart" data-id="${product.id}">Add to Cart</button>
            </td>
        `;
        tbody.appendChild(tr);
    });

    document.querySelectorAll('.add-to-cart').forEach((button) => {
        button.addEventListener('click', async (event) => {
            const id = event.target.getAttribute('data-id');
            await addToCart(id);
            await displayCart();
        });
    });
};

const addToCart = async (id) => {
    const res = await fetch('/cart/items', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
    });
    return await res.json();
};

const displayCart = async () => {
    const res = await fetch('/cart');
    const { cart, total } = await res.json();
    const cartTable = document.querySelector('#cart tbody');

    if (!cartTable) {
        console.error('Cart table body element not found');
        return;
    }

    cartTable.innerHTML = '';

    cart.forEach((item) => {
        const tr = document.createElement('tr');
        tr.classList.add('border-b');
        tr.innerHTML = `
            <td class="px-4 py-3">${item.id}</td>
            <td class="px-4 py-3">${item.name}</td>
            <td class="px-4 py-3 text-right">${item.price}</td>
            <td class="px-4 py-3 text-right">
                <input type="number" value="${item.quantity}" min="1" class="update-quantity" data-id="${item.id}">
            </td>
            <td class="px-4 py-3 text-center">
                <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded remove-from-cart" data-id="${item.id}">Remove</button>
            </td>
        `;
        cartTable.appendChild(tr);
    });

    const totalRow = document.createElement('tr');
    totalRow.innerHTML = `
        <td colspan="3" class="px-4 py-3 text-right">Total</td>
        <td colspan="2" class="px-4 py-3 text-right">${total}</td>
    `;
    cartTable.appendChild(totalRow);

    document.querySelectorAll('.remove-from-cart').forEach((button) => {
        button.addEventListener('click', async (event) => {
            const id = event.target.getAttribute('data-id');
            await removeFromCart(id);
            await displayCart();
        });
    });

    document.querySelectorAll('.update-quantity').forEach((input) => {
        input.addEventListener('change', async (event) => {
            const id = event.target.getAttribute('data-id');
            const quantity = event.target.value;
            await updateCart(id, quantity);
            await displayCart();
        });
    });
};

const removeFromCart = async (id) => {
    const res = await fetch(`/cart/items/${id}`, {
        method: 'DELETE',
    });
    return await res.json();
};

const updateCart = async (id, quantity) => {
    const res = await fetch(`/cart/items/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ quantity }),
    });
    return await res.json();
};
