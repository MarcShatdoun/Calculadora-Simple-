// Las listas en JS se llaman "arrays"
let color1 = "rojo"
// Profesor lo llamo Array_color

//                   0          1         2         4
let listaColor = ["amarillo", "violeta", color1, "naranja"]

console.log(listaColor) 

let color_favorito = "naranja"

for (let i = 0; i < listaColor.length; i++ ){
    
    console.log(listaColor[i])
    // listaColor += i

    if(color_favorito == listaColor[i]){
        console.log("El color esta en la lista")
        break;
    } 
}