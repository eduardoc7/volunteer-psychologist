import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function Input({
  label, name, type, value, onChange,
}) {

  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}
export default Input;

Input.defaultProps = {
  value: '',
  onChange: () => { },
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
