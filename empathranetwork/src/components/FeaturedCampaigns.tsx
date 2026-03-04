import CampaignCard from "./CampaignCard";
import "../styles/campaigns.scss";
import type { Campaign } from "../types/campaign";
import { Link } from "react-router-dom";

interface Props {
  campaigns: Campaign[];
}

const FeaturedCampaigns = ({ campaigns }: Props) => {
  return (
    <section className="campaign-section">

      <div className="campaign-header">

        <div>
          <h2>Featured Campaigns</h2>

          <p>
            Discover impactful campaigns that are currently
            making a difference in communities.
          </p>
        </div>

        <Link to="/campaigns">
          <button className="view-btn">
            View All
          </button>
        </Link>

      </div>


      <div className="campaign-grid">

        {campaigns.length === 0 ? (
          <p className="empty-state">
            No campaigns available yet.
          </p>
        ) : (
          campaigns.map((campaign) => (
            <CampaignCard
              key={campaign.$id}
              campaign={campaign}
            />
          ))
        )}

      </div>

    </section>
  );
};

export default FeaturedCampaigns;