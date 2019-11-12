<?php

  $DBhost = "localhost";
  $DBuser = "root";
  $DBpass = "";
  $DBname = "titulacion2";

  $conn = new mysqli($DBhost, $DBuser, $DBpass, $DBname);
  if ($conn->connect_errno) {
      echo "Fallo al conectar a MySQL: (" . $conn->connect_errno . ") " . $conn->connect_error;
  }


?>