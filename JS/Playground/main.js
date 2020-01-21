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

// ------------------------------------------------------------------------------------------------




function mifuncion(x){

var n = " es genial";


return(x+n); 

}

var num = mifuncion("ivan");


console.log(num);
