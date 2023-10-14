import './Login.css';

const Login = ({ onRouteChange }) => {
  return (
    <div className="login-container">
      <div className="signin-group">
        <input type="text" className="search__input" placeholder="Email" />
        <input
          type="password"
          className="search__input"
          placeholder="Password"
        />
        <button
          className="btn btn-orange btn-hover btn-block"
          id="signinBtn"
          onClick={() => onRouteChange('home')}
        >
          Log In
        </button>
        <section className="signin-group__links">
          <p>
            Don't have an account?
            <span id="registerLink" onClick={() => onRouteChange('register')}>
              Sign Up
            </span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Login;
