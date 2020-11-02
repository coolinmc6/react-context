[Back](https://github.com/coolinmc6/react-context)

# Single Page

This example shows Context all in one file so "SingleFile" is a better name than "SinglePage" but whatever. The point is
that everything is in one file so that you can see what's happening despite the fact that you'd never really do it this way. Another tricky
part about this example is that you are kind of working backwards in the code. After you create the context, you need to
jump down to the `<SinglePage />` component and then work your way up. I'll show all the code first and then I'll explain it.

```js
import React, { createContext, useContext } from 'react';

// Initialize Context with a value of "My Context!!"
const MyContext = createContext('My Context!!')

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
```

One of the first steps is creating the Context. Again, this would normally be in it's own file but it's pretty straightforward.
As per the [docs](https://reactjs.org/docs/context.html#reactcreatecontext), you can create a Context object with a default value
but you actually don't need one. In this example I used one:

```js
const MyContext = createContext('My Context!!')
```

Now we'll jump down to the bottom to see the `<SinglePage />` component and get a better look at that:

```js
const SinglePage = () => {
  const text = useContext(MyContext)
  return (
    <div>
      <div>Top Level - Parent {text}</div>
      <Child value={text}/>
    </div>
  )
}
```

In this component, we're using the `useContext()` hook. You can import it at the top of the file like I did
`import React, { createContext, useContext } from 'react';` or do `React.useContext()`. Which ever you use, 
we have to use our `MyContext` variable. If we had `MyContext` in a separate file, we'd have to import it.
Now that we have the value in our `text` variable, we can use it in our component.

This is a very simple example using the `useContext()` hook AND we're simplying displaying a string whose value does NOT
change. The `<Child />` component is a little more complicated:

```js
const Child = ({ value }) => {
  return (
    <MyContext.Provider value={value}>
      <div>Parent Level: Provider</div>
      <GrandChild />
    </MyContext.Provider>
  )
}
```

Again, first thing to note is that if this was a separate file, we'd have to import our Context object. That's one big
take-away from all this: **you must import your Context into every component / file you use it in.** It doesn't just *live*
everywhere. 

The first component used the `useContext` hook which makes things very easy. The `<Child />` and `<GrandChild />` components
are going to use the `Provider` and `Consumer` components. It's a little extra code but it more clearly separates the "giver"
or "provider" of data and the "receiver" or "consumer" of it. For this component, I'm passing down a value as a prop that we'll push right
into the `Provider`. That is just to make the example consistent...in this `<Child />` component, I'm using Context differently
so it's almost like a completely different example despite using the same
Context object. 

Just to introduce the concept, here is the new pattern without using hooks:

```js
// Parent Component
const Example_Parent = ({ value }) => {
  return (
    <ExampleContext.Provider value={value}>
      <Example_Child />
    </ExampleContext.Provider>
  )
}
```
```js
// Child Component
const Example_Child = () => {
  return (
    <ExampleContext.Consumer>
      {(context) => (
        <div>{context}</div>
      )}
    </ExampleContext.Consumer>
  )
}
```
The non-hook format has a `Consumer` and a `Provider`. You wrap the component that you want to "receive" the context value
in the `Provider`. And then, in that component, you wrap that with the `Consumer`. One important thing to notice with the
`Consumer` is that you are returning a function. So you can't put other components inside the `<ExampleContext.Consumer>` 
tags. Here is some code that will break our app if we used it instead (try it out!):

```js
const GrandChild = () => {
  return (
    <MyContext.Consumer>
      <>
        <div>Hey Man</div>
        {context => (
          <div>
            GrandChild Level: Consumer - 
            <span>{context}</span>
          </div>
        )}
      </>
    </MyContext.Consumer>
  )
}
```
Inside the `<MyContext.Consumer>` tags are is a `Fragment` that holds my content. This code breaks it. We can't have **anything**
else in there besides a function.

As we can see in our `<Child />` component, we've wrapped our content in our `Provider` tag which includes a `div` and our
`<GrandChild />` component. In the `<GrandChild />` component, we'll see the `Consumer` in action:

```js
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
```
Like mentioned above **several** times, if this was not one file, we'd have to import our `MyContext` object. Notice how the
`<GrandChild />` component is the Consumer so it has `<MyContext.Consumer>` and then inside is just a function that returns
our content (to learn more about that piece, see the [docs](https://reactjs.org/docs/context.html#contextconsumer)). In our
example above, the `context` variable is whatever value we put in the `MyContext.Provider value={value}` from the `<Child />`
component. In this example, we are just displaying the string "My Context!!".

And there we have it: React Context. This is a very basic example showing how to use context as both a hook and the `Provider`-`Consumer`
pattern.

[Home](https://github.com/coolinmc6/react-context)