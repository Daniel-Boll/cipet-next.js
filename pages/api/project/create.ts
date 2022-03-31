import { addDoc, collection } from "firebase/firestore";
import type { NextApiRequest, NextApiResponse } from "next";
import { database } from "service/firebaseClient";

type Data = {
  id: string;
};

type Error = {
  error: unknown;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Error>
) {
  const project = req.body;
  try {
    const projectRef = await addDoc(collection(database, "projects"), project);
    res.status(200).json({
      id: projectRef.id,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
}
