<?php
    trait Get{
        protected function serverList($actual_path){
			return file_get_contents($actual_path . 'conf/servers.json');
		}
		protected function getLogs($serverIp){
			$connection = ssh2_connect($serverIp, 22);
			ssh2_auth_password($connection, 'username', 'password');

			$stream = ssh2_exec($connection, 'tail -f /var/log/messages');
			return $stream;
		}
	}
