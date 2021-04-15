<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="views/css/estiloLogin.css">
	<meta name="google-signin-client_id" content="225198561492-5lncl1a4da8rb92si1a9la0pbna1ebeo.apps.googleusercontent.com">
	<script src="https://apis.google.com/js/platform.js" async defer></script>
</head>
<body>
	<section>
		<div class="container">
			<div class="user signinBx">
				<div class="imgBx">
					<img src="views/img/fondo2.png" alt="" />
				</div>
				<div class="formBx">
					<form id="formLog" method="post">
						<div id=imgAlgo1>
						</div>
						<h2>INICIA SESION</h2>
						<input type="text" name="correoLogin" id="correoLogin" placeholder="correo" />
						<input type="password" name="claveLogin" id="claveLogin" placeholder="clave" />
						<input type="submit" id="submitIni" name="" value="Inicia Sesion" />
						<button class="g-signin2" data-onsuccess="onSignIn"
						id="btngoo">
					</button>
					<br>
					<br>
					<?php   
					session_start();        
					if(isset($_SESSION['msgE'])){
						if($_SESSION['msgE']!=''){
							echo '<div class="alert alert-warning" role="alert" id="divError" >
							'.$_SESSION['msgE'].' 
							<button type="button" onclick="fn_close()" class="close" data-dismiss="alert" aria-label="Close">
							<span aria-hidden="true">&times;</span>
							</button>   
							</div>';
						}
					} 
					?>
					<p class="signup">Todavia no tienes una cuenta?
						<a href="#" onclick="toggleForm();">Registrate.</a>
					</p>
				</form>
			</div>
		</div>
		<div class="user signupBx">
			<div class="formBx">
				<div class="container1 ">
					<div id=imgAlgo>
					</div>
					<h2 id="title" >CREAR UNA CUENTA</h2>
					<div class= "progress-bar">
						<div class="step">
							<p>Direccion</p>
							<div class="bullet">
								<span>1</span>
							</div>
							<div class="check fas fa-check">
							</div>
						</div>
						<div class="step">
							<p>Cuenta</p>
							<div class="bullet">
								<span>2</span>
							</div>
							<div class="check fas fa-check">
							</div>
						</div>
					</div>
					<div class="form-outer">
						<form>
							<div class="page slidepage">
								<div class="title">Informacion de Usuario</div>
								<div class="field">
									<input id="indp" type="text" name="" placeholder="Nombre" />
								</div>
								<div class="field">
									<input id="indp" type="text" name="" placeholder="Apellido" />
								</div>
								<div class="field">
									<input type="text" placeholder="Fecha de Nacimiento" onfocus="(this.type='date')"/>
								</div>
								<div class="field">
									<input id="indp" type="text" name="" placeholder="Telefono" />
								</div>			
								<div class="field">
									<input type="submit" class="field nextBtn" value="Siguiente" />
								</div>
								<p class="signup">Todavia no tienes una cuenta?
									<a href="#" onclick="toggleForm();">Inicia sesion.</a>
								</p>								
							</div>
							<div class="page">
								<div class="title">Direccion</div>
								<div class="field">
									<input id="indp7" type="text" name="" placeholder="Estado" />
								</div>
								<div class="field">
									<input id="indp7" type="text" name="" placeholder="Colonia" />
								</div>
								<div class="field">
									<input id="indp7" type="text" name="" placeholder="Municipio" />
								</div>
								<div class="field1">
									<div style="float:left;width: 37%;">
										<div  style="margin-right: 20px;">
											<input id="indp2" type="text" name="" placeholder="Calle"/>
										</div>
									</div>
									<div style="float:left;width: 37%;">
										<div>
											<input id="indp2" type="text" name="" placeholder="CP" />
										</div>										
									</div>
								</div>
								<div>
									<div class="field1">
										<div style="float:left;width: 37%;">
											<div style="margin-right: 20px;">
												<input id="indp2" type="text"name="" placeholder="Num int" />
											</div>
										</div>
										<div style="float:left;width: 37%;">
											<div class="">
												<input id="indp2" type="text" name="" placeholder="Num ext" />
											</div>
										</div>
									</div> 
								</div>
								<div class="field btns">
									<button class="prev-1 prev">Anterior</button>
									<button class="next-1 next">Siguiente</button>
								</div>
							</div>
							<div class="page">
								<div class="title">Datos de registro</div>
								<div class="field">
									<input id="indp8" type="text" name="" placeholder="Correo" />
								</div>
								<div class="field">
									<input id="indp8" type="text" name="" placeholder="Clave" />
								</div>	
								<div class="field">
									<input id="indp8" type="file" name="" placeholder="Subir fotografia"/>
								</div>	
								<div class="field btns">
									<button class="prev-2 prev">Anterior</button>
									<button class="next-id">Registrarse</button>	
								</div>
							</div>
							<div class="page">
								<div class="title">Login Details</div>
								<div class="field">
									<div class="label">Username</div>
									<input type="text">
								</div>
								<div class="field">
									<div class="label">Password</div>
									<input type="password">
								</div>
								<div class="field btns">
									<button class="prev-3 prev">Previous</button>
									<button class="Submit1">Submit</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
			<div class="imgBx"><img src="views/img/fondo2.png" alt="" />
			</div>
		</div>
	</div> 
</section>
<script src="../../micro/static/js/jquery/jquery-3.5.1.js?v=<?php echo time(); ?>"></script>
<script src="views/js/funcionLoginRegister.js?v=<?php echo time(); ?>"></script>
<script src="views/js/funcionLog.js?v=<?php echo time(); ?>"></script>

</body>
</html>