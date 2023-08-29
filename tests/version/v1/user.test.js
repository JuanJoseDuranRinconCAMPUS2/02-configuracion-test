import { saludar } from "../../../version/v1/user"

describe('test del archivo user.js', () => { 
    test('La funcion saludar devuelve "Hola Mundo"', () => { 
        let app = saludar();
        expect(app).toBe("Hola Mundo");
     })
     test('La funcion saludar devuelve un "string"', () => { 
        let app = saludar();
        expect(typeof app).toBe("string");
     })
 })