import React from 'react';
import blackAlbum from '../img/black_album.png'
import wonderwall from '../img/wonderwall.png'
import byTheWay from '../img/bytheway.png'
import sil from '../img/sil.png'
import naked from '../img/naked.png'
import saxobeat from '../img/saxobeat.png'
import maybe from '../img/maybe.png'
import stadiumarcadium from '../img/stadiumarcadium.png'
import am from '../img/am.png'
import girl from '../img/girl.png'
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Music = () => {
  return (
    <main className='Music'>
    <header className='hero'><p>Songs that remind me of you</p><Link to='/'><button className='homeButton'><FaHome /></button></Link></header>
    
    <section className='songs'>
      <a href='https://open.spotify.com/track/6QAsrXPnMSXIbV0yEJHlEX?si=c92a7bc93f4a40f6'><article className='song'>
        <img className='albumCover' src={blackAlbum} alt='black album' /><span className='songTitle'>Nothing else matters</span><span className="songAuthor">Metallica</span>
      </article></a>
      <a href='https://open.spotify.com/track/5qqabIl2vWzo9ApSC317sa?si=99b8aa9fe0a94f8b'><article className='song'>
        <img className='albumCover' src={wonderwall} alt='wonderwall' /><span className='songTitle'>Wonderwall</span><span className="songAuthor">Oasis</span>
      </article></a>
      <a href='https://open.spotify.com/track/7g1ejDZox0aw00nBN8clT1?si=b144478a8e2d4d80'><article className='song'>
        <img className='albumCover' src={sil} alt='sil' /><span className='songTitle'>Сіль</span><span className="songAuthor">ДК Енергетик</span>
      </article></a>
      <a href='https://open.spotify.com/track/3oP2vxUR2bjFCrU9YolGnM?si=e0fd9c2857a74dec'><article className='song'>
        <img className='albumCover' src={byTheWay} alt='by the way' /><span className='songTitle'>I could die for you</span><span className="songAuthor">Red Hot Chili Peppers</span>
      </article></a>
      <a href='https://open.spotify.com/track/1iFIZUVDBCCkWe705FLXto?si=c489fb82c7b04651'><article className='song'>
        <img className='albumCover' src={byTheWay} alt='by the way' /><span className='songTitle'>Dosed</span><span className="songAuthor">Red Hot Chili Peppers</span>
      </article></a>
      <a href='https://open.spotify.com/track/2qpacEyFxmbxCpIEqZkqvC?si=ff48c36a5fb84401'><article className='song'>
        <img className='albumCover' src={naked} alt='naked all the time' /><span className='songTitle'>You are the right one</span><span className="songAuthor">Sports</span>
      </article></a>
      <a href='https://open.spotify.com/track/3LWDPEXEaLBRGNLbdcbwBR?si=716fc768feeb4e0a'><article className='song'>
        <img className='albumCover' src={saxobeat} alt='saxobeat' /><span className='songTitle'>Mr. Saxobeat</span><span className="songAuthor">Alexandra Stan</span>
      </article></a>
      <a href='https://open.spotify.com/track/1KgfeuVn5OlsBEtoEmBa1t?si=dffd7ad857ab490e'><article className='song'>
        <img className='albumCover' src={maybe} alt='definitely maybe' /><span className='songTitle'>Live Forever</span><span className="songAuthor">Oasis</span>
      </article></a>
      <a href='https://open.spotify.com/track/3L2Nyi3T7XabH8EEZFLDdX?si=5b904a8b8adc497d'><article className='song'>
        <img className='albumCover' src={stadiumarcadium} alt='stadium arcadium' /><span className='songTitle'>Wet Sand</span><span className="songAuthor">Red Hot Chili Peppers</span>
      </article></a>
      <a href='https://open.spotify.com/track/5XeFesFbtLpXzIVDNQP22n?si=dee2e3af8c084444'><article className='song'>
        <img className='albumCover' src={am} alt='am' /><span className='songTitle'>I Wanna Be Yours</span><span className="songAuthor">Arctic Monkeys</span>
      </article></a>
      <a href='https://open.spotify.com/track/6tIoXcKI2qpMsXCdFP3Gi0?si=76ced5e397c8410e'><article className='song'>
        <img className='albumCover' src={girl} alt='girl of my dreams' /><span className='songTitle'>Girl of My Dreams</span><span className="songAuthor">Guti</span>
      </article></a>
    </section>
    </main>
  );
};

export default Music;