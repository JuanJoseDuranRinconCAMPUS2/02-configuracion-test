export const pareseImpares = (num)=>{
    const DV = num % 2;
    let mensaje = "";
    mensaje = DV === 0
            ? "El numero es par"
            : "El numero es impar";
    mensaje += num >= 10
    ? " ademas, El numero es mayor que diez"
    : " ademas, El numero es menor que diez";
    return {
        numero: num,
        mensaje: mensaje
    }
}