function createServerVignetteElem(servers){
	var switchDiv=createSwitch(servers.status, serverNb);
	var server=document.createElement("div");
	var serverImg=document.createElement("img");
	var name=document.createElement("p");
	var build=document.createElement("p");
	var ip=document.createElement("p");
	var host=document.createElement("p");
	var statText=document.createElement("p");

	server.className="server";
	server.id=serverNb;

	serverImg.className="serverImg";
	if (serverNb == selectedServer){
		serverImg.src="medias/img/selectedServer.png";
		server.style.backgroundColor="#0E5BEB";
		server.style.color="#FFFFFF";
		statText.style.color="#FFFFFF";
	}
	else {
		serverImg.src="medias/img/server.png";
	}
	serverImg.onclick=selectServer;

	name.id="name";
	name.innerHTML=servers.name;
	name.contentEditable="true";
	name.onclick=activateEditServer;
	name.onblur=editServer;
	name.onkeypress=checkKeyStroke;

	build.id="build";
	build.innerHTML=servers.build;
	build.contentEditable="true";
	build.onclick=activateEditServer;
	build.onblur=editServer;
	build.onkeypress=checkKeyStroke;

	ip.id="ip";
	ip.innerHTML=servers.ip;
	ip.contentEditable="true";
	ip.onclick=activateEditServer;
	ip.onblur=editServer;
	ip.onkeypress=checkKeyStroke;

	host.id="host";
	host.innerHTML=servers.host;
	host.contentEditable="true";
	host.onclick=activateEditServer;
	host.onblur=editServer;
	host.onkeypress=checkKeyStroke;

	statText.id="statText";
	statText.innerHTML=servers.statText;
	statText.contentEditable="true";
	statText.onclick=activateEditServer;
	statText.onblur=editServer;
	statText.onkeypress=checkKeyStroke;

	server.appendChild(serverImg);
	server.appendChild(name);
	server.appendChild(build);
	server.appendChild(ip);
	server.appendChild(host);
	server.appendChild(switchDiv);
	server.appendChild(statText);

	$(".serverList").append(server);
}

function editServerInfosElem(servers){
	$(".serverInfos .frontend #frontendVersion").html(servers.frontendVersion);
	$(".serverInfos .backend #backendVersion").html(servers.backendVersion);
	$(".serverInfos .other #otherVersion").html(servers.otherVersion);
}

function createSwitch(selected, num){
	var input1=document.createElement("input");
	input1.type="radio";
	input1.className="switch-input";
	input1.name="server"+num;
	input1.value="free"+num;
	input1.id="free"+num;
	input1.onclick=setServerStatus;

	var label1=document.createElement("label");
	label1.htmlFor="free"+num;
	label1.className="switch-label switch-label-free";
	label1.innerHTML="Free";

	var input2=document.createElement("input");
	input2.type="radio";
	input2.className="switch-input";
	input2.name="server"+num;
	input2.value="busy"+num;
	input2.id="busy"+num;
	input2.onclick=setServerStatus;

	var label2=document.createElement("label");
	label2.htmlFor="busy"+num;
	label2.className="switch-label switch-label-busy";
	label2.innerHTML="Busy";

	var span=document.createElement("span");
	span.className="switch-selection";

	if (selected == "free")
		input1.checked=true;
	else
		input2.checked=true;

	var switchDiv=document.createElement("div");
	switchDiv.className="switch";
	switchDiv.appendChild(input1);
	switchDiv.appendChild(label1);
	switchDiv.appendChild(input2);
	switchDiv.appendChild(label2);
	switchDiv.appendChild(span);

	return switchDiv;
}
