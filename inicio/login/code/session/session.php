<?php
	session_start(); // Iniciando sesion
	require_once '../db/conexion.php';
	$msgConexion="";
	$_SESSION['msgE']='';
	$correo=$_POST["correoLogin"]; 
	$password=$_POST["claveLogin"];

	$conn =Conexion::con();//clase Conexion funtion con()
	if( $conn ){
		$db = mysqli_select_db( $conn, 'algomas') or die ( "No se puede conectar a la BD" );
		$msgConexion= "Conexión establecida.<br />";

	   	$query="CALL sp_Login('".$correo."','".$password."');";

	   	echo  $query;
	   		   		
		$res =  mysqli_query($conn, $query)  or die ( "Algo ha ido mal en la consulta a la base de datos");

		while ($columna = mysqli_fetch_array( $res )){
			$json=utf8_encode($columna['RES']) ;	
		}
		echo  utf8_decode($json);

		$json=utf8_decode($json);
		
		mysqli_close($conn);

		$obj = json_decode($json);


		if($obj->{'error'}==false){
			$_SESSION['json']=$obj->obj; // JSON DATOS
			$_SESSION['keyU']=$obj->keyU; // TOKEN DE ACCESO
			header("Location:../../../../cliente/");
		}else{
			$_SESSION['json']=''; // JSON DATOS
			$_SESSION['keyU']=''; // TOKEN DE ACCESO
			$_SESSION['msgE']='Usuario o contraseña incorrectos';
			
		    header("Location:../../login.php ");

	
		
		}
	
	   mysqli_close($conn);
	 }	

?>