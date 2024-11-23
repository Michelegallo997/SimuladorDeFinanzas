
function guardarCarrito(carrito) {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}


function obtenerCarrito() {
    return JSON.parse(localStorage.getItem('carrito')) || [];
}


function actualizarContadorCarrito() {
    const carrito = obtenerCarrito();
    const contador = carrito.reduce((total, item) => total + item.cantidad, 0);
    const contadorCarrito = document.getElementById('cartCounter');
    contadorCarrito.textContent = contador;
}


function añadirAlCarrito(producto) {
    let carrito = obtenerCarrito();


    const productoExistente = carrito.find(item => item.nombre === producto.nombre);

    if (productoExistente) {
        productoExistente.cantidad += 1;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }

    guardarCarrito(carrito);
    actualizarCarritoUI();
    actualizarContadorCarrito();


    Swal.fire({
        title: '<strong class="title1" style="display: block; text-align: left;">¡Producto añadido!</strong>',
        html: `Producto "<strong>${producto.nombre}</strong>" se agregó al carrito.`,
        icon: 'success',
        confirmButtonText: 'Aceptar',
        customClass: {
            popup: 'swal-wide'
        }
    });
}


function eliminarDelCarrito(nombreProducto) {
    let carrito = obtenerCarrito();

    carrito = carrito.filter(item => item.nombre !== nombreProducto);

    guardarCarrito(carrito);
    actualizarCarritoUI();
    actualizarContadorCarrito();


    Swal.fire({
        title: 'Producto eliminado',
        text: `El producto "${nombreProducto}" se eliminó del carrito.`,
        icon: 'info',
        confirmButtonText: 'Aceptar',
        customClass: {
            title: 'swal-title-center'
        }
        
    });
}

function actualizarCarritoUI() {
    const carrito = obtenerCarrito();
    const carritoModal = document.getElementById('carritoModalContent');

    if (carrito.length === 0) {
        carritoModal.innerHTML = '<p class="text-gray-500">El carrito está vacío.</p>';
    } else {
        carritoModal.innerHTML = carrito
            .map(item => `
                <div class="flex justify-between items-center border-b py-2">
                    <div>
                        <span>${item.nombre} (x${item.cantidad})</span>
                        <span>$${(item.valor * item.cantidad).toFixed(2)}</span>
                    </div>
                    <button class="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-400" onclick="eliminarDelCarrito('${item.nombre}')">Eliminar</button>
                </div>
            `)
            .join('');
    }
}

// Mostrar/ocultar el modal del carrito
function configurarCarrito() {
    const cartButtonDesktop = document.getElementById('cartButtonDesktop');
    const cartButtonMobile = document.getElementById('cartButtonMobile');
    const carritoModal = document.getElementById('carritoModal');
    const closeCartModal = document.getElementById('closeCartModal');

    cartButtonDesktop.addEventListener('click', () => {
        carritoModal.classList.toggle('hidden');
    });

    cartButtonMobile.addEventListener('click', () => {
        carritoModal.classList.toggle('hidden');
    });

    closeCartModal.addEventListener('click', () => {
        carritoModal.classList.add('hidden');
    });
}

// Inicializar la funcionalidad
window.addEventListener('load', () => {
    configurarCarrito();
    actualizarCarritoUI();
    actualizarContadorCarrito();
});
