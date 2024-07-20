import React from 'react'
import "./HeroStyle.css"
import Navbar from '../Navbar/Navbar'
import book from "../../../public/images/book.png"

function Hero() {
    return (
        <div className='hero'>
            <div>
                <div id='hero-title'>
                    <p >Author of august </p>
                </div>
                <h1>Eric-Emanuel Schmitt </h1>
                <div>
                    <p id='desc-hero'>Eric-Emmanuel Schmitt has been awarded more than 20 literary prizes and distinctions, and in 2001 he received the title of Chevalier des Arts et des Lettres. His books have been translated into over 40 languages. </p>
                </div>
                <button id='hero-btn-view-book'>
                    View his boooks
                </button>
            </div>
            <img src={book} alt="book img" />
        </div>
    )
}

export default Hero