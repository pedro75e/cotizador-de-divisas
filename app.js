const url = 'https://www.dolarsi.com/api/api.php?type=valoresprincipales'


fetch(url)
.then(res => res.json())
.then(data => {
    data.forEach(el => {
        console.log(el.casa.venta)
        if(el.casa.nombre === "Dolar Oficial"){
            let precioDolar = document.getElementById('dolar')
            precioDolar.innerHTML = el.casa.venta
        } if(el.casa.nombre === "Dolar Blue"){
            document.getElementById('dolar-venta').innerHTML = "$ " +  el.casa.venta
        } if(el.casa.nombre === "Dolar Blue"){
            document.getElementById('dolar-compra').innerHTML = "$ " + el.casa.compra
        }
        })
   /* console.log(data)*/
    
})
.catch(err => console.log(err))


function mostrar(valor){
        fetch('https://dolarsi.com/api/api.php?type=valoresprincipales')
        .then(res => res.json())
        .then(data => {
            data.forEach(el => {
                if(el.casa.nombre === "Dolar Oficial"){
                    let precioDolar = el.casa.venta

                    let valorImp = parseFloat(precioDolar) * valor

                    let impDolar = (valorImp * 30)/100

                    document.getElementById("impuesto").innerHTML = impDolar.toFixed(2)

                    let impuestoDolar = (valorImp * 45)/100

                    document.getElementById("retencion").innerHTML = impuestoDolar.toFixed(2)

                    document.querySelector("#calcular").addEventListener("click", () =>{
                    let total = valorImp + impDolar + impuestoDolar
                    document.getElementById("total").innerHTML = total.toFixed(2)
                    })
               }

        })

    })
        
}

