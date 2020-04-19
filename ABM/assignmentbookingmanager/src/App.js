import React from "react"
import { Header } from "./Components/Header"
import { Footer } from "./Components/Footer"
import { HashRouter } from "react-router-dom"
import Routes from "./routes"

function App() {
  return (
    Routes,
    (
      <HashRouter>
        <Header />
        <div style={{ minHeight: "500px" }} />
        <footer>
          <Footer />
        </footer>
      </HashRouter>
    )
  )
}

export default App
