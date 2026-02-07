import image from "../../assets/image/phone.png";
import appStore from "../../assets/image/app_store.png";
import googlePlay from "../../assets/image/google_play.png";
const Intro = () => {
  return (
    <div>
      <section className="main">
        <div className="section-inner">
          <div className="content-left">
            <div className="headline">
              The crypto portfolio
              <br />
              app that makes you
              <br />
              smile. Every day.
            </div>
            <p className="title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor.
            </p>
            <div className="store-buttons">
              <div className="store-button">
                <img src={appStore} alt="appStore" />
              </div>
              <div className="store-button">
                <img src={googlePlay} alt="googlePlay" />
              </div>
            </div>
          </div>
          <div className="content-right">
            <div className="phone-mockup">
              <img src={image} alt="Icon" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Intro;
