import { promedioNotas } from "../../../version/v1/notas";


describe('test del promedio de notas', () => { 
    let app = promedioNotas(4 , 3 , 1);
    test('Resultado esperado al perder el promedio con las notas (4,3,1) "{"mensaje": "Estudie" , "promedio":  2.6666666666666665}"', () => { 
        let promedio = 8 / 3;
        let obj = {"mensaje": "Estudie" , "promedio": promedio}
        expect(app).toStrictEqual(obj);
     })

     test('Resultado esperado al pasar el promedio con las notas (5,3,4) "{"mensaje": "¡Becado!" , "promedio":  4}"', () => { 
        let app = promedioNotas(5 , 3 , 4);
        let promedio = 12 / 3;
        let obj = {"mensaje": "¡Becado!" , "promedio": promedio}
        expect(app).toStrictEqual(obj);
     })
     test('Resultado esperado es "Object"', () => { 
        expect(typeof app).toBe("object");
     })
 })