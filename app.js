function guardarAlmacenamientoLocal(llave, valor_a_guardar) {
    localStorage.setItem(llave, JSON.stringify(valor_a_guardar));
}

function obtenerAlmacenamientoLocal(llave) {
    return JSON.parse(localStorage.getItem(llave)) || [];
}

// Mostrar productos en la página
window.addEventListener('load', () => {
    const contenedor = document.getElementById('contenedor');
    const productos = obtenerAlmacenamientoLocal('productos');

    productos.forEach(producto => {
        contenedor.innerHTML += `
            <div class="bg-white shadow-md p-2 rounded-lg">
                <img class="imgc w-full rounded-lg" src="${producto.urlImagen}" alt="${producto.nombre}">
                <div class="informacion">
                    <p class="text-lg font-bold">${producto.nombre}</p>
                    <p class="precio">$${producto.valor}</p>
                    <button class="btn-comprar mt-2 bg-blue-600 text-white py-1 px-4 rounded hover:bg-blue-500" data-producto='${JSON.stringify(producto)}'>Comprar</button>
                </div>
            </div>
        `;
    });

    // Añadir evento a los botones de compra
    const botonesComprar = document.querySelectorAll('.btn-comprar');
    botonesComprar.forEach(boton => {
        boton.addEventListener('click', () => {
            const productoSeleccionado = JSON.parse(boton.dataset.producto);
            añadirAlCarrito(productoSeleccionado);
        });
    });
});

// Mostrar el menú desplegable
const menuButton = document.getElementById('menuButton');
const mobileMenu = document.getElementById('mobileMenu');

menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Botón del carrito (puedes agregar funcionalidad adicional aquí si lo necesitas)
const cartButton = document.getElementById('cartButton');
cartButton.addEventListener('click', () => {
    alert('¡Carrito de compras!');
});

document.getElementById("calcular").addEventListener("click", () => {
    const Meta = parseFloat(document.getElementById("Meta").value);
    const Tiempo = parseFloat(document.getElementById("Tiempo").value);
    const ahorroInicial = parseFloat(document.getElementById("ahorroInicial").value);

    const mensaje = isNaN(Meta) || isNaN(Tiempo) || isNaN(ahorroInicial) || Meta < 0 || Tiempo <= 0 || ahorroInicial < 0
        ? "Ingrese datos válidos"
        : `Debes ahorrar $${((Meta - ahorroInicial) / Tiempo).toFixed(2)} cada mes`;
    alert(mensaje);

    limpiarCampos('form1');
});

// API para conversión de moneda
document.getElementById("Cambio").addEventListener("click", async () => {
    const MontoOriginal = parseFloat(document.getElementById("MontoOriginal").value);
    const monedaDestino = "USD"; // Moneda de destino
    const monedaBase = "EUR"; // Moneda base para la API

    if (isNaN(MontoOriginal) || MontoOriginal < 0) {
        document.getElementById("resultado").textContent = "Ingrese un monto válido";
        return;
    }

    try {
        // Petición al API de tasas de cambio
        const response = await fetch(`https://api.exchangeratesapi.io/latest?base=${monedaBase}`);
        const data = await response.json();

        // Obtener la tasa de cambio para la moneda destino
        const tasaDeCambio = data.rates[monedaDestino];
        document.getElementById("resultado").textContent = `El monto convertido es ${(MontoOriginal * tasaDeCambio).toFixed(2)} ${monedaDestino}`;
    } catch (error) {
        console.error(error);
        document.getElementById("resultado").textContent = "Error al obtener tasas de cambio. Intente nuevamente.";
    }

    limpiarCampos('form2'); 
});

document.getElementById("CalcularPresupuesto").addEventListener("click", () => {
    const Ingresos = parseFloat(document.getElementById("IngresosMensuales").value);
    const Alimento = parseFloat(document.getElementById("GastosAlimento").value);
    const Transporte = parseFloat(document.getElementById("GastosTrasporte").value);

    document.getElementById("resultado1").textContent = isNaN(Ingresos) || isNaN(Alimento) || isNaN(Transporte) || Ingresos < 0 || Alimento < 0 || Transporte < 0
        ? "Ingrese datos válidos"
        : `Tu presupuesto restante es de ${(Ingresos - (Alimento + Transporte)).toFixed(2)}`;

    limpiarCampos('form3');
});

document.querySelectorAll('#form1, #form2, #form3').forEach(form => {
    form.addEventListener("submit", (event) => event.preventDefault());
});

// Función para limpiar campos de un formulario
function limpiarCampos(formId) {
    document.getElementById(formId).reset();
}
