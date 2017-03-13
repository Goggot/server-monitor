<?php
    trait Set{
        protected function serverStatus($actual_path,$serverList){
			$file=$actual_path . 'conf/servers.json';
			file_put_contents($file,$serverList);
		}
	}
