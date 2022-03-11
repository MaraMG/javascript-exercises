const reverseString = function(string) {

    let myString = string.split(""); // toma un string y lo splitea (separa) conviertondolo en un array con los elementos del string,  sin ningun espacio mediante como indican las comillas dle metodo
    
    let reverseArray = myString.reverse(); // reverseamos el array

    let arrayToString = reverseArray.join(""); // el array reverseado lo volvemos a unir en un string, sin espacios mediantes, como indican las comillas

    return arrayToString;
};

// Do not edit below this line
module.exports = reverseString;
