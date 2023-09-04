import { estudiantesEdad } from "../../../version/v1/estudiantesEdades.js"


describe('test de la comparacion de numeros', () => { 
    let app = estudiantesEdad([
        {
            nota : 12,
            nombre : "juan Jose",
            genero : "M"
        },
        {
            nota : 14,
            nombre : "maria Jose",
            genero : "F"
        },
        {
            nota : 46,
            nombre : "maria hernanda",
            genero : "F"
        }
    ]);
    test('Resultado esperado al enviar la siguiente data ([{nota : 12,nombre : "juan Jose",genero : "M"},{nota : 14,nombre : "maria Jose",genero : "F"},{nota : 46,nombre : "maria hernanda",genero : "F"}]) { "cantidadHombres": 1,"cantidadMujeres": 2,"mayorNota": 46,"menorNota": 12,"personaConMayorNota": "maria hernanda","personaConMenorNota": "juan Jose",}', () => { 
        let obj = { 
            "cantidadHombres": 1,
            "cantidadMujeres": 2,
            "mayorNota": 46,
            "menorNota": 12,
            "personaConMayorNota": "maria hernanda",
            "personaConMenorNota": "juan Jose",
        }
        expect(app).toStrictEqual(obj);
    })

    test('Resultado esperado al enviar la siguiente data ([{nota : 50, nombre : "juan mariano", genero : "M"}, {nota : 40, nombre : "Alejandro Gomez", genero : "M"}, {nota : 46, nombre : "maria hernanda",genero : "F"}]) { "cantidadHombres": 2, "cantidadMujeres": 1, "mayorNota": 50, "menorNota": 40, "personaConMayorNota": "juan mariano", "personaConMenorNota": "Alejandro Gomez"}', () => { 
        let app = estudiantesEdad([{nota : 50, nombre : "juan mariano", genero : "M"}, {nota : 40, nombre : "Alejandro Gomez", genero : "M"}, {nota : 46, nombre : "maria hernanda",genero : "F"}]);
        let obj = { "cantidadHombres": 2, "cantidadMujeres": 1, "mayorNota": 50, "menorNota": 40, "personaConMayorNota": "juan mariano", "personaConMenorNota": "Alejandro Gomez"}
        expect(app).toStrictEqual(obj);
    })

     test('Resultado esperado al pasar data erronea "{Error: "Error validacion de data", mensaje: "El dato de entrada debe ser un objeto"}', () => { 
        let app = estudiantesEdad(60);
        let obj = {
            Error: "Error validacion de data",
            mensaje: "El dato de entrada debe ser un objeto"
        }
        expect(app).toStrictEqual(obj);
     })

     test('Resultado esperado es "Object"', () => { 
        expect(typeof app).toBe("object");
     })
 })