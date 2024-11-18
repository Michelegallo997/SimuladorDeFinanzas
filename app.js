function guardarAlmacenamientoLocal(llave, valor_a_guardar) {
    localStorage.setItem(llave, JSON.stringify(valor_a_guardar))
}
function obtenerAlmacenamientoLocal(llave) {
    const datos = JSON.parse(localStorage.getItem(llave))
    return datos
}

let productos = obtenerAlmacenamientoLocal('productos') || [];
let contenedor = document.getElementById('contenedor')
window.addEventListener('load', ()=>{
    for (let i = 0; i < productos.length; i++){
        contenedor.innerHTML +=`<div><img class="imgc" src="${productos[i].urlImagen}" alt="producto 1"><div class="informacion"><p>${productos[i].nombre}</p><p class="precio">$${productos[i].valor}</p><button>Comprar</button></div></div>` 
    }
});




document.getElementById("bottonMenu").addEventListener("click", () => {
    document.getElementById("MenuDesplegable").classList.toggle("hidden");
});



function limpiarCampos(formularioId) {
    document.querySelectorAll(`#${formularioId} input`).forEach(input => input.value = '');
}


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


document.getElementById("Cambio").addEventListener("click", () => {
    const MontoOriginal = parseFloat(document.getElementById("MontoOriginal").value);
    const TasaDeCambio = parseFloat(document.getElementById("TasaDeCambio").value);

    document.getElementById("resultado").textContent = isNaN(MontoOriginal) || isNaN(TasaDeCambio) || MontoOriginal < 0 || TasaDeCambio < 0 
        ? "Ingrese datos válidos" 
        : `El monto convertido es ${(MontoOriginal * TasaDeCambio).toFixed(2)}`;
    
   
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


