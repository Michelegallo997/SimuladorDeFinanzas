// function cualEsMayor(a,b){
// return(a>b) ? a:b;
// }

// let mayor= cualEsMayor(10,5);
// console.log("el mayor numero es" + mayor);




// let ochok="8k";
// let cuatrok="4k";
// let WKHD="WKHD";
// let FHD="FHD";
// let HD="HD";

// function nombreResolucion(ancho, alto){

//     if(ancho>=1280 && alto>=720){
// return HD
//     } else if(ancho>=1920 && alto>=1080){
// return FHD
// }else if(ancho>=2560 && alto>=1440){
//     return WKHD
//     }
// }

// let nombre= nombreResolucion(1366, 2768);
// console.log(nombre);


// function getByIdx(arr, idx){
//   if(idx<=0 || arr.length <=idx ) {
//     return 'elemento no existente';
//   } 
//   return arr[idx];
// }

// let resultado= getByIdx([1, 2], 1);
// console.log(resultado);

// let numeros=0;
// while(numeros<10){
//     if(numeros%2==1){
//     console.log(numeros);
//     }
//     numeros++;
// }


// do{
//     if(numeros%2==1){
//         console.log(numeros);
//      }numeros++;
// }while(numeros<10);


// let array=[2, 5, 7, 15, -5, -100, 55];
// let number=array[0];
// let number2=array[0];

// array.forEach(element => {
//     if (element> number){
//         number=element;
//     }
// });

// array.forEach(element => {
//     if (element< number2){
//         number2=element;
//     }
// });

// console.log(number+" y " + number2);

// function getMenorMayor(arr){
// let menor= arr[0];
// let mayor= arr[0];
// for(numero of arr){
// menor = menor < numero ? menor : numero;
// mayor = mayor > numero ? mayor : numero
// }
// return [menor, mayor];
// }

// let numeros= getMenorMayor(array)
// console.log(numeros);


// let array=[2, 5, 7, 15, -5, -100, 55];

// // const arrayFilter= array.filter(element=> element> 0)

// // console.log(arrayFilter.length);
// function cunatosPositivos(arr){
// let numero=0;  
// for (element of arr){
//     if(element>0){
//         numero++;
//     }

// }
// return numero}
// let numeros= cunatosPositivos(array)
// console.log(numeros);

function precioCompleto(precio, impuesto){
return precio * impuesto + precio;

}
let resultado= precioCompleto(19.90, 0.15);
console.log(resultado);
