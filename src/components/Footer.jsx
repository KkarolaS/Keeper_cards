const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text"> Copyright © {year}</p>
    </footer>
  );
};

export default Footer;
