<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
    <link rel="stylesheet" type="text/css" href="css/bius.css" />
    <script src="js/cliente.js"></script>
</head>
<body>
<!--template de bara de nabegasion-->
    <?php
      require "templates/nav.php"   
    ?>
<!--section-->
    <?php
      require_once "templates/section.php";
    ?>
<!--footer-->
    <?php
      require "templates/foter.php"
    ?>
    <script 
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDb_7bmaFywTmlGpPQ9F5qNOZypgt_dNwg&libraries=places">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
    <script src="js/cliente.js"></script>
</body>
</html>