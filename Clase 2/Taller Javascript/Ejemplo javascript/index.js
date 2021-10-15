var var1 = ""; // es global
let var2 = ""; // es de ambito local
const var3 = ""; // no se puede cambiar, es constante

// ejemplo de IF
if(1 == 1){
    console.log("1 es igual a 1");
}else{
    console.log("Aqui unca entro");
}

// ejemplo for
for (let index = 0; index < 2; index++) {
    console.log("La vuelta: ",index)
}

// ejemplo funciones
function sum(a,b){
    return a + b;
};

console.log( "Funcion normal", sum(2,3) );

var sumFunction = (a,b) => {
    return a +b;
};

console.log( "Funcion anonima", sumFunction(2,3) );

// ejemplo Objetos
var person = {
    name:"Juan",
    age:21,
    dni:"2-8676-0909",
    walk:()=>{
        console.log("Estoy caminando");
    }
};

person.walk();

// Listas

var lista = [1,2,3,4];

// ejemplo map
var mapFunction = (num) => {
    return num*num;
};

console.log( lista.map( mapFunction ) );

// ejemplo filter
var filterFunction = (num) => {
    if(num >= 3){
        return true;
    }
    return false;
};

console.log( lista.filter( filterFunction ) );

/* 
Para más contenido visitar:
https://www.javascript.com/learn/strings
https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics
*/

