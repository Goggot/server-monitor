<?php
    require_once "../app/Controler.php";
    $action=new Controler();
    $func=$_POST["func"];
    
## Functions
    function getList($action){
        echo $action->init();
    }
    
    function setServerStatus($action){
        echo $action->setServerStatus($_POST["serverList"]);
    }

## Execute function called by AJAX
    $func($action);