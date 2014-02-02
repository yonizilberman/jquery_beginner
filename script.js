$(window).load(function(){

	var boxs = ["box1", "box2", "box3", "box4"];

	boxs.forEach(function (boxName, index){
		console.log(index + 1 + ". " + boxName); // 1. Mike, 2. Stacy, 3. Andy, 4. Rick
		$('body').append('<div id=\"' + boxName + '\">' + boxName);
		$('div#' + boxName).css({
			"background-color":"rgb("+Math.floor((Math.random()*100)+1)+","+Math.floor((Math.random()*100)+1)+","+Math.floor((Math.random()*100)+1)+")",
			height: Math.floor((Math.random()*250)+1) + 40,
			width: Math.floor((Math.random()*250)+1) + 40,
			left: Math.floor((Math.random()*500)+1),
			top: Math.floor((Math.random()*500)+1)
		});
	});
	
	// drog and drop 
	    $("div").draggable({
	    	start: function(e, ui) { $(ui.helper).addClass('selected'); },
	    	stop: function(e, ui) { $(ui.helper).removeClass('selected'); }
	    });
	// keydwon
	$('body').keydown(function(event){
		console.log(event);
		if ('83' == event.keyCode){ 
			console.log("s"); 
		}
		if ('65' == event.keyCode){ 
			console.log("a"); 
		}
	});
});