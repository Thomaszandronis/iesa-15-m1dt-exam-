function Enigma(){
	var texteNonCrypter = Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t","u", "v", "w", "x", "y","z", " ", "'", ".", ",",":", ";"
	);

	var textAdecrypter = Array("j", "d", "w", "o", "v", "a", "r", "i", "g", " ", "x", "u", "n", "s", "y", "q", "c", "p", "'", "f", "m", "z", "t", "k", "h", "b", "e", "l", ".", ",",":", ";"
	);
	
	this.decrypt = function (entree) {
		sortie = "";
		var a;
		for (var i=0; i < text.length; i++){
			a = textAdecrypter.indexOf(text[i]);
			sortie += texteNonCrypter.charAt(a);
		}
		return sortie;
	}
	this.encrypt = function (entree) {
		sortie = "";
		var a;
		for (var i=0; i < text.length; i++){
			a = texteNonCrypter.indexOf(text[i]);
			sortie += textAdecrypter.charAt(a);
		}
		
		return sortie;
	}


}
 


