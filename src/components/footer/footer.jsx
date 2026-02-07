import logo from "../../assets/image/logo.png";

const Footer = () => {
  return (
    <div>
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-title">Buy CrypAppy today</div>
          <div className="cta-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem.
          </div>
          <div className="cta-buttons">
            <button className="cta-btn blue">Buy CrypAppy</button>
            <button className="cta-btn dark">View in designer</button>
          </div>
        </div>
      </section>

      <section className="footer-section">
        <div className="footer-container">
          <div>
            <img className="logo" src={logo} />
          </div>
          <div className="footer-subtitle">Subscribe to our newsletter</div>
          <div className="social-icons">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H8v-2.9h2.4V9.8c0-2.4 1.4-3.7 3.5-3.7 1 0 2 .2 2 .2v2.3h-1.1c-1.1 0-1.5.7-1.5 1.5v1.8h2.6l-.4 2.9h-2.2v7A10 10 0 0 0 22 12" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.28 4.28 0 0 0 1.88-2.36 8.49 8.49 0 0 1-2.7 1.03 4.25 4.25 0 0 0-7.24 3.87 12.06 12.06 0 0 1-8.76-4.44 4.24 4.24 0 0 0 1.32 5.67 4.23 4.23 0 0 1-1.93-.53v.05a4.25 4.25 0 0 0 3.41 4.17 4.28 4.28 0 0 1-1.92.07 4.26 4.26 0 0 0 3.97 2.95 8.52 8.52 0 0 1-5.28 1.82c-.34 0-.68-.02-1.02-.06a12.03 12.03 0 0 0 6.51 1.91c7.8 0 12.07-6.46 12.07-12.07 0-.18 0-.35-.01-.53A8.64 8.64 0 0 0 24 4.56a8.42 8.42 0 0 1-2.54.7z" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm4.75-.88a.88.88 0 1 1 0 1.76.88.88 0 0 1 0-1.76z" />
            </svg>
          </div>
          <div className="footer-input-wrapper">
            <p className="input_title">Enter your Email. . .</p>
            <input type="email" className="footer-input" />
          </div>
          <div className="footer-button-wrapper">
            <button className="footer-button">.</button>
          </div>
          <div className="footer-bottom">
            <div className="footer-text">
              Crafted by Marion & Co. | Powered by Webflow | More templates |
              License | Style Guide
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
