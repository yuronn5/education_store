import './Hero.css';
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>We ensure better education for a better future</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, culpa architecto ea velit quam facere, accusantium ipsum nulla sit maiores, modi tempora libero. Eveniet laborum praesentium temporibus itaque.</p>
            <button className='btn'>Explore more <img src={dark_arrow} alt="arrow" /></button>
        </div>
    </div>
  )
}

export default Hero