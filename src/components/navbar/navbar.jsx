import image from "../../assets/image/logo.png";

const Navbar = () => {
  return (
    <div>
      <div className="wrapper">
        <header className="header">
          <div>
            <img className="logo" src={image} alt="" />
          </div>
          <div className="nav">
            <a href="#benefits" className="nav-item">
              Benefits
            </a>
            <a href="#features" className="nav-item">
              Features
            </a>
            <a href="#reviews" className="nav-item">
              Reviews
            </a>
            <a href="#pricing" className="nav-item">
              Pricing
            </a>
            <a href="#contact" className="nav-item">
              Contact
            </a>
            <a href="#buy" className="nav-item nav-button">
              Buy CrypAppy
            </a>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
