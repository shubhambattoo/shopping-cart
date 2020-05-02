import React, { useState } from 'react';
import './Sizes.css';

export const Sizes = () => {
  const [sizes, setSizes] = useState([]);
  const [isSizes, setIsSizes] = useState(false);

  function showSizes() {
    setIsSizes(!isSizes);
  }

  return (
    <div className="size-container">
      <button onClick={showSizes}>
        Sizes
        <i className="material-icons">
          {isSizes ? 'expand_less' : 'expand_more'}
        </i>
      </button>
      {isSizes && (
        <div className="sizes">
          <div className="size">
            <label htmlFor="10.5" className="checkbox">
              <input type="checkbox" name="10.5" id="10.5" />
              10.5
            </label>
          </div>
          <div className="size">
            <label htmlFor="10.5" className="checkbox">
              <input type="checkbox" name="10.5" id="10.5" />
              10.5
            </label>
          </div>
          <div className="size">
            <label htmlFor="10.5" className="checkbox">
              <input type="checkbox" name="10.5" id="10.5" />
              10.5
            </label>
          </div>
          <div className="size">
            <label htmlFor="10.5" className="checkbox">
              <input type="checkbox" name="10.5" id="10.5" />
              10.5
            </label>
          </div>
          <div className="size">
            <label htmlFor="10.5" className="checkbox">
              <input type="checkbox" name="10.5" id="10.5" />
              10.5
            </label>
          </div>
          <div className="size">
            <label htmlFor="10.5" className="checkbox">
              <input type="checkbox" name="10.5" id="10.5" />
              10.5
            </label>
          </div>
          <div className="size">
            <label htmlFor="10.5" className="checkbox">
              <input type="checkbox" name="10.5" id="10.5" />
              10.5
            </label>
          </div>
          <div className="size">
            <label htmlFor="10.5" className="checkbox">
              <input type="checkbox" name="10.5" id="10.5" />
              10.5
            </label>
          </div>
        </div>
      )}
    </div>
  );
};
