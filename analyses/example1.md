[Back](https://github.com/coolinmc6/react-context)

# Example 1

**Source:** [https://www.smashingmagazine.com/2020/01/introduction-react-context-api/](https://www.smashingmagazine.com/2020/01/introduction-react-context-api/)

Here are some of the big take-aways:
- **Entire `themeHook` is passed to Context:** I think I understand the basics of how it's working but it feels counterintuitive to me.
- **<App /> Component is Wrapped in Context:** this is just like Redux

```js
const Example1 = () => {
  const themeHook = useState("light");
  return (
    <ThemeContext.Provider value={themeHook}>
      <Header />
      <Main />
    </ThemeContext.Provider>
  )
}
```
