import React, { useState, useEffect } from 'react';
import useLocalStorage from './useLocalStorage.js';

const useDarkMode = () => {
  const [darkness, setdarkness] = useLocalStorage('darkmode', false);

  useEffect(() => {
    const body = window.document.body;
    if (darkness) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }, [darkness]);
  return [darkness, setdarkness];
};

export default useDarkMode;
