// Objetos en javascripts
// ejemplo persona


// let nombre="luffy";
// let edad= 19;
// let  anime="One piece"
// let persona={
//     nombre:"luffy",
//     edad: 19,
//     anime:"One piece",
// }
// console.log(persona);
// console.log(persona.nombre);
// console.log(persona["edad"]);
// delete persona.edad;
// console.log(persona);



// // Objetos en Array
// // ejemplo animale

// let animales=["pato","gato", "perro", "conejo", "camello"];
// console.log(animales[0]);
// animales[2]="dragon";
// console.log(animales);
// console.log(animales.length);

// FUNTION EN JAVASCRIPT
// function saludar(){
//     console.log("hola mundo");
    
// }
// saludar();

// function suma(){
//     return 2 + 2;
// }

// let resultado=suma();
// console.log(resultado);
// console.log(suma());

// ARGUMENTOS EN  JAVASCRIPT
// function suma(a, b){
//     return a + b;
// }
// let resul= suma(5,6);
// console.log(resul);


/// OPERDORES EN  JAVASCRIPT
//arimeticos
// let a=5;
// let b=6;
// console.log(a+b, "suma");
// console.log(a-b, "resta");
// console.log(a*b, "multiplicacion");
// console.log(a/b, "divison");
// console.log(a%b, "modulo");
// console.log(a**b,"potencia");

// //imcrementar
// console.log(++a);
// console.log(a++);
// console.log(a);

// //decrementar
// console.log(--a);
// console.log(a--);
// console.log(a);

// //asignacion
// let c=5;
// c+=5;
// c-=5;
// c*=5;
// c/=5;
// c%=5;
// c**=5;
// console.log(c); 

// operadores de comparacion 
// let a= 10;
// console.log(a<5);
// console.log(a>5);
// console.log(a>=5);

// // operadores de igualdad
// console.log(a==10);
// console.log(a != 10);
// console.log(a === "10");
// console.log(a == "10");


let mayorDeEdad= true;
let suscrito= false;

// operadores logicos and, or, not
// and &&
// console.log("operador and",mayorDeEdad && suscrito);
// console.log(false && true);


// // OR  ||  evalua si al menos uno es true
// console.log("operador or",mayorDeEdad || suscrito);

// // NOT  ! 
// console.log("operador not", !mayorDeEdad);
// let soloCatalogoInfantil= !mayorDeEdad;

// short-circuit

//falso
//false
//0
// ''
// null
//undefined
//NaN

// let nombre="mmikelee";
// let usermane= nombre || 'Anonimo';
// console.log(usermane);


// function fn1(){
//     console.log("soy funcion1");
//     return false;
    
// }

// function fn2(){
//     console.log("soy funcion2");
//     return true;
     
// }

// let x= fn1() && fn2();


// let resultado= 8/2*(2+2);
// console.log(resultado);


// ternario en js
// let edad= 19;
// let acceso= edad > 17 ? 'permitir ingreso' : 'no puede ingresar';
// console.log(acceso);


//if 
// let edad=15;
// if (edad>=18){
//     console.log("Usuario mayor de edad");
    
// }   else if(edad >13){
//     console.log("debe ir acompanado de un mayor de edad");
// }
//     else{
//     console.log("Usuario manor");
    
// }


// loop while
// let i=2
// while(i<2){
//     if(i%2==0){
//     console.log("numero par " + i);
//     }
//     i++;
// }


// do {
//     if(i%2==0){
//         console.log("numero par " + i);
//         }
//         i++;
// } while(i<2);


// //for en javascript
// for (i=2; i<10; i++){
//     if(i%2==0){
//     console.log("numero par " + i);
       
//     }
// };


// //for or en javascript
// let animales= ['koala', 'mono', 'ardilla', 'zorro'];

// for(let animal of animales){
//     console.log(animal);
    
// }
// let i=0;
// while( i<animales.length){
//     console.log(animales[i]);
//     i++;
// }

// //for in en javascript in
// let User={
//     id:1,
//     name:"michele",
//     edad: 27,
// };

// for (let prop in User){
// console.log(prop, User[prop]);
// }

// let animales= ['koala', 'mono', 'ardilla', 'zorro'];
// for (let indice in animales){
//     console.log(indice, animales[indice]);
    
// }


//break continue
// let i=0;
// while(i<6){
//     i++;
//     if (i===2){
//         continue;
//     }
//     if(i===4){
//     break;
//     }
//     console.log(i);

// }

// switch en javascripts
// let accion= "guardar";
// switch(accion){
//     case "listar":
//         console.log("accion de listar");
//         break
//     case "guardar":
//         console.log("accion de guardar");
//         break
//     default:
//             console.log("accion no reconocida");
            
        
        

// }