import './Logo.css';
import brain from '../../assets/brain.svg';

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={brain} />
    </div>
  );
};

export default Logo;
