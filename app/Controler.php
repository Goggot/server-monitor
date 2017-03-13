<?php
    include_once "class/Get.php";
    include_once "class/Set.php";
    
    class Controler{
        use Get, Set;
        const actual_path='../app/';
        
        function init(){
            return $this->serverList(self::actual_path);
        }
        
        function setServerStatus($serverList){
            return $this->serverStatus(self::actual_path,$serverList);
        }
    }
