import { useState } from 'react';
import './Login.css';

const Login = ({ onRouteChange, loadUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitLogin = async (event) => {
    event.preventDefault();
    const user = await loginUser();
    onRouteChange('home');
  };

  const loginUser = async () => {
    try {
      const response = await axios.post('http://localhost:3090/api/login', {
        email,
        password,
      });
      console.log('response', response);
      const user = response.data;
      loadUser(user);
      return user;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-container">
      <div className="signin-group">
        <input
          type="text"
          className="search__input"
          placeholder="Email"
          onChange={onEmailChange}
        />
        <input
          type="password"
          className="search__input"
          placeholder="Password"
          onChange={onPasswordChange}
        />
        <button
          className="btn btn-orange btn-hover btn-block"
          id="signinBtn"
          onClick={onSubmitLogin}
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
