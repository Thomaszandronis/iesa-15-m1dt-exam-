var Calculator = new Array;
var nombre = 
for (var i=1; i<=n ; i++){
}
function add(Calculator) {
var result = 0;
for (var i = 0; i< Calculator.length ; i++){
	result += parseFloat(Calculator[i]);
}
return result;
}
function minus(Calculator) {
	var result = Calculator[0];
	for (var i = 1; i< Calculator.length ; i++){
		result -= parseInt(Calculator[i]);
	}
return result;
}
function multiply(Calculator) {
	var result = Calculator[0];
	for (var i = 1; i< Calculator.length ; i++){
		result *= parseFloat(Calculator[i]);
	}
return result;
}
function divide(Calculator) {
	var result = Calculator[0];
	for (var i = 1; i< Calculator.length ; i++){
		result /= parseFloat(Calculator[i]);
	}
return result;
}
		
			
		
				
		