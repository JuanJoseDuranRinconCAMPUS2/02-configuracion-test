export const voltajeResult = (I, R)=>{
    let data = [ I , R ]
    if(data.some(valor => typeof valor != "number" || valor <0)){
        return {
            Error: "Error validacion de data",
            mensaje: "La data de entrada debe ser un numero positivo"
        }
    }
    const voltaje = I * R;
    let mensaje = `El voltaje es igual a ${voltaje}`;
    return {
        Intencidad: I,
        Resistencia: R,
        Voltaje: voltaje,
        mensaje: mensaje
    }
}