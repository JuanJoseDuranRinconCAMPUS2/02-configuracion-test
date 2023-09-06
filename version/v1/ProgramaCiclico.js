export const programaCiclico = (numeros)=>{
    
    if(typeof numeros != "object" || numeros.length == 0 ){
        return {
            Error: "Error validacion de data",
            mensaje: "El dato de entrada debe ser un objeto con numeros"
        }
    }
    let sumaTotal = 0;
    let totalV = 0;
    let promedio  = 0;

    numeros.forEach(num => {
       if (num != 0) {
            sumaTotal = sumaTotal + num;
            totalV++
       } else {
            return sumaTotal
       }
    });

    promedio = sumaTotal / (totalV);

    let resultado =  { data_ingresada : numeros, sumaTotal : sumaTotal, promedio : promedio, totalNumeros : totalV}
    return resultado
}
