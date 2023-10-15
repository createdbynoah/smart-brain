import { useState } from 'react';
import './App.css';
import axios from 'axios';

import Navigation from './components/nav/Navigation';
import SiteTitle from './components/title/SiteTitle';
import ImageLinkForm from './components/forms/imageLink/ImageLinkForm';
import FaceRecognition from './components/image/FaceRecognition';
import Login from './components/forms/login/Login';
import Register from './components/forms/register/Register';

const App = () => {
  const [input, setInput] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [boxes, setBoxes] = useState([]);
  const [route, setRoute] = useState('login');
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState({
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: '',
  });

  const loadUser = (data) => {
    setUser({
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined,
    });
  };

  const onInputChange = (event) => {
    console.log(event.target.value);
    setInput(event.target.value);
  };

  const onButtonSubmit = async () => {
    console.log('click');
    setImageUrl(input);
    const faces = await getFaces();
    calculateFaceLocation(faces);
  };

  const getFaces = async () => {
    try {
      const response = await axios.post('http://localhost:3090/api/image', {
        imageUrl: input,
      });
      console.log('response', response);
      const faces = response.data;
      return faces;
    } catch (error) {
      console.log(error);
    }
  };

  const calculateFaceLocation = (data) => {
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    const faceBoxes = data.map((face) => {
      return {
        id: face.id,
        leftCol: face.left_col * width,
        topRow: face.top_row * height,
        rightCol: width - face.right_col * width,
        bottomRow: height - face.bottom_row * height,
      };
    });
    setBoxes(faceBoxes);
    console.log(width, height);
  };

  const onRouteChange = (route) => {
    if (route === 'login' || route === 'register') {
      setIsSignedIn(false);
    } else if (route === 'home') {
      setIsSignedIn(true);
    }
    setRoute(route);
  };

  const onClickLogin = () => {
    setRoute('home');
  };

  const onClickLogout = () => {
    setRoute('login');
  };

  return (
    <>
      {isSignedIn ? (
        <Navigation route={route} onRouteChange={onRouteChange} />
      ) : (
        <></>
      )}

      <main>
        <SiteTitle route={route} isSignedIn={isSignedIn} />

        {route === 'login' ? (
          <Login onRouteChange={onRouteChange} loadUser={loadUser} />
        ) : route === 'register' ? (
          <Register onRouteChange={onRouteChange} loadUser={loadUser} />
        ) : (
          <>
            <ImageLinkForm
              onInputChange={onInputChange}
              onButtonSubmit={onButtonSubmit}
            />
            <FaceRecognition imageUrl={imageUrl} boxes={boxes} />
          </>
        )}
      </main>
    </>
  );
};

export default App;
