import React, { useState } from 'react';
import Button from './Button';
import Display from './Display';

const App = () => {
  const [value, setValue] = useState('0');
  const signs = ['+', '-', '÷', '×'];

  const handleVaue = (data) => {
    const lvalue = value.slice(-1);
    // const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    if (value === '0') {
      if (data !== '0' && !signs.includes(data)) setValue(data);
      if (signs.includes(data)) setValue(value + data);
    } else if (signs.includes(lvalue)) {
      if (!signs.includes(data)) setValue(value + data);
    } else setValue(value + data);
  };

  const handleClear = (data) => {
    setValue('0');
  };

  const handlePlusMinus = (data) => {
    let i = value.length - 1;
    while (i >= 0 && !signs.includes(value[i])) i--;
    if (value[i] === '-') setValue(value.slice(0, i) + value.slice(i + 1));
    else setValue(value.slice(0, i + 1) + '-' + value.slice(i + 1));
  };

  const handleEqual = async (data) => {
    console.log(value);
    setValue(eval(value).toString());
  };
  return (
    <div className="Calculator">
      <Display value={value} />
      <div className="row">
        <Button bgColor="#e0e0e0" color="black" value="C" click={handleClear} />
        <Button
          bgColor="#e0e0e0"
          color="black"
          value="+/-"
          click={handlePlusMinus}
        />
        <Button bgColor="#e0e0e0" color="black" value="%" click={handleVaue} />
        <Button bgColor="#f79231" color="white" value="/" click={handleVaue} />
      </div>
      <div className="row">
        <Button bgColor="#e0e0e0" color="black" value="7" click={handleVaue} />
        <Button bgColor="#e0e0e0" color="black" value="8" click={handleVaue} />
        <Button bgColor="#e0e0e0" color="black" value="9" click={handleVaue} />
        <Button bgColor="#f79231" color="white" value="*" click={handleVaue} />
      </div>
      <div className="row">
        <Button bgColor="#e0e0e0" color="black" value="4" click={handleVaue} />
        <Button bgColor="#e0e0e0" color="black" value="5" click={handleVaue} />
        <Button bgColor="#e0e0e0" color="black" value="6" click={handleVaue} />
        <Button bgColor="#f79231" color="white" value="-" click={handleVaue} />
      </div>
      <div className="row">
        <Button bgColor="#e0e0e0" color="black" value="1" click={handleVaue} />
        <Button bgColor="#e0e0e0" color="black" value="2" click={handleVaue} />
        <Button bgColor="#e0e0e0" color="black" value="3" click={handleVaue} />
        <Button bgColor="#f79231" color="white" value="+" click={handleVaue} />
      </div>
      <div className="row">
        <Button
          bgColor="#e0e0e0"
          color="black"
          value="0"
          btnBg="big"
          click={handleVaue}
        />
        {/* <Button bgColor="#e0e0e0" color="black" value="00" /> */}
        <Button bgColor="#e0e0e0" color="black" value="." click={handleVaue} />
        <Button bgColor="#f79231" color="white" value="=" click={handleEqual} />
      </div>
    </div>
  );
};

export default App;
