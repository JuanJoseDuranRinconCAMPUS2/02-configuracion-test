import { factura } from "../../../version/v1/factura";

describe('test del archivo factura.js', () => { 
    let app = factura("Juan Jose", 106152664, "PLAY5", 10000000, 3);
    test('Resultado esperado al enviar la siguiente data ("Juan Jose", 106152664, "PLAY5", 10000000, 3)', () => { 
        let Nombre = "Juan Jose";
        let ID = 106152664;
        let NA = "PLAY5";
        let PA = 10000000;
        let CA = 3;
        let Total = CA * PA;
        let obj = { 
            factura : "--------------FACTURA--------------",
            informacion : `TIENDA ORIGINAL  NIT: 2344234234 \n \t Tienda Sur TEL: ########## \n \t Comprador: ${Nombre} \n \t CC: ${ID} \n \tCODIGO----DESCRIPCION----UNIDADES----VALOR`,
            producto: ` 1987     ${NA}      ${CA}      ${PA}`,
            totalS : "--------------TOTAL--------------",
            totalT : `Total a pagar      COP$${Total}`
        }
        expect(app).toStrictEqual(obj);
     })
     test('El objeto esperado es "Object"', () => { 
        expect(typeof app).toBe("object");
     })
 })