import React from 'react'
import { useState, useEffect } from 'react'
import { FaMusic, FaHeart, FaImages } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Home = () => {
    const texts = ['love', 'admire', 'need', 'like', 'adore', 'care for', 'am addicted to'];

    const HandleTyping = () => {
        const [text, setText] = useState("");
        const [index, setIndex] = useState(0);
        const [isDeleting, setIsDeleting] = useState(false);
        const [charIndex, setCharIndex] = useState(0);

        useEffect(() => {
            const currentText = texts[index];

            if (isDeleting) {
                if (charIndex > 0) {
                    setTimeout(() => setCharIndex((prev) => prev - 1), 100);
                } else {
                    setIsDeleting(false);
                    setIndex((prev) => (prev + 1) % texts.length);
                }
            } else {
                if (charIndex < currentText.length) {
                    setTimeout(() => setCharIndex((prev) => prev + 1), 150);
                } else {
                    setTimeout(() => setIsDeleting(true), 1000);
                }
            }

            setText(currentText.substring(0, charIndex));
        }, [charIndex, isDeleting, index]);

        return text;
    }

  return (
    <main className='Home'>
        <section className='hero'>
            <p className='homeText'>I {HandleTyping()} you❤️</p>
        </section>
        <nav>
            <Link to="/music"><button><FaMusic /></button></Link>
            <Link to='/letters'><button><FaHeart /></button></Link>
            <Link to='/images'><button><FaImages /></button></Link>
        </nav>
    </main>
  )
}

export default Home