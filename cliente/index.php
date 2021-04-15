<?php
	session_start();
    require_once '../inicio/login/code/db/conexion.php';
    if(isset($_SESSION["keyU"])){
    	        $msgConexion="";
				$keyU=$_SESSION["keyU"]; 
			
				$conn =Conexion::con();//clase Conexion funtion con()
				if( $conn ){
					$db = mysqli_select_db( $conn, 'algomas') or die ( "Upps! Pues va a ser que no se ha podido conectar a la base de datos" );
					$msgConexion= "Conexión establecida.<br />";

				   	$query="CALL sp_autoKey('{\"keyU\":\"".$keyU."\"}');";
				   	
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
					    header("Location:prueba/prueba.php");
				//	   echo "Ejemplo";
			 	}else{
			 		header("Location:error/error.php");

			 	}
				
    }
     	}
   
?>    
