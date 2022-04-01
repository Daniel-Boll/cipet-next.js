import { ProjectData } from "@components/ProjectCard";
import { collection, getDocs } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import { database } from "service/firebaseClient";

type Data = {
  projects: ProjectData[];
};

type Error = {
  error: unknown;
};

const getAll = async (
  _: NextApiRequest,
  res: NextApiResponse<Data | Error>
) => {
  try {
    const projects = await getDocs(collection(database, "projects"));
    const docs = projects.docs.map((doc) => doc.data() as ProjectData);

    return res.status(200).json({
      projects: docs,
    });
  } catch (err) {
    console.log("err at projects/getAll", err);
    return res.status(400).json({ error: err });
  }
};

export default getAll;
