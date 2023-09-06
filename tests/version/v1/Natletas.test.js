import { MayorMarcaAtletas } from "../../../version/v1/Natletas.js";

describe('test de la comparacion de numeros', () => { 
    let app = MayorMarcaAtletas([
        {
            Marca : 14.22,
            Atleta : "juan Jose"
        },
        {
            Marca : 12,
            Atleta : "angel ramirez"
        },
        {
            Marca : 9.23,
            Atleta : "Damian Alfonzo"
        }
    ]);
    test('Resultado esperado al enviar la siguiente data ([{ Marca : 14.22,Atleta : "juan Jose"},{ Marca : 12, Atleta : "angel ramirez"}, { Marca : 9.23, Atleta : "Damian Alfonzo"}]) {"Nuevorecord": "No", "mensaje": "La Finalista ganadora del Oro es juan Jose gracias a su marca de 14.22mts. FELICIDADES"}', () => { 
        let obj = { 
            "Nuevorecord": "No",
            "mensaje": "La Finalista ganadora del Oro es juan Jose gracias a su marca de 14.22mts. FELICIDADES"
        }
        expect(app).toStrictEqual(obj);
    })

    test('Resultado esperado al enviar la siguiente data ([{ Marca : 14.22,Atleta : "juan Jose"},{ "Nuevorecord": "Si", "felicitacion": "!INCREIBLE!, rompiste nuestro record anterior, recuerda reclamar tu pago de 500 millones por llegar tan lejos", "mensaje": "La Finalista ganadora del Oro es undefined gracias a su marca de 19.23mts. FELICIDADES"}', () => { 
        let app = MayorMarcaAtletas([{ Marca : 14.22,Atleta : "juan Jose"},{ Marca : 12, Atleta : "angel ramirez"}, { Marca : 19.23, Atleta : "Damian Alfonzo"}]);
        let obj = { "Nuevorecord": "Si", "felicitacion": "!INCREIBLE!, rompiste nuestro record anterior, recuerda reclamar tu pago de 500 millones por llegar tan lejos", "mensaje": "La Finalista ganadora del Oro es undefined gracias a su marca de 19.23mts. FELICIDADES"}
        expect(app).toStrictEqual(obj);
    })

     test('Resultado esperado al pasar data erronea "{Error: "Error validacion de data", mensaje: "El dato de entrada debe ser un objeto"}', () => { 
        let app = MayorMarcaAtletas(60);
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