import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Profile } from "./pages/Profile"
import { Sign } from "./pages/Sign"
import { Signup } from "./pages/Signup"
import { About } from "./pages/About"

function App() {


  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Profile/>}/>
    <Route path="/sign" element={<Sign/>}/>
    <Route path="/sign-up" element={<Signup/>}/>
    <Route path="/about" element={<About/>}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App
