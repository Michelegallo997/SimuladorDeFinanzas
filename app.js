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

    const botonesComprar = document.querySelectorAll('.btn-comprar');
    botonesComprar.forEach(boton => {
        boton.addEventListener('click', () => {
            const productoSeleccionado = JSON.parse(boton.dataset.producto);
            añadirAlCarrito(productoSeleccionado);
        });
    });
});

// Simulador de finanzas
document.getElementById("calcular").addEventListener("click", () => {
    const Meta = parseFloat(document.getElementById("Meta").value);
    const Tiempo = parseFloat(document.getElementById("Tiempo").value);
    const ahorroInicial = parseFloat(document.getElementById("ahorroInicial").value);

    const mensaje = isNaN(Meta) || isNaN(Tiempo) || isNaN(ahorroInicial) || Meta < 0 || Tiempo <= 0 || ahorroInicial < 0
        ? "Ingrese datos válidos"
        : `Debes ahorrar $${((Meta - ahorroInicial) / Tiempo).toFixed(2)} cada mes`;

    document.getElementById("resultado1").textContent = mensaje;

    // Mostrar gráfica si los datos son válidos
    if (!isNaN(Meta) && !isNaN(Tiempo) && !isNaN(ahorroInicial) && Meta > 0 && Tiempo > 0 && ahorroInicial >= 0) {
        mostrarGrafica(Meta, Tiempo, ahorroInicial);
    }

    limpiarCampos('form1');
});

// Conversión de moneda
document.getElementById("Cambio").addEventListener("click", async () => {
    const MontoOriginal = parseFloat(document.getElementById("MontoOriginal").value);
    const monedaDestino = "USD"; // Moneda de destino
    const monedaBase = "EUR"; // Moneda base para la API

    if (isNaN(MontoOriginal) || MontoOriginal < 0) {
        document.getElementById("resultado").textContent = "Ingrese un monto válido";
        return;
    }

    try {
        const response = await fetch(`https://api.exchangerate.host/latest?base=${monedaBase}`);
        const data = await response.json();

        const tasaDeCambio = data.rates[monedaDestino];
        document.getElementById("resultado").textContent = `El monto convertido es ${(MontoOriginal * tasaDeCambio).toFixed(2)} ${monedaDestino}`;
    } catch (error) {
        console.error(error);
        document.getElementById("resultado").textContent = "Error al obtener tasas de cambio. Intente nuevamente.";
    }

    limpiarCampos('form2'); 
});

// Mostrar gráfica de ahorro
function mostrarGrafica(meta, tiempo, ahorroInicial) {
    const ctx = document.getElementById("grafica").getContext("2d");
    const ahorroMensual = (meta - ahorroInicial) / tiempo;

    // Si ya existe una gráfica, destrúyela para evitar duplicados
    if (window.miGrafica) {
        window.miGrafica.destroy();
    }

    window.miGrafica = new Chart(ctx, {
        type: "bar",
        data: {
            labels: Array.from({ length: tiempo }, (_, i) => `Mes ${i + 1}`),
            datasets: [{
                label: "Ahorro Mensual",
                data: Array(tiempo).fill(ahorroMensual),
                backgroundColor: "rgba(75, 192, 192, 0.6)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                }
            }
        }
    });
}

// Función para limpiar campos de un formulario
function limpiarCampos(formId) {
    document.getElementById(formId).reset();
}
