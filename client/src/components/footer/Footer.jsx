import React from 'react';

export const Footer = () => {
  return (
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Shopping Cart <em>Buy-IT </em></strong> by 
          <a href="https://github.com/shubhambattoo"> Shubham Battoo</a>. &copy;
          {new Date().getFullYear()}.
        </p>
      </div>
    </footer>
  );
};
