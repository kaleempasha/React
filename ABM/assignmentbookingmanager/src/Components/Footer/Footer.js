import React, { Component } from "react"
import { Link } from "react-router-dom"
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core"
import {
  AssignmentInd,
  BookRounded,
  CalendarToday,
  Payment
} from "@material-ui/icons"

class Footer extends Component {
  render() {
    return (
      <BottomNavigation>
        <BottomNavigationAction
          component={Link}
          to="/dashboard"
          label="Home"
          value="dashboard"
          icon={<CalendarToday />}
          showLabel={true}
        />
        <BottomNavigationAction
          component={Link}
          to="/assignment"
          label="My Work"
          value="assignment"
          icon={<AssignmentInd />}
          showLabel={true}
        />
        <BottomNavigationAction
          component={Link}
          to="/booking"
          label="Book Order"
          value="booking"
          icon={<BookRounded />}
          showLabel={true}
        />
        <BottomNavigationAction
          component={Link}
          to="/payment"
          label="Payments"
          value="payment"
          icon={<Payment />}
          showLabel={true}
        />
      </BottomNavigation>
    )
  }
}

export default Footer
