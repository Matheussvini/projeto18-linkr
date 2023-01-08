import PagesRoute from "./route";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "./Assets/styles/GlobalStyle";
import UserContext from "./components/Context/context";
import { useState } from "react";

function App() {
  const [user, setUser] = useState([]);

  const localUserSerializado = localStorage.getItem("localUser");
  const localUser = JSON.parse(localUserSerializado);

  if (localUser && user.length === 0) setUser(localUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <GlobalStyle />
        <PagesRoute />
      </Router>
    </UserContext.Provider>
  );
}

export default App;
