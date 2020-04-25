import React, { Component } from "react"
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core"
import { Menu, ExpandMore } from "@material-ui/icons"
import { withStyles } from "@material-ui/styles"

const useStyles = theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
})

class Header extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <AppBar postition="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <Menu color="secondary" />
            </IconButton>
            <Typography variant="body1" className={classes.title}>
              My Bookings
            </Typography>
            <ExpandMore edge="end" color="secondary" />
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(useStyles)(Header)
