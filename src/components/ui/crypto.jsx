import frame from "../../assets/image/Frame.png";
import arrow from "../../assets/image/icon.svg";

const Crypto = () => {
  return (
    <div>
      <section className="benefits">
        <div className="benefits-header">
          <div className="benefits-title">New crypto finance app</div>
          <div className="benefits-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </div>
        </div>

        <div className="benefits-list">
          <div className="benefit-card">
            <div className="benefit-icon">
              <img src={frame} alt="" />
            </div>
            <div className="benefit-title">Benefit description</div>
            <div className="benefit-text">
              Suspendisse varius enim in eros elementum tristique. Duis cursus.
            </div>
            <div className="benefit-link">
              Learn more
              <a href="#" className="icon-link">
                <img src={arrow} className="arrow-icon" alt="" />
              </a>
            </div>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">
              <img src={frame} alt="" />
            </div>
            <div className="benefit-title">Benefit description</div>
            <div className="benefit-text">
              Suspendisse varius enim in eros elementum tristique. Duis cursus.
            </div>
            <div className="benefit-link">
              Learn more
              <a href="#" className="icon-link">
                <img src={arrow} className="arrow-icon" alt="" />
              </a>
            </div>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">
              <img src={frame} alt="" />
            </div>
            <div className="benefit-title">Benefit description</div>
            <div className="benefit-text">
              Suspendisse varius enim in eros elementum tristique. Duis cursus.
            </div>
            <div className="benefit-link">
              Learn more
              <a href="#" className="icon-link">
                <img src={arrow} className="arrow-icon" alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Crypto;
