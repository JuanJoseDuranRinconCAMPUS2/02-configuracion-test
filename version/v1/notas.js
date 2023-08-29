export const promedioNotas = (nota1, nota2, nota3)=>{

    let SumaTotal = nota1 + nota2 + nota3;
    const Promedio = SumaTotal / 3;
    let mensaje = "";
    mensaje = Promedio >= 3.9
            ? "¡Becado!"
            : "Estudie";
    return {
        promedio: Promedio,
        mensaje: mensaje
    }
}