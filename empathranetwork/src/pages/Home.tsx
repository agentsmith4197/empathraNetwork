import { useEffect, useState } from "react";
import { getCampaigns } from "../services/campaignServices";

import Hero from "../components/Hero";
import FeaturedCampaigns from "../components/FeaturedCampaigns";
import TrendingCampaigns from "../components/TrendingCampaigns";
import CallToAction from "../components/callToAction";
import ImpactStats from "../components/ImpactStats";

import type { Campaign } from "../types/campaign";

const demoCampaigns: Campaign[] = [
  {
    $id: "demo1",
    title: "Help Build a Community School",
    description:
      "Support education for children in underserved communities by helping us build a safe learning environment.",
    goalAmount: 5000,
    raisedAmount: 1200,
    status: "active",
    createdAt: new Date().toISOString(),
    image: "/images/campaign-demo.jpeg"
  },
  {
    $id: "demo2",
    title: "Emergency Surgery Fund",
    description:
      "A young mother urgently needs life-saving surgery. Your support can give her another chance at life.",
    goalAmount: 10000,
    raisedAmount: 6400,
    status: "active",
    createdAt: new Date().toISOString(),
    image: "/images/campaign2.jpeg"
  },
  {
    $id: "demo3",
    title: "Support Flood Victims",
    description:
      "Families affected by flooding need food, shelter and clean water. Help rebuild their lives.",
    goalAmount: 8000,
    raisedAmount: 3200,
    status: "active",
    createdAt: new Date().toISOString(),
    image: "/images/campaign3.jpeg"
  },
  {
    $id: "demo4",
    title: "Laptop Fund for Students",
    description:
      "Help students from low-income families get laptops for online learning and education.",
    goalAmount: 6000,
    raisedAmount: 2100,
    status: "active",
    createdAt: new Date().toISOString(),
    image: "/images/campaign4.jpg"
  },
  {
    $id: "demo5",
    title: "Clean Water for Rural Village",
    description:
      "We are raising funds to install a clean water system for a rural community lacking safe drinking water.",
    goalAmount: 9000,
    raisedAmount: 4500,
    status: "active",
    createdAt: new Date().toISOString(),
    image: "/images/campaign5.jpg"
  }
];

const Home = () => {

  const [campaigns,setCampaigns] = useState<Campaign[]>([]);
  const [loading,setLoading] = useState(true);

  useEffect(()=>{

    const fetchCampaigns = async ()=>{

      try {

        const res = await getCampaigns();

        const mapped: Campaign[] = res.map((doc:any)=>({
          $id: doc.$id,
          title: doc.title,
          description: doc.description,
          goalAmount: doc.goalAmount,
          raisedAmount: doc.raisedAmount,
          status: doc.status,
          createdAt: doc.createdAt,
          image: doc.image
        }));

        setCampaigns(mapped.length ? mapped : demoCampaigns);

      } catch {

        setCampaigns(demoCampaigns);

      } finally {
        setLoading(false);
      }

    }

    fetchCampaigns();

  },[])

  if(loading){
    return (
      <div style={{padding:"120px",textAlign:"center"}}>
        Loading campaigns...
      </div>
    )
  }

  return (

    <>

      <Hero />

      <ImpactStats />

      <FeaturedCampaigns
        campaigns={campaigns.slice(0,3)}
      />

      <TrendingCampaigns
        campaigns={campaigns.slice(0,6)}
      />

      <CallToAction />

    </>

  );

};

export default Home;