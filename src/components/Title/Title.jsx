import './Title.css';
import PropTypes from 'prop-types';


const Title = ({subtitle, title}) => {
  return (
    <div className="title">
        <p>{subtitle}</p>
        <h2>{title}</h2>
    </div>
  )
}

Title.propTypes = {
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default Title