function tick(){
	if (!edit)
		getServerList();
	setTimeout(tick, 2000);
}

function init(){
	//$("#main").mousewheel(function(event, delta) {
	//	this.scrollLeft -= (delta * 30);
	//	event.preventDefault();
	//});
	tick();
}

/*** INIT EXECUTION ***/
init();
