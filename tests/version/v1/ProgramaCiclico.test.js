import { programaCiclico } from "../../../version/v1/ProgramaCiclico.js";

describe('test de la comparacion de numeros', () => { 
    let app = programaCiclico([ 2 , 6 , 0 , 4 , 0]);
    test('Resultado esperado al enviar la siguiente data ([ 2 , 6 , 0 , 4 , 0]) { "data_ingresada": [ 2 , 6 , 0 , 4 , 0], "promedio": 4, "sumaTotal": 12, "totalNumeros": 3}', () => { 
        let data = [ 2 , 6 , 0 , 4 , 0]
        let obj = { 
            "data_ingresada": data,
            "promedio": 4,
            "sumaTotal": 12,
            "totalNumeros": 3
        }
        //la suma total es 12 y no 17 es por que el programa esta hecho para finalizar sus procesos con el primer cero en sistema
        expect(app).toStrictEqual(obj);
    })

    test('Resultado esperado al enviar la siguiente data ([ 2 , 6 , 0 , 4 , 0]) { "data_ingresada": [ 2 , 6 , 23 , 4 , 0], "promedio": 8.75, "sumaTotal": 35, "totalNumeros": 4}', () => { 
        let data = [ 2 , 6 , 23 , 4 , 0]
        let app = programaCiclico(data);
        let obj = { 
            "data_ingresada": data,
            "promedio": 8.75,
            "sumaTotal": 35,
            "totalNumeros": 4
        }
        expect(app).toStrictEqual(obj);
    })

     test('Resultado esperado al pasar data erronea "{Error: "Error validacion de data", mensaje: "El dato de entrada debe ser un objeto con numeros"}', () => { 
        let app = programaCiclico([]);
        let obj = {
            Error: "Error validacion de data",
            mensaje: "El dato de entrada debe ser un objeto con numeros"
        }
        expect(app).toStrictEqual(obj);
     })

     test('Resultado esperado es "Object"', () => { 
        expect(typeof app).toBe("object");
     })
 })