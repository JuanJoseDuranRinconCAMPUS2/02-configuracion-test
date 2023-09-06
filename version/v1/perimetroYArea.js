export const perimetroYArea = (L , B , H)=>{

    let data = [ L , B , H ]
    
    if(data.some(valor => typeof valor != "number" || valor <0)){
        return {
            Error: "Error validacion de data",
            mensaje: "La data de entrada debe ser numeros positivos"
        }
    }

    return {
        Operaciones : "Area y perimetro",
        operacion1 : `Perimetro de un cuadrado con un valor de ${L}cm cada lado`,
        perimetro: `Resultado: El perimetro es de ${L*4}cm2`,
        operacion2 : `Area de un triangulo con base ${B}cm y altura ${H}`,
        Area : `Resultado: El Area es de ${(B*H)/2}cm3`
    }
}