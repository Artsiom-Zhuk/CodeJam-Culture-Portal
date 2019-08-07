import React from 'react';
import PropTypes from 'prop-types';

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

InputField.propTypes = {
  extraClass: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};
