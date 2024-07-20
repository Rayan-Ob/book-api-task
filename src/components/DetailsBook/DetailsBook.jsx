import React, { useEffect, useState } from 'react'
import "./DetailsBookStyle.css"


function DetailsBook({ img, nameBook, writer, pages, rate_count, review, description, quote1, quote2, quote3
}) {
    let [count, setcount] = useState(1)
    let [text, settext] = useState("")
    useEffect(() => {
        settext(description)
    }
        , [description])

    function incrementCount() {
        count = count + 1;
        if (count > 4) {
            count = 4
        }
        setcount(count)
    }

    function decrementCount() {
        count = count - 1;
        if (count < 1) {
            count = 1
        }
        setcount(count);
    }


    function showText() {
        if (count == 1) {
            settext(description)
        }
        else if (count == 2) {
            settext(quote1)
        }
        else if (count == 3) { settext(quote2) }
        else {
            settext(quote3)
        }
    }

    return (
        <div className='details-book'>
            {/* image  */}
            <div id='d-b-img-box'>
                <img src={img} alt="image book" id='details-book-img' />
            </div>

            {/* details */}
            <div className='d-b-body'>
                <h2>{nameBook}</h2>
                <h6>{writer}</h6>

                <div id='details-b-text'>
                    <p id='details-about-book'>About Book</p>
                    <p id='d-b-description'>{text}</p>

                    <div className='d-b-buttons'>
                        <button onClick={() => { decrementCount(); showText() }}> - </button>
                        <p>{count}</p>
                        <button onClick={() => { incrementCount(); showText() }}> + </button>

                    </div>

                    <div className='d-b-buttons-add'>
                        <button>Add to cart</button>
                        <button>Favorite </button>
                    </div>

                </div>
                <hr />
                <div className='rates'>
                    <div className='flex rate-pink'>
                        <p className='p-pink'>pages Number : </p>
                        <p >{pages} Pages</p>
                    </div>
                    <div className='flex rate-pink'>
                        <p className='p-pink'>Rating Count :</p>
                        <p>{rate_count}</p>

                    </div>
                    <div className='flex rate-pink'>
                        <p className='p-pink'>Reviews:</p>
                        <p>{review}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailsBook