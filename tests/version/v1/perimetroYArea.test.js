import { perimetroYArea } from "../../../version/v1/perimetroYArea";


describe('test de perimetro', () => { 
    let app = perimetroYArea(4 , 3, 8);
    test('Resultado esperado al enviar la siguiente data (4 , 3, 8) "{ Operaciones : "Area y perimetro", operacion1 : `Perimetro de un cuadrado con un valor de ${L}cm cada lado`, perimetro: `Resultado: El perimetro es de ${L*4}cm2`, operacion2 : `Area de un triangulo con base ${B}cm y altura ${H}`, Area : `Resultado: El Area es de ${(B*H)/2}cm3`}', () => { 
        let L = 4;
        let B = 3;
        let H = 8;
        let obj = {   
            Operaciones : "Area y perimetro",
            operacion1 : `Perimetro de un cuadrado con un valor de ${L}cm cada lado`,
            perimetro: `Resultado: El perimetro es de ${L*4}cm2`,
            operacion2 : `Area de un triangulo con base ${B}cm y altura ${H}`,
            Area : `Resultado: El Area es de ${(B*H)/2}cm3`
        }
        expect(app).toStrictEqual(obj);
     })

     test('Resultado esperado al pasar data erronea "{Error: "Error validacion de data", valorError: "hola", mensaje: "La data de entrada debe ser un numero positivo"}', () => { 
        let app = perimetroYArea("hola" , 3, "hola");
        let obj = {
            Error: "Error validacion de data",
            mensaje: "La data de entrada debe ser numeros positivos"
        }
        expect(app).toStrictEqual(obj);
     })

     test('Resultado esperado es "Object"', () => { 
        expect(typeof app).toBe("object");
     })
 })