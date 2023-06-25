import React from 'react';
// import "./image.css"
import Card from './Card';

 

const Image = ({images}) => {
  return (
    <div className='list'>
            {images.map((coin, index) => {
                return (
                  <div >
                    <Card
                        key={index}
                        photo={coin.image}
                     
                    ></Card>
                    </div>
                );
            })}
        </div>
  )
}

export default Image;
 