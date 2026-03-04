import { databases, ID } from "../appwrite/config";
import type { Campaign } from "../types/campaign";


const DB_ID = import.meta.env.VITE_DATABASE_ID as string;
const COLLECTION_ID = import.meta.env.VITE_CAMPAIGN_COLLECTION as string;

export const createCampaign = async (data: Campaign) => {
  return await databases.createDocument(
    DB_ID,
    COLLECTION_ID,
    ID.unique(),
    data
  );
};

export const getCampaigns = async (): Promise<Campaign[]> => {

  const res = await databases.listDocuments(
    DB_ID,
    COLLECTION_ID
  );

  return res.documents.map((doc: any) => ({
    $id: doc.$id,
    title: doc.title,
    description: doc.description,
    goalAmount: doc.goalAmount,
    raisedAmount: doc.raisedAmount,
    status: doc.status,
    createdAt: doc.createdAt
  }));
};

export const getCampaign = async (id: string) => {
  return await databases.getDocument(
    DB_ID,
    COLLECTION_ID,
    id
  );
};