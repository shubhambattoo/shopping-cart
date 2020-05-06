import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ label, name, id, ...props }) => {
  return (
    <label htmlFor={name} className="checkbox">
      <input type="checkbox" name={name} id={name} {...props} />
      {label}
    </label>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Checkbox;
