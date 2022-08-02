import "./App.css";
import Dialogs from "./components/Dialogs";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import Profile from "./components/Profile/Profile";


function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div className="content-wrapper">
        <Routes>
          <Route path="/dialogs/*" element={<Dialogs />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
