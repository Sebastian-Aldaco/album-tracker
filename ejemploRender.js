
/**
 *! Manipulación de la interfaz
 *? 1. Propiedad llamada innerhtml
 * Dentro de ella, podremos observar todo el html que vive
 * dentro de la etiqueta seleccionada
 * Si lo usamos sin cuidado, podemos borrar todo lo que estaba
 * ! IMPORTANTE
 * ! No usar innerhtml para renderizar solo texto si estoy recibiendo y mostrando inmediatamente (propenso a "inyeccion de html")
 * 
 * 2. Propiedad llamada textContext
 * Solo mostrará el texto que tiene dentro
 * 
 * 
 */

 console.log(mainEl.innerHTML);
 console.log("--------- Text Content ---------")
 console.log(mainEl.textContent);

 mainEl.innerHTML += "<h1> Hola CH 71</h1>";
 mainEl.innerHTML += card;
 console.log(mainEl.innerHTML);

//  mainEl.textContent += "hola";
//  mainEl.textContent += card;

/**
 *! Insert Adjacent HTML
 * 
 * Permite insertar html en el contenedor sin borrar lo
 * que ya esta y en una posición específica
 * 
 * Tiene 4 posiciones
 * 1. beforebegin
 * 2. beforeend
 * 3. afterbegin
 * 4. afterend
 * 
 */

 mainEl.insertAdjacentHTML(
    "beforeend",
    "<p>Insertado por insert adjacent html</p>"
 );
 mainEl.insertAdjacentHTML("beforeend", card);