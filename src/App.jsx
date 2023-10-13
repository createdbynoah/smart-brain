import { useState } from 'react';
import './App.css';

import Navigation from './components/nav/Navigation';
import SiteTitle from './components/title/SiteTitle';
import ImageLinkForm from './components/forms/imageLink/ImageLinkForm';

const App = () => {
  const [input, setInput] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [box, setBox] = useState({});
  const [route, setRoute] = useState('signin');
  const [isSignedIn, setIsSignedIn] = useState(false);

  const onInputChange = (event) => {
    console.log(event.target.value);
    setInput(event.target.value);
  };

  const onButtonSubmit = () => {
    console.log('click');
    setImageUrl(input);
  };

  return (
    <>
      <Navigation />
      <main>
        <SiteTitle />
        <ImageLinkForm
          onInputChange={onInputChange}
          onButtonSubmit={onButtonSubmit}
        />
      </main>
      {/*
      <FaceRecognition />} */}
    </>
  );
};

export default App;
