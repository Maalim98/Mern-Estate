import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Header from "./components/Header";

export default function App() {
  return (
    <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path="/" element = {<Home/>}>

      </Route>
      <Route path="/SignIn" element = {<SignIn/>}>

      </Route>
      <Route path="/SignUp" element = {<SignUp/>}>

      </Route>
      <Route path="/Profile" element = {<Profile/>}>

      </Route>
      <Route path="/About" element = {<About/>}>

      </Route>
      

    </Routes>
    
    </BrowserRouter>
  )
}
