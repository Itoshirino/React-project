import frame from "../../assets/image/Frame.png";
import phones from "../../assets/image/phones.svg";

const Manage = () => {
  return (
    <div>
      <section className="mobile-section">
        <div className="mobile-left">
          <div className="mobile-heading">Mobile Friendly</div>
          <div className="mobile-title">Manage your money from anywhere</div>
          <div className="mobile-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </div>

          <div className="mobile-benefits">
            <div className="mobile-benefit">
              <img src={frame} className="benefit-icon" />
              <div className="benefit-text">
                <div className="benefit-title2">Benefit description</div>
                <div className="benefit-desc">
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus.
                </div>
              </div>
            </div>
            <div className="mobile-benefit">
              <img src={frame} className="benefit-icon" />
              <div className="benefit-text">
                <div className="benefit-title2">Benefit description</div>
                <div className="benefit-desc">
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus.
                </div>
              </div>
            </div>
          </div>

          <div className="mobile-button">
            <button className="mobile-btn">Get CrypAppy</button>
          </div>
        </div>

        <div className="mobile-right">
          <img
            src={phones}
            className="mobile-phone"
          />
        </div>
      </section>
    </div>
  );
};

export default Manage;
