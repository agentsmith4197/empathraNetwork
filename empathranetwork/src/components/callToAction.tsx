import { Link } from "react-router-dom";
import "../styles/cta.scss";

const CallToAction = () => {
  return (
    <section className="cta">

      <h2>Make a Difference Today</h2>

      <p>
        Join thousands of people supporting causes,
        emergencies, and community projects.
      </p>

      <Link to="/create-campaign">
        <button className="cta-btn">
          Start Fundraising
        </button>
      </Link>

    </section>
  );
};

export default CallToAction;