import React from 'react';
import {Provider} from 'react-redux'
import store from './Store'
import NavBar from './Components/NavBar';
import Planet from './Components/Planet';
import './styles.css';

function App(){
    return(
        <Provider store={store}>
            <NavBar/>
            <Planet/>
        </Provider>
    )
}

export default App;