const removeFromArray = function(array, ...args) { // el parametro array, y el parametro args que es un array con informacion aleatoria

    let newArray = []; // inicio un array vacio en el que voy a guardar los valores que sirven del array original (el del parametro array)

    for (i = 0; i < array.length; i++) { // haho un recorrido a traves de todos los elementos del array
        if (!args.includes(array[i])) { // en el que si no (!) hay un elemento '[i]' del args includo en mi array actual
            newArray.push(array[i]); // entonces ese elemento que no esta incluido lo guardo en mi newArray
        }
    }

    return newArray;
}

// Do not edit below this line
module.exports = removeFromArray;
