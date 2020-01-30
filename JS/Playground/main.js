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

var names = ["Nahuel", "Alan", "Diego", "Ariel", "Leandro", "Erica", "Roman", "Teo", "Lucas H", "Lucas G", "Rocio", "Gian", "Meji", "Matias", "Eduardo", "Gabi", "Lucio", "Nahuel L", "Ezequiel", "Elias", "Jose", "Nico F", "Agustin", "Nico S", "Rodrigo", "Branco", "Ivan"]

names = names.sort()

console.log ("Primer Nombre: " + names[0])

console.log ("Ultimo Nombre: " + names[names.length-1])

console.log ("Todos los Nombres For: ")
for (i = 0 ; i < names.length ; i++) {
	console.log (names[i])
}

// ------------------------------------------------------------------------------------------------

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

// -----------------------------------------------------------------------------------------------

console.log("Menos Numero de la Matriz:")

var matriz1 = [20, 14, 7, 5, 11, 32, 9, 3, 24, 36, 28]

var matriz2 = [126, 174, 278, 583, 367, 100, 312, 96, 45, 32, 79, 543]

function array (matriz){

	var menor = matriz[0]

	for (let i = 1 ; i < matriz.length ; i++){
		if
			(menor < matriz[i]){
			menor = menor
		}
		else{
			menor = matriz[i]
		}
	}
	console.log("Numero mas Bajo: " + menor)
}

array(matriz1)

array(matriz2)

// -----------------------------------------------------------------------------------------------

console.log("Mayor Numero de la Matriz:")

var matriz11 = [20, 14, 7, 5, 11, 32, 9, 3, 24, 36, 28]

var matriz22 = [126, 174, 278, 583, 367, 100, 312, 96, 45, 32, 79, 543]

function arraya (matriza){

	var mayor = matriza[0]

	for (let i = 1 ; i < matriza.length ; i++){
		if
		(mayor > matriza[i]) {
		mayor = mayor
		 }
		 else{
	 	mayor = matriza[i]
		 }
	}
	console.log("Numero mas Alto: " + mayor)
}

arraya(matriz11)

arraya(matriz22)

// -----------------------------------------------------------------------------------------------

var matriz111 = [5, 7, 9, 1, 3, 6, 8, 2, 4, 0]

var matriz222 = [13, 15, 17, 19, 12, 14, 16, 18, 10]

var indice = 4

function arraya1 (matriza1){

	console.log("Índice[n]: " + matriza1[indice])
}

arraya1(matriz111)

arraya1(matriz222)

// -----------------------------------------------------------------------------------------------

console.log("Matriz de Numeros Repetidos: ")

var matriz1111 = [3, 5, 7, 9, 1, 3, 4, 2, 6, 5, 7, 8, 9, 0, 9, 2]

var iguales = []

function arraya2 (matriza2) {

	for (let i = 0 ; i < matriza2.length ; i++) {

		for (let a = (i + 1) ; a < matriza2.length ; a++) {

			if 
			(matriza2[i] == matriza2[a]){
					
				iguales.push(matriza2[i])
			}
		}
	}
	console.log(iguales)
}

arraya2(matriz1111);

// ------------------------------------------------------------------------------------------------

var myColor = ["Red", "Green", "White", "Black"]



function arraycolor (colors){
	for (i = 0 ; i < myColor.length ; i++){
		
	}


arraycolor(myColor)





// function mifuncion(x){

// var n = " es genial";


// return(x+n); 

// }

// var num = mifuncion("ivan");


// console.log(num);
