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
import { useNavigate } from 'react-router-dom'

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
    const { moves, setmoves } = useContext(cardcontext)
    const { timer, settimer } = useContext(cardcontext)
    const navigate = useNavigate()


    function handleclick(index, id) {
        setflip([...flip, index])
        setcheck([...check, id])
        
    }



    useEffect(() => {
        let intervalId;
        if (timer === 0) {
            navigate("/end")
        } else {
            intervalId = setInterval(() => {
                settimer((prevTimer) => prevTimer - 1);
            }, 1000);
        }
        return () => clearInterval(intervalId);
    }, [timer]);




    useEffect(() => {
        console.log(flip)
        if (flip.length === 2) {
            if (check[0] === check[1] && flip[0] != flip[1]) {
                setMatched([...matched, check[0], check[1]])
                setflip([])
                setcheck([])
                setmoves(moves + 1)
            }
            else {
                setTimeout(() => {
                    setflip([])
                    setcheck([])
                    setmoves(moves + 1)
                }, 800);
            }
        }
       if(matched.length===12){
        navigate("/end")
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
