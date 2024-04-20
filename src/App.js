import React from 'react';
import { Route,Link,BrowserRouter, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Course from './Course';
import Coursedetail from './Coursedetail';
function App() {
  let style={margin:"10px",fontSize:"25px",}
    return (
      <BrowserRouter>
      <Link style={style} to="/">home</Link>
      <Link style={style} to="/about">about</Link>
      <Link style={style} to="/courses">Courses</Link>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path='/courses' element={<Course/>}></Route>
        <Route path='/courses/:details' element={<Coursedetail/>}></Route>
      </Routes>
      </BrowserRouter>
    );
  }

export default App;
