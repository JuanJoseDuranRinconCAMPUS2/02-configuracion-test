export const MayorMarcaAtletas = (atletas)=>{
    
    if(typeof atletas != "object"){
        return {
            Error: "Error validacion de data",
            mensaje: "El dato de entrada debe ser un objeto"
        }
    }
    let mayorMarca = atletas[0].Marca;
    let atletaMayorM = atletas[0].Atleta;
    let record = 15.5;

    atletas.forEach(Natleta => {
        const atleta = Natleta
        const nota = atleta.Marca
        
      if (nota > mayorMarca) {
        mayorMarca = nota;
        atletaMayorM = atleta.nombre;
      }
    });

    let resultado = (mayorMarca > record) 
    ? { mensaje : `La Finalista ganadora del Oro es ${atletaMayorM} gracias a su marca de ${mayorMarca}mts. FELICIDADES`, Nuevorecord : "Si", felicitacion : "!INCREIBLE!, rompiste nuestro record anterior, recuerda reclamar tu pago de 500 millones por llegar tan lejos"}
    : { mensaje : `La Finalista ganadora del Oro es ${atletaMayorM} gracias a su marca de ${mayorMarca}mts. FELICIDADES`, Nuevorecord : "No"}

    return resultado
}
