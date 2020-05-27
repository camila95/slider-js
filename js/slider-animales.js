class AnimalesSlider extends HTMLElement{
    /**
     * Constructor de la clase
     * super Hace referencia al constructor padre
     */
    constructor(){
        super();
        this.positionImg = 0;
        //this.mostrarSliderHTML();
        this.mostrarSlider();

    }

    /**
     * Método que retorna el nombre del componente
     */
    static get is(){
        return 'slider-animales';
    }

    /**
     * Muestra el html por medio de tags
     */
    mostrarSliderHTML(){
        document.body.innerHTML =
        ` 
        <div class="container slider">
        <div class="row">
        <div class="col">
        <button id = "colAtras">   <    </button>
        </div>
        <div class="col">
        <img id="colImg" src="images/buho.jpg" alt="" />
        </div>
        <div class="col">
        <button type="button"  id ="colSiguiente">   >    </button>
        </div>
        </div>
        </div> 
        ` 
        this.generarEventos();
    }

    /**
     * Función que muestra el slider por medio de propiedades de DOM
     */
    mostrarSlider(){

        const contenedor = document.createElement('div');
        contenedor.classList = "container slider";

        const row = document.createElement('div');
        row.classList="row"
        
        const colAtras = document.createElement('div');
        colAtras.classList = "col";
        const botonAtras = document.createElement('button');
        botonAtras.innerHTML="   <    ";
        botonAtras.id = "colAtras";

        const colImg = document.createElement('div');
        colImg.classList = "col";
        const imagen = document.createElement('img');
        imagen.src = this.asignarImg();
        imagen.id = "colImg";

        const colSiguiente = document.createElement('div');
        colSiguiente.classList = "col";
        const botonSiguiente = document.createElement('button');
        botonSiguiente.innerHTML="   >    ";
        botonSiguiente.id = "colSiguiente";

        colAtras.append(botonAtras);
        colImg.append(imagen);
        colSiguiente.append(botonSiguiente);
        row.append(colAtras);
        row.append(colImg);
        row.append(colSiguiente);
        contenedor.append(row);

        document.body.append(contenedor);
        this.generarEventos();
    }

    /**
     * Función que adiciona el evento click a los botones y
     * asigna el valor de la imagen, teniendo en cuenta que 
     * el 1 es siguiente y el 0 es atrás
     */
    generarEventos(){
        let imagen = document.getElementById('colImg');
        let botonSiguiente = document.getElementById('colSiguiente');
        let botonAtras = document.getElementById('colAtras');
        
        botonSiguiente.addEventListener('click', () =>{
            this.positionImg++;
            imagen.src = this.asignarImg(1);
        });

        botonAtras.addEventListener('click', () =>{
            this.positionImg--;
            imagen.src = this.asignarImg(0);
        });
    }
    
    
    /**
     * Función que permite asignar la imagen, teniendo en cuenta que el
     * 1 es siguiente y el 0 es atrás
     * Si > el final de las imgs, vuelve a la primera img
     * Si < en la primera img, vuelve a la última
     * @param {*} accion 
     */
    asignarImg(accion){
        let images = ['buho.jpg', 'mapache.png', 'ardilla.jpg', 'puercoEspin.png', 'zorro.jpg', 'koala.jpg', 'leon.png'];
        if((this.positionImg == images.length) && (accion == 1)){
            this.positionImg = 0;
        } 
        if((this.positionImg == -1) && (accion == 0)){
            this.positionImg = images.length-1;
        }
        return `images/${images[this.positionImg]}`; 
    }
    
}

//Se define un nuevo elemento personalizado
//(nombre de componente, clase a la que pertenece)
window.customElements.define(AnimalesSlider.is, AnimalesSlider);
