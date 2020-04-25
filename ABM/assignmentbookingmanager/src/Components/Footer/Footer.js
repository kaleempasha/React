import React, { Component } from "react"
import { Link } from "react-router-dom"
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core"
import {
  AssignmentInd,
  LibraryBooks,
  CalendarToday,
  Receipt
} from "@material-ui/icons"

class Footer extends Component {
  render() {
    return (
      <BottomNavigation>
        <BottomNavigationAction
          component={Link}
          to="/dashboard"
          label="Dashboard"
          value="dashboard"
          icon={<CalendarToday color="secondary" />}
          showLabel={true}
        />
        <BottomNavigationAction
          component={Link}
          to="/assignment"
          label="My Work"
          value="assignment"
          icon={<AssignmentInd color="secondary" />}
          showLabel={true}
        />
        <BottomNavigationAction
          component={Link}
          to="/booking"
          label="Book Order"
          value="booking"
          icon={<LibraryBooks color="secondary" />}
          showLabel={true}
        />
        <BottomNavigationAction
          component={Link}
          to="/payment"
          label="Payments"
          value="payment"
          icon={<Receipt color="secondary" />}
          showLabel={true}
        />
      </BottomNavigation>
    )
  }
}

export default Footer
