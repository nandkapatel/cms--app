import React from 'react'
import { BrowserRouter as Router, Route, Switch, redirect } from 'react-router-dom'

import CallEntry from '../components/Admin/CallEntry/callentry'
import Navbar from '../components/Navbar/navbar'
import View from '../components/Admin/View/View'
import SWReport from '../components/Admin/SWReport/SWReport'

const Container = () => {


  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/call">
            <CallEntry />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/view">
            <View />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/sreport">
            <SWReport />
          </Route>
        </Switch>

      </Router>


    </div>
  )
}

export default Container
