import React, { useState, useEffect } from 'react';
import './Sizes.css';

export const Sizes = ({ products, filterProducts }) => {
  const [sizes, setSizes] = useState([]);
  const [isSizes, setIsSizes] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState([]);

  useEffect(() => {
    const sizeSet = new Set();
    products.forEach((p) => {
      sizeSet.add(...p.sizes);
    });
    const sizesArr = [...sizeSet];
    setSizes(sizesArr);
  }, [products]);

  function showSizes() {
    setIsSizes(!isSizes);
  }

  function handleOnCheck(e) {
    const isChecked = e.target.checked;
    const size = e.target.name;
    if (isChecked) {
      setSelectedSizes((sizes) => [...sizes, size]);
    } else {
      const selectedFiltered = selectedSizes.filter((ss) => size !== ss);
      setSelectedSizes(selectedFiltered);
    }
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
          {sizes.length &&
            sizes.map((s) => (
              <div className="size" key={s}>
                <label htmlFor={s} className="checkbox">
                  <input
                    type="checkbox"
                    name={s}
                    id={s}
                    onChange={handleOnCheck}
                  />
                  {s}
                </label>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};
