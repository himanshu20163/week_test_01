import React from 'react'

const Footer_gallery_img = (props) => {
  return (
    <div>
        <div className="col-lg-3">
            <img src={props.img_link} height="60" width="60"/>
                 </div>
    </div>
  )
}

export default Footer_gallery_img