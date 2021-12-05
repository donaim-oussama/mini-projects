document.addEventListener('DOMContentLoaded', () => {
    //cartes
    const cardsArray = [
        {
            name: 'img1',
            img: 'Media/img (1).jpg'
        },
        {
            name: 'img1',
            img: 'Media/img (1).jpg'
        },
        {
            name: 'img2',
            img: 'Media/img (2).jpg'
        },
        {
            name: 'img2',
            img: 'Media/img (2).jpg'
        },
        {
            name: 'img3',
            img: 'Media/img (3).jpg'
        },
        {
            name: 'img3',
            img: 'Media/img (3).jpg'
        },
        {
            name: 'img4',
            img: 'Media/img (4).jpg'
        },
        {
            name: 'img4',
            img: 'Media/img (4).jpg'
        },
        {
            name: 'img5',
            img: 'Media/img (5).jpg'
        },
        {
            name: 'img5',
            img: 'Media/img (5).jpg'
        },
        {
            name: 'img6',
            img: 'Media/img (6).jpg'
        },
        {
            name: 'img6',
            img: 'Media/img (6).jpg'
        },
        {
            name: 'img7',
            img: 'Media/img (7).jpg'
        },
        {
            name: 'img7',
            img: 'Media/img (7).jpg'
        },
        {
            name: 'img8',
            img: 'Media/img (8).jpg'
        },
        {
            name: 'img8',
            img: 'Media/img (8).jpg'
        },
    ]

    cardsArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []
    const resultDisplay = document.querySelector('#result')
    let flag = 0


    function create(){ //création du corps du jeu
        for(let i=0; i < cardsArray.length; i++){
            var card = document.createElement('img')
            card.setAttribute('src', 'Media/quest.png')
            card.setAttribute('data-id', i) //création de l'élément img
            card.addEventListener('click', flipCard) 
            grid.appendChild(card) //ajout de l'image dans l'élément grid
        }
    }


    function flipCard(){
        if(this.getAttribute('src') == 'Media/quest.png'){
            var cardId = this.getAttribute('data-id')
            cardsChosen.push(cardsArray[cardId.name]) //ajout de la carte choisie au tableau cardsChosen
            cardsChosenId.push(cardId)
            this.setAttribute('src', cardsArray[cardId].img)
            if(cardsChosen.length === 2){
                setTimeout(checkForMatch, 300)
            }
        }
        flag = 1
    }

    if(flag == 1){
        startTimer()
        console.log('testing')
    }

    function checkForMatch(){
        var cards = document.querySelectorAll('img')
        const cardOneId = cardsChosenId[0]
        const cardTwoId = cardsChosenId[1]
        const cardOneName = cardsArray[cardOneId].name
        const cardTwoName = cardsArray[cardTwoId].name
        
        if(cardOneName === cardTwoName && cardOneId != cardTwoId){
            //alert('Bien!')
            /*cards[cardOneId].setAttribute('src', 'Media/fff.jpg')
            cards[cardTwoId].setAttribute('src', 'Media/fff.jpg')*/
            cardsWon.push(cardsChosen)
        } else{
            cards[cardOneId].setAttribute('src', 'Media/quest.png')
            cards[cardTwoId].setAttribute('src', 'Media/quest.png')
            //alert('Mauvais choix! :(')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if(cardsWon.length === cardsArray.length/2){
            resultDisplay.textContent = 'Félicitations! Vous avez gagné!'
        }
        console.log(flag)
    }
    console.log(flag)
    function startTimer(){
        var time = 60
        if(flag == 1){
        setInterval(
            function (){
                var timer = document.querySelector('#timer')
                timer.textContent = `${time} s`
                time--
                console.log('test')
            }, 1000)
        }
    }
    
    create()
})