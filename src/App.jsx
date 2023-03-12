import { useState, useEffect } from 'react'
import './App.css'
import Card from './components/card'

function App() {

  const [cards, setCards] = useState([])
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)

  const pics = [
    {'src': 'images/drum.jpg'},
    {'src': 'images/duck.jpg'},
    {'src': 'images/soccerball.jpg'},
  ]

  const createCards = () => {
    
    const shuffledCards = [...pics, ...pics]
      .sort(() => Math.random() -0.5)
      .map((card) => {return {...card, id: Math.random()}})
      setCards(shuffledCards)
  }


  const handleCardChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  useEffect(() => {
    if ( choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        console.log("those cards match")
        resetTurn()
      } else {
        console.log("cards do not match")
        resetTurn()
      }
    }
  }, [choiceOne, choiceTwo])

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
  }
  
  return (
    <div>
      <button className='startButton' onClick={createCards}>New Game</button>
      <div className='container'>
        {cards.map(card => {
          return <Card
            key={card.id}
            card={card}
            handleChoice={handleCardChoice} />
        })}
      </div>
      
    </div>
  )
}

export default App
