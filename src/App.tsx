import React from 'react'
import { Provider } from 'react-redux'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import store from './store'
import GlobalStyle from './GlobalStyle'
import Counter from './containers/Counter'
import Index from './containers/Index'
import Todos from './containers/Todos'

const App = (): React.ReactElement => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/counter">
            <Counter />
          </Route>
          <Route path="/todos">
            <Todos />
          </Route>
          <Route path="/">
            <Index />
          </Route>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
