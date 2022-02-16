let nombre="psedro";

const promesa=new Promise((resolve,reject)=>{
    if(nombre!=="pedro")reject("lo siento, el nombre no es Pedro");
    else resolve(nombre)
}) // esta es una función con tres callbacks, un callback que a su vez tiene dos callbacks

console.log(promesa) //promesa es un objeto de la clase Promesa, pero todos sus datos están encapsulados

// promesa.then((resultado)=>{ 
//     console.log(resultado)
// }) //con then se puede acceder a lo que hay en reject o en resolve. Pero, si hubiera error, el then no sería necesario.

//manejando errores
promesa.then((resultado)=>{ 
    console.log(resultado)
}).catch((e)=>{
    console.log(e)
})
//todos los if-else anidados se reorganizan en:lo cumplido y lo no cumplido así: cumplido.catch (los errores pasan a manejarse en un solo bloque)
//cumplido es con then

console.log("-------------mejorando callbacks de personas---------------")
//SOLUCIONANDO PARA EL SISTEMA callbacks de personas
//creando clase
class Persona{
    constructor(nombre,instagram){
        this.nombre=nombre;
        this.instagram=instagram;
    }
}

//trayendo datos
const data=[
    ["sujeto0","@sujeto0"],
    ["sujeto1","@sujeto1"],
    ["sujeto2","@sujeto2"],
    ["sujeto3"]
]

//lista vacía q se llenará con los objetos de la clase Persona
const personas=[];

//llenando lista vacía con los objetos de la clase Persona
for(datum in data){
    personas[datum]=new Persona(data[datum][0],data[datum][1])
}

//
obtenerPersona=(id)=>{
    return new Promise((resolve,reject)=>{
        if(personas[id]==undefined) reject("No se ha encontrado la persona")
        else{resolve(personas[id])}
    })
}

obtenerInstagram=(id)=>{
    return new Promise((resolve,reject)=>{
        if(personas[id].instagram==undefined) reject("No se ha encontrado el instagram")
        else{resolve(personas[id].instagram)}
    })
}

obtenerPersona(1).then((persona)=>{
    console.log(persona.nombre);
    return obtenerInstagram(1);
    }).then((instagram)=>{
        console.log(instagram)
    }).catch((e)=>{
        console.log(e) //probar con id=3 para ver lo que sucede con cuando no hay instagram, o con id=5 para ver lo que sucede cuando no hay persona
    })//.then
    //.then
    //.then //... esto nos ahorraría hacer muchos if-else anidados