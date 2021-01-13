document.addEventListener('DOMContentLoaded', () =>{
	
	//cards
	const cardArray = [
		{
			name: 'candy',
			img: 'images/candy.png'
		},
		{
			name: 'candy',
			img: 'images/candy.png'
		},
		{
			name: 'coffee',
			img: 'images/coffee.png'
		},
		{
			name: 'coffee',
			img: 'images/coffee.png'
		},
		{
			name: 'hotdog',
			img: 'images/hotdog.png'
		},
		{
			name: 'hotdog',
			img: 'images/hotdog.png'
		},
		{
			name: 'icedtea',
			img: 'images/icedtea.png'
		},
		{
			name: 'icedtea',
			img: 'images/icedtea.png'
		},
		{
			name: 'moon',
			img: 'images/moon.png'
		},
		{
			name: 'moon',
			img: 'images/moon.png'
		},
		{
			name: 'sun',
			img: 'images/sun.png'
		},
		{
			name: 'sun',
			img: 'images/sun.png'
		},

	]

	cardArray.sort(() => 0.5 - Math.random())

	const grid = document.querySelector('.grid')
	const resultDisplay = document.querySelector('#result')
	var cardsChosen = []
	var cardsWon = []
	var cardsChosenId = []
//game board
	function createBoard(){

		for(let i=0; i<cardArray.length;i++){
			var card = document.createElement('img')
			card.setAttribute('src','images/black.png')
			card.setAttribute('data-id',i)
			card.addEventListener('click', flipcard)
			grid.appendChild(card)
		}
	}
//check for matches
	function checkForMatch(){
		var cards = document.querySelectorAll('img')
		const optionOneId = cardsChosenId[0]
		const optionTwoId = cardsChosenId[1]
		if(cardsChosen[0] === cardsChosen[1]){
			alert('That is a match!')
			cards[optionOneId].setAttribute('src','images/white.png')
			cards[optionTwoId].setAttribute('src', 'images/white.png')
			cardsWon.push(cardsChosen)
		}
		else{

			cards[optionOneId].setAttribute('src','images/black.png')
			cards[optionTwoId].setAttribute('src','images/black.png')
			alert('Sorry, try again')
		}
		cardsChosen = []
		cardsChosenId = []
		resultDisplay.textContent = cardsWon.length
		if(cardsWon.length === cardArray.length/2) {
			resultDisplay.textContent = 'Congrats! You won.'
		}
	}	


//flipcard

	function flipcard(){
		var cardID = this.getAttribute('data-id')
		cardsChosen.push(cardArray[cardID].name)
		cardsChosenId.push(cardID)
		this.setAttribute('src',cardArray[cardID].img)
		if(cardsChosen.length === 2){
			setTimeout(checkForMatch,500)  //check for match after 500 ms
		}
	}

	createBoard()

})