import React from 'react'

export default function Generator(props) {
    let [dataA, setDataA] = React.useState(
        [
            Math.floor(Math.random() * 10)
        ]
    )
    let [dataB, setDataB] = React.useState(
        [
            Math.floor(Math.random() * 10)
        ]
    )
    let [dataC, setDataC] = React.useState(
        [
            Math.floor(Math.random() * 10)
        ]
    )
    let [dataD, setDataD] = React.useState(
        [
            Math.floor(Math.random() * 10)
        ]
    )
    let [dataE, setDataE] = React.useState(
        [
            Math.floor(Math.random() * 10)
        ]
    )
    let [dataF, setDataF] = React.useState(
        [
            Math.floor(Math.random() * 10)
        ]
    )

    let render = () => {
        setDataA(Math.floor(Math.random() * 10))
        setDataB(Math.floor(Math.random() * 10))
        setDataC(Math.floor(Math.random() * 10))
        setDataD(Math.floor(Math.random() * 10))
        setDataE(Math.floor(Math.random() * 10))
        setDataF(Math.floor(Math.random() * 10))
    }
   
  return (
    <div>
        <h2>
            {
                `${dataA}
                ${dataB}
                ${dataC}
                ${dataD}
                ${dataE}
                ${dataF}
                `
            }
        </h2>

        <button
        onClick={render}
        >Shuffle</button>
    </div>
  )
}