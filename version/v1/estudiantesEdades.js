export const estudiantesEdad = (personas)=>{
    
    if(typeof personas != "object"){
        return {
            Error: "Error validacion de data",
            mensaje: "El dato de entrada debe ser un objeto"
        }
    }
    let mayor = personas[0].nota;
    let menor = personas[0].nota;
    let personaMayorN = personas[0].nombre;
    let personaMenorN = personas[0].nombre;
    let countM = 0
    let countF = 0

    personas.forEach(person => {
        const persona = person
        const nota = persona.nota
        const genero = persona.genero
        
      if (nota > mayor) {
        mayor = nota;
        personaMayorN = persona.nombre;
      }

      if (nota < menor) {
        menor = nota;
        personaMenorN = persona.nombre;
      }

      if (genero == "M") {
        countM++
      }

      if (genero == "F") {
        countF++
      }
    });

    return {
        personaConMayorNota : personaMayorN,
        mayorNota : mayor,
        personaConMenorNota: personaMenorN,
        menorNota : menor,
        cantidadHombres : countM,
        cantidadMujeres : countF
    }
}
