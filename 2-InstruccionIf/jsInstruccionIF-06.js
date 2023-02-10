function mostrar()
{
	let mayor;
	let menor;
	let adolescente;

	mayor = parseInt(document.getElementById("txtIdEdad").value);
	menor = parseInt(document.getElementById("txtIdEdad").value);
	adolescente = parseInt(document.getElementById("txtIdEdad").value);

	if (menor < 13){
		alert ("La persona es menor")
	}
	else{
		if (adolescente >= 13 && adolescente < 18){
			alert("La persona es adolecente")
		}
		else{
			if (mayor >= 18){
				alert ("La persona es mayor")
			}
		}
	}
}//FIN DE LA FUNCIÓN

/*Copyright(?) Gonzalo Rojas Grupo 3 Div D
Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años)
o adolescente (entre 13 y 17 años) o niño (menor a 13 años). */