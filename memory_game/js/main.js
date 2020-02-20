console.log("Up and running!");

let cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

let cardsInPlay = [];
let score = 0;
let scorePoint = document.getElementById('score');

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
		score += 2;
		scorePoint.innerHTML = score;
	} else {
		alert("Sorry, try again");
		score -= 1;
		scorePoint.innerHTML = score;
	}
}

function flipCard() {
	cardId = this.getAttribute('data-id');
	console.log("User flipped: " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
		checkForMatch();
		initializeVar();
	}
}

function createBoard() {
	for (let i=0; i<cards.length; i++) {
		let cardElement = document.createElement('img');
		let cardElementId = document.getElementsByTagName('img')[i];
		cardElementId.setAttribute('src', 'images/back.png');
		cardElementId.setAttribute('data-id', i);
		cardElementId.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

function initializeVar() {
	cardsInPlay = [];
	i = 0;
}

function initializeScore() {
	score = 0;
	scorePoint.innerHTML = score;
}

function resetGame() {
	resetElement = document.getElementById('resetGame');
	resetElement.addEventListener('click', createBoard);
	resetElement.addEventListener('click', initializeVar);
	resetElement.addEventListener('click', initializeScore);
}

createBoard();
resetGame();


