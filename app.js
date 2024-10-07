let meta= parseFloat(prompt("Cual es tu meta financiera en dolares?"));
let tiempo= parseInt(prompt("en cuantos meses quieres lograrlo?"));
let ahorroInicial= parseFloat(prompt("¿Cuánto tienes ahorrado actualmente? (en dólares)"));
if(isNaN(meta) || isNaN(tiempo) || isNaN(ahorroInicial) || meta<=0 || tiempo<=0 || ahorroInicial<=0){
    alert("por favor, ingrese valores validos ")
}

let ahorroMensual= (meta - ahorroInicial)/tiempo;

let mensaje= "debes ahorrar" +ahorroMensual.toFixed(2)+ "cada mes para alcazar tu meta de "+ meta + "dolares";

let ahorroTotal = ahorroInicial;
for (let mes = 1; mes <= tiempo; mes++) {
    ahorroTotal += ahorroMensual;
    mensaje += `\nEn el mes ${mes}, habrás ahorrado $${ahorroTotal.toFixed(2)}.`;
}
alert(mensaje);
