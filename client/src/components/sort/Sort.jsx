import React, { useState } from 'react';

export const Sort = ({onSortChange}) => {
  const [sortVal, setSortVal] = useState('0');

  function handleSelectChange(e) {
    setSortVal(e.target.value);
    onSortChange(e.target.value);
  }

  return (
    <>
      <div className="select is-rounded" style={{ marginTop: '15px' }}>
        <select onChange={handleSelectChange} value={sortVal}>
          <option value="0">Order By</option>
          <option value="1">Highest to Lowest Price</option>
          <option value="2">Lowest to Highest Price</option>
        </select>
      </div>
    </>
  );
};
