import React from "react"
import {Route, Routes} from "react-router-dom"
import Home from "./home/home.jsx"
import Course from "./courses/Courses.jsx"
import Singup from "./components/Singup.jsx"
import Contactus from "./components/Contactus.jsx"
const App = () =>{
  return(
    <>
    <div className=" dark:bg-slate-900 dark:text-white">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/course" element={<Course/>}/>
      <Route path="/singup" element={<Singup/>}/>
      <Route path="/contact" element={<Contactus/>}/>
    </Routes>

    </div>
    </>
  )
}
export default App