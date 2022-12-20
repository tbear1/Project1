import React, {useState} from 'react';
import './pricing.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Pricing() {

   const [count, setCount] = useState(0);

    
    return(
        <div className="Pricing">
             <Card id='card' style={{width: '18rem'}}>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                    <Card.Text>count: {count}</Card.Text>
                    <Button id='button1' onClick={() => {
                        setCount(count + 1);
                    }}>Increase count</Button>
                     <Button id='button2' onClick={() => {
                        setCount(count - 1);
                    }}>Decrease count</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Pricing;