import React, {useState} from 'react';


function Features() {

const [counter, setCounter] = useState(0);


var count = 0;


    return(
        <div className="Features">
            <div>
                <label>Letter count: {counter}</label>
                <input onChange={(e) => {
                    setCounter(e.target.value.length);
                }}></input>
            </div>

        </div>
    )
}

export default Features;