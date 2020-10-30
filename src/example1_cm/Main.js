import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const Main = () => {
  const theme = useContext(ThemeContext)
  return (
    <div>
      <div>Main #1: {theme}</div>
      <ThemeContext.Consumer>
        {context => (
          <div>Main #2: {context}</div>
        )}
      </ThemeContext.Consumer>
    </div>
  )
}

export default Main;