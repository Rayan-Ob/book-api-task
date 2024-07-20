import React, { useEffect } from 'react'
import "./SelectBookStyle.css"
import { useState } from 'react'
import axios from 'axios'
import CardBook from '../CardBook/CardBook'


function SelectBook() {
    const [data, setdata] = useState([])
    useEffect(() => {
        axios.get('https://example-data.draftbit.com/books?_limit=8')
            .then(res => {
                setdata(res.data);
                console.log(res.data);
            }
            )
            .catch(error => console.log(error))
    }, [])

    return (
        <div className='selected-part'>
            <h2>selected for you</h2>
            <div  className='books'>
            {data.map((element, index) => {
                return (
               
                        <div key={index}>
                            <CardBook  img={element.image_url} title={element.title} numPage={element.num_pages} rate={element.rating} id={element.id}/>

                        </div> )
            } ) }
            </div>
        </div>
    )
}

export default SelectBook