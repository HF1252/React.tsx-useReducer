import React from 'react';
import './App.css';
import Bank from './Components/pages/Bank';

function App() {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <h2>useReducer</h2>
            <Bank />
        </div>
    );
}

export default App;
