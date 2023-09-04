export const factura = (Nombre, ID, NA, PA, CA)=>{
    let Total = CA * PA;
    return {
        factura : "--------------FACTURA--------------",
        informacion : `TIENDA ORIGINAL  NIT: 2344234234 \n \t Tienda Sur TEL: ########## \n \t Comprador: ${Nombre} \n \t CC: ${ID} \n \tCODIGO----DESCRIPCION----UNIDADES----VALOR`,
        producto: ` 1987     ${NA}      ${CA}      ${PA}`,
        totalS : "--------------TOTAL--------------",
        totalT : `Total a pagar      COP$${Total}`
    }
}