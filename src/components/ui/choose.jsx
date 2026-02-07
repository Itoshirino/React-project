import offOn from "../../assets/image/off_on.png";


const Choose = () => {
  return (
    <div>
      <section className="pricing-section">
        <div className="pricing-header">
          <div className="pricing-subtitle">Our Pricing</div>
          <div className="pricing-title">
            Choose the plan that’s right for your financial needs
          </div>
          <div className="pricing-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </div>
          <div className="pricing-toggle">
            <div className="toggle-monthly">Billed monthly</div>
            <img src={offOn }  className="img" />
            <div className="toggle-yearly">
              Billed annually
              <p className="toggle-save">save 25%</p>
            </div>
          </div>
        </div>

        <div className="pricing-cards">
          <div className="pricing-card">
            <div className="card-header card-essential"></div>
            <div className="card-title">Essential</div>
            <div className="card-price">$12/mo</div>
            <div className="card-text">
              Lorem ipsum dolor sit amet suspendisse varius. Duis cursus, mi
              quis viverra ornare.
            </div>
            <div className="card-button">
              <button className="pricing-btn">Start your free trial</button>
            </div>
          </div>

          <div className="pricing-card">
            <div className="card-header card-pro"></div>
            <div className="card-title">Pro</div>
            <div className="card-price">$56/mo</div>
            <div className="card-text">
              Lorem ipsum dolor sit amet suspendisse varius. Duis cursus, mi
              quis viverra ornare.
            </div>
            <div className="card-button">
              <button className="pricing-btn">Start your free trial</button>
            </div>
          </div>

          <div className="pricing-card">
            <div className="card-header card-premium"></div>
            <div className="card-title">Premium</div>
            <div className="card-price">$79/mo</div>
            <div className="card-text">
              Lorem ipsum dolor sit amet suspendisse varius. Duis cursus, mi
              quis viverra ornare.
            </div>
            <div className="card-button">
              <button className="pricing-btn">Start your free trial</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Choose;
