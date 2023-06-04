import React from 'react'
import './feature.css';

const Feature_cards = (props) => {
    const icon_style = {
        height:"100px",
        width:"100px",
        backgroundColor:"blue",
        fontSize:"21px",
    }
  return (
    <div className='col-lg-4 p-1 '>
       <i className={props.icon} style={{icon_style}}></i>
       <h2 className='pt-2 pb-2'>{props.card_heading}</h2>
       <p>{props.card_para}</p>
    </div>
  )
}

export default Feature_cards