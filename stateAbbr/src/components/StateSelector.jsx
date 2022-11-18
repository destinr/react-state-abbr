import {useState} from 'react';

function StateSelector(props){
    const [choice, setChoice] = useState(null)
    const states = props.states
    

    const handleChoiceChange = (e) => {
        setChoice(e.target.value)
    }
    
    return(
        <div className="StateSelector">
            <select onChange={handleChoiceChange}> 
                <option value="Select a state">Select a state!</option>
            
            
                {states.map((state) => (
                    <option value={state.a2}>
                        {state.name}
                    </option>
            ))} 
            </select>   

             <p>Abbreviation: {choice}</p> 
        </div>

    )
}

export default StateSelector