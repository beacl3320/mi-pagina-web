const images = document.querySelectorAll('.img-galeria');
const imagesLight = document.querySelector('.agregar-imagen');
const contenedorLight = document.querySelector('.imagen-light');
const hamburger1 = document.querySelector('.hamburger');

/* console.log(images);
console.log(imagesLight);
console.log(contenedorLight); */

images.forEach(image => {
    image.addEventListener('click', () =>{
        /* alert('hola'); */
        aparecerImage(image.getAttribute('src'));
    })
})

contenedorLight.addEventListener('click', (e) => {
    /* console.log(e.target); */
    if(e.target !== imagesLight){
        contenedorLight.classList.toggle('show');
        imagesLight.classList.toggle('showImage');
        hamburger1.style.opacity = '1';
    }
})

const aparecerImage = (image) => {
    imagesLight.src = image;
    contenedorLight.classList.toggle('show');
    imagesLight.classList.toggle('showImage');
    hamburger1.style.opacity = '0';
}