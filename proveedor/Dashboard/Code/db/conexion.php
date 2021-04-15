<?php
	class Conexion{
	 public static function con(){
	   	$serverName = "1";    
    	$conn =  mysqli_connect("localhost","root","");
		
		return $conn;
	 }
	}
?>