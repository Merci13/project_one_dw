var usuarios=[];


$( document ).ready(function() {
	var url=window.location.href;
	var urlSplit=url.split("/");
	var listUrl=["fulanito-a.html","home_administrador.html","home_colaborador.html","infor-patron.html","list-cows.html","list-workers.html","login.html","logout.html","sing_up.html","vacunas-colaborador.html","vacunas.html"];
	for (var i = listUrl.length - 1; i >= 0; i--) {
		if (urlSplit[urlSplit.length-1]==listUrl[i]) {
			usuarios=obtener_local('users');
		}
	}
    
});


function obtener_local(key){
	var array=[]
	var list=localStorage.getItem(key);
	if (list!=null || list!=undefined) {
		return array=JASON.parse(list);
	}else{
		return array=[];
	}

}

function guardar_local(key, valor_a_guardar){
	var array=valor_a_guardar;
	if (array==null||array==undefined||array==[]) {
		return console.log("valor a guardar esta vacio o indefinido");
	}else{
		localStorage.setItem(key,JSON.stringify(array));
		return  console.log("valor guardado con exito");
	}
}

function nuevo_usuario(){
	var nombre= document.getElementById('name').value;
	var apellido=document.getElementById('last-name').value;
	var email=document.getElementById('email-direction').value;
	var contraseña=document.getElementById('contraseña').value;
	var confirmar_contraseña=document.getElementById('pass-validation').value;
	/*recorrido de usuarios para validar que no se encuentren repetidos
	 los nombres de usuario o correos	electronicos*/
	for (var i = usuarios.length - 1; i >= 0; i--) {
		if (usuarios[i][0]==nombre) {
			alert("El nombre de usuario ya existe");
			limpiar_campos();
		}else if (usuarios[i][2]==email) {
			alert("El email ya esta en uso");
			limpiar_campos();
		}


	}

	if (contraseña!=confirmar_contraseña) {
			alert("Las contraseña no coinciden");
			limpiar_campos();
		}else{
			var usuario_nuevo=[nombre,apellido,email,contraseña];
			usuarios.push(usuario);
			guardar_local('users',JSON.stringify(usuarios));
			alert()
		}


}
function limpiar_campos(){
	document.getElementById('name').setAttribute('value'," ");
	document.getElementById('last-name').setAttribute('value'," ");
	document.getElementById('email-direction').setAttribute('value'," ");
	document.getElementById('contraseña').setAttribute('value',"");
	document.getElementById('pass-validation').setAttribute('value'," ");
}