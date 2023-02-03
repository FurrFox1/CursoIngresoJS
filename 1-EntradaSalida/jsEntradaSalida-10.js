/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let sueldo;
	let descuento;
	let sueldoDescontado;

	sueldo = parseFloat(document.getElementById("txtIdImporte").value);

	descuento = sueldo * 25 /100;
	sueldoDescontado = sueldo - descuento;
	
	document.getElementById("txtIdResultado").value = sueldoDescontado;
}

//Copyright(?) Gonzalo Rojas Grupo 3 Div D
