import React from 'react'
import image from '../../assets/importSection2.png'
const Section2 = () => {
  return (
    <div className='container'>
        <div className='row align-items-center '>
              <div className='col-12 col-md-12 col-lg-6'>
                   <img src={image} alt='photos' height={'703.329px'} width={"80%"} />
              </div>
              <div className='col-12 col-md-12 col-lg-5'>
                   <h1 className='section2h1'>The overview you’ve always wanted</h1>
                   <p className='section2p'>Stop guessing. Know what’s going on and see how everything is progressing. Take action when needed and coach your team to success.</p>
                   <p style={{color:'blue'}}>Learn More</p>
              </div>
        </div>
    </div>
  )
}

export default Section2