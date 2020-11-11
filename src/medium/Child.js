import React, { useContext } from 'react';
import CheckoutDrawerContext from './Context';


const Child = () => {
  const checkoutDrawer = useContext(CheckoutDrawerContext);

  const clickButton = () => {
    checkoutDrawer.toggleCheckoutDrawer()
  }
  return (
    <div>
      <button onClick={clickButton}>Toggle With Hook</button>
      <CheckoutDrawerContext.Consumer>
        {context => (
          <div>Value with consumer: {context.showDrawer ? 'true' : 'false'}</div>
        )}
      </CheckoutDrawerContext.Consumer>
    </div>
  )
}

export default Child;