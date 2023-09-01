import { voltajeResult } from "../../../version/v1/voltaje";


describe('test de la calculadora de voltaje', () => { 
    let app = voltajeResult(4 , 3);
    test('Resultado esperado al enviar la siguiente data (4 , 3) "{ "Intencidad" : 4, "Resistencia": 3, "Voltaje": 12, "mensaje": `El voltaje es igual a 12"', () => { 
        let voltaje = 4 * 3;
        let obj = { "Intencidad" : 4, "Resistencia": 3, "Voltaje": voltaje, "mensaje": `El voltaje es igual a ${voltaje}`}
        expect(app).toStrictEqual(obj);
     })

     test('Resultado esperado al pasar data erronea "{Error: "Error validacion de data", valorError: "hola", mensaje: "La data de entrada debe ser un numero positivo"}', () => { 
        let app = voltajeResult("hola" , 3);
        let obj = {
            Error: "Error validacion de data",
            mensaje: "La data de entrada debe ser un numero positivo"
        }
        expect(app).toStrictEqual(obj);
     })

     test('Resultado esperado es "Object"', () => { 
        expect(typeof app).toBe("object");
     })
 })