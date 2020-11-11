import React, {useEffect, useState} from 'react';
import { render } from 'react-dom';

import './css/styles.scss';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'

import Example1 from './example1/Example1';
import Example1CM from './example1_cm/Example1CM';
import SinglePage from './SinglePage/SinglePage';
import Medium from './medium/Medium';

const options = [
    { name: 'Example1', component: <Example1 />},
    { name: 'Example1CM', component: <Example1CM /> },
    { name: 'SinglePage', component: <SinglePage /> },
    { name: 'Medium', component: <Medium />}
]

const appStyles = makeStyles({
  button: {
    margin: 5,
  }
})

const App = () => {
  const [active, setActive] = useState('Medium')
  const changeContext = (name) => {
    setActive(name)
  }
  const classes = appStyles();
  return (
    <div>
      <div>
        {options.map(o => {
          const isActive = o.name === active;
          return (
            <Button 
              variant="contained"
              disabled={isActive}
              color="primary"
              onClick={() => changeContext(o.name)}
              className={classes.button}
            >
              {o.name}
            </Button>
          )
        })}
      </div>
      <div>
        {options.filter(o => o.name === active).map((o) => {
          return (
            <>{o.component}</>
          )
        })}
      </div>
        
    </div>
  )
}

render(<App />, document.getElementById('root'));
