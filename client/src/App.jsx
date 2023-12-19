import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Profile } from "./pages/Profile"
import { Sign } from "./pages/Sign"
import { Signup } from "./pages/Signup"
import { About } from "./pages/About"
import Header from "./components/Header"
import PrivateRoute from "./components/PrivateRoute"

function App() {
  return (
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/" element={<Profile/>}/>
    <Route path="/sign-in" element={<Sign/>}/>
    <Route path="/sign-up" element={<Signup/>}/>
    <Route path="/about" element={<About/>}/>
    <Route element={<PrivateRoute />}>
      <Route path="/profile" element={<Profile/>}/>
    </Route>
  </Routes>
  </BrowserRouter>
  )
}

export default App
