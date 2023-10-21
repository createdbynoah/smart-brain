import { useState, useEffect } from 'react';
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
  const [user, setUser] = useState({});
  const [numFaces, setNumFaces] = useState(0);

  const loadUser = (data) => {
    setUser({
      ...data,
    });
  };

  useEffect(() => {
    if (user.id) {
      calcNumFaces();
    }
  }, [user]);

  const calcNumFaces = () => {
    let numFaces = 0;
    user.images.forEach((entry) => {
      numFaces += entry.num_faces;
    });
    setNumFaces(numFaces);
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

  const incrememtEntries = async () => {
    try {
      const response = await axios.put('http://localhost:3090/api/imagecount', {
        user_id: user.id,
      });
      console.log('response', response);
      const updatedUser = response.data;
      setUser({ ...updatedUser });
    } catch (error) {
      console.log(error);
    }
  };

  const getFaces = async () => {
    try {
      const response = await axios.post('http://localhost:3090/api/image', {
        imageUrl: input,
        user_id: user.id,
      });
      console.log('response', response);
      const faces = response.data;
      await incrememtEntries();
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

  return (
    <>
      {isSignedIn ? (
        <Navigation route={route} onRouteChange={onRouteChange} />
      ) : (
        <></>
      )}

      <main className={route === 'login' || route === 'register' ? 'cv' : ''}>
        <SiteTitle
          route={route}
          isSignedIn={isSignedIn}
          user={user}
          numFaces={numFaces}
        />

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
            {imageUrl ? (
              <FaceRecognition imageUrl={imageUrl} boxes={boxes} />
            ) : (
              <></>
            )}
          </>
        )}
      </main>
    </>
  );
};

export default App;
