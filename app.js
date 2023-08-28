const url = 'https://www.dolarsi.com/api/api.php?type=valoresprincipales' //Llamamos a la API


fetch(url)
.then(res => res.json())
.then(data => {
    data.forEach(el => {
        console.log(el.casa.venta)
        if(el.casa.nombre === "Dolar Oficial"){
            let precioDolar = document.getElementById('dolar')
            precioDolar.innerHTML = el.casa.venta
        } if(el.casa.nombre === "Dolar Blue"){
            document.getElementById('dolar-venta').innerHTML = "$ " +  el.casa.venta //Mostramos en pantalla el valor de venta del dólar blue
        } if(el.casa.nombre === "Dolar Blue"){
            document.getElementById('dolar-compra').innerHTML = "$ " + el.casa.compra //Mostramos en pantalla el valor de compra del dólar blue
        }
        })

    
})
.catch(err => console.log(err))

//Hacemos la funcion mostrar para realizar las operaciones necesarias
function mostrar(valor){
        fetch('https://dolarsi.com/api/api.php?type=valoresprincipales') //Llamamos nuevamente a la API
        .then(res => res.json())
        .then(data => {
            data.forEach(el => {
                if(el.casa.nombre === "Dolar Oficial"){
                    let precioDolar = el.casa.venta

                    let valorImp = parseFloat(precioDolar) * valor //Multiplicamos el monto ingresado más el valor del dólar oficial

                    let impDolar = (valorImp * 30)/100 //Obtenemos el 30% del impuesto solicitado

                    document.getElementById("impuesto").innerHTML = impDolar.toFixed(2) //Mostramos el valor del dólar con el impuesto al 30%

                    let impuestoDolar = (valorImp * 45)/100 //Obtenemos el 45% de las retenciones solicitadas

                    document.getElementById("retencion").innerHTML = impuestoDolar.toFixed(2) //Mostramos el el valor del dólar con la retención del 45%

                    document.querySelector("#calcular").addEventListener("click", () =>{ //Creamos el evento click para el botón calcular
                    let total = valorImp + impDolar + impuestoDolar //Obtenemos el total del valor del dólar con el impuesto del 30% más la retención del 45%
                    document.getElementById("total").innerHTML = total.toFixed(2) //Mostramos en pantalla el total del monto solicitado para la compra
                    })
               }

        })

    })
        
}

