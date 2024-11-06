import React from 'react'
import {Figure} from 'react-bootstrap'
import data from '../../assets/data/rajan-swami.json'

export const Rajan= () => {
  return (
    <div>
        <div className="text-center">
      {data.map((item) => (
         <Figure className='m-3' key={item.id}>
            <Figure.Image
            className='shadow-lg'
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

