import { useState } from "react";
import CampaignCard from "../components/CampaignCard";
import "../styles/explore.scss";
import type { Campaign } from "../types/campaign";

const demoCampaigns: Campaign[] = [

  /* ACTIVE CAMPAIGNS */

  {
    $id: "active1",
    title: "Emergency Surgery for Daniel",
    description: "Daniel urgently needs heart surgery. Your support can save his life.",
    goalAmount: 12000,
    raisedAmount: 6500,
    status: "active",
    createdAt: new Date().toISOString(),
    image: "/images/campaign1.jpg"
  },
  {
    $id: "active2",
    title: "School Supplies for Rural Children",
    description: "Providing books and learning materials for underprivileged children.",
    goalAmount: 5000,
    raisedAmount: 2100,
    status: "active",
    createdAt: new Date().toISOString(),
    image: "/images/campaign2.jpg"
  },
  {
    $id: "active3",
    title: "Flood Relief Support",
    description: "Families affected by floods need emergency housing and food.",
    goalAmount: 9000,
    raisedAmount: 3700,
    status: "active",
    createdAt: new Date().toISOString(),
    image: "/images/campaign3.jpg"
  },
  {
    $id: "active4",
    title: "Laptops for Students",
    description: "Helping students get laptops for remote learning.",
    goalAmount: 6000,
    raisedAmount: 2800,
    status: "active",
    createdAt: new Date().toISOString(),
    image: "/images/campaign4.jpg"
  },
  {
    $id: "active5",
    title: "Ukraine War Relief Fund",
    description: "Providing humanitarian support for families affected by war.",
    goalAmount: 20000,
    raisedAmount: 14500,
    status: "active",
    createdAt: new Date().toISOString(),
    image: "/images/war.jpg"
  },

  /* COMPLETED CAMPAIGNS */

  {
    $id: "complete1",
    title: "Community Health Clinic",
    description: "Built a new clinic providing free healthcare.",
    goalAmount: 15000,
    raisedAmount: 15000,
    status: "completed",
    createdAt: new Date().toISOString(),
    image: "/images/campaign5.jpg"
  },
  {
    $id: "complete2",
    title: "Village Clean Water Project",
    description: "Installed a water purification system.",
    goalAmount: 10000,
    raisedAmount: 10000,
    status: "completed",
    createdAt: new Date().toISOString(),
    image: "/images/campaign6.jpg"
  },
  {
    $id: "complete3",
    title: "Earthquake Relief Fund",
    description: "Provided shelters and supplies for earthquake victims.",
    goalAmount: 25000,
    raisedAmount: 25000,
    status: "completed",
    createdAt: new Date().toISOString(),
    image: "/images/campaign7.jpg"
  },
  {
    $id: "complete4",
    title: "School Renovation Project",
    description: "Renovated classrooms for a rural school.",
    goalAmount: 8000,
    raisedAmount: 8000,
    status: "completed",
    createdAt: new Date().toISOString(),
    image: "/images/campaign8.jpg"
  },
  {
    $id: "complete5",
    title: "Food Aid for Refugees",
    description: "Provided emergency food support to refugees.",
    goalAmount: 12000,
    raisedAmount: 12000,
    status: "completed",
    createdAt: new Date().toISOString(),
    image: "/images/campaign9.jpg"
  },

  /* more completed campaigns */

  {
    $id: "complete6",
    title: "Hospital Equipment Donation",
    description: "Purchased new medical equipment.",
    goalAmount: 18000,
    raisedAmount: 18000,
    status: "completed",
    createdAt: new Date().toISOString(),
    image: "/images/campaign10.jpg"
  },
  {
    $id: "complete7",
    title: "War Refugee Housing",
    description: "Temporary shelters for displaced families.",
    goalAmount: 14000,
    raisedAmount: 14000,
    status: "completed",
    createdAt: new Date().toISOString(),
    image: "/images/war2.jpg"
  },
  {
    $id: "complete8",
    title: "Community Food Bank",
    description: "Established a local food distribution center.",
    goalAmount: 9000,
    raisedAmount: 9000,
    status: "completed",
    createdAt: new Date().toISOString(),
    image: "/images/campaign11.jpg"
  },
  {
    $id: "complete9",
    title: "Education Scholarship Fund",
    description: "Scholarships for disadvantaged students.",
    goalAmount: 11000,
    raisedAmount: 11000,
    status: "completed",
    createdAt: new Date().toISOString(),
    image: "/images/campaign12.jpg"
  },
  {
    $id: "complete10",
    title: "Disaster Emergency Aid",
    description: "Rapid emergency response funding.",
    goalAmount: 16000,
    raisedAmount: 16000,
    status: "completed",
    createdAt: new Date().toISOString(),
    image: "/images/campaign13.jpg"
  },
  {
    $id: "complete11",
    title: "Medical Outreach Program",
    description: "Free treatment for rural communities.",
    goalAmount: 13000,
    raisedAmount: 13000,
    status: "completed",
    createdAt: new Date().toISOString(),
    image: "/images/campaign14.jpg"
  },
  {
    $id: "complete12",
    title: "Community School Library",
    description: "Built a library for children.",
    goalAmount: 7000,
    raisedAmount: 7000,
    status: "completed",
    createdAt: new Date().toISOString(),
    image: "/images/campaign15.jpg"
  }
];

const ExploreCampaigns = () => {

  const [filter,setFilter] = useState("all");

  const filtered = demoCampaigns.filter(c => {

    if(filter === "active") return c.status === "active";

    if(filter === "completed") return c.status === "completed";

    if(filter === "war") return c.title.toLowerCase().includes("war");

    return true;

  });

  return (

    <div className="explore-page">

      <h1>Explore Campaigns</h1>

      <div className="filters">

        <button onClick={()=>setFilter("all")}>All</button>

        <button onClick={()=>setFilter("active")}>Active</button>

        <button onClick={()=>setFilter("completed")}>Completed</button>

        <button onClick={()=>setFilter("war")}>War Relief</button>

      </div>

      <div className="campaign-grid">

        {filtered.map(campaign => (

          <CampaignCard
            key={campaign.$id}
            campaign={campaign}
          />

        ))}

      </div>

    </div>

  );

};

export default ExploreCampaigns;