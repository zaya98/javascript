const contenedorprincipal = document.getElementById("contenedor")
const contenedorCarrito = document.getElementById("carritoHTML")
const precioHTML = document.getElementById("totalprecio")
let productos = []
let carrito = []
let PRODUCTOS = "/productos.json"
Swal.fire({
    title: 'Eres mayor de 18 años?',
    showDenyButton: true,
    showCancelButton: false,
    confirmButtonText: 'SI', 
    denyButtonText: `NO`,
    background: "radial-gradient(yellow, orange )",
    border: "15px",
  }).then((result) => {
    if (result.isConfirmed) {
        $.getJSON(PRODUCTOS, function (res, req) {
            if (req === "success"){
                let item = res; 
                for(const producto of item){
                    productos.push(producto);
                    function renderproducto(){
                        productos.forEach(E=>{
                            let nuevoNodo = document.createElement("div");
                            nuevoNodo.innerHTML = ` 
                            <div>
                            <img src="${E.img}" alt="producto 1">
                            <div class="informacion">
                                <p class="info">${E.producto}</p>
                                <p class="precio">$ ${E.precio}</p>
                                <p>${E.modelo}</p>
                                <p>${E.color}</p>
                                <button onclick="addToCart(${productos.indexOf(E)})">Comprar</button>
                            </div>
                        </div>
                            `
                            contenedorprincipal.appendChild(nuevoNodo)
                        })
                    }
                }
                renderproducto()
            }
        })
    } else if (result.isDenied) {
        let mensaje = document.createElement("div");
        mensaje.innerHTML =`
            <h1>Tenes que ser mayor de 18 años para poder comprar</h1>
        `
        contenedorprincipal.appendChild(mensaje)
    }
  })

  function addToCart(index){
    const producto = productos[index];
    if (carrito.length > 0) {
        var noExiste = true;
        for (var i = 0; i < carrito.length; i++) {
            if (producto.producto === carrito[i].producto) {
                carrito[i].cantidad++;
                noExiste = false;
            }
        }
        if (noExiste) {
            producto.cantidad =   1;
            carrito.push(producto);
        }
    }
    else {
        producto.cantidad = 1;
        carrito.push(producto);
    }
    let totalPrecio = producto.precio * producto.cantidad
    // console.log(carrito);
    renderCarrito ()
    sumarPrecios()
  }
  function renderCarrito () {
    contenedorCarrito.innerHTML = ''
    if (carrito.length > 0){
        carrito.forEach(prod => {
            let Nuevoelemento = document.createElement('tbody') 
            Nuevoelemento.innerHTML += `
            <thead >
                    <td>${prod.producto}</td>

                    <td >${prod.cantidad}</td>

                    <td>$${prod.precio}</td>` 
                contenedorCarrito.appendChild(Nuevoelemento);
             });     
    } 
}
sumarPrecios()
function sumarPrecios(){
    let total = 0;
    const precioHTML = document.getElementById("totalPrecio");
    carrito.forEach(prod => {
        const precio = Number(prod.precio);
        const cantidad = Number(prod.cantidad);
        return total = total + precio * cantidad
    })
precioHTML.innerHTML = `<button class="btn btn-primary button-checkout">Pagar $${total.toFixed(2)}</button>`
    $(".btn-primary").click(function() {
        swal({
            title: "Su pedido se ha registrado exitosamente",
            icon:"success",
        })        
        carrito = [];        
        sumarPrecios()
        renderCarrito() 
})      
    const miBoton = document.createElement('button');
    miBoton.classList.add('btn', 'btn-danger', 'mx-5');
    miBoton.textContent = 'Vaciar carrito';
    precioHTML.appendChild(miBoton);
    miBoton.addEventListener('click',VaciarCarrito)

        function VaciarCarrito() {
            Swal.fire({
                title: "Seguro que desea vaciar el carrito?",
                text: "Una vez confirmado no puede deshacerse",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((willDelete) => { 
                if (willDelete) {
                    carrito = [];        
                    sumarPrecios()
                    renderCarrito() 
                } 
                else {
                    Swal.fire("Su carrito se encuentra protegido, continue comprando");
                }
            });
        }
}






