import React, { useState, useEffect } from 'react'
import "./Card.css"
import ninja from "../CardGame/Images/ninja.png"
import shinchan from "../CardGame/Images/shinchan.png"
import teddy from "../CardGame/Images/teddy.png"
import bird from "../CardGame/Images/bird.png"
import mouse from "../CardGame/Images/mouse.png"
import rabbit from "../CardGame/Images/rabbit.png"
import backimage from "../CardGame/Images/backimage.png"

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


    const [flip, setflip] = useState([]);
    const [check, setcheck] = useState([]);


    function handleclick(index, id) {
        setflip([...flip, index])
        setcheck([...check, id])
        if (flip.length === 2) {
            if (check[0] === check[1]) {
                console.log("done")
                setflip([])
                setcheck([])
            }
            else {
                setflip([])
                setcheck([])
            }
        }
    }


    return (
        <div className='wrapper'>
            <div className='cardbox'>
                {
                    data.map((element, index) => {
                        return (
                            <div className="flip-card" key={index} onClick={() => { handleclick(index, element.id) }}>
                                <div className="flip-card-inner" style={{ transform: index === flip[0] || index === flip[1] ? 'rotateY(180deg)' : 'none' }}>
                                    <div className="flip-card-front" >
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