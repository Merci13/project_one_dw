 var usuario = [];
 var actual = [];

 $(document).ready(function() {

     var usuariosLocal = obtener_local('users');
     var usuarioActual = obtener_local('actual');
     if (!usuariosLocal) {
         usuarios = [];
     } else {
         usuarios = usuariosLocal;
     }
     if (!usuarioActual) {
         actual=[];

     } else {
         actual = usuarioActual;
     }




 });

 /*
 	Funcion para cargar los tableros pertenecientes al usuario logeado
 */


 function cargar_tableros() {
     var tableros = obtener_local('tableros');
     var div_tableros = document.getElementById('lista_de_tablas');
     for (var tab in tableros) {
         if (tab[1] == usuarioLogeado[2]) {
             div_tableros.innerHTML += '<a type="button" class="btn btn-success" href="https://www.youtube.com/">' + tab[0] + '</a>';
         }
     }
 }







 /*
 	Funcion para obtener tados de local storage a partir de una key
 	@parameters key = string con la palabra clave para el local storage
 */

 function obtener_local(key) {
     var array = localStorage.getItem(key); //obtiene de localStorage
     var convert = JSON.parse(array); //lo parsea a normal
     if (convert == null) { //validacion
         return convert = [];
     } else {

         return convert;
     }



 }

 /*
 	Funcion para guardar en local storage
 	@parameters key = nombre de la llave bajo la cual se guardara en local storage
 	@parameters valor_a_guardar= valor que se guardara en local storage, 
 					   tiene que estar en formato JSON para que funcione
 */
 function guardar_local(key, valor_a_guardar) {

     if (valor_a_guardar == null || valor_a_guardar == undefined || valor_a_guardar == []) {
         return console.log("valor a guardar esta vacio o indefinido");
     } else {
         localStorage.setItem(key, valor_a_guardar);
         return console.log("valor guardado con exito");
     }
 }