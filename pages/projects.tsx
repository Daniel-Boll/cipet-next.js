import { Footer } from "@components/Footer";
import { ProjectCard, ProjectData } from "@components/ProjectCard";
import { Box, CircularProgress, Divider, Typography } from "@mui/material";
import { styles } from "@styles/project.styles";
import { useTranslate } from "@utils/useTranslate";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { api } from "service/api";

const Projects: NextPage = () => {
  const i18n = useTranslate("projects");
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const resp = await api.get("project/getProjects");
        if (resp.projects.length > 0) {
          setProjects(resp.projects);
        }
      } catch (error) {
        console.debug("err at project.tsx", error);
      }
      setLoading(false);
    })();
  }, []);

  return (
    <Box sx={styles.container}>
      <Box>
        <Typography variant="h3" sx={styles.pageTitle}>
          {i18n.title}
        </Typography>
        <Divider sx={{ width: "95%", margin: "0 auto" }} />
      </Box>
      <Box sx={styles.main}>
        {loading ? (
          <CircularProgress />
        ) : projects.length > 0 ? (
          projects.map((project: ProjectData, index: number) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
            />
          ))
        ) : (
          <Typography variant="h5">{i18n.noProjects}</Typography>
        )}
      </Box>
      <Footer />
    </Box>
  );
};

export default Projects;
