import React, { useState }from 'react';
import Button from '@mui/material/Button';
import HistoryIcon from '@mui/icons-material/History';
import BackspaceIcon from '@mui/icons-material/Backspace';


const Calculator = () => {
  const [cdisplay, setCdisplay] = useState('0');
  const [history, setHistory] = useState([]);
  const [runningTotal, setRunningTotal] = useState(0);
  const [calculations, setCalculations] = useState([]);
  let  lastKey = '';
  
  const deleteLast = () => {
    let dis = cdisplay?.toString();
    if(dis?.length === 1) {
      setCdisplay('0');
    } else {
      setCdisplay(dis.slice(0, -1));
    }
  }

  const clear = () => {
    if(calculations.length >= 2) {
      let temp = [...calculations];
      temp.shift();
      temp.push(cdisplay);
      setCalculations(temp);
      console.log(calculations);
    } else {
      setCalculations([...calculations, cdisplay]);
    }
    setCdisplay('0');
  }

  const calculate = () => {
    let dis = cdisplay.toString();
    dis = dis.replace(/^0+/, '');

    let result = eval(dis);
    setCdisplay(`${dis}=${result}`);
  }

  const add = () => {
    lastKey = '+';
    setCdisplay(cdisplay + '+');
  }

  const subtract = () => {
    lastKey = '-';
    setCdisplay(cdisplay + '-');
  }

  const equals = () => {
    lastKey = '=';
    if(cdisplay[cdisplay.length - 1] === '+' || cdisplay[cdisplay.length - 1] === '-') {
      return;
    }
    if(cdisplay.toString().includes('=')) {
      return;
    }
    if(cdisplay.length === 1){
      return;
    }
    calculate();
  }

  const showCalculationsHistory = () => {
    
  }

  const showTwoPreviousCalculations = () => {

  }

  const handleNumberEvent = (data) => {
    console.log(lastKey);
    if(lastKey === '=') {
      return;
    }
    lastKey = data;
    if(cdisplay === '0') {
      setCdisplay(data);
    } else {
      setCdisplay(`${cdisplay}${data}`);
    }
  };

  return (
    <div className="frame">
    <div className="inner-frame">
      <div id="display"> 
        {calculations.map((calculation, index) => <div key={index}>{calculation}</div>)}  
      </div>
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
      <Button variant="contained" id="backspace" onClick={deleteLast}><BackspaceIcon/></Button>
      <Button variant="contained" id="zero" onClick={() => handleNumberEvent(0)}>0</Button>
      <Button variant="contained" id="dot">.</Button>
      <Button variant="contained" id="equal" onClick={equals}>=</Button>
    </div>
  </div>
  );
};

export default Calculator;