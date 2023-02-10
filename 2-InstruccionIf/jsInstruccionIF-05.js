//Al ingresar una edad solo debemos informar si la persona NO es adolescente.
/*Aspectos a evaluar:
Uso correcto de métodos de entrada y salida de datos (alert, prompt, document.getElementById)
Uso correcto de variables y sus identificadores (nombres de variables)
Concatenación
Uso de parseInt / parseFloat
Condicionales simples y dobles.
Uso de operadores aritméticos, relacionales y lógicos.

Ingresar 3 edades por prompt. Determinar si la primera es mayor que la segunda y menor que la tercera o la tercera
es menor que la segunda. Mostrar por alert si se cumple o no.**/

function mostrar()
{
	let edad1;
	let edad2;
	let edad3;

	edad1 = parseInt(prompt("Ingrese edad 1"));
	edad2 = parseInt(prompt("Ingrese edad 2"));
	edad3 = parseInt(prompt("Ingrese edad 3"));

	if ((edad1 > edad2 && edad1 < edad3) || (edad3 < edad2)){
		alert("Si se cumplio");
	} 
	else{
		alert("No se cumplio")
	}
}
//FIN DE LA FUNCIÓN

//Copyright(?) Gonzalo Rojas Grupo 3 Div D
