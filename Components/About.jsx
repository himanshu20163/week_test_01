import React from 'react'

const About = () => {
  return (
    <div className='container-fluid bg-danger p-5' style={{
      backgroundImage:"url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Ffree-backgrounds-photos%2Foffice&psig=AOvVaw3Jrzyv3KeT5s-QcD0ABudP&ust=1685981976940000&source=images&cd=vfe&ved=2ahUKEwin3Pe3gqr_AhWMUWwGHZ7zD5AQjRx6BAgAEAw')"
    }}>
      <div className="row ">
        <div className="col-lg-12 pt-5 pb-5 ">
            <h2 className='pt-5 text-white'>Your Awesome Business Theme </h2>
            <p className='text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint cupiditate fugiat amet libero quae atque consequatur sequi? Aperiam at minus recusandae nobis, sapiente dolor ipsa nemo hic placeat tenetur est?</p>
            <button className='bg-primary ' style={{
              borderRadius:"10px",
              borderStyle:"none",
              padding:"10px 20px",
              color:"white",
            }}>READ MORE</button>
        </div>
      </div>
    </div>
  )
}

export default About