import React, { useState }from 'react';
import Button from '@mui/material/Button';
import HistoryIcon from '@mui/icons-material/History';
import BackspaceIcon from '@mui/icons-material/Backspace';


const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [cdisplay, setCdisplay] = useState('0');
  const [history, setHistory] = useState([]);
  
  const deleteLast = () => {

  }

  const clear = () => {

  }

  const calculate = () => {

  }

  const add = () => {

  }

  const subtract = () => {
   
  }

  const equals = () => {
   
  }

  const showCalculationsHistory = () => {
    
  }

  const handleNumberEvent = (e) => {
    if (display === '0') {
      setDisplay(e.target.id);
    } else {
      setDisplay(display + e.target.id);
    }
  }

  return (
    <div className="frame">
    <div className="inner-frame">
      <label id="display"> {display}</label>
      <label id="cdisplay" >{cdisplay}</label>
      <Button variant="contained" id="history" onClick={showCalculationsHistory}><HistoryIcon/></Button>
      <Button variant="contained" id="clear" onClick={clear}>AC</Button>
      <Button variant="contained" id="multiply">*</Button>
      <Button variant="contained" id="divide">/</Button>
      <Button variant="contained" id="7" onClick={() => handleNumberEvent(7)}>7</Button>
      <Button variant="contained" id="8" onClick={() => handleNumberEvent(8)}>8</Button>
      <Button variant="contained" id="9" onClick={() => handleNumberEvent(9)}>9</Button>
      <Button variant="contained" id="plus" onClick={add}>+</Button>
      <Button variant="contained" id="4" onClick={() => handleNumberEvent(4)}>4</Button>
      <Button variant="contained" id="5" onClick={() => handleNumberEvent(5)}>5</Button>
      <Button variant="contained" id="6" onClick={() => handleNumberEvent(6)}>6</Button>
      <Button variant="contained" id="minus" onClick={subtract}>-</Button>
      <Button variant="contained" id="1" onClick={() => handleNumberEvent(1)}>1</Button>
      <Button variant="contained" id="2" onClick={() => handleNumberEvent(2)}>2</Button>
      <Button variant="contained" id="3" onClick={() => handleNumberEvent(3)}>3</Button>
      <Button variant="contained" id="backspace"><BackspaceIcon/></Button>
      <Button variant="contained" id="zero">0</Button>
      <Button variant="contained" id="dot">.</Button>
      <Button variant="contained" id="equal" onClick={equals}>=</Button>
    </div>
  </div>
  );
};

export default Calculator;