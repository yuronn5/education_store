
import './Navbar.css';
import logo from '../../assets/logo.png'
import { useEffect } from 'react';
import { useState } from 'react';

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    })
  }, []);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
        <img src={logo} alt="logo" className="logo" />
        <ul>
            <li>Home</li>
            <li>Program</li>
            <li>About us</li>
            <li>Campus</li>
            <li>Testimonials</li>
            <li><button className='btn'>Contact us</button></li>
        </ul>
    </nav>
  )
}

export default Navbar