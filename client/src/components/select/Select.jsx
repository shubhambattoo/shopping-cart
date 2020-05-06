import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ options, value, ...props }) => {
  return (
    <>
      <div className="select is-rounded" style={{ marginTop: '15px' }}>
        <select {...props} value={value}>
          {options.map((item) => {
            return (
              <option value={item.value} key={item.value}>
                {item.text}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ).isRequired,
  value: PropTypes.any.isRequired,
};

export default Select;
