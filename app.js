const menuBotton=document.getElementById("bottonMenu");
const MenuDesplegable=document.getElementById("MenuDesplegable");

menuBotton.addEventListener("click", ()=>{

    MenuDesplegable.classList.toggle("hidden")
});

function calcularAhorro() {
    const meta = parseFloat(document.getElementById("meta").value);
    const tiempo = parseInt(document.getElementById("tiempo").value);
    const ahorroInicial = parseFloat(document.getElementById("ahorroInicial").value);
    const ingresos = parseFloat(document.getElementById("ingresos").value);
    const gastos = parseFloat(document.getElementById("gastos").value);

    if (isNaN(meta) || isNaN(tiempo) || isNaN(ahorroInicial) || isNaN(ingresos) || isNaN(gastos) || meta <= 0 || tiempo <= 0 || ahorroInicial < 0 || ingresos <= 0 || gastos < 0) {
        document.getElementById("resultados").innerText = "Por favor, ingrese valores válidos en todos los campos.";
        return;
    }

    const ahorroDisponibleMensual = ingresos - gastos;

    if (ahorroDisponibleMensual <= 0) {
        document.getElementById("resultados").innerText = "Tus gastos superan tus ingresos, no es posible ahorrar.";
        return;
    }

    const ahorroMensualNecesario = (meta - ahorroInicial) / tiempo;

    let ahorros = [];
    let ahorroAcumulado = ahorroInicial;

    for (let mes = 1; mes <= tiempo; mes++) {
        ahorroAcumulado += Math.min(ahorroDisponibleMensual, ahorroMensualNecesario);
        ahorros.push(ahorroAcumulado);
    }

    let mensaje = `<p>Ahorro total estimado: $${ahorroAcumulado.toFixed(2)}</p>`;
    mensaje += `<p>Debes ahorrar $${Math.min(ahorroDisponibleMensual, ahorroMensualNecesario).toFixed(2)} cada mes para alcanzar tu meta.</p>`;
    mensaje += "<ul>";
    ahorros.forEach((ahorro, index) => {
        mensaje += `<li>Mes ${index + 1}: $${ahorro.toFixed(2)}</li>`;
    });
    mensaje += "</ul>";

    document.getElementById("resultados").innerHTML = mensaje;
}
