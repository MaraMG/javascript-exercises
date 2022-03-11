const repeatString = function(string, num) {

    if (num < 0) { // chequea que el número sea mayor a 0, o no negativo
        return "ERROR"; // si es negativo retornea ERROR
    }
    let myString = ""; // inicializo una variable que es un string vacio

    for (i=0; i < num; i++) { // inicio un contador, por cada vez qye haya el número que se le pasa como parametro, que ejecute una vuelta del codigo e incremente el contador +1
        myString = myString + string; // entonces el string que tengo (de momento vacio) se la va a sumar el string que tengo por parametro
    }
    return myString; // al final de la funcion va a retornar el string nuevo que se va a storear en la variable vacio iniciada al principio
};

// Do not edit below this line
module.exports = repeatString;
