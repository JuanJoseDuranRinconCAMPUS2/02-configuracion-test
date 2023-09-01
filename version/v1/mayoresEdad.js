export const mayorEdad = (nom1, edad1, nom2, edad2, nom3, edad3)=>{
    let nombres = [ nom1 , nom2, nom3 ]
    let edades = [ edad1 , edad2 , edad3 ]
    
    if(nombres.some(valor => typeof valor != "string")){
        return {
            Error: "Error validacion de data",
            mensaje: "los nombres de entrada debe ser strings"
        }
    }

    if(edades.some(valor => typeof valor != "number" || valor <0)){
        return {
            Error: "Error validacion de data",
            mensaje: "Las edades de entrada debe ser numeros positivos"
        }
    }

    let message = {
        message : "La persona con mayor edad es: "
    }
    let max = Math.max(...edades)
    switch(max){
        case edad1 :
            return {
                message : "La persona con mayor edad es: ",
                nombre : nom1, 
                edad : edad1
            }
        break;
        case edad2:
            return {
                message : "La persona con mayor edad es: ",
                nombre : nom2, 
                edad : edad2
            }
        break;
        case edad3:
            return {
                message : "La persona con mayor edad es: ",
                nombre : nom3, 
                edad : edad3
            }
        break;
    }
}