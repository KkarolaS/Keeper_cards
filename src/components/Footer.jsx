const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer-text"> Copyright © {year}</p>
    </footer>
  );
};

export default Footer;
