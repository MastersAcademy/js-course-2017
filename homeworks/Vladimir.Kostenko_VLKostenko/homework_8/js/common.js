$('body').bind({keydown: function(e) {

	var charCode= (e.keyCode ? e.keyCode : e.which);

	//charCode for w
	if(charCode == 87) {   
		$('.button_dram-1').addClass('button_second');   
	}
	//charCode for e
	else if(charCode == 69) {
		$('.button_dram-2').addClass('button_second');
	}
	//charCode for r
	else if(charCode == 82) { 
		$('.button_dram-3').addClass('button_second');
	}
	//charCode for s		
	else if(charCode == 83) { 
		$('.button_dram-4').addClass('button_second');
	}
	//charCode for d
	else if(charCode == 68) { 
		$('.button_dram-5').addClass('button_second');
	}
	//charCode for f
	else if(charCode == 70) { 
		$('.button_dram-6').addClass('button_second');
	}
	//charCode for x
	else if(charCode == 88) { 
		$('.button_dram-7').addClass('button_second');
	}
	//charCode for c
	else if(charCode == 67) { 
		$('.button_dram-8').addClass('button_second');
	}
	//charCode for v
	else if(charCode == 86) { 
		$('.button_dram-9').addClass('button_second');
	}
},
	keyup : function() {
		$('.button_dram-1, .button_dram-2, .button_dram-3, .button_dram-4, .button_dram-5, .button_dram-6, .button_dram-7, .button_dram-8, .button_dram-9').removeClass('button_second');
  }
});
	//event fo w
	addEventListener("keydown", function(e) {
		if (e.keyCode == 87)
			$("#dram-1")[0].play();
	});
	//event fo w	
	addEventListener("click", function() {
		$(".header_main__dram-1").click(function(){
			$("#dram-1")[0].play();		
		});
	});
	//event fo e
	addEventListener("keydown", function(e) {
		if (e.keyCode == 69)
			$("#dram-2")[0].play();
	});
	//event fo e		
	addEventListener("click", function() {
		$(".header_main__dram-2").click(function(){
			$("#dram-2")[0].play();		
		});
	});
	//event fo r				
	addEventListener("keydown", function(e) {
		if (e.keyCode == 82)
			$("#dram-3")[0].play();
	});
	//event fo r
	addEventListener("click", function() {
		$(".header_main__dram-3").click(function(){
			$("#dram-3")[0].play();		
		});
	});
	//event fo s
	addEventListener("keydown", function(e) {
		if (e.keyCode == 83)
			$("#dram-4")[0].play();
	});
	//event fo s
	addEventListener("click", function() {
		$(".header_main__dram-4").click(function(){
			$("#dram-4")[0].play();		
		});
	});
	//event fo d
	addEventListener("keydown", function(e) {
		if (e.keyCode == 68)
			$("#dram-5")[0].play();
	});
	//event fo d
	addEventListener("click", function() {
		$(".header_main__dram-5").click(function(){
			$("#dram-5")[0].play();		
		});
	});
	//event fo f
	addEventListener("keydown", function(e) {
		if (e.keyCode == 70)
			$("#dram-6")[0].play();
	});
	//event fo f
	addEventListener("click", function() {
		$(".header_main__dram-6").click(function(){
			$("#dram-6")[0].play();		
		});
	});
	//event fo x
	addEventListener("keydown", function(e) {
		if (e.keyCode == 88)
			$("#dram-7")[0].play();
	});
	//event fo x
	addEventListener("click", function() {
		$(".header_main__dram-7").click(function(){
			$("#dram-7")[0].play();		
		});
	});
	//event fo c
	addEventListener("keydown", function(e) {
		if (e.keyCode == 67)
			$("#dram-8")[0].play();
	});
	//event fo c
	addEventListener("click", function() {
		$(".header_main__dram-8").click(function(){
			$("#dram-8")[0].play();		
		});
	});
	//event fo v
	addEventListener("keydown", function(e) {
		if (e.keyCode == 86)
			$("#dram-9")[0].play();
	});
	//event fo v
	addEventListener("click", function() {
		$(".header_main__dram-9").click(function(){
			$("#dram-9")[0].play();		
		});
	});