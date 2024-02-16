import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Planet from './Components/Planet';
import './styles.css';

function App(){
    return(
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path='/' element={<>hello router</>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;