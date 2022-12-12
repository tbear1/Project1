import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';


function Home() {

const [color,setColor] = useState(false);

  let bgColor = false;

  //bgColor ? 'blue' : 'red'

const changeColor = (color) => {
        document.body.style.background = color;
}

    return(
        <div className={color ? 'bg-primary' : 'bg-error'} style={{height:'100vh'}}>
              <Button className="buttonChangeColor" variant="dark" onClick={() => setColor(!color)}>
                Change background color!</Button>
        </div>
    )
}

export default Home;