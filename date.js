exports.getDate = function() {               //achicando codigo. La funcion es igual al metodo, anonima. El module tambien se puede quitar

    const today = new Date();
    
        const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    }

    return today.toLocaleDateString("en-UK", options);      //menos codigo. No hace falta retornar variable

};