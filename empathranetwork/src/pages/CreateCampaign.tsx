import { useState } from "react";
import type { Campaign } from "../types/campaign";
import { createCampaign } from "../services/campaignServices";


const CreateCampaign = () => {

  const [campaign,setCampaign] = useState<Campaign>({
    title: "",
    description: "",
    goalAmount: 0,
    raisedAmount: 0,
    status: "active",
    createdAt: new Date().toISOString(),
    image: " "
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await createCampaign(campaign);

    alert("Campaign created successfully");
  };

  return (
    <div className="p-10">

      <h1 className="text-2xl font-bold mb-6">
        Create Campaign
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          placeholder="Title"
          className="border p-2 w-full"
          onChange={(e)=>
            setCampaign({
              ...campaign,
              title:e.target.value
            })
          }
        />

        <input
          type="number"
          placeholder="Goal Amount"
          className="border p-2 w-full"
          onChange={(e)=>
            setCampaign({
              ...campaign,
              goalAmount:Number(e.target.value)
            })
          }
        />

        <textarea
          placeholder="Campaign Story"
          className="border p-2 w-full"
          onChange={(e)=>
            setCampaign({
              ...campaign,
              description:e.target.value
            })
          }
        />

        <button className="bg-blue-600 text-white px-6 py-2">
          Create Campaign
        </button>

      </form>

    </div>
  );
};

export default CreateCampaign;