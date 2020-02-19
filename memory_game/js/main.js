console.log("Up and running!");

let cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "image/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "image/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "image/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "image/king-of-diamonds.png"
}
];


let cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again");
	}
}

function flipCard(cardId) {
	console.log("User flipped: " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	if (cardsInPlay.length === 2) {
		checkForMatch();
}
}

flipCard(0);
flipCard(2);


