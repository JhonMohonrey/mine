import React from 'react';
import Card from './Card';

function Main(props) {
    let [card, setCard] = React.useState([])
    let cardRender = () => setCard(prev => [...prev, {value: null, id: `${Math.random()}`}])
    
    let numberOfCard = 25
    let BombAmount = 2
    React.useState(() => {
        while (numberOfCard > 0) {
            numberOfCard -= 1
            cardRender()
        }
    })

    let rep = (number) => {
        setCard(data => {
            let pickPosition1 = data[number].id

            return data.map(data => {
                return data.id === pickPosition1 ?
                {...data, value: "active"} : {...data, value: ""}
            })
        })
    }

    let otherB = (number) => {
        setCard(data => {
            let pickPosition1 = data[number].id

            return data.map(data => {
                return data.id === pickPosition1 ?
                {...data, value: "active"} : data
            })
        })
    }

    const Bomb1 = () => {
        let randomNum = []
        let bombCount = -1
        while (bombCount < numberOfCard -1) {
            bombCount += 1
            randomNum.push(bombCount)
        }
        randomNum.sort(() => Math.random() - 0.5)
        rep(randomNum[8])

        let numB = 0
        while (numB < BombAmount) {
            numB += 1
            otherB(randomNum[numB])
        }
    }

    let render = card.map((data, i) => {
        return <Card key={i}
        {...data}
        />
    })

    return (
        <div className='card'>
            <div className='position1'>
                 {render}
            </div>
            <button onClick={Bomb1}>Shuffle</button>
        </div>
    );
}

export default Main;