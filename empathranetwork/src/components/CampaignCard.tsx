import "../styles/components/campaignCard.scss"
import type { Campaign } from "../types/campaign"

interface Props {
  campaign: Campaign
}

const CampaignCard = ({ campaign }: Props) => {

  const progress =
    (campaign.raisedAmount / campaign.goalAmount) * 100

  return (
    <div className="campaign-card">

      <h2>{campaign.title}</h2>

      <p>{campaign.description}</p>

      <p>
        ${campaign.raisedAmount} raised of ${campaign.goalAmount}
      </p>

      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${progress}%` }}
        />
      </div>

    </div>
  )
}

export default CampaignCard