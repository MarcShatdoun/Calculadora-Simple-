function calcular(){
        // limpiar las advertencias
        let error1 = document.getElementById("error1")
        error1.innerText = ""
        let error2 = document.getElementById("error2")
        error2.innerText = ""
        let resultado = document.getElementById("resultado")
    // resultado = 0
    // Obtener los numeros
        
        let num1 = document.getElementById("num1").value;
        let num2 = document.getElementById("num2").value; 

    

    // errores 
        let errores = false;
        num1 = num1.trim()



    if(isNaN(num1) || num1 == "" ){
        error1.innerText = "entrada inválida"
        errores = true;

    }

    if (isNaN(num2) || num2 == "" ){
        error2.innerText = "entrada inválida"
        errores = true;
    }

    if (errores == true) {
        return;
    }
     console.log("num1 al principo es", typeof(num1))
     console.log("num2 al principo es", typeof(num2))

    //Convertir en entero
    num1  = parseFloat(num1)
    num2 = parseFloat(num2)

    console.log("num1 ahora es", typeof(num1))
    console.log("num2 ahora es", typeof(num2))

    let opciones = document.getElementsByName("operador")

    // console.log(opciones)

    let operacion = ""

    for(let i = 0; i < opciones.length; i++ ){
        if(opciones[i].checked == true){
        operacion = opciones[i].id;
        break;
        }
    }

    if (operacion == "sumar"){
        resultado.innerText = num1 + num2
    }   else if(operacion == "restar"){
        resultado.innerText = num1 - num2
    }   else if(operacion == "multiplicar"){
        resultado.innerText = num1 * num2
    }   else if(operacion == "dividir"){
        if (num2 == 0){
            resultado.innerText = "No se puede dividir por cero"
        return;
        }
        resultado.innerText = num1 / num2
    }
}





function reset(){
    document.getElementsByClassName("resultado").innerText = 0
}
