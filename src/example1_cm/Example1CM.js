import React from 'react';

// Context
import ThemeContext from './ThemeContext';

// Components
import Main from './Main'

const Example1CM = () => {
  return (
    <ThemeContext.Provider value={"light"}>
      <div>Example1CM</div>
      <Main />
    </ThemeContext.Provider>
  )
}

export default Example1CM;