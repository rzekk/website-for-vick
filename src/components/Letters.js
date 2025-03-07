import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'

const images = [
    "i will never get tired\n of hearing your beautiful voice\n and your adorable laugh",
    "my love for you\n is a journey that\n starts at forever\n and ends at never",
    "Thank you for listening\n to my problems even\n when you had much",
    "У мене метелики\n в животі кожного разу\n як я кажу твоє ім'я <3",
    "Жодних слів недостатньо,\n щоб описати мою\n любов до тебе",
    "Ти найкраща у світі",
    "я люблю тебе все більше\n і більше з кожним днем",
    "so close,\n no matter how far",
    "тільки з тобою я зрозумів,\n що означає бути\n почутим і коханим"
  ];
  
  const Letters = () => {
    const [index, setIndex] = useState(0);
  
    const nextSlide = () => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
      console.log(index);
    };
  
    const prevSlide = () => {
      setIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      console.log(index);
    };
  
    return (
        <div className='Letters'>
            <header className='hero'><p>You are perfect</p><Link to='/'><button className='homeButton'><FaHome /></button></Link></header>
            <div className="carousel">
                <button className="prev" onClick={prevSlide}>
                ❮
                </button>
                <div className="carousel-track" style={{
                    transform: `translateX(-${index * 100}%)`,
                    width: `${images.length * 100}%`,}}>
                {images.map((src, i) => (
                    <div key={i} className='slide'><p className='carouselText'>{src}</p></div>
                ))}
                </div>
                <button className="next" onClick={nextSlide}>
                ❯
                </button>
            </div>
      </div>
    );
  };
  

export default Letters