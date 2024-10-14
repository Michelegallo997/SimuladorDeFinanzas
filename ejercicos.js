// function cualEsMayor(a,b){
// return(a>b) ? a:b;
// }

// let mayor= cualEsMayor(10,5);
// console.log("el mayor numero es" + mayor);




let ochok="8k";
let cuatrok="4k";
let WKHD="WKHD";
let FHD="FHD";
let HD="HD";

function nombreResolucion(ancho, alto){

    if(ancho>=1280 && alto>=720){
return HD
    } else if(ancho>=1920 && alto>=1080){
return FHD
}else if(ancho>=2560 && alto>=1440){
    return WKHD
    }
}

let nombre= nombreResolucion(1366, 2768);
console.log(nombre);
