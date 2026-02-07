import logos from "../../assets/image/logos.png";
import stars from "../../assets/image/stars.svg";
import avatar from "../../assets/image/Avatar.svg";
import avatar2 from "../../assets/image/Avatar2.svg";
import avatar3 from "../../assets/image/Avatar3.svg";
import avatar4 from "../../assets/image/Avatar4.svg";

const Names = () => {
  return (
    <div>
      <section className="testimonials-section">
        <div className="testimonials-header">
          <div className="testimonials-subtitle">THE BEST CRYPTO APP</div>
          <div className="testimonials-title">
            Backed by the biggest names in the industry
          </div>
        </div>

        <div className="testimonials-logos">
          <img src={logos} className="logo-img" />
        </div>

        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="stars">
              <img src={stars} />
            </div>
            <div className="testimonial-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </div>
            <div className="testimonial-user">
              <img src={avatar} className="user-img" />
              <div className="user-info">
                <div className="user-name">Jason Renolds</div>
                <div className="user-role">Verified Customer</div>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="stars">
              <img src={stars} />
            </div>
            <div className="testimonial-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </div>
            <div className="testimonial-user">
              <img src={avatar2} className="user-img" />
              <div className="user-info">
                <div className="user-name">Sarah Gening</div>
                <div className="user-role">Verified Customer</div>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="stars">
              <img src={stars} />
            </div>
            <div className="testimonial-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </div>
            <div className="testimonial-user">
              <img src={avatar3} className="user-img" />
              <div className="user-info">
                <div className="user-name">Lori Basic</div>
                <div className="user-role">Verified Customer</div>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="stars">
              <img src={stars} />
            </div>
            <div className="testimonial-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </div>
            <div className="testimonial-user">
              <img src={avatar4} className="user-img" />
              <div className="user-info">
                <div className="user-name">Anne R.</div>
                <div className="user-role">Verified Customer</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Names;
