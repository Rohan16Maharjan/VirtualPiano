const WHITE_KEYS = [
	'a',
	's',
	'd',
	'f',
	'g',
	'h',
	'j',
	'a',
	's',
	'd',
	'f',
	'g',
	'h',
	'j',
];
const BLACK_KEYS = ['z', 'x', 'c', 'v', 'b', 'z', 'x', 'c', 'v', 'b'];

const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

const keys = document.querySelectorAll('.key');

keys.forEach(key => {
	key.addEventListener('click', () => play(key));
});

function play(key) {
	const audio = document.getElementById(key.dataset.note);
	audio.currentTime = 0;
	audio.play();
	audio.classList.add(active);
}

document.addEventListener('keydown', e => {
	if (e.repeat) return;
	const key = e.key;
	const indexWhiteKeys = WHITE_KEYS.indexOf(key);
	const indexBlackKeys = BLACK_KEYS.indexOf(key);
	if (indexWhiteKeys > -1) play(whiteKeys[indexWhiteKeys]);
	if (indexBlackKeys > -1) play(blackKeys[indexBlackKeys]);
});

/**
Steps:
 * 1)Access all the key in keys
 * 2)In the keys use the forEach loops and inside that use the key with eventlistener when it is click it will call the function play
 * 3)Create the function
 * 4)Then connect key button with audio by getElementById(key.dataset.note) the parameter will first connect to the key class then the custom made attributes and then pass to the ID of the audio
 *5)play with play() method the bug with it was if we touch twice in the key it will first stop the play then run again so use audio.currentTime =0; and in order to know which key was pressed use the active class into the html and add it from js 
 *6)The first work of pressing with mouse was completed now with keys
 *7)First Create the array of keys that will be pressed
 *8)Then call the black and white key with querySelectorAll()
 *9)Then add a eventListener into the document as the button could be pressed any where in the window with keydown event as it means that when we press the key it will know and e means event handler
 *10)	const key = e.key; will know which key is pressed
 *11)Then find out the index of the key which was pressed 
 *12)The condition 	if (indexWhiteKeys > -1) play(whiteKeys[indexWhiteKeys])  will call the function and play
 *13) as we keep pressing the key it will make annoying sound so use the repeat in event handle that is e  
 */
