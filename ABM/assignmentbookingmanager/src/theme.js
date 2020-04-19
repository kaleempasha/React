import { createMuiTheme, colors } from "@material-ui/core"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.grey[400]
    },
    secondary: {
      main: colors.blue["A200"]
    }
  },
  spacing: 10
})

export default theme
