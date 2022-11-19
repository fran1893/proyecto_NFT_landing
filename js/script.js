/* const animales = document.querySelectorAll('#animales img');
const eleccion = document.getElementById('eleccion'); */


/* animales.forEach(
    (animal) => {
        let remove = false;
        let eleccionAnimal = () => {
            let src = animal.getAttribute('src');
            let alt = animal.getAttribute('alt');
            eleccion.innerHTML = '<img class="rounded float-start animales" src="' + src + '" alt="' + alt + '" width="30%" />';
            remove == true;
        };
        animal.addEventListener('click', eleccionAnimal);
        if (remove == true) {
            animal.removeEventListener('click', eleccionAnimal);
        }
    }
)
 */

const imagenes = document.querySelector(".imagenes");
const opciones = [
    { animal: 'cerdo', descripcion: 'In love'},
    { animal: 'dalmata', descripcion: 'Happy'},
    { animal: 'conejo', descripcion: 'Anxious'},
    { animal: 'caballo', descripcion: 'Angry'},
    { animal: 'mapache', descripcion: 'Fearful'}
]

/* scroll hacia section */
const scrollAnimado = elemento => {
    const destino = document.querySelector(elemento);
    destino.scrollIntoView({
      behavior: 'smooth'
    });
  }

/* Se pintan las imagenes en el html */

const pintarOpciones = () => {

    /* Se borran antes por si acaso habia alguna antes, de esta manera 
    cuando se hace click y se vuelven a pintar no tienen el evento click 
    al solo hacerse el addeventlistener al cargar la página */

    imagenes.childNodes.forEach( node => node.remove());
    opciones.forEach( ({ animal, descripcion }, id) => {
        imagenes.insertAdjacentHTML('beforeend', `
            <div class="col-4 col-sm-2 opcion" id=${id}>
                <img class="img-fluid animales" src="img/${animal}.png" alt="${animal}" width="100%" />
                <p class="nombre">${descripcion}</p>
            </div> 
        `);
    })
}

pintarOpciones();

const opcion = document.querySelectorAll('.opcion');
const eleccionImagen = document.querySelector('.eleccion-imagen');

/* evento click de las imágenes */

opcion.forEach( animal => {
    animal.addEventListener('click', () => {
        /* añado la imagen seleccionada solo si no hay otra */
        !eleccionImagen.hasChildNodes() && (eleccionImagen.appendChild(animal));
        /* es aquí en donde a la imagen seleccionada puedes añadirle un enlace (mediante appendChild por si quieres ir a otro sitio) */
        /* scroll hacia la imagen insertada en el html */
        scrollAnimado('footer');
    });
})


