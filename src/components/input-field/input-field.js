import React from 'react';

const InputField = ({ extraClass, onChange, placeholder }) => {
  return (
    <input
      placeholder={placeholder}
      className={extraClass}
      onChange={onChange}
    />
  )
}

export default InputField;
