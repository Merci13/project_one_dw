var usuarios=[];


$( document ).ready(function() {
	var url=window.location.href;
	var urlSplit=url.split("/");
	var listUrl=["fulanito-a.html","home_administrador.html","home_colaborador.html","infor-patron.html","list-cows.html","list-workers.html","login.html",
	"logout.html","sing_up.html","sing_up.html?","vacunas-colaborador.html","vacunas.html"];
	for (var i = listUrl.length - 1; i >= 0; i--) {
		if (urlSplit[urlSplit.length-1]==listUrl[i]) {
			usuarios=obtener_local('users');
			break;
		}
	}
    
});

/*
	Funcion para obtener tados de local storage a partir de una key
	@parameters key = string con la palabra clave para el local storage
*/
function obtener_local(key){
	var array=localStorage.getItem(key);
	var convert=JSON.parse(array);
	if (convert==null) {
		return convert=[];
	}else{
		for (var i = convert.length - 1; i >= 0; i--) {
			console.log(convert[i]);
		}
	
		return convert;
	}
	 
    

}
/*
	Funcion para guardar en local storage
	@parameters key = nombre de la llave bajo la cual se guardara en local storage
	@parameters valor_a_guardar= valor que se guardara en local storage, 
					   tiene que estar en formato JSON para que funcione
*/
function guardar_local(key, valor_a_guardar){
	
	if (valor_a_guardar==null||valor_a_guardar==undefined||valor_a_guardar==[]) {
		return console.log("valor a guardar esta vacio o indefinido");
	}else{
		localStorage.setItem(key,valor_a_guardar);
		return  console.log("valor guardado con exito");
	}
}
/*
	Funcion para guardar un nuevo usaurio
*/

function nuevo_usuario(){
	var nombre= document.getElementById('name').value;
	var apellido=document.getElementById('last-name').value;
	var email=document.getElementById('email-direction').value;
	var contraseña=document.getElementById('contraseña').value;
	var confirmar_contraseña=document.getElementById('pass-validation').value;
	/*recorrido de usuarios para validar que no se encuentren repetidos
	 los nombres de usuario o correos	electronicos*/
	for (var i = usuarios.length-1; i >= 0; i--) {
		if (usuarios[i][0]==nombre) {
			alert("El nombre de usuario ya existe");
			limpiar_campos_sing_up();
			break;
		}else if (usuarios[i][2]==email) {
			alert("El email ya esta en uso");
			limpiar_campos_sing_up();
			break
		}


	}

	if (contraseña!=confirmar_contraseña) {
			alert("Las contraseña no coinciden");
			limpiar_campos_sing_up();
		}else{
			var usuario_nuevo=[nombre,apellido,email,contraseña];
	
			usuarios.push(usuario_nuevo);
			guardar_local('users',JSON.stringify(usuarios));
			alert("Se agrego correctamente");
			limpiar_campos_sing_up();
		}


}
/*
	Funcion para limpiar los inputs de la pagina sing_up.html
*/
function limpiar_campos_sing_up(){
	document.getElementById('name').setAttribute('value'," ");
	document.getElementById('last-name').setAttribute('value'," ");
	document.getElementById('email-direction').setAttribute('value'," ");
	document.getElementById('contraseña').setAttribute('value',"");
	document.getElementById('pass-validation').setAttribute('value'," ");
}