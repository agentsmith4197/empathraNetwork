import CampaignCard from "./CampaignCard";
import "../styles/campaigns.scss";
import type { Campaign } from "../types/campaign";
import { Link } from "react-router-dom";

interface Props {
  campaigns: Campaign[];
}

const TrendingCampaigns = ({ campaigns }: Props) => {

  const trending = campaigns.slice(0,3);

  return (
    <section className="trending">

      <div className="trending-header">

        <div>
          <h2>🔥 Trending Causes</h2>

          <p>
            These campaigns are gaining strong support from the community.
            Join others in making an impact.
          </p>
        </div>

        <Link to="/campaigns">
          <button className="view-btn">
            View All
          </button>
        </Link>

      </div>


      <div className="campaign-grid">

        {trending.length === 0 ? (

          <p className="empty-state">
            No trending campaigns right now.
          </p>

        ) : (

          trending.map((campaign) => (
            <CampaignCard
              key={campaign.$id + "trend"}
              campaign={campaign}
            />
          ))

        )}

      </div>

    </section>
  );
};

export default TrendingCampaigns;