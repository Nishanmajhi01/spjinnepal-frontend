import React from 'react'
import {Figure} from 'react-bootstrap'
import data from '../../assets/data/about-swami.json'

export const Swami = () => {
  return (
    <div>
        <div className="text-center">
      {data.map((item) => (
         <Figure className='m-3 shadow-lg' key={item.id}>
            <Figure.Image
               width={500}
               height={1000}
               alt={``}
               src={process.env.PUBLIC_URL + item.imageUrl}
            />
            <Figure.Caption>
               <p>{item.subject}</p>
            </Figure.Caption>
         </Figure>
      ))}
   </div>
    </div>
  )
}

