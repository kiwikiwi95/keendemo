import React from 'react';
import Button from '@material-ui/core/Button';
import Box from './counter.styles';

const Counter = ({ value, setValue }) => {
  const add = () => {
    setValue(value + 1);
  };
  const minus = () => {
    setValue(value - 1);
  };
  return (
    <Box>
      <Button variant='contained' className='operator' onClick={add}>
        +
      </Button>
      <div>
        <p>{value}</p>
        <label for='result' className='counterLabel'>
          counter
        </label>
      </div>

      <Button variant='contained' className='operator minus' onClick={minus}>
        -
      </Button>
    </Box>
  );
};

export default Counter;
