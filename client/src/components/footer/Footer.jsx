import React from 'react';

export const Footer = () => {
  return (
    <footer
      className="footer"
      style={{ backgroundColor: '#444', color: '#f1f1f1' }}
    >
      <div className="content has-text-centered">
        <p>
          <strong style={{ color: '#f1f1f1' }}>
            Shopping Cart <em>Buy-IT </em>
          </strong>
          by
          <a href="https://github.com/shubhambattoo"> Shubham Battoo</a>. &copy;
          {new Date().getFullYear()}.
        </p>
      </div>
    </footer>
  );
};
