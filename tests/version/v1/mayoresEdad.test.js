import { mayorEdad } from "../../../version/v1/mayoresEdad";


describe('test de la calculadora de edades', () => { 
    let app = mayorEdad("juan" , 31, "jose" , 12 , "maria" , 32);
    test('Resultado esperado al enviar la siguiente data {"mensaje: "La persona con mayor edad es: ", nombre: "maria, edad : 32}', () => { 
        let edades = [ 31 , 12 , 32 ]
        let max = Math.max(...edades)
        let obj = { 
            message : "La persona con mayor edad es: ",
            nombre : "maria", 
            edad : max
        }
        expect(app).toStrictEqual(obj);
     })

     test('Resultado esperado al pasar data erronea "{Error: "Error validacion de data", mensaje: "Las edades de entrada debe ser numeros positivos"}', () => { 
        let app = mayorEdad("juan" , "31", "jose" , 12 , "maria" , 32);
        let obj = {
            Error: "Error validacion de data",
            mensaje: "Las edades de entrada debe ser numeros positivos"
        }
        expect(app).toStrictEqual(obj);
     })

     test('Resultado esperado al pasar data erronea "{Error: "Error validacion de data", mensaje: "los nombres de entrada debe ser strings"}', () => { 
        let app = mayorEdad(2 , 31, "jose" , 12 , "maria" , 32);
        let obj = {
            Error: "Error validacion de data",
            mensaje: "los nombres de entrada debe ser strings"
        }
        expect(app).toStrictEqual(obj);
     })

     test('Resultado esperado es "Object"', () => { 
        expect(typeof app).toBe("object");
     })
 })