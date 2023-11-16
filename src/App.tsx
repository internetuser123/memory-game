import { useState, useEffect } from 'react';
import './App.css';
import Card from './components/card';

interface CardType {
    src: string;
    matched: boolean;
    id?: number;
}

function App() {
    const [cards, setCards] = useState<CardType[]>([]);
    const [choiceOne, setChoiceOne] = useState<CardType | null>(null);
    const [choiceTwo, setChoiceTwo] = useState<CardType | null>(null);

    const pics: CardType[] = [
        { src: 'images/drum.jpg', matched: false },
        { src: 'images/duck.jpg', matched: false },
        { src: 'images/soccerball.jpg', matched: false },
    ];

    const createCards = (): void => {
        const shuffledCards = [...pics, ...pics]
            .sort(() => Math.random() - 0.5)
            .map((card) => {
                return { ...card, id: Math.random() };
            });
        setCards(shuffledCards);
    };

    const handleCardChoice = (card: CardType) => {
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    };

    useEffect(() => {
        if (choiceOne && choiceTwo) {
            if (choiceOne.src === choiceTwo.src) {
                console.log('those cards match');
                setCards((prevCards) => {
                    return prevCards.map((card) => {
                        if (card.src === choiceOne.src) {
                            return { ...card, matched: true };
                        } else {
                            return card;
                        }
                    });
                });
                resetTurn();
            } else {
                setTimeout(() => resetTurn(), 1000);
            }
        }
    }, [choiceOne, choiceTwo]);

    console.log(cards);

    const resetTurn = (): void => {
        setChoiceOne(null);
        setChoiceTwo(null);
    };

    return (
        <div>
            <button className="startButton" onClick={createCards}>
                New Game
            </button>
            <div className="container">
                {cards.map((card) => {
                    return (
                        <Card
                            key={card.id}
                            card={card}
                            handleChoice={handleCardChoice}
                            flipped={card === choiceOne || card === choiceTwo || card.matched}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default App;
