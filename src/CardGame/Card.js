import React, { useState, useEffect, useCallback, useContext } from 'react'
import "./Card.css"
import ninja from "../CardGame/Images/ninja.png"
import shinchan from "../CardGame/Images/shinchan.png"
import teddy from "../CardGame/Images/teddy.png"
import bird from "../CardGame/Images/bird.png"
import mouse from "../CardGame/Images/mouse.png"
import rabbit from "../CardGame/Images/rabbit.png"
import backimage from "../CardGame/Images/backimage.png"
import { cardcontext } from './Memory'

function Card() {

    let data = [
        { Image: teddy, id: 1 },
        { Image: ninja, id: 2 },
        { Image: shinchan, id: 3 },
        { Image: bird, id: 4 },
        { Image: mouse, id: 5 },
        { Image: rabbit, id: 6 },
        { Image: teddy, id: 1 },
        { Image: ninja, id: 2 },
        { Image: shinchan, id: 3 },
        { Image: bird, id: 4 },
        { Image: mouse, id: 5 },
        { Image: rabbit, id: 6 }
    ]

    useEffect(() => {

        for (let i = data.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [data[i], data[j]] = [data[j], data[i]];
        }
    }, [])


    const [check, setcheck] = useState([])
    const [flip, setflip] = useState([])
    const [matched, setMatched] = useState([])
    const {moves, setmoves} = useContext(cardcontext)
    const {timer, settimer} = useContext(cardcontext)
    

    function handleclick(index, id) {
        setflip([...flip, index])
        setcheck([...check, id])
    }



    useEffect(() => {
        if (timer > 0) {
         settimer(timer-1)
        }
        else {
          const timeend = setInterval(() => {
            console.log("done")
          }, 1000)
          return () => clearInterval(timeend)
        }
      }, [timer])




    useEffect(() => {
        console.log(check)

        if (flip.length === 2) {
            if (check[0] === check[1]) {
                setMatched([...matched, check[0], check[1]])
                console.log("matched")
                setflip([])
                setcheck([])
                setmoves(moves+1)
            }
            else {
                setTimeout(() => {
                    setflip([])
                    setcheck([])
                setmoves(moves+1)
                }, 800);
                console.log("not matched")
            }
        }
    }, [flip])
    return (
        <div className='wrapper'>
            <div className='record'>
                <h1>Moves : {moves}</h1>
                <h1>Time : {timer}</h1>
            </div>
            <div className='cardbox'>
                {
                    data.map((element, index) => {
                        return (
                            <div className="flip-card" key={index} onClick={() => { handleclick(index, element.id) }}>
                                <div className={`${flip.includes(index) || matched.includes(element.id) ? 'matched' : ''}`}>
                                    <div className="flip-card-front"  >
                                        <img src={backimage}></img>
                                    </div>
                                    <div className="flip-card-back">
                                        <img src={element.Image}></img>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}


export default Card
