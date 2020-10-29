// Based on: https://www.smashingmagazine.com/2020/01/introduction-react-context-api/

import React, { useState } from 'react';
import ThemeContext from './ThemeContext';

import Header from './Header';
import Main from './MainWithFunctional';

const Example1 = () => {
  const themeHook = useState("light");
  return (
    <ThemeContext.Provider value={themeHook}>
      <Header />
      <Main />
    </ThemeContext.Provider>
  )
}

export default Example1;
