import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/campaignDetails.scss";
import DonationModal from "../components/DonationModal";

interface Campaign {
  title: string;
  description: string;
  goalAmount: number;
  raisedAmount: number;
  image: string;
}

const CampaignDetails = () => {

  const { id } = useParams<{ id: string }>();

  const [campaign,setCampaign] = useState<Campaign | null>(null);
  const [openDonate,setOpenDonate] = useState(false);

  useEffect(()=>{

    // temporary demo data
    const demoCampaign = {
      title: "Emergency Surgery for Daniel",
      description:
        "Daniel urgently needs heart surgery. Your support will help cover the medical expenses and save his life. Every donation helps bring him closer to recovery.",
      goalAmount: 12000,
      raisedAmount: 6500,
      image: "/images/campaign1.jpg"
    };

    setCampaign(demoCampaign);

  },[id]);

  if(!campaign){
    return <p style={{padding:"100px",textAlign:"center"}}>Loading campaign...</p>;
  }

  const progress =
    (campaign.raisedAmount / campaign.goalAmount) * 100;

  return (

    <div className="campaign-details">

      <div className="campaign-container">

        {/* LEFT SIDE */}

        <div className="campaign-main">

          <img
            src={campaign.image}
            alt={campaign.title}
            className="campaign-image"
          />

          <h1>{campaign.title}</h1>

          <p className="campaign-story">
            {campaign.description}
          </p>

        </div>


        {/* RIGHT SIDE */}

        <div className="campaign-sidebar">

          <div className="progress-bar">

            <div
              className="progress"
              style={{ width: `${progress}%` }}
            />

          </div>

          <p className="raised">

            <strong>
              ${campaign.raisedAmount.toLocaleString()}
            </strong>

            raised of ${campaign.goalAmount.toLocaleString()}

          </p>

          <button
        className="donate-btn"
        onClick={()=>setOpenDonate(true)}
        >
        Donate Now
        </button>

          <div className="share">

            <p>Share this campaign</p>

            <div className="share-buttons">

              <button>Facebook</button>

              <button>WhatsApp</button>

              <button>Twitter</button>

            </div>

          </div>

        </div>

        <DonationModal
        isOpen={openDonate}
        onClose={()=>setOpenDonate(false)}
        />

      </div>

    </div>

  );

};

export default CampaignDetails;