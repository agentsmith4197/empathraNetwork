import { Link } from "react-router-dom";
import "../styles/cta.scss";

const CallToAction = () => {
  return (
    <section className="cta">

      <div className="cta-container">

        <div className="cta-content">

          <h2>Make a Difference Today</h2>

          <p>
            Thousands of people are raising funds for medical
            emergencies, education, disaster relief, and
            community projects on Empathra Network.
          </p>

          <div className="cta-buttons">

            <Link to="/create-campaign">
              <button className="primary-btn">
                Make A Donation
              </button>
            </Link>

            <Link to="/campaigns">
              <button className="secondary-btn">
                Explore Campaigns
              </button>
            </Link>

          </div>

        </div>

        {/* CTA STATS */}

        <div className="cta-stats">

          <div className="stat">
            <h3>$2.3M+</h3>
            <p>Funds Raised</p>
          </div>

          <div className="stat">
            <h3>12K+</h3>
            <p>Donors</p>
          </div>

          <div className="stat">
            <h3>850+</h3>
            <p>Campaigns</p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default CallToAction;