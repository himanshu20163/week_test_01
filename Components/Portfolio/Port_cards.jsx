import React from 'react'

const Port_cards = (props) => {
    const icon_style = {
        height:"100px",
        width:"100px",
        backgroundColor:"blue",
        fontSize:"21px",
    }
  return (
    <div className='col-lg-3 p-1 '>
       <i className={props.award_icon} style={{icon_style}}></i>
       <h2 className='pt-2 pb-2'>{props.award_heading}</h2>
       <p>{props.award_title}</p>
    </div>
  )
}

export default Port_cards