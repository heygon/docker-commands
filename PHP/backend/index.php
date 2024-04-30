<?php

	if($con = mysqli_connect('banco','root','4595995ab','teste')){
		//echo 'conectado 1<br/>';
	
      	//$tables = $con->query("SELECT * FROM Usuarios");
      	//print_r($tables->fetch_array());

		$user = $con->query("SELECT * FROM Usuarios");
      	
		$array = array();
		while ($row = mysqli_fetch_array($user)) {
          	$array[] = array(
				'Nome' => utf8_encode($row['Nome'])
			);
		}

		echo json_encode($array);


	}else{
		echo 'não conectado';
	}






?>