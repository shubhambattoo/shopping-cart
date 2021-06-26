const Footer = () => {
  return (
    <footer className="footer">
      <em>Nikers</em>
      &nbsp;&copy;&nbsp;
      {new Date().getFullYear()}.
    </footer>
  );
};

export default Footer;
