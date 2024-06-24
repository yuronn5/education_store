import './About.css';
import about_img from '../../assets/about.png';
import play_icon from '../../assets/play-icon.png';

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="about" className='about-img' />
            <img src={play_icon} alt="play"  className='play-icon' />
        </div>
        <div className="about-right">
            <h3>About University</h3>
            <h2>Naturing tomorrows leaders today</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde reprehenderit rerum perspiciatis deserunt amet molestiae consequuntur inventore blanditiis natus eaque dolores temporibus ipsam provident cumque exercitationem, reiciendis dolore, neque quo quibusdam nesciunt. Voluptates ipsam sint ab possimus, laborum iusto amet rem, nobis explicabo alias veniam dolores temporibus dolore ea. Nemo beatae quod exercitationem, soluta nam tenetur totam blanditiis quisquam labore eos dolor culpa omnis incidunt id amet vero iure voluptatem a obcaecati inventore dignissimos qui. Similique at porro ullam optio ipsam nihil, amet eos ut, vel id nam vitae quidem numquam magni ea blanditiis assumenda veniam rem velit. Quis, omnis.</p>
        </div>
    </div>
  )
}

export default About