import PagesRoute from "./route";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "./Assets/styles/GlobalStyle";

function App() {

  return (
    <Router>
      <GlobalStyle />
      <PagesRoute />
    </Router>
  )
}

export default App;