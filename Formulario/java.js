function EnviarFormulario(){
    console.log('Proceso en Envio....');

    return false;





    
}



function Letras(e){
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toString();
    letras = 'ABCDEFGHIJKLMNÑOPQRSTUWVXYZÁÉÍÓÚabcdefghijklmnñopqrstuvwxyzáéíóú'
    especiales = [8,13];
    tecla_especial = false
    for(var i in especiales){
        if(key == especiales [i]){
            tecla_especial = true;
            break;
        }
    }
    if(letras.indexOf(tecla) == -1 && !tecla_especial)
    {
        window.alert("Ingresar solo letras" );
        return false;
    }

}

function Numeros(evt){
    if(window.Event){
        keynum = evt.keyCode;
    }
    else{
        keynum = evt.which;
    }
    if((keynum > 47 && keynum < 58) || keynum === 8 || keynum === 13){
        return true;
    }
    else{
        window.alert("Ingrese solo Números");
        return false;
    }
}


function Mayor(){
    var Edad = document.getElementById('edad').value;
    if(Edad >= 18 && Edad <= 34 ){
        return true;
    }else{
        document.getElementById('edad').value = '';
        window.alert('La edad debe estar entre 18 y 34 años');
        return false;
    }
    
    
}


function validateEmail(){
                
	// Obtenga nuestra referencia de entrada.
	var emailField = document.getElementById('gmail');
	
	// Definir nuestra expresión regular.
	var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

	// Usando la prueba podemos verificar si el texto coincide con el patrón
	if( validEmail.test(emailField.value) ){
		window.alert('El correo electrónico es válido, continúe con el envío del formulario');
		return true;
	}else{
		window.alert('El correo electrónico no es válido, omita el envío del formulario');
		return false;
	}
} 


function sub(){
    var nombre = null;
    var correo = null;
    var apellido = null;

    nombre = document.getElementById("nom").value;
    apellido = document.getElementById("apparteno").value;
    correo = document.getElementById("correo").value;
    window.print(nombre);
    window.print(correo);
    window.print(apellido);

}








function validarRut(rut) {
    var run = document.getElementById('rut');
    rut = rut.replace(/[^0-9kK]/g, '');
    if (rut.length === 0) {
      return false;
    }
    var cuerpo = rut.slice(0, -1);
    var dv = rut.slice(-1).toUpperCase();
    cuerpo = cuerpo.split('').reverse().join('');
    var suma = 0;
    for (var i = 0; i < cuerpo.length; i++) {
      suma += parseInt(cuerpo.charAt(i)) * ((i % 6) + 2);
    }
    var resto = suma % 11;
    var dvCalculado = 11 - resto;
    if (dvCalculado === 11) {
      dvCalculado = '0';
    } else if (dvCalculado === 10) {
      dvCalculado = 'K';
    } else {
      dvCalculado = '' + dvCalculado;
      
    }return dv === dvCalculado;   
}


  