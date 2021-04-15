<?php
	require_once("conexion.php");
	class dbExec{
		public static function exec($query){
			$json='';
			
			$conn =Conexion::con();//clase Conexion funtion con()
			if( $conn ){

				$db = mysqli_select_db( $conn, 'algomas') or die ( "No se pudo conectar a la BD" );
				
				$res =  mysqli_query($conn, $query)  or die ( "Problemas con la consulta");
			
				while ($columna = mysqli_fetch_array( $res )){
					$json=$json.($json==''?'':(utf8_encode($columna['RES'])==''?'':',')).utf8_encode($columna['RES']);
				}
				

				$json='{"error":false,"msg":"","vec":['.$json.']}';
			}else{
				$json='{"error":"true","msg":"Error de conexión"}';	     
			}	

			$json=utf8_decode($json);

			mysqli_close($conn);
			
			return  str_replace("Ã±","ñ",str_replace("Ã­","í",str_replace("Ã©","é",str_replace("Ã¡","á",str_replace("Ã³","ó",str_replace("Ã°","ú",$json ) ) ) ) ) );
		}
	}
?>