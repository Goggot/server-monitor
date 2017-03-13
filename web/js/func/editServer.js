function editServer(self){
	var serverId=self.target.parentNode.id;
	var field=self.target.id;
	var value=$("#"+serverId+" #"+field).text();
	
	if (value!=editText) {
		value=escapeStr(value);
		switch(field){
			case "name":
				serverList.servers[serverId].name=value;
				break;
			case "build":
				serverList.servers[serverId].build=value;
				break;
			case "ip":
				serverList.servers[serverId].ip=value;
				break;
			case "host":
				serverList.servers[serverId].host=value;
				break;
			case "statText":
				serverList.servers[serverId].statText=value;
				break;
		}
		var jsonServerList=JSON.stringify(serverList);
		setServerList(jsonServerList);
	}
	$("#"+serverId+" #"+self.target.id).css({"background-color":"transparent","box-shadow":"none"});
	$("#"+serverId+" .serverImg").attr("src","medias/img/server.png");
	edit=false;
}

function editServerInfos(self){
	var field=self.id;
	var value=$(".serverInfos #"+field).text();
	
	if (value!=editText) {
		value=escapeStr(value);
		switch(field){
			case "frontendVersion":
				serverList.servers[selectedServer].frontendVersion=value;
				break;
			case "backendVersion":
				serverList.servers[selectedServer].backendVersion=value;
				break;
			case "otherVersion":
				serverList.servers[selectedServer].otherVersion=value;
				break;
			case "installedPackagesList":
				serverList.servers[selectedServer].installedPackagesList=value;
				break;
		}
		var jsonServerList=JSON.stringify(serverList);
		setServerList(jsonServerList);
	}
	$(".serverInfos #"+self.id).css({"background-color":"transparent","box-shadow":"none"});
	edit=false;
}
