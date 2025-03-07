import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import photo1 from '../img/photo_1_2025-03-07_19-00-15.jpg'
import photo2 from '../img/photo_2_2025-03-07_19-00-15.jpg'
import photo4 from '../img/photo_4_2025-03-07_19-00-15.jpg'
import photo5 from '../img/photo_5_2025-03-07_19-00-15.jpg'
import photo6 from '../img/photo_6_2025-03-07_19-00-15.jpg'
import photo7 from '../img/photo_7_2025-03-07_19-00-15.jpg'
import photo8 from '../img/photo_8_2025-03-07_19-00-15.jpg'
import photo9 from '../img/photo_9_2025-03-07_19-00-15.jpg'
import photo10 from '../img/photo_10_2025-03-07_19-00-15.jpg'
import photo11 from '../img/photo_11_2025-03-07_19-00-15.jpg'
import photo12 from '../img/photo_12_2025-03-07_19-00-15.jpg'


const Images = () => {
  return (
    <div className='Images'>
        <header className='hero'><p>Photos</p><Link to='/'><button className='homeButton'><FaHome /></button></Link></header>
        <main className='images'>
            <img src={photo1} />
            <img src={photo2} />
            <img src={photo4} />
            <img src={photo5} />
            <img src={photo9} />
            <img src={photo10} />
            <img src={photo6} />
            <img src={photo7} />
            <img src={photo8} />
            <img src={photo11} />
            <img src={photo12} />
        </main>
    </div>
  )
}

export default Images