import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function Select({
  label, name, options, value, onChange,
}) {
  return (
    <div className="select-block">
      <label htmlFor={name}>{label}</label>
      <select defaultValue="" id={name} value={value} onChange={onChange}>
        <option value="" disabled hidden>Buscar todos</option>
        {options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
      </select>
    </div>
  );
}
export default Select;

Select.defaultProps = {
  onChange: () => { },
};

Select.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};
