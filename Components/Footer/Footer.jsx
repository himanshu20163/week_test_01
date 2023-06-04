import React from 'react'
import Footer_gallery_img from './Footer_gallery_img'
import '../Portfolio/portfolio.css';

const Footer = () => {

    const head_style={
        textAlign:"start",fontWeight:"bold",
        color:"white",
    }
    const para_style={
        textAlign:"start",
        color:"white",
    }
  return (
    <div style={{width:"100%",border:"2px solid red",background:"black"}}>
 <div className='container pt-5 '>
       <div className="row">
           <div className="col-lg-4">
              <b><h5 style={head_style}>ABOUT FLEX BUSINESS PRO</h5></b>
              <p style={para_style}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dignissimos laudantium molestiae eaque amet sint iste reiciendis sed fugit ut, sit ea minima officia optio quasi non cumque sequi perferendis!</p>
           </div>
           <div className="col-lg-4 posts">
               <b><h5 style={head_style}>RECENT POSTS</h5></b>
               <ul>
                <li>
                    Fly to london <br/>
                    Sepetember 18,2018
                </li>
                <li>
                    Stair communincation <br/>
                    Sepetember 18,2018
                </li>
                <li>
                    Do you want to be a robot <br/>
                    Sepetember 18,2018
                </li>
               </ul>
           </div>
           <div className="col-lg-4">
               <h5 style={head_style}>GALLERIES</h5>
               <div className="row pb-2 justify-content-end">
                  <Footer_gallery_img  img_link="https://th.bing.com/th/id/R.6a7a745d0cf6e1478e104e6a7fee6cc1?rik=xULJFzGntGDtew&riu=http%3a%2f%2fwonderfulengineering.com%2fwp-content%2fuploads%2f2016%2f01%2fnature-wallpapers-38.jpg&ehk=dUtU7hvI%2bIv1ZAogg0%2b%2fznLW5KEYTsPob9LlywpnX1Q%3d&risl=&pid=ImgRaw&r=0"/>
                  <Footer_gallery_img  img_link="https://th.bing.com/th/id/R.6a7a745d0cf6e1478e104e6a7fee6cc1?rik=xULJFzGntGDtew&riu=http%3a%2f%2fwonderfulengineering.com%2fwp-content%2fuploads%2f2016%2f01%2fnature-wallpapers-38.jpg&ehk=dUtU7hvI%2bIv1ZAogg0%2b%2fznLW5KEYTsPob9LlywpnX1Q%3d&risl=&pid=ImgRaw&r=0"/>
                  <Footer_gallery_img  img_link="https://th.bing.com/th/id/R.6a7a745d0cf6e1478e104e6a7fee6cc1?rik=xULJFzGntGDtew&riu=http%3a%2f%2fwonderfulengineering.com%2fwp-content%2fuploads%2f2016%2f01%2fnature-wallpapers-38.jpg&ehk=dUtU7hvI%2bIv1ZAogg0%2b%2fznLW5KEYTsPob9LlywpnX1Q%3d&risl=&pid=ImgRaw&r=0"/>
                  <Footer_gallery_img  img_link="https://th.bing.com/th/id/R.6a7a745d0cf6e1478e104e6a7fee6cc1?rik=xULJFzGntGDtew&riu=http%3a%2f%2fwonderfulengineering.com%2fwp-content%2fuploads%2f2016%2f01%2fnature-wallpapers-38.jpg&ehk=dUtU7hvI%2bIv1ZAogg0%2b%2fznLW5KEYTsPob9LlywpnX1Q%3d&risl=&pid=ImgRaw&r=0"/>

               </div>
               <div className="row justify-content-end">
                  <Footer_gallery_img  img_link="https://th.bing.com/th/id/R.6a7a745d0cf6e1478e104e6a7fee6cc1?rik=xULJFzGntGDtew&riu=http%3a%2f%2fwonderfulengineering.com%2fwp-content%2fuploads%2f2016%2f01%2fnature-wallpapers-38.jpg&ehk=dUtU7hvI%2bIv1ZAogg0%2b%2fznLW5KEYTsPob9LlywpnX1Q%3d&risl=&pid=ImgRaw&r=0"/>
                  <Footer_gallery_img  img_link="https://th.bing.com/th/id/R.6a7a745d0cf6e1478e104e6a7fee6cc1?rik=xULJFzGntGDtew&riu=http%3a%2f%2fwonderfulengineering.com%2fwp-content%2fuploads%2f2016%2f01%2fnature-wallpapers-38.jpg&ehk=dUtU7hvI%2bIv1ZAogg0%2b%2fznLW5KEYTsPob9LlywpnX1Q%3d&risl=&pid=ImgRaw&r=0"/>
                  <Footer_gallery_img  img_link="https://th.bing.com/th/id/R.6a7a745d0cf6e1478e104e6a7fee6cc1?rik=xULJFzGntGDtew&riu=http%3a%2f%2fwonderfulengineering.com%2fwp-content%2fuploads%2f2016%2f01%2fnature-wallpapers-38.jpg&ehk=dUtU7hvI%2bIv1ZAogg0%2b%2fznLW5KEYTsPob9LlywpnX1Q%3d&risl=&pid=ImgRaw&r=0"/>
                  <Footer_gallery_img  img_link="https://th.bing.com/th/id/R.6a7a745d0cf6e1478e104e6a7fee6cc1?rik=xULJFzGntGDtew&riu=http%3a%2f%2fwonderfulengineering.com%2fwp-content%2fuploads%2f2016%2f01%2fnature-wallpapers-38.jpg&ehk=dUtU7hvI%2bIv1ZAogg0%2b%2fznLW5KEYTsPob9LlywpnX1Q%3d&risl=&pid=ImgRaw&r=0"/>

               </div>
               
           </div>
       </div>
    </div>
    </div>
   
  )
}

export default Footer