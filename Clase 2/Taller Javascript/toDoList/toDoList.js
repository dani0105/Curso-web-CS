/**
 * la funcion que se encarga de la agregar nuevas tareas en la lista
 */
function addTask(){
    // recolecto el input que contiene la tarea que deseo agregar
    var textoToDo = document.getElementById('textoToDo');
    // verifico que tenga tengo el input
    if(textoToDo.value.length >0){
        // recolecto la lista que contiene las tareas 
        var toDoList = document.getElementById('toDoList');

        // creo la nueva tarea que deseo agregar a la lista
        var newTask = document.createElement('li');

        // le agrego la case padding para que tenga un espaciado
        newTask.className = 'padding';
    
        // le coloco el texto de input para poder mostrarlo en la lista
        newTask.innerText = textoToDo.value ;

        // reinicio el texto del input de tareas
        textoToDo.value  = '';

        // agrego la tarea a la lista
        toDoList.appendChild(newTask);
    }else{
        // Le alerto que tiene que agregar texto
        alert("Campo Vacio")
    }
    
}