import { createMuiTheme, colors } from "@material-ui/core"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.purple[200]
    },
    secondary: {
      main: colors.cyan[600]
    }
  },
  spacing: 10
})

export default theme
