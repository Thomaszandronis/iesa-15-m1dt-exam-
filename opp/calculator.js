function add(Calculator) {
			var result=0;
			for (var i=0; i< Calculator.length ; i++){
				result += parseFloat(Calculator[i]);
			}
			return result;
		}
		function minus(Calculator) {
			var result=Calculator[0];
			for (var i=1; i< Calculator.length ; i++){
				result -= parseInt(Calculator[i]);
			}
			return result;
		}
		function multiply(Calculator) {
			var result=Calculator[0];
			for (var i=1; i< Calculator.length ; i++){
				result *= parseFloat(Calculator[i]);
			}
			return result;
		}
		function devise(Calculator) {
			var result=Calculator[0];
			for (var i=1; i< Calculator.length ; i++){
				result /= parseFloat(Calculator[i]);
			}
			return result;
		}
		
		calculator(Calculator);
		
				/************* Test Unitaire ****************/
		var tab = [3,2,1];
		
		QUnit.test("Fonction Add", 
					function (tmp) { 	
					tmp.equal (add(tab),6,console.log("L'addition de tous les nombre données :" + add(Calculator)))
					});
		QUnit.test("Fonction Minus", 
					function (tmp) { 	
					tmp.equal (minus(tab),0,console.log("Soustraction de tous les nombre données :" + minus(Calculator)))
					});
		QUnit.test("Fonction Multiply", 
					function (tmp) { 	
					tmp.equal (multiply(tab),6,console.log("La multiplication de tous les nombre données :" + multiply(Calculator)))
					});
		QUnit.test("Fonction Devise", 
					function (tmp) { 	
					tmp.equal (devise(tab),1.5,console.log("La division  de tous les nombre données :" + devise(Calculator)))
					});
				/************* Test Unitaire ****************/
		