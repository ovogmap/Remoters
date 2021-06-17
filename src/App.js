import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Home, SearchResult, ErrorPage } from './pages'

export default function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/SearchResult">
        <SearchResult />
      </Route>
      <Route path="*">
        <ErrorPage />
      </Route>
    </Switch>
  )
}
