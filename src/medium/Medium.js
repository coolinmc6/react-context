import React, { useState } from 'react';
import CheckoutDrawerContext from './Context';
import Child from './Child';

export default () => {
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleCheckoutDrawer = () => {
    setShowDrawer(!showDrawer);
  };
  return (
    <CheckoutDrawerContext.Provider value={{ showDrawer, toggleCheckoutDrawer }}>
      <section className="cart-checkout">
        <div>
          showDrawer: {showDrawer ? 'true' : 'false'}
        </div>
        <Child />
      </section>
    </CheckoutDrawerContext.Provider>
  )
}