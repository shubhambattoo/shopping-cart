import React, { useState } from 'react';
import style from './header.module.css';

const FootwareMenus = () => {
  const footwareTypes = [
    {
      id: 1,
      title: 'Loafers',
      active: false,
    },
    {
      id: 2,
      title: 'Sneakers',
      active: true,
    },
    {
      id: 3,
      title: 'Oxfords',
      active: false,
    },
    {
      id: 4,
      title: 'Chelsea Boots',
      active: false,
    },
    {
      id: 5,
      title: 'Slides',
      active: false,
    },
    // {
    //   id: 6,
    //   title: 'Sandals',
    //   active: false,
    // },
  ];

  return (
    <div className={style.store_menu_wrapper}>
      <div className={style.store_menu}>
        {footwareTypes.map((type) => (
          <div key={type.id} className={style.store_menu_item}>
            <h2
              className={`${style.store_menu_title} ${
                type.active && style.store_menu_title_active
              }`}
            >
              {type.title}
            </h2>
          </div>
        ))}
      </div>
      <div className={style.fader}></div>
    </div>
  );
};

const TabsController = ({ customerTypeChange }) => {
  const [active, setActive] = useState(1);

  const changeCustType = (e) => {
    setActive(e);
    customerTypeChange(e);
  };

  return (
    <div className={style.tabs_controller}>
      <div className={style.container_centered}>
        <ul className={style.tab_menus}>
          <li
            className={active === 1 ? style.active_tab : ''}
            onClick={() => changeCustType(1)}
          >
            Everyone
          </li>
          <li
            className={active === 2 ? style.active_tab : ''}
            onClick={() => changeCustType(2)}
          >
            Men
          </li>
          <li
            className={active === 3 ? style.active_tab : ''}
            onClick={() => changeCustType(3)}
          >
            Women
          </li>
          <li
            className={active === 4 ? style.active_tab : ''}
            onClick={() => changeCustType(4)}
          >
            Unisex
          </li>
          <li
            className={active === 5 ? style.active_tab : ''}
            onClick={() => changeCustType(5)}
          >
            Kids
          </li>
        </ul>
      </div>
    </div>
  );
};

const StoreHeader = ({ customer, customerChange }) => {
  return (
    <>
      <FootwareMenus />
      <TabsController
        customerType={customer}
        customerTypeChange={customerChange}
      />
    </>
  );
};

export default StoreHeader;
