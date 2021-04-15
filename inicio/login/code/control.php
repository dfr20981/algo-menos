<?php
	require_once 'db/dbExec.php';

	if($_POST['ind']==1){

   		$query="";
   		//echo $query;
   		$json=dbExec::exec($query);//clase read QueryExe
   		echo $json;

	}else{
		echo '{"error":true,"msg":"No se reconoce la opción que selecciono"}';
	}

?>