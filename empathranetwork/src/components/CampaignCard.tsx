import "../styles/campaignCard.scss";
import type { Campaign } from "../types/campaign";
import { Link } from "react-router-dom";

interface Props {
  campaign: Campaign;
}

const CampaignCard = ({ campaign }: Props) => {

  const progress =
    (campaign.raisedAmount / campaign.goalAmount) * 100;

  return (
    <div className="campaign-card">

      {/* Campaign Image */}
      <div className="campaign-image">
        <img
          src={campaign.image || "/images/campaign-demo.jpeg"}
          alt={campaign.title}
        />
      </div>

      <div className="campaign-content">

        <h3>{campaign.title}</h3>

        <p className="campaign-description">
          {campaign.description}
        </p>

        {/* Progress Section */}

        <div className="campaign-progress">

          <div className="progress-bar">
            <div
              className="progress"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="campaign-stats">
            <span className="raised">
              ${campaign.raisedAmount.toLocaleString()}
            </span>

            <span className="goal">
              of ${campaign.goalAmount.toLocaleString()}
            </span>
          </div>

        </div>

        {/* Donate Button */}

        <Link to={`/campaign/${campaign.$id}`}>
          <button className="donate-btn">
            Donate
          </button>
        </Link>

      </div>

    </div>
  );
};

export default CampaignCard;