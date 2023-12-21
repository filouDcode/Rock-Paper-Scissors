/* --- VARIABLES --- */

const choices = ['✊', '🤚', '✌️'];
const player1 = document.getElementById('player-1');
const player2 = document.getElementById('player-2');
const resultArea = document.getElementById('result-area');
const playBtn = document.getElementById('play-btn');

/* --- FUNCTIONS --- */

const generateChoice = () => {
	let r = Math.floor(Math.random() * 3);
	return choices[r];
};

const insertHTML = (choice1, choice2, result) => {
	player1.innerHTML = choice1;
	player2.innerHTML = choice2;
	resultArea.innerHTML = result;
};

const decideWinner = (a, b) => {
	if (
		(a === '✊' && b === '✊') ||
		(a === '🤚' && b === '🤚') ||
		(a === '✌️' && b === '✌️')
	) {
		return 'Match Nul 🙁';
	} else if (
		(a === '✊' && b === '✌️') ||
		(a === '🤚' && b === '✊') ||
		(a === '✌️' && b === '🤚')
	) {
		return 'Le Joueur 1 Gagne 👏';
	} else {
		return 'Le Joueur 2 Gagne 👏';
	}
};

const play = () => {
	let choice1 = generateChoice();
	let choice2 = generateChoice();
	let result = decideWinner(choice1, choice2);

	insertHTML(choice1, choice2, result);
};

/* --- EVENT LISTENERS --- */

playBtn.addEventListener('click', play);
