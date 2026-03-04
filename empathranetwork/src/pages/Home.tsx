import { useEffect, useState } from "react";
import type { Campaign } from "../types/campaign";
import { getCampaigns } from "../services/campaignServices";
import CampaignCard from "../components/CampaignCard";

const demoCampaign: Campaign = {
  $id: "demo-1",
  title: "Help Build a Community School",
  description:
    "This campaign aims to raise funds to build a community school for underprivileged children. Your support will help provide classrooms, books, and basic learning facilities.",
  goalAmount: 5000,
  raisedAmount: 1200,
  status: "active",
  createdAt: new Date().toISOString(),
};

const Home = () => {

  const [campaigns, setCampaigns] = useState<Campaign[]>([]);

  useEffect(() => {

    const fetchCampaigns = async () => {

      try {

        const res = await getCampaigns();

        const campaigns: Campaign[] = res.map((doc: any) => ({
          $id: doc.$id,
          title: doc.title,
          description: doc.description,
          goalAmount: doc.goalAmount,
          raisedAmount: doc.raisedAmount,
          status: doc.status,
          createdAt: doc.createdAt
        }));

        if (campaigns.length === 0) {
          setCampaigns([demoCampaign]);
        } else {
          setCampaigns(campaigns);
        }

      } catch (error) {
        console.error("Failed to fetch campaigns", error);
        setCampaigns([demoCampaign]);
      }

    };

    fetchCampaigns();

  }, []);

  return (

    <div className="grid grid-cols-3 gap-6 p-10">

      {campaigns.map((campaign) => (
        <CampaignCard
          key={campaign.$id}
          campaign={campaign}
        />
      ))}

    </div>

  );
};

export default Home;