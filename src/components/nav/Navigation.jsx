import './Navigation.css';
import Logo from '../logo/Logo';

const Navigation = ({ route, onRouteChange }) => {
  return (
    <nav className="nav">
      <Logo />
      {route === 'login' ? (
        <></>
      ) : (
        <div className="nav-actions">
          <button
            className="btn btn-orange btn-hover btn-small btn-outline"
            type="button"
            onClick={() => onRouteChange('login')}
          >
            Log Out
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
