

//let informacion= fetch("https://fakestoreapi.com/products/")

//console.log (informacion);

let contenedor = document.getElementById ("contenedor");

fetch("https://fakestoreapi.com/products/")
.then(resp => resp.json())
.then(data =>{
    data.forEach(prod => {
        contenedor.innerHTML +=  `<h2>Nombre: ${prod.title}</h2><h4>Precio: ${prod.price}</h4></>`

    })
} )
.catch(err => console.log(err))