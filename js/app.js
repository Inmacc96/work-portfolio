const imagenes = document.querySelectorAll('.galeria .contenedor-imagen');
const imagenModal = document.getElementById('imagen-modal');

/* A cada imagen le aplica una función */
imagenes.forEach((imagen) => {
    /* Cuando le des click, ejecuto una funcion */
    imagen.addEventListener('click', () => {
        const ruta = imagen.querySelector('img').src;
        imagenModal.src = ruta;
    })

})