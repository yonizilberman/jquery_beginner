$(window).load(function(){

	var boxs = ["box1", "box2", "box3", "box4"];
	var counter = [0, 0, 0, 0];

	$.each(boxs, function (index, boxName){
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
	$("div[id*=box]").draggable({
		    	start: function() {
					clearBoxs();
		    		$(this).addClass('selected');
		    		var tmp = parseInt(this.id.replace(/[A-Za-z$-]/g, ""));
		    		clearCounter();
		    		counter[tmp-1]++;
		    		console.log(tmp + ", counter: " + counter); 
		    	},
		    	stop: function() { }
		    });
	$("div[id*=box]").click(function() {
		clearBoxs();
		$(this).addClass('selected');
	});
	// keydwon
	$('body').keydown(function(event){
		console.log(event);
		switch (event.keyCode){
		case 83:
			console.log("s");
			selectBox();
			console.log(counter);
			break;
		case 90:
			console.log("z"); 
			break;
		case 65:
			console.log("a");
			selectAllBoxButOne(counter);
			break;
		case 68:
			console.log("d");
//			deletSelectedbox();
			break;
		case 70:
			console.log("f");
//			showHideBox();
			break;
		}
	});
	
	function clearCounter() { 
		for (var i = 0; i < counter.length; i++) {
	    	counter[i] = 0;
	    } 
	}
	function clearBoxs() {
		for (var i = 0; i < boxs.length; i++) {
	    	$('#' + boxs[i]).removeClass('selected');
	    }
	}
	function selectBox() {
		for (var i = 0; i < boxs.length; i++) {
			if (counter[i] > 0) { 
				console.log(boxs[i]);
			}
		}
	}
	function selectAllBoxButOne (counter) {
		for (var i = 0; i < boxs.length; i++) {
			if (counter[i] == 0) { 
				console.log(boxs[i]);
				$('#' + boxs[i]).addClass('selected');
			}
		}	
	}
// 	function deletSelectedbox() { $('.selected').hide("slow"); }
// 	function showHideBox() 		{ $('.selected').show("slow"); }
});