import { comparacionNum } from "../../../version/v1/comparacionNum";


describe('test de la comparacion de numeros', () => { 
    let app = comparacionNum(2 , 31);
    test('Resultado esperado al enviar la siguiente data (2 , 31) { message : `EL numero 2 es menor que 31`, suma : `La suma de 2 + 31 da como resultado 33`, resta : `La resta de 2 - 31 da como resultado 29`}', () => { 
        let num1 = 2
        let num2 = 31
        let obj = { 
            message : `EL numero ${num1} es menor que ${num2}`,
            suma : `La suma de ${num1} + ${num2} da como resultado ${num1 + num2}`,
            resta : `La resta de ${num1} - ${num2} da como resultado ${num1 - num2}`
        }
        expect(app).toStrictEqual(obj);
    })

    test('Resultado esperado al enviar la siguiente data (60 , 3) { message : `EL numero 60 es mayor que 3`, suma : `La multiplicacion de 60 * 3 da como resultado 180`, resta : `La division de 60 / 3 da como resultado 20`}', () => { 
        let app = comparacionNum(60 , 3);
        let num1 = 60
        let num2 = 3
        let obj = { 
            message : `EL numero ${num1} es mayor que ${num2}`,
            multiplicacion : `La multiplicacion de ${num1} * ${num2} da como resultado ${num1 * num2}`,
            division : `La division de ${num1} / ${num2} da como resultado ${num1 / num2}`
        }
        expect(app).toStrictEqual(obj);
    })

     test('Resultado esperado al pasar data erronea "{Error: "Error validacion de data", mensaje: "Los numeros de entrada debe ser numeros positivos"}', () => { 
        let app = comparacionNum(60 , "seis");
        let obj = {
            Error: "Error validacion de data",
            mensaje: "Los numeros de entrada debe ser numeros positivos"
        }
        expect(app).toStrictEqual(obj);
     })

     test('Resultado esperado es "Object"', () => { 
        expect(typeof app).toBe("object");
     })
 })