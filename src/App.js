import React from 'react';
import './css/App.css';
import { Landing, Register, Login } from './pages/';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Footer } from './components';
import $ from 'jquery';
import colors from './config/colors';
import Home from './pages/Home/';

function App() {
  let bgColor = "bg-pink";
  const favicon = document.getElementById('favicon');
  favicon.href = "/favicon-" + bgColor.replace('bg-', '') + ".ico";
  $("body").removeClass(function (index, className) {
    return (className.match(/(^|\s)bg-\S+/g) || []).join(' ');
  });
  $('body').css("background-color", colors[bgColor]);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing bgColor={bgColor} />} />
        <Route path="/register" element={<Register bgColor={bgColor} />} />
        <Route path="/home/" element={<Home bgColor={bgColor} />} />
        <Route path="/login" element={<Login bgColor={bgColor} />} />
      </Routes >
      <Footer />
    </Router >
  );
}

export default App;
