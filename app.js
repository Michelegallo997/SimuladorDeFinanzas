
function calcularAhorroRecurrente() {

    const meta = parseFloat(prompt("¿Cuál es tu meta financiera en dólares?"));
    const tiempo = parseInt(prompt("¿En cuántos meses quieres lograrlo?"));
    const ahorroInicial = parseFloat(prompt("¿Cuánto tienes ahorrado actualmente (en dólares)?"));
    const ingresos = parseFloat(prompt("¿Cuánto ganas al mes (en dólares)?"));
    const gastos = parseFloat(prompt("¿Cuáles son tus gastos mensuales (en dólares)?"));


    const valores = [meta, tiempo, ahorroInicial, ingresos, gastos];
    const invalidos = valores.filter(valor => isNaN(valor) || valor <= 0);

    if (invalidos.length > 0) {
        alert("Por favor, ingrese valores válidos en todos los campos.");
        return;
    }


    const ahorroDisponibleMensual = ingresos - gastos;
    
    if (ahorroDisponibleMensual <= 0) {
        alert("Tus gastos superan tus ingresos, no es posible ahorrar.");
        return;
    }


    const ahorroMensualNecesario = (meta - ahorroInicial) / tiempo;


    let ahorros = [];
    let ahorroAcumulado = ahorroInicial;

    for (let mes = 1; mes <= tiempo; mes++) {
        ahorroAcumulado += Math.min(ahorroDisponibleMensual, ahorroMensualNecesario);
        ahorros.push(ahorroAcumulado);
    }


    let mensaje = `Ahorro total estimado: $${ahorroAcumulado.toFixed(2)}\n\n`;
    mensaje += `Debes ahorrar $${Math.min(ahorroDisponibleMensual, ahorroMensualNecesario).toFixed(2)} cada mes para alcanzar tu meta.\n`;
    ahorros.forEach((ahorro, index) => {
        mensaje += `Mes ${index + 1}: $${ahorro.toFixed(2)}\n`;
    });

    alert(mensaje);
}


calcularAhorroRecurrente();
