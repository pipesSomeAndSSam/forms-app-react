import './App.css';
import Form from './components/forms/Form'
import React, { useState } from 'react';
import supabase from './lib/helper/supabaseClient';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from './pages/List';

const App = () => {

  const [data, setData] = useState([]);

  return (
    
    <div >
    <Form/>
 
    </div>
  );
}

export default App;
