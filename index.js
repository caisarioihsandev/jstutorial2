let firstCard = 10
let secondCard = 11
let hasBlackJack = false
let isAlive = true
let sum = firstCard + secondCard
let message = ""

function startGame() {
	if (sum <= 20) {
		message = "Do you want to draw a new card?"
	} else if (sum === 21) {
		message = "Wohoo!! You've got a Blackjack!"
		hasBlackJack = true
	} else {
		message = "You're out of the game!"
		isAlive = false
	}
	console.log(message)	
}

