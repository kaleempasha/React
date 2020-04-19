import React, { Component } from "react"
import { Route, Redirect } from "react-router-dom"
import { withRouter } from "react-router"

import Assignment from "./Pages/assignment"
import Booking from "./Pages/assignment"
import Dashboard from "./Pages/assignment"
import Payment from "./Pages/assignment"

class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" render={props => <Redirect to="/dashboard" />} />
        <Route path="/assignment" render={() => <Assignment />} />
        <Route path="/booking" render={() => <Booking />} />
        <Route path="/dashboard" render={() => <Dashboard />} />
        <Route path="/payment" render={() => <Payment />} />
      </div>
    )
  }
}

export default withRouter(Routes)
