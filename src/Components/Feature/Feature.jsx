import React from 'react'
import Feature_cards from './Feature_cards'
import './feature.css';

const Feature = () => {
  return (
    <div className='container-fluid p-5'>
         <div className="row">
            <div className="col-lg-12">
                <h2>Our Feature</h2>
            </div>
            <div className="col-lg-12 p-5">
                <div className="row">
                    <Feature_cards icon="fa fa-phone" card_heading="fully responsive" card_para="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro veniam adipisci officia libero reiciendis qui distinctio. Vel, amet saepe! Nesciunt dolorum corrupti distinctio unde numquam sapiente deserunt voluptatum doloremque voluptatibus?"/>
                    <Feature_cards icon="fa fa-phone" card_heading="fully responsive" card_para="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro veniam adipisci officia libero reiciendis qui distinctio. Vel, amet saepe! Nesciunt dolorum corrupti distinctio unde numquam sapiente deserunt voluptatum doloremque voluptatibus?"/>
                    <Feature_cards icon="fa fa-phone" card_heading="fully responsive" card_para="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro veniam adipisci officia libero reiciendis qui distinctio. Vel, amet saepe! Nesciunt dolorum corrupti distinctio unde numquam sapiente deserunt voluptatum doloremque voluptatibus?"/>
                </div>
            </div>
         </div>
    </div>
  )
}

export default Feature