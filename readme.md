[Back to Front End Dev](https://github.com/coolinmc6/front-end-dev)

# React Context

This repo will look at multiple Context examples and explain how they are implemented.

# Getting Started

```sh
git clone https://github.com/coolinmc6/react-context
cd react-context
npm i
npm run dev
```

**Note:** this repo is a work in progress...

## Context Basic How-to

1. Create context
2. Wrap the component with the `Context.Provider value={/* some value */}`
3. Wrap the consumer component with `Context.Consumer` OR use the `useContext` hook
4. Use it

## React Context Examples

|Link|Write-Up|Code|
|:---:|:---:|:---:|
|https://medium.com/better-programming/how-to-use-reacts-context-api-and-usecontext-hooks-effectively-ed98ad9343b6|[Example 1](https://github.com/coolinmc6/react-context/blob/main/analyses/example1.md)| |
||[Single Page](https://github.com/coolinmc6/react-context/blob/main/analyses/singlepage.md)|[SinglePage.js](https://github.com/coolinmc6/react-context/blob/main/src/SinglePage/SinglePage.js)|
|https://reactjs.org/docs/context.html#api| | |
|https://www.freecodecamp.org/news/react-context-in-5-minutes/| | |
|https://www.toptal.com/react/react-context-api| | |
|https://blog.logrocket.com/use-hooks-and-context-not-react-and-redux/| | |
|https://www.smashingmagazine.com/2020/01/introduction-react-context-api/| | |
|https://kentcdodds.com/blog/how-to-use-react-context-effectively| | |

## Intro to Context

Context allows you to access data anywhere and avoid excessive [prop drilling](https://kentcdodds.com/blog/prop-drilling)
in your app. The React docs do a great job summarizing the concept:

> Context is designed to share data that can be considered “global” for a tree of React components, 
> such as the current authenticated user, theme, or preferred language.

It should not be used as a [substitute for Redux](https://dev.to/ibrahima92/redux-vs-react-context-which-one-should-you-choose-2hhh) 
but rather, as the quote above suggests, as a way to distribute certain items like a user or theme to your components at
varying levels of your React Component tree.

Here are the basic steps:

1. Create the context
2. Wrap the component with the `Context.Provider value={/* some value */}`
3. Wrap the consumer component with `Context.Consumer` OR use the `useContext` hook
4. Use the data

This README has a couple examples below.

## Example Discussions

### Example 1
- [Write-up](https://github.com/coolinmc6/react-context/blob/main/analyses/example1.md)
- Tutorial Link: [https://www.smashingmagazine.com/2020/01/introduction-react-context-api/](https://www.smashingmagazine.com/2020/01/introduction-react-context-api/)

### Single Page

- [Write-up](https://github.com/coolinmc6/react-context/blob/main/analyses/singlepage.md)