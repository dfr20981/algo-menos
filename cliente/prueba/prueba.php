  <?php
  //Inicio la sesion
session_start();  
//compruebo que el usuario este autentificado
header("Cache-control:private"); 
if($_SESSION['keyU']=="") 
{ 
 header("Location:/Algomasdemno2/cliente/error/error.php"); 
 exit; 
} 
  ?>    
  <!DOCTYPE html>
  <html>
  <head>
  	<title></title>
  </head>
  <body>
  	<li class="nav-item active" >
  		<a class="nav-link" href="../../inicio/login/login.php" id="text1">SALIR</a>
  	</li>
  </body>
  </html>