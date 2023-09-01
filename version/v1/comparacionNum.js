export const comparacionNum = (num1, num2)=>{
    let numeros = [ num1 , num2 ]

    if(numeros.some(valor => typeof valor != "number" || valor <0)){
        return {
            Error: "Error validacion de data",
            mensaje: "Los numeros de entrada debe ser numeros positivos"
        }
    }
    let menor = num1 < num2

    switch(menor){
        case true:
            return {
                message : `EL numero ${num1} es menor que ${num2}`,
                suma : `La suma de ${num1} + ${num2} da como resultado ${num1 + num2}`,
                resta : `La resta de ${num1} - ${num2} da como resultado ${num1 - num2}`
            }
        break;
        case false:
            return {
                message : `EL numero ${num1} es mayor que ${num2}`,
                multiplicacion : `La multiplicacion de ${num1} * ${num2} da como resultado ${num1 * num2}`,
                division : `La division de ${num1} / ${num2} da como resultado ${num1 / num2}`
            }
        break;
    }
}