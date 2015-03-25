<!DOCTYPE HTML PUBLIC>
<html>
<head>
<title>Systeme solaire</title>
<meta charset="utf-8">
<link rel="stylesheet" type="text/css" href="desktop.css">
</head>
<body>
<header>
  <h1>Le système solaire</h1>
</header>
<nav>
	<ul class="navigation">
		<li>Terre</li>
		<li>Mercure</li>
		<li>Venus</li>
		<li>Mars</li>
		<li>Jupiter</li>
		<li>Saturne</li>
		<li>Uranus</li>
		<li>Neptune</li>
		<li>Lune</li>
	</ul>
</nav>
<?php 
	$file = "planetes.xml";
	$xml = simplexml_load_file($file);

	foreach($xml as $key){
		print('
	<div class="image_planete">
		<img  src="' .$key->image. '">
	</div>
	<ul class="infos">
				<li class="titre"> ' .$key->title. '</li><br>				
				
				<li><b> Superficie :</b> ' .$key->taille. '</li><br>				
				
				<li> <b>Distance du soleil :</b> ' .$key->distance. '</li><br>
				
				<li class="description">' .$key->description. '</li>				
			
		</ul>
		');
	
	}
?>
</body>
</html>