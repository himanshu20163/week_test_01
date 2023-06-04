import React from 'react'
import Port_cards from './Port_cards'
import './portfolio.css';

const Portfolio = () => {

  return (
    <div className='container-fluid pb-5 pt-5  porfolio_style' >
        <div className="row">
            
            <Port_cards award_icon="fa fa-phone" award_heading="22" award_title="Awards Title" />
            <Port_cards award_icon="fa fa-phone" award_heading="145" award_title="Finished Project"/>
            <Port_cards award_icon="fa fa-phone" award_heading="349" award_title="Product Sold"/>
            <Port_cards award_icon="fa fa-phone" award_heading="2456" award_title="Twitter Fans"/>
        </div>
    </div>
  )
}

export default Portfolio;