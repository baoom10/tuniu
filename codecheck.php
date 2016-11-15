<?php
 header("Content-Type:text/html;charset=utf-8");

if(isset($_REQUEST["stepCodeDate"])){
	session_start();
    if(strtolower($_REQUEST["stepCodeDate"])== $_SESSION["vcodes"]){
    	echo "1";	
     }else{    	
		 echo "0";
     }
        exit();
     }
    
	
	
?>