import React from 'react';
import { elementStyles } from './element-styles';

const Input = (props) => {
  return (
    <input
      onChange={props.onChange}
      className={elementStyles(props.className)}
      value={props.value}
      {...props}
    />
  );
};

export default Input;
