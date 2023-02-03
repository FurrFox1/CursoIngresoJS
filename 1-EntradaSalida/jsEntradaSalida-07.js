/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

function sumar()
{
	let suma;
	let num1;
	let num2

	num1 = document.getElementById("txtIdNumeroUno").value;
	num2 = document.getElementById("txtIdNumeroDos").value;
	
	num1 = parseInt(num1);
	num2 = parseInt(num2);
	suma = num1 + num2; 

	alert("La suma es "+ suma);		
}

function restar()
{
	let restar;
	let num1;
	let num2;

	num1 = document.getElementById("txtIdNumeroUno").value;
	num2 = document.getElementById("txtIdNumeroDos").value;
	
	num1 = parseInt(num1);
	num2 = parseInt(num2);
	restar = num1 - num2; 

	alert("La resta es "+ restar);	
}

function multiplicar()
{ 
	let multiplicar;
	let num1;
	let num2;

	num1 = document.getElementById("txtIdNumeroUno").value;
	num2 = document.getElementById("txtIdNumeroDos").value;
	
	num1 = parseInt(num1);
	num2 = parseInt(num2);
	multiplicar = num1 * num2;

	alert("La multiplicacion es "+ multiplicar);		

}


function dividir()
{
	let dividir;
	let num1;
	let num2;

	num1 = document.getElementById("txtIdNumeroUno").value;
	num2 = document.getElementById("txtIdNumeroDos").value;
	
	num1 = parseInt(num1);
	num2 = parseInt(num2);
	dividir = num1 / num2; 

	alert("La division es "+ dividir);		
}

//Copyright(?) Gonzalo Rojas Grupo 3 Div D
