window.onload = function() {//Se activa al momento de que cargue la pagina.
  $("#formLog").attr("action","code/session/session.php");
}

function fn_close(){
	$("#divError").toggle();
}
