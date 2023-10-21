import { useState } from 'react';
import './Register.css';
import axios from 'axios';

const Register = ({ onRouteChange, loadUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onPasswordConfirmChange = (event) => {
    setPasswordConfirm(event.target.value);
  };

  const onSubmitRegister = async (event) => {
    event.preventDefault();
    if (validatePassword() && validateInput()) {
      const user = await registerUser();
      if (!user) {
        console.log('Error registering user');
        return;
      }
      loadUser(user);
      onRouteChange('home');
    } else if (!validateInput()) {
      console.log('Please fill out all fields');
    } else if (!validatePassword()) {
      console.log('Passwords do not match');
    }
  };

  const validateInput = () => {
    if (name === '' || email === '' || password === '') {
      return false;
    }
    return true;
  };

  const validatePassword = () => {
    if (password !== passwordConfirm) {
      return false;
    } else {
      return true;
    }
  };

  const registerUser = async () => {
    try {
      const response = await axios.post('http://localhost:3090/api/register', {
        name,
        email,
        password,
      });
      console.log('response', response);
      const user = response.data;
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
          placeholder="Name"
          onChange={onNameChange}
        />
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
        <input
          type="password"
          className="search__input"
          placeholder="Confirm Password"
          onChange={onPasswordConfirmChange}
        />
        <button
          className="btn btn-orange btn-hover btn-block"
          id="registerBtn"
          onClick={onSubmitRegister}
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
