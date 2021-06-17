import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function Textarea({
  label, name, value, onChange,
}) {
  return (
    <div className="textarea-block">
      <label htmlFor={name}>{label}</label>
      <textarea id={name} value={value} onChange={onChange} />
    </div>
  );
}
export default Textarea;

Textarea.defaultProps = {
  value: '',
  onChange: () => {},
};

Textarea.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
