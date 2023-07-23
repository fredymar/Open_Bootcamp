const nombre = "Fredy"
const apellido = "Martinez"
const estudiante = nombre.concat(" ").concat(apellido)

console.log(estudiante);

const estudianteMayus = estudiante.toUpperCase()
const estudianteMinus = estudiante.toLowerCase()

console.log(estudianteMayus, estudianteMinus);

const estudianteLength = estudiante.length

console.log(estudianteLength);

// Todas válidas
// const inicialNombre = nombre[0]

// const inicialNombre = nombre.at(0)
const inicialNombre = nombre.substring(0, 1)

console.log(inicialNombre);
// Todas válidas

// const finalApellido = apellido[apellido.length - 1]

// const finalApellido = nombre.at(apellido.length - 1)
const finalApellido = apellido.substring(apellido.length - 1, apellido.length)
console.log(finalApellido);

// Todas válidas

// const estudianteSinEspacios = estudiante.replace(" ", "")
const estudianteSinEspacios = estudiante.replace(/ /g, "")
console.log(estudianteSinEspacios);

const nombreEnEstudiante = estudiante.includes(nombre)

console.log(nombreEnEstudiante);