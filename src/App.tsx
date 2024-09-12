import React, { useState } from 'react';
import Showball from './components/Showball';
import './App.css'

const initialNumbers = [5, 11, 16, 23, 32];

const App: React.FC = () => {
    const [numbers, setNumbers] = useState<number[]>(initialNumbers);

    const randomNumbers = () => {
        const newNumbers: number[] = [];
        while (newNumbers.length < 5) {
            const num = Math.floor(Math.random() * 36) + 5;
            if (!newNumbers.includes(num)) {
                newNumbers.push(num);
            }
        }
        newNumbers.sort((a, b) => a - b);
        setNumbers(newNumbers);
    };
    return (
        <div className="app">
            <h1>Lottery 5 из 36</h1>
            <div className="balls">
                {numbers.map((number, index) => (
                    <Showball key={index} number={number}/>
                ))}
            </div>
            <button onClick={randomNumbers}>New numbers</button>
        </div>
    );
};

export default App
