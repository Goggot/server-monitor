function selectServer(self) {
	$("#"+selectedServer+" .serverImg").attr("src","medias/img/selectedServer.png");
	selectedServer=self.target.parentNode.id;
	getServerList();
}

function activateEditServer(self){
	editText=self.target.innerHTML;
	var serverId=self.target.parentNode.id;
	edit=true;
}

function activateEditServerInfos(self){
	editText=$("#"+self.id).text();
	edit=true;
}

function checkKeyStroke(self){
	if(self.key == "Enter")
		editServer(self);
}

function displayAdd(self){
	if (addInput === false) {
		$("#input").css("display","block");
		addInput=true;
	}
	else{
		$("#input").css("display","none");
		addInput=false;
	}
}

function displayWarning(){
	var rep = window.confirm("You are about to remove the following item from the list:\n >> "+serverList.servers[selectedServer].name+" << \n Are you sure?");
	if (rep === true)
    removeServer();
}

function addServer(){
	/* Get inputs value */
	var newName=document.getElementById("addName").value;
	var newBuild=document.getElementById("addBuild").value;
	var newIp=document.getElementById("addIp").value;
	var newHost=document.getElementById("addHost").value;
	/* Creating an object and adding it to the server list */
	var newServer={name:newName,build:newBuild,ip:newIp,host:newHost,status:"free",frontendVersion:"Add frontend version here",backendVersion:"Add backend version here",otherVersion:"Add any other infos here"};
	serverList.servers.push(newServer);
	/* JSONify the list and send it to the file */
	var jsonServerList=JSON.stringify(serverList);
	setServerList(jsonServerList);
	/* Hide and empty the inputs */
	displayAdd();
	document.getElementById("addName").value="";
	document.getElementById("addBuild").value="";
	document.getElementById("addIp").value="";
	document.getElementById("addHost").value="";
	/* Select the newly created server */
	selectedServer=serverNb;
}

function removeServer(){
	serverList.servers.splice(selectedServer, 1);
	var jsonServerList=JSON.stringify(serverList);
	if (selectedServer != 0)
		selectedServer=selectedServer-1;
	else
		selectedServer=0;
	setServerList(jsonServerList);
}

function getServerList(){
	serverNb=0;
	$.ajax({
		url: "bridge.php",
		type: "POST",
		data: "func=getList&status=",
		success: function(data){
			serverList=JSON.parse(data);
			$(".serverList").empty();
			editServerInfosElem(serverList.servers[selectedServer]);
			for (var i=0; i<serverList.servers.length; i++){
				createServerVignetteElem(serverList.servers[i]);
				serverNb+=1;
			}
		}
	});
}

function setServerList(jsonServerList){
	$.ajax({
		url: "bridge.php",
		type: "POST",
		data: "func=setServerStatus&serverList="+jsonServerList
	});
}

function setServerStatus(self){
	var num=self.target.id.slice(-1);
	var status=self.target.id.substring(0, self.target.id.length - 1);
	var ip=document.getElementById(num).childNodes[3].innerHTML;
	serverList.servers[num].status=status;
	var jsonServerList=JSON.stringify(serverList);
	setServerList(jsonServerList);
}

function escapeStr(string){
	string=string.replace(/"/g, '\\"');
	string=string.replace(/'/g, "/'");
	string = string.split('.\\+*?[^]$(){}=!<>|:-');
	string=encodeURIComponent(string);
	return string;
}
