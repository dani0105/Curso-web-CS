/**
 * { nombre, cedula, edad, genero, telefono }
 */

var estudiantes = [];

function imprimirListaEstudiantes() {
  console.log("\nIMPRIMIENDO LISTA DE ESTUDIANTES");
  for (var estudiante of estudiantes) {
    console.log(estudiante);
    console.log("--------------------------------")
  }
  console.log("\n")
}

function agregarNuevoEstudiante(cedula, nombre, edad, genero, telefono) {

  let est_json = {
    "cedula": cedula,
    "nombre": nombre,
    "edad": edad,
    "genero": genero,
    "telefono": telefono
  }
  estudiantes.push(est_json);

}

function buscarEstudiante(cedula) {
  let size = estudiantes.length;
  for (let i = 0; i < size; i++) {
    if (estudiantes[i].cedula === cedula) {
      return estudiantes[i];
    }
  }
  return null;
}

function eliminarEstudiante(cedula) {

  let indice = -1;
  let size = estudiantes.length;

  // BUSCAR EL INDICE DEL OBJETO A BORRAR
  for (let i = 0; i < size; i++) {
    if (estudiantes[i].cedula === cedula) {
      indice = i;
      break;
    }
  }

  // Eliminar el estudiante de la lista
  if (indice !== -1) {
    estudiantes.splice(indice, 1);
    console.log("\n\t* ESTUDIANTE ELIMINADO CORRECTAMENTE")
  } else {
    console.error("\n\t* NO SE PUDO ELIMINAR, NO ENCONTRÓ EL ESTUDIANTE!")
  }

}

function modificarNombreEstudiante(cedula, nuevoNombre) {
  var buscado = buscarEstudiante(cedula);
  if (buscado != null) {
    buscado.nombre = nuevoNombre;
    console.log("\n\t* ESTUDIANTE MODIFICADO CORRECTAMENTE!\n");
  } else {
    console.error("\n\t* LA CEDULA INGRESADA NO EXISTE\n");
  }

}

agregarNuevoEstudiante("207870724", "Ronald Herrera Gámez", "22", "M", "60102586");
agregarNuevoEstudiante("515481545", "Daniel Rojas Rojas", "21", "M", "80808080");
agregarNuevoEstudiante("851245545", "Alicia Diaz Rivas", "20", "F", "601027082");
/* imprimirListaEstudiantes(); */

/* 
console.log("\nEstudiante buscado:")
console.log(buscarEstudiante("207870724"));
console.log("\n\n") 
*/

/* 
eliminarEstudiante("207870724");
imprimirListaEstudiantes(); 
*/


/*
modificarNombreEstudiante("207870724d", "Daniel Gamez Herrera");
imprimirListaEstudiantes();
*/