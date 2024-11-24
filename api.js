// Contenedor donde se mostrarán los precios
const contenedorPrecios = document.createElement("div");
contenedorPrecios.id = "contenedorPrecios";
contenedorPrecios.className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 p-4 bg-gray-100 rounded-lg shadow";
document.body.appendChild(contenedorPrecios);

// Monedas que queremos mostrar
const monedasPopulares = [
    "bitcoin", "ethereum", "litecoin", "dogecoin", "cardano", "ripple",
    "tether", "binancecoin", "solana", "polkadot", "shiba-inu", "tron"
];

// Función para obtener precios y logos de las monedas
async function mostrarPreciosPopulares() {
    try {
        // Usar CoinGecko API para obtener precios y logos
        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${monedasPopulares.join(",")}&vs_currencies=usd,eur,gbp`);
        const data = await response.json();

        const logoResponse = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${monedasPopulares.join(",")}`);
        const logos = await logoResponse.json();

        // Mapear logos por id de moneda
        const logoMap = logos.reduce((acc, moneda) => {
            acc[moneda.id] = moneda.image;
            return acc;
        }, {});

        // Limpiar el contenedor antes de mostrar los datos actualizados
        contenedorPrecios.innerHTML = "";

        // Crear una card para cada moneda con sus precios y logo
        for (const [id, precios] of Object.entries(data)) {
            const monedaCard = document.createElement("div");
            monedaCard.className = "bg-blue-200 p-4 rounded shadow text-center flex items-center space-x-4";

            monedaCard.innerHTML = `
                <img src="${logoMap[id]}" alt="${id}" class="w-12 h-12 rounded-full">
                <div class="text-left">
                    <h3 class="text-xl font-bold capitalize">${id}</h3>
                    <ul class="mt-2 text-sm">
                        ${Object.entries(precios)
                            .map(([moneda, precio]) => `<li>${moneda.toUpperCase()}: $${precio.toFixed(2)}</li>`)
                            .join("")}
                    </ul>
                </div>
            `;
            contenedorPrecios.appendChild(monedaCard);
        }
    } catch (error) {
        console.error("Error al obtener precios o logos:", error);

        contenedorPrecios.innerHTML = `
            <p class="text-red-500 text-center">Error al cargar los precios. Por favor, inténtalo de nuevo más tarde.</p>
        `;
    }
}

// Llamar a la función al cargar la página
window.addEventListener("load", () => {
    mostrarPreciosPopulares();

    // Actualizar precios cada 5 minutos
    setInterval(mostrarPreciosPopulares, 300000); // 300000 ms = 5 minutos
});
