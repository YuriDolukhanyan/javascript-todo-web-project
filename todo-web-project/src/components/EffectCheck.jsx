import { useEffect, useState } from "react";
import { getUSPopulationByYear, guessNationByName } from "../api/api";

const EffectCheck = () => {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [data, setData] = useState([]);
    const [nations, setNations] = useState([]);

    useEffect(() => {
        console.log('rendered');
        console.log('Nations:', nations);
    }); // Runs after every render (no dependency)
    
    useEffect(() => {
        console.log('rendered on mount');
        getUSPopulationByYear()
            .then(res => res.json()
            .then(res => setData(res.data)));
    }, []); // Runs only once (after the 1st render, i.e. on mounting) (empty dependency)
        
    useEffect(() => {
        console.log('input1 changed');
    }, [input1]);
    
    const handleInput1Change = (e) => {
        setInput1(e.target.value);
    };
    
    const handleInput2Change = (e) => {
        setInput2(e.target.value);
    };  
    
    const handleGuess = () => {
        guessNationByName(input1)
        .then(res => res.json())
        .then(res => setNations(res));
    };

    // console.log(data);
    // console.log(nations);

    return (
        <>
            <label htmlFor="input1">Enter Name</label>&nbsp;
            <input
                id="input1"
                value={input1}
                onChange={handleInput1Change}
                type="text"
            />
            &nbsp;<button onClick={handleGuess}>Guess</button>
            <br />
            {nations?.country?.map(({ country_id, probability }) => (
                <div>
                    Country ID: {country_id}
                    <br />
                    Probability: {probability}
                </div>
            ))}
            {/* <label htmlFor="input2">Second Input</label>&nbsp;
            <input
                id="input2"
                value={input2}
                onChange={handleInput2Change}
                type="number"
            /> */}
            {data.map(({ Nation, Year, Population }) => (
                <div key={Year} style={{border: '2px solid grey', margin: '5px'}}>
                    <div>Nation: {Nation}</div>
                    <div>Year: {Year}</div>
                    <div>Population: {Population}</div>
                </div>
            ))}
        </>
    );
};

export default EffectCheck;
