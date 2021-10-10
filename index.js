let player = {
	name : "Rio",
	chips: 200,
	sayHello: function() {
		console.log("Heisann!")
	}
}

player.sayHello()

let cards = [] // array
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardsEl = document.getElementById('cards-el')
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
	let cardNumber = Math.floor(Math.random()*13) + 1;
	if (cardNumber >= 11 && cardNumber <=13) {
		cardNumber = 10
	} else if (cardNumber === 1) {
		cardNumber = 11
	} else {
		cardNumber = cardNumber
	}
	return cardNumber
}

function startGame() {
	let firstCard = getRandomCard()
	let secondCard = getRandomCard()
	
	isAlive = true
	sum = firstCard + secondCard

	cards.push(firstCard)
	cards.push(secondCard)

	renderGame()
}


function renderGame() {
	if (sum <= 20) {
		message = "Do you want to draw a new card?"
	} else if (sum === 21) {
		message = "You've got a Blackjack!"
		hasBlackJack = true
	} else {
		message = "You're out of the game!"
		isAlive = false
	}
	// console.log(message)
	messageEl.textContent = message
	
	cardsEl.textContent = "Cards: "
	for (var i = 0; i < cards.length; i++) {
		cardsEl.textContent += cards[i] + " "
	}
	sumEl.textContent = "Sum: " + sum
}

function newCard() {
	if (isAlive === true && hasBlackJack === false) {
		let card = getRandomCard()
		sum += card
		cards.push(card) 
		renderGame()
	}
}