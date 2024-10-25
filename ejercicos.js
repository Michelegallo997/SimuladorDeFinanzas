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

// function precioCompleto(precio, impuesto){
// return precio * impuesto + precio;

// }
// let resultado= precioCompleto(19.90, 0.15);
// console.log(resultado);

// let array=[{
//     id:1,
//     name:'nocolas'
// }, {
//     id:2,
//     name:'fionix'
// },{
//     id:3,
//     name:'chanchito'
// }
// ];
// let pares=[
//     [1,{id: 1, name:'nocolas'}],
//     [1,{id: 2, name:'fionix'}],
//     [1,{id: 3, name:'chanchito'}],
// ];

// function toPairs(arr){
//     let pairs=[];
//     for (idx in arr){
//         let element=arr[idx];
//         pairs[idx]=[element.id, element];
//     }
//     return pairs;
// }

// let resultado= toPairs(array);
// console.log(resultado);


// let array=[2, 5, 7, 15, -5, -100, 55];

// let nuevoarray= array.map(array=> array*2);

// let otroarray= array.map(array=> array.filter )
// console.log(nuevoarray);


// const personas = [
//     { nombre: 'Juan', edad: 25 },
//     { nombre: 'Ana', edad: 30 },
//     { nombre: 'Luis', edad: 35 }
//   ];

// const  nuevaData= personas.map(personas => personas.edad);
// console.log(nuevaData);


// const palabras = ['hola', 'mundo', 'javascript'];
// const uperPalabra= palabras.map(palabras=> palabras.toUpperCase())
// console.log(uperPalabra);


// function arrayTranformacion(array, transformacion){
//    return array.map(transformacion);
// }
// let numeros=[4, 5, 6, 4, 12, 19, -8];
// let nombre=["michele", "juan", "vannesa", "eden", "libia"];

// let nombreUper= arrayTranformacion(nombre, num => num.toUpperCase());
// let numberes= arrayTranformacion(numeros, pares.filter(pares % 2 === 0) );
// console.log(nombreUper);
// console.log(numberes);


// let frutas= ["pera", "manzana", "pera", "banana", "cereza", "banana", "pera"];
// let conteoFrutas= frutas.reduce((conteo, fruta)=>{
//    conteo[fruta]= (conteo[fruta] || 0) +1;
//    return conteo;
// }, {} );

// console.log(conteoFrutas);


const palabras = ['manzana', 'perro', 'elefante', 'gato'];
// const palabraFilter= palabras.filter(palabras=> palabras.length>=5);
// console.log(palabraFilter);


// const reducePalabra= palabras.reduce((conteo, palabra)=>{
//    if (palabra.length<=5){
//       return conteo +1;
//    }
//    return conteo
// }, 0);
// console.log(reducePalabra);


// let combinarArray= palabras.reduce((acomulador, palabra)=> acomulador + " " + palabra);
// console.log(combinarArray);


// let contarLetras=  palabras.reduce((acomulador, palabras)=> (acomulador + palabras.length),0);
// console.log(contarLetras);


// const numeros = [1, 2, 2, 3, 4, 4, 4, 5];

// const contarNumeros= numeros.reduce((acomulador, number)=>{
//    acomulador[number]= (acomulador[number] || 0) +1;
//    return acomulador
// }, {});
// console.log(contarNumeros);


// const personas = [
//    { nombre: 'Juan', edad: 25 },
//    { nombre: 'María', edad: 30 },
//    { nombre: 'Pedro', edad: 25 }
// ];

// const agrupadoPorEdad = personas.reduce((acumulador, persona) => {
//    const { edad, nombre } = persona;
   
//    // Si la edad no existe como clave, la inicializamos con un arreglo vacío
//    if (!acumulador[edad]) {
//        acumulador[edad] = [];
//    }

//    // Agregamos el nombre al arreglo de la edad correspondiente
//    acumulador[edad].push(nombre);

//    return acumulador;
// }, {});

// console.log(agrupadoPorEdad);
// // const nombrePersona= personas.map(person => person["nombre"]);
// // console.log(nombrePersona);

// const oldID= document.querySelector(".old-div");
// const h1= document.getElementById("title");
// const divMain= document.querySelector(".main-div");
// let botton=document.querySelector("button");
// let input=document.querySelector("#itemInput");
// let addButton=document.querySelector("#addButton");
// let list=document.querySelector("#dynamicList");
// // botton.addEventListener("click", function() {
// //    alert ("Boton presionado");
// // });

// function showMesagge(message){
//    alert(message);
// }

// botton.addEventListener("click", showMesagge.bind(null, "boton"));




// h1.innerText="muanipulando la programacion";
// h1.innerHTML="<em>Nuevo</em>";
// let imagen= document.querySelector("img");
// imagen.setAttribute("src", "bun-logo.svg");
// imagen.classList.add("img-fluid");

// addButton.addEventListener("click", function(){
//    if(input.value.trim() != ""){
//       let newItem= document.createElement("li");
//       newItem.innerText = input.value;
//       list.appendChild(newItem);
//       input.value="";
//    }
// });


// divMain.style.backgroundColor="#ffcc00";

// let list1= document.querySelectorAll(".ul.list > li");

// document.body.removeChild(oldID);


// const bg_body= document.getElementById("bg_body");
// let isWhite=true;

// bg_body.addEventListener("click", () =>{
//    if (isWhite) {document.body.style.backgroundColor="black";}
//    else{
//    document.body.style.backgroundColor="white";}
//    isWhite= !isWhite;
// });


// const input= document.getElementById("itemInput");
// const button= document.getElementById("addButton");
// const ul= document.getElementById("dynamicList");

// button.addEventListener("click", ()=>{
//    if(input.value==""){
//       alert("debes anadir valores a la lista");
//    }
//    else{
//    const li= document.createElement('li');
//    li.textContent=input.value;
//    ul.appendChild(li);
//    input.value="";}

// });


// const textarea = document.getElementById('message');
// const counter = document.getElementById('charCount');

// textarea.addEventListener("input", ()=>{
//    let remainen= 100- textarea.value.length;
//    counter.textContent=remainen +"caracteres restante";
// })


// const button2 = document.getElementById('toggleButton');
// const paragraph = document.getElementById('content');

// button2.addEventListener('click', () => {
//     if (paragraph.style.display === 'none') {
//         paragraph.style.display = 'block';
//         button2.textContent = 'Ocultar';
//     } else {
//         paragraph.style.display = 'none';
//         button2.textContent = 'Mostrar';
//     }
// });

localStorage.setItem("clave", "1212");
localStorage.setItem("booleano", true);
localStorage.setItem("numero", 23);


// //obteniendo datos de la localstorege
// const clave1=localStorage.getItem('clave');


for(let i =0; i<localStorage.length; i++){

    let valores=localStorage.key(i);

    console.log("CLAVE: " + valores + " valor: " + localStorage.getItem(valores));
    
};


localStorage.setItem("clave3", 2673826);
localStorage.removeItem("clave3");