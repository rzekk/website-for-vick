import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import photo1 from './img/photo_1_2025-03-07_19-00-15.jpg'
import photo2 from './img/photo_2_2025-03-07_19-00-15.jpg'
import photo4 from './img/photo_4_2025-03-07_19-00-15.jpg'
import photo5 from './img/photo_5_2025-03-07_19-00-15.jpg'
import photo6 from './img/photo_6_2025-03-07_19-00-15.jpg'
import photo7 from './img/photo_7_2025-03-07_19-00-15.jpg'
import photo8 from './img/photo_8_2025-03-07_19-00-15.jpg'
import photo9 from './img/photo_9_2025-03-07_19-00-15.jpg'
import photo10 from './img/photo_10_2025-03-07_19-00-15.jpg'
import photo11 from './img/photo_11_2025-03-07_19-00-15.jpg'
import photo12 from './img/photo_12_2025-03-07_19-00-15.jpg'


const Images = () => {
  return (
    <div className='Images'>
        <header className='hero'><p>Photos</p><Link to='/'><button className='homeButton'><FaHome /></button></Link></header>
        <main className='images'>
            <img src={photo1} alt='' />
            <img src={photo2} alt='' />
            <img src={photo4} alt='' />
            <img src={photo5} alt='' />
            <img src={photo9} alt='' />
            <img src={photo10} alt='' />
            <img src={photo6} alt='' />
            <img src={photo7} alt='' />
            <img src={photo8} alt='' />
            <img src={photo11} alt='' />
            <img src={photo12} alt='' />
        </main>
    </div>
  )
}

export default Images