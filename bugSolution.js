// bug.js
import React from 'react';
import { Image } from 'expo-image';

const MyComponent = () => {
  const invalidURI = 'https://invalid-image-uri.com/image.jpg'; // Invalid URI

  return (
    <Image source={{ uri: invalidURI }} style={{ width: 200, height: 200 }} />
  );
};

export default MyComponent;

// bugSolution.js
import React, { useState, useEffect } from 'react';
import { Image } from 'expo-image';

const MyComponent = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [error, setError] = useState(null);
  const invalidURI = 'https://invalid-image-uri.com/image.jpg';

  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setError(true);
    img.src = invalidURI;
  }, []);

  if (error) return <Text>Image loading failed!</Text>;
  if (!imageLoaded) return <Text>Loading...</Text>;
  return (
    <Image source={{ uri: invalidURI }} style={{ width: 200, height: 200 }} />
  );
};

export default MyComponent;