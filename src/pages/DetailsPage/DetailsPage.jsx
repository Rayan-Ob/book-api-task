import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import DetailsBook from '../../components/DetailsBook/DetailsBook'

function DetailsPage() {
    let {id}= useParams()
    const [data, setdata] = useState([])
    useEffect(() => {
        axios.get('https://example-data.draftbit.com/books?_limit=8')
            .then(res => {
                setdata(res.data[id]);
                console.log(res.data[id]); })

            .catch(error => console.log(error))
    }, [])
  return (
    <div>
        <DetailsBook 
        img={data.image_url} nameBook={data.title} writer={data.authors} pages={data.num_pages} 
        rate_count={data.rating_count} review={data.review_count} description={data.description}
        quote1={data.Quote1} quote2={data.Quote2} quote3={data.Quote3}/>
    </div>
  )
}

export default DetailsPage

