import mainPhone from "../../assets/image/main_phone.svg";
import img from "../../assets/image/img.svg";


const Landing = () => {
  return (
    <div>
      <section className="features-section">
        <div className="features-header">
          <div className="features-title">
            A perfect landing page to help launch your app
          </div>
          <div className="features-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </div>
        </div>

        <div className="features-content">
          <div className="features-column">
            <div className="feature-item">
              <img src={img} className="feature-icon" alt="Img" />
              <div className="feature-text">
                <div className="feature-title">Feature description</div>
                <div className="feature-desc">
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus.
                </div>
              </div>
            </div>

            <div className="feature-item">
              <img src={img} className="feature-icon" alt="Img" />
              <div className="feature-text">
                <div className="feature-title">Feature description</div>
                <div className="feature-desc">
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus.
                </div>
              </div>
            </div>
            <div className="feature-item">
              <img src={img} className="feature-icon" alt="Img" />
              <div className="feature-text">
                <div className="feature-title">Feature description</div>
                <div className="feature-desc">
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus.
                </div>
              </div>
            </div>
          </div>

          <div className="features-phone">
            <img src={mainPhone} className="phone-img" alt="phone" />
          </div>

          <div className="features-column">
            <div className="feature-item">
              <img src={img} className="feature-icon" alt="Img" />
              <div className="feature-text">
                <div className="feature-title2">Feature description</div>
                <div className="feature-desc2">
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus.
                </div>
              </div>
            </div>
            <div className="feature-item">
              <img src={img} className="feature-icon" alt="Img" />
              <div className="feature-text">
                <div className="feature-title2">Feature description</div>
                <div className="feature-desc2">
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus.
                </div>
              </div>
            </div>
            <div className="feature-item">
              <img src={img} className="feature-icon" alt="Img" />
              <div className="feature-text">
                <div className="feature-title2">Feature description</div>
                <div className="feature-desc2">
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
