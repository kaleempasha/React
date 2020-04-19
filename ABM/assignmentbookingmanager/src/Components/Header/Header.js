import React, { Component } from "react"
import { AppBar, Toolbar } from "@material-ui/core"

class Header extends Component {
  render() {
    return (
      <AppBar postition="static">
        <Toolbar />
      </AppBar>
    )
  }
}

export default Header
