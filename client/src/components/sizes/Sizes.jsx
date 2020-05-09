import React, { useState, useEffect } from 'react';
import './Sizes.css';
import Checkbox from '../checkbox/Checkbox';

export const Sizes = ({ products, filterProducts }) => {
  const [sizes, setSizes] = useState([]);
  const [isSizes, setIsSizes] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState([]);

  useEffect(() => {
    const arr = [];
    products.forEach((p) => {
      arr.push(...p.sizes)
    });
    const sizeSet = new Set(arr);
    const sizesArr = [...sizeSet];
    setSizes(sizesArr);
  }, [products]);

  function showSizes() {
    setIsSizes(!isSizes);
  }

  useEffect(() => {
    filterProducts(selectedSizes);
  }, [selectedSizes, filterProducts]);

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
                <Checkbox label={s} name={s} id={s} onChange={handleOnCheck} />
              </div>
            ))}
        </div>
      )}
    </div>
  );
};
