console.log ("Starting javascript...");

var myName = "Ivan";

console.log (myName)

var age = 20;

console.log (age)

var ignasiAge = 32;

var ageDiff = (age - ignasiAge)

console.log (ageDiff)

if (age < ignasiAge) {
	console.log ("Ignasi is older than you");
 }

else if (age > ignasiAge) {
	console.log ("Ignasi is younger than you");

}
else {
	console.log ("You have the same age as Ignasi");
}

// -----------------------------------------------Array EJERCICIO '1'-------------------------------------------------

var names = ["Nahuel", "Alan", "Diego", "Ariel", "Leandro", "Erica", "Roman", "Teo", "Lucas H", "Lucas G", "Rocio", "Gian", "Meji", "Matias", "Eduardo", "Gabi", "Lucio", "Nahuel L", "Ezequiel", "Elias", "Jose", "Nico F", "Agustin", "Nico S", "Rodrigo", "Branco", "Ivan"]

names = names.sort()

console.log ("Primer Nombre: " + names[0])

console.log ("Ultimo Nombre: " + names[names.length-1])

console.log ("Todos los Nombres For: ")

for (i = 0 ; i < names.length ; i++) {

	console.log (names[i])
}

// -----------------------------------------------Array EJERCICIO '2'-------------------------------------------------

console.log("Edades Pares While: ")

var ages = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];

var i = 0;

 while	(i < ages.length) {
 	console.log (ages[i])
 	i = i + 2;
 }
console.log("Todas las Edades For: ")
for (i = 0; i < ages.length; i++) {
	console.log (ages[i])
}

// -----------------------------------------------Array EJERCICIO '3'-------------------------------------------------

console.log("Menor Numero de la Matriz:")

var matriz1 = [20, 14, 7, 5, 11, 32, 9, 3, 24, 36, 28]

var matriz2 = [126, 174, 278, 583, 367, 100, 312, 96, 45, 32, 79, 543]

function menorNumero (numero){

	var menor = numero[0]

	for (let i = 1 ; i < numero.length ; i++){
		if
			(numero[i] < menor){
			menor = numero[i]
		}
		else{
			numero[i] = menor
		}
	}
	console.log("Numero mas Bajo: " + menor)
}

menorNumero(matriz1)

menorNumero(matriz2)

// -----------------------------------------------Array EJERCICIO '4'-------------------------------------------------

console.log("Mayor Numero de la Matriz:")

var matriz11 = [20, 14, 7, 5, 11, 32, 9, 3, 24, 36, 28]

var matriz22 = [126, 174, 278, 583, 367, 100, 312, 96, 45, 32, 79, 543]

function mayorNumero (numero1){

	var mayor = numero1[0]

	for (let i = 1 ; i < numero1.length ; i++){
		if
		(mayor > numero1[i]) {
		numero1[i] = mayor
		 }
		 else{
	 	mayor = numero1[i]
		 }
	}
	console.log("Numero mas Alto: " + mayor)
}

mayorNumero(matriz11)

mayorNumero(matriz22)

// -----------------------------------------------Array EJERCICIO '5'-------------------------------------------------

var matriz111 = [5, 7, 9, 1, 3, 6, 8, 2, 4, 0]

var matriz222 = [13, 15, 17, 19, 12, 14, 16, 18, 10]

var indice = 4

function numeroIndice (indiceNumero, indice1){

	return ("Índice[n]: " + indiceNumero[indice])
}

console.log(numeroIndice(matriz111,4))

console.log(numeroIndice(matriz222,4))

// // -----------------------------------------------Array EJERCICIO '6'-------------------------------------------------

console.log("Matriz de Numeros Repetidos: ")

var matriz1111 = [3, 5, 7, 9, 1, 3, 4, 2, 6, 5, 7, 8, 9, 0, 2, 2]

var iguales = []

function numeroRepetido (repetido) {

	for (let i = 0 ; i < repetido.length ; i++) {

		for (let a = (i + 1) ; a < repetido.length ; a++) {

			if 
			(repetido[i] == repetido[a] && iguales.indexOf(repetido[i]) == -1){
				iguales.push(repetido[i])
			}
		}
	}
	console.log(iguales)
}
numeroRepetido(matriz1111);

// // -----------------------------------------------Array EJERCICIO '7'-------------------------------------------------

console.log("Array en Cadena 'join()': ")

var myColor = ["Red", "Green", "White", "Black"]

function colores (color) {

	var myColor2 = color.join(", ")

	return myColor2

}

console.log(colores(myColor))

//-----------------------------------------------String EJERCICIO '1'-------------------------------------------------

console.log("Numero Invertido: ")

var valor = 123

function invertir (numeros){

	invertido = parseInt(numeros.toString().split("").reverse().join(""))

	return invertido
}

console.log(invertir(valor))

//-----------------------------------------------String EJERCICIO '2'-------------------------------------------------

console.log("Orden Alfabético: ")

var palabra = "qwerty"

function orden (palabras){

	ordenado = palabras.split("").sort().join("")

	return ordenado
}

console.log(orden(palabra))

//-----------------------------------------------String EJERCICIO '3'-------------------------------------------------

console.log("Primera letra de cada palabra en mayuscula: ")

var texto = "en la plaza habia un perro, un arbol y una hamaca"

function frase (mayuscula){

	salida = mayuscula.replace(/\b[a-z]/g,c=>c.toUpperCase())

	return salida
}

console.log(frase(texto))

//-----------------------------------------------String EJERCICIO '4'-------------------------------------------------

console.log("Palabra mas largar de una frase: ")

var texto1 = "1234 123 123456 1234567 12345 123456789 12345678"

function palabra_mas_larga (palabras1) {

	var palabras2 = 0, palabras3 = "";

	var palabras4 = palabras1.split(" ");

	for (i = 0 ; i < palabras4.length ; i++){

		if (palabras4[i].length > palabras2){

			palabras2 = palabras4[i].length;

			palabras3 = palabras4[i];
		}
	}

	return palabras3
}

console.log(palabra_mas_larga(texto1))


// function mifuncion(x){

// var n = " es genial";


// return(x+n); 

// }

// var num = mifuncion("ivan");


// console.log(num);
