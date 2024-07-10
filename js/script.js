document.addEventListener('DOMContentLoaded', () => {
    // Declarar variables, esto es lo que va dentro de la tabla donde está el carrito
    const carrito = document.querySelector('#carrito tbody');
    const listaProductos = document.querySelector('#lista-1');
    const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');

    // Activar las funciones que se haga click
    listaProductos.addEventListener('click', agregarProducto);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

    // Funciones
    function agregarProducto(e) {
        e.preventDefault();
        if (e.target.classList.contains('agregar-carrito')) {
            const producto = e.target.parentElement.parentElement;
            leerDatosProducto(producto);
        }
    }

    function leerDatosProducto(producto) {
        const infoProducto = {
            imagen: producto.querySelector('img').src,
            nombre: producto.querySelector('h3').textContent,
            precio: producto.querySelector('.precio').textContent,
            id: producto.querySelector('a').getAttribute('data-id')
        }
        insertarCarrito(infoProducto);
    }

    function insertarCarrito(producto) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${producto.imagen}" width="100"></td>
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
            <td><a href="#" class="borrar-producto" data-id="${producto.id}">X</a></td>
        `;
        carrito.appendChild(row);
    }

    function vaciarCarrito() {
        while (carrito.firstChild) {
            carrito.removeChild(carrito.firstChild);
        }
    }
});