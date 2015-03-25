function Calculator(){
	this.result = 0;

	this.add = function (a){  
     this.result += ParseFloat(a); 
    }

    this.minus = function (a){  
     this.result -= ParseFloat(a); 
    }

    this.multiply = function (a){  
     this.result *= ParseFloat(a); 
    }

    this.divide = function (a){  
     this.result /= ParseFloat(a); 
    }
}		

		
				
		