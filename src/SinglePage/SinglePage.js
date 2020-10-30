import React, { createContext, useContext } from 'react';

// Initialize Context with a value of "My Context!!"
const MyContext = createContext('My Context!!')

console.log(MyContext)

const GrandChild = () => {
  return (
    <MyContext.Consumer>
      {context => (
        <div>
          GrandChild Level: Consumer - 
          <span>{context}</span>
        </div>
      )}
    </MyContext.Consumer>
  )
}

const Child = ({ value }) => {
  return (
    <MyContext.Provider value={value}>
      <div>Parent Level: Provider</div>
      <GrandChild />
    </MyContext.Provider>
  )
}

const SinglePage = () => {
  const text = useContext(MyContext)
  return (
    <div>
      <div>Top Level - Parent {text}</div>
      <Child value={text}/>
    </div>
  )
}

export default SinglePage;