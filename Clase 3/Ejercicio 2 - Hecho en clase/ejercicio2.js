
/**
 * { 
 * nombre, 
 * cedula, 
 * edad, 
 * genero, 
 * telefono 
 * }
 */

var estudiantes = [];


function agregarNuevoEstudiante(nombre, cedula, edad, genero, telefono) {
  var est_json = {
    "cedula": cedula,
    "nombre": nombre,
    "edad": edad,
    "genero": genero,
    "telefono": telefono
  }
  // Agregarlo a la lista
  estudiantes.push(est_json);
}

function imprimirListaEstudiantes() {
  console.log("\nIMPRIMIENDO LISTA DE ESTUDIANTES");
  for (var estudiante of estudiantes) {
    console.log(estudiante);
    console.log("--------------------------------")
  }
  console.log("\n")
}

function buscarEstudiante(cedula) {

  let size = estudiantes.length;
  for (let i = 0; i < size; i++) {

    // Preguntar si el objeto tiene la misma cedula que andamos buscando
    if (estudiantes[i].cedula == cedula) {
      return estudiantes[i];
    }
  }

  return null;
}

function modificarNombreEstudiante(cedula, nuevoNombre) {
  let buscado = buscarEstudiante(cedula);

  if (buscado != null) {
    buscado.nombre = nuevoNombre;
    console.log("\n\tESTUDIANTE MODIFICADO CORRECTAMENTE!");
  } else {
    console.log("\n\tLA CEDULA INGRESADA NO EXISTE.");
  }
}


function eliminarEstudiante(cedula) {

  let size = estudiantes.length;
  var indice = -1;

  for (let i = 0; i < size; i++) {
    // buscamos el indice donde está el objeto json
    if (estudiantes[i].cedula == cedula) {
      indice = i;
    }
  }

  // eliminar el objeto de la lista
  if (indice != -1) {
    estudiantes.splice(indice, 1);
    console.log("\n\t* ESTUDIANTE ELIMINADO CORRECTAMENTE");
  } else {
    console.error("\n\t* NO SE PUDO ELIMINAR, NO ENCONTRÓ EL ESTUDIANTE!");
  }

}



agregarNuevoEstudiante("Ronald Herrera Gámez", "207870724", "22", "M", "60102586");
agregarNuevoEstudiante("Maria Chacon chacon", "5051505050", "22", "F", "77702586");
agregarNuevoEstudiante("Carlos Herrera Herrera", "80000000", "22", "M", "60102586");

/* imprimirListaEstudiantes();
console.log("\n\t********"); */

/* modificarNombreEstudiante("207870724", "Marcos Rojas Rojas");
imprimirListaEstudiantes(); */

/* console.log(buscarEstudiante("207870724")); */
eliminarEstudiante("207870724");
imprimirListaEstudiantes();