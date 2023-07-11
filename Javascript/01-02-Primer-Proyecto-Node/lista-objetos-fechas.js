//Listas, arrys, arreglos

const lista= [1, "hola", true, undefined, null]
const lista2= new Array(1, "hola", true, undefined, null)
const lista3 = new Array(3)
lista3[0]= "Soy el primer elemento, index 0"
const lista4 = [lista,lista2,lista3]

console.log(lista);
console.log(lista2);
console.log(lista3);
console.log(lista4);

//Objetos
const movil = {
    anchura: 5,
    altura: 10,
    marca: "xiaomi",
    iswithe: false,
    contactos: ["gorka", "Martin", "Raul"],
    tarjeta: {
        marca: "sandisk",
        almacenamiento: 12
    }
}

console.log(movil.tarjeta.marca);
console.log(movil.contactos);

movil.ano = 2019
movil.marca = "Samsung"
console.log(movil.marca);

//Fechas

//Librerias de apoyo (momentjs)

const ahora = new Date()
console.log(ahora);

const fecha_milis = new Date(10)
console.log(fecha_milis);

const fecha_cadena = new Date ("30 October 2000")
console.log(fecha_cadena);

const fecha_valores = new Date(2023,0,15)
console.log(fecha_valores);

const dia = ahora.getDay()
const mes = ahora.getMonth() + 1
const ano = ahora.getFullYear()
console.log(`${dia}/${mes}/${ano}`);

