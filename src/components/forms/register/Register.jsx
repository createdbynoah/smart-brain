import './Register.css';

const Register = ({ onRouteChange }) => {
  return (
    <div className="login-container">
      <div className="signin-group">
        <input type="text" className="search__input" placeholder="Name" />
        <input type="text" className="search__input" placeholder="Email" />
        <input
          type="password"
          className="search__input"
          placeholder="Password"
        />
        <input
          type="password"
          className="search__input"
          placeholder="Confirm Password"
        />
        <button
          className="btn btn-orange btn-hover btn-block"
          id="registerBtn"
          onClick={() => onRouteChange('home')}
        >
          Create Account
        </button>
        <section className="signin-group__links">
          <p>
            Already have an account?
            <span id="loginLink" onClick={() => onRouteChange('login')}>
              Login
            </span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Register;
