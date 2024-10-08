// Objetos en javascripts
// ejemplo persona
let nombre="luffy";
let edad= 19;
let  anime="One piece"
let persona={
    nombre:"luffy",
    edad: 19,
    anime:"One piece",
};
console.log(persona);
console.log(persona.nombre);
console.log(persona["edad"]);


delete persona.edad;
console.log(persona);

// Objetos en Array
// ejemplo animale
let animales=["pato","gato", "perro", "conejo", "camello"];
console.log(animales);
