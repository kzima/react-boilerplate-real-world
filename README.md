# Webpack2 + HMR + ReactHotLoader3 + ReactRouter4 + Redux Real World
An absolute bare minimum implementation of HMR + ReactHotLoader in Webpack2 in combination with ReactRouter4 and stripped [Real World Redux](https://github.com/reactjs/redux/tree/master/examples/real-world) example

# Build/Run
```javascript
yarn install
yarn start
```
# Test
1. Navigate to http://localhost:3000
2. Enter a github username into the input field
3. Check console for all actions logged
4. Open `ReduxDevTools` and view the history there

# Want more?
Upgrade to common libraries like lodash, eslint, material ui, etc:

Material UI:
```
yarn add classnames, lodash, react-tap-event-plugin, material-ui
```
Code guidelines:
```
yarn add eslint, eslint-config-airbnb, eslint-plugin-import, eslint-plugin-jsx-a11y, eslint-plugin-react --dev
```
Static generator
```
react-static-generator --dev
```

---- OR -----

Simply use [react-boilerplate-material-ui](https://github.com/kzima/react-boilerplate-material-ui) that has everything included.

# TODO
- Integrate `react-router-redux` when ReactRouter4 is compatible 
