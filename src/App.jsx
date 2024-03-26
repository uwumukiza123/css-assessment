import Nav from "./components/Nav"
import Landing from "./components/Landing"
import Events from "./components/Events"
import Studying from "./components/Studying"
import Research from "./components/Research"
import GlobalConnections from "./components/GlobalConnections"
import Services from "./components/Services"

const App = () => {
  return (
    <div>
      <Nav/>
      <Landing />
      <Events />
      <Studying />
      <Research />
      <GlobalConnections />
      <Services />
    </div>
  )
}

export default App