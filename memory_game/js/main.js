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
let score = null;
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
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

function initializeVar() {
	cardsInPlay = [];
	i = 0;
}

function initializeBoard() {
	score = 0;
	scorePoint.innerHTML = score;
	for (let i=0; i<=cards.length; i++) {
		let images = document.getElementsByTagName('img')[i];
		images.setAttribute('src', 'images/back.png');
	}
}

function resetGame() {
	resetElement = document.getElementById('resetGame');
	resetElement.addEventListener('click', initializeVar);
	resetElement.addEventListener('click', initializeBoard);
}

createBoard();
resetGame();


