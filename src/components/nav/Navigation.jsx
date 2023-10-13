import './Navigation.css';
import Logo from '../logo/Logo';

const Navigation = () => {
  return (
    <nav className="nav">
      <Logo />
      <div className="nav-actions">
        <button className="btn btn-orange btn-hover btn-small" type="button">
          Sign Out
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
