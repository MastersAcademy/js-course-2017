

function keydownPlay(e){

	let button = document.querySelector(`.button[data-key="${e.keyCode}"]`);
	let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

	if(!audio) return;
		audio.currentTime= 0;
		audio.play();
		button.classList.add('active');
	
  }; 

function keyupClassRemove(e) {
	
	let button = document.querySelectorAll('.button');

	for (let i = 0; i < button.length; i++) {		
		button[i].classList.remove('active');	
	}
	
};

function mousePlay(id) {

	let audio = document.getElementById('dram-1');
	
	if(!audio) return;
		audio.currentTime= 0;
		audio.play();
		
}; 

	window.addEventListener('keyup', keyupClassRemove);
	window.addEventListener('keydown', keydownPlay);
	window.addEventListener('onclick', mousePlay);
	

