//function converting farenheit to celsius.

function fToCelsius(farenheit) {
	var farenheit = parseInt(prompt("What is the tempera	ture in degrees farenheit today?"));

	return ((farenheit - 32) * 5 / 9);
}

alert(fToCelsius());

//functions converting tbs - tsp, tsp - ml, tsp - tbs, and ml - tbs.

function tbsTotsp(tbs) {
var tbs = parseInt(prompt("how many tablespoons do you want to convert to teaspoons?"));

return(tbs * 3);
}

alert(tbsTotsp());

function tspToMl(tsp) {
var tsp = parseInt(prompt("how many teaspoons do you want to convert to milliliters?"));

return(tsp * 5);
}
alert(tspToMl());

function tspToTbs(tsp) {
var tsp = parseInt(prompt("how many teaspoons do you want to convert to tablespoons?"));

return(tsp / 3);
}

alert(tspToTbs());

function mlToTbs(ml) {
var ml = parseInt(prompt("how many milliliters do you want to convert to tablespoons?"));

return(ml / 15);
}

alert(mlToTbs());

//function for bodymass formula

function bmi(height,weight) {
	return (height * height) / weight;
}

function bodyMass() {
	var height = parseInt(prompt("What is your height in meters?"));
  var weight = parseInt(prompt("what is your weight in kilograms?"));
 return bmi(height,weight);
}

alert("Your BMI is " + bodyMass() + ".");
