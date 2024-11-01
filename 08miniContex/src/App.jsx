import { useState } from "react";

import "./App.css";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import ToogleButton from "./components/ToggleButton/ToogleButton";
import ThemeContextProvider from "./context/ThemeContextProvider.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ThemeContextProvider>
        <UserContextProvider>
          <h1>This is chai & code</h1>
            <ToogleButton/>
          <Login />
          <Profile />
        </UserContextProvider>
      </ThemeContextProvider>
    </>
  );
}

export default App;
