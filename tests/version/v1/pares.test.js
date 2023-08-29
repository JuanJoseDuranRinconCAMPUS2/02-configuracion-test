import { pareseImpares } from "../../../version/v1/pares";

describe('test del promedio de notas', () => { 
    let app = pareseImpares(11);
    test('Resultado esperado al cargar un numero par menor que diez "{"numero": 8 , "mensaje": "El numero es par ademas, El numero es menor que diez"}"', () => { 
        let app = pareseImpares(8);
        let obj = {"numero": 8 , "mensaje": "El numero es par ademas, El numero es menor que diez"}
        expect(app).toStrictEqual(obj);
     })

     test('Resultado esperado al cargar un numero impar mayor que diez "{"numero": 13 , "mensaje": "El numero es impar ademas, El numero es mayor que diez"}"', () => { 
        let app = pareseImpares(13);
        let obj = {"numero": 13 , "mensaje": "El numero es impar ademas, El numero es mayor que diez"}
        expect(app).toStrictEqual(obj);
     })
     test('Resultado esperado es "Object"', () => { 
        expect(typeof app).toBe("object");
     })
 })