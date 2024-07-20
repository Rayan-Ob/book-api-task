import React from 'react'
import "./CardBookStyle.css"
import { Link } from 'react-router-dom'
import iconbook from "../../../public/images/icon-book.svg"
import star from "../../../public/images/bi_star-fill.svg"

function CardBook({img,title,numPage,rate,id}) {
  return (
    <div className='card-book'>
      {/* photo book */}
        <img id='main-img-card-book' src={img} alt="" />

        {/* details book */}
        <div className="card-book-body">
        <h3>{title}</h3>
        <div className='flex flex-bw card-book-detail'>
            <div className='flex'>
                <img src={iconbook} alt="icon book" id='boox-icon' />
                <p>{numPage} <span>Pages</span> </p>
            </div>
            <div className='flex ' id='book-rate'>
                <img src={star} alt="star icon" id='star-icon' />
                <p>{rate}</p>
            </div>
        </div>
        <button> 
          <Link to={`/details/${id}`}>show details</Link>
          </button>
        </div>
    </div>
  )
}

export default CardBook