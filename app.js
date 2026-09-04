/**
 * 
 * Todo lo que seleccionemos al principio debe de ser seleccionado mediante el documento
 * 
 *! Opciones de Selección
 * 
 * * Clásicas
 * getElementById
 * getElementByClassName
 * 
 * * Modernas
 * Nos permite seleccionar por un selector CSS
 *      Selectores CSS 
 *          Etiqueta | Por ejemplo: form
 *          Clase | . | Por ejemplo: .form-control
 *          Id | # | Por ejemplo: #title
 * 
 *? querySelector()
 * Si usamos un selector como de clase, solo va a seleccionar la primera coincidencia
 * 
 *? querySelectorAll
 * Selecciona todas
 * 
 * 
 */const formEl = document.getElementById("album-form");
 console.log(formEl);

 const mainEl = document.querySelector("#album-container");
 console.log(mainEl);

 let albums = [];

 /**
  * 
  * Eventos
  * Es cualquier accion que realiza el usuario en la pagina web
  * Escuchar por el evento
  * Escuchamos por un evento para que cuando ocurra
  * desencadene una respuesta
  * 
  * Pasos para extraer la info del formulario
  * 1. Agregar un event listener del evento submit
  * 2. Prevenir el comportamiento por default
  * 3. Construir un form data dándole el elemento formulario
  * 4. Extraer la información del formData y guardarla en 
  * un array de arrays, usando el spread operator
  * 
  * El Spread operator desempaqueta la información de un
  * iterable y la guarda en otro
  * 
  * 5. Crear un objeto con la información usando 
  * Object.fromEntries()
  * Object from entries recibe un array de arrays
  */

 window.addEventListener("load", (event) =>{
 if(getItemLocalStorage("albums") == undefined) return;
 albums = [...getItemLocalStorage("albums")];
 albums.map((album) => renderCard(album, mainEl));
  /**
   * Segunda opcion para no usar const, y usar let
   * getItemLocalStorage("albums")forEach((album) => albums.push(album));
   * 
   */

 });



 formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(formEl);
    console.log(formData);
    const dataArray = [...formData];
    console.log(dataArray);
    const dataObject = Object.fromEntries(dataArray);
    console.log(dataObject);
    const album = Object.fromEntries(dataArray);
    console.log(album);
    //como hacer todo eso en una linea


    // const album = Object.fromEntries([...newFormData (formEl)]);
    albums.push(album);

    setLocalStorage("albums", albums);
    // Limpiamos antes de volver a renderizar las cards, para evitar la acumulación
    mainEl.innerHTML ="";
    // Renderizamos todas las cards dentro del array de albums
    albums.map((album) => renderCard(album, mainEl))
    formEl.reset();
});

const renderCard = (albumObject, htmlElement) => {
const card = `
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${albumObject.title}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">${albumObject.artist}</h6>
      <p class="card-text">Genero: ${albumObject.genre}</p>
      <a href="#" class="card-link">Año de lanzamiento: ${albumObject.releasedYear}</a>
      <a href="#" class="card-link">Rating: ${albumObject.rating}</a>
    </div>
  </div>
  `
htmlElement.insertAdjacentHTML("beforeend", card);
};

const setLocalStorage = (key, value) => {
  // Paso 1. Convertir el valor a tipo string
  const textValue = JSON.stringify(value);
  
  // Paso 2. Almacenar
  localStorage.setItem(key, textValue);
}

const getItemLocalStorage = (key) => {
  if (localStorage.getItem(key) == null) return;
  // Convertimos de texto a lenguaje js
  const data = JSON.parse(localStorage.getItem(key));
  return data;
}

