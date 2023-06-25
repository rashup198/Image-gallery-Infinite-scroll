import React from 'react'
import "./card.css";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Card = ({photo ,name}) => {

    const clickHandler = () => {
        toast.success("Image Liked")
        console.log("Image Liked");
    }

  return (
    <div className='list'>
    <ToastContainer />
    <div className='card' onClick={clickHandler}>
    
        <div className='card_image'>
            <img src={photo} alt="img"></img>
        </div>
    </div>
    </div>
  )
}

export default Card;
