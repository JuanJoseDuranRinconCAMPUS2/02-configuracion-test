import { obtener } from "../../../version/v1/factura";

describe('test del archivo factura.js', () => { 
    let app = obtener("Fred");
    let obj = {"id": 1, "nombre": "Fred"}
    test('El objeto esperado { ....id, ...nombre}', () => { 
        expect(app).toStrictEqual(obj);
     })
     test('El objeto esperado es "Object"', () => { 
        expect(typeof app).toBe("object");
     })
 })