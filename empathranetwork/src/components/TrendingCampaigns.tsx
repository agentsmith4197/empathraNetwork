import CampaignCard from "./CampaignCard";
import "../styles/campaigns.scss";
import type { Campaign } from "../types/campaign";

interface Props {
  campaigns: Campaign[];
}

const TrendingCampaigns = ({ campaigns }: Props) => {

  const trending = campaigns.slice(0,3);

  return (
    <section className="trending">

      <h2>Trending Causes</h2>

      <div className="campaign-grid">

        {trending.map((campaign) => (
          <CampaignCard
            key={campaign.$id + "trend"}
            campaign={campaign}
          />
        ))}

      </div>

    </section>
  );
};

export default TrendingCampaigns;