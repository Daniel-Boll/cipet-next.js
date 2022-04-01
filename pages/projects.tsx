import { Footer } from "@components/Footer";
import { ProjectCard, ProjectData } from "@components/ProjectCard";
import { Box, Divider, Typography } from "@mui/material";
import { styles } from "@styles/project.styles";
import { useTranslate } from "@utils/useTranslate";
import { GetStaticProps } from "next";
import { api } from "service/api";

type ProjectProps = {
  projects: ProjectData[];
};

const Projects = ({ projects }: ProjectProps) => {
  const i18n = useTranslate("projects");

  return (
    <Box sx={styles.container}>
      <Box>
        <Typography variant="h3" sx={styles.pageTitle}>
          {i18n.title}
        </Typography>
        <Divider sx={{ width: "95%", margin: "0 auto" }} />
      </Box>
      <Box sx={styles.main}>
        {projects?.length > 0 ? (
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

export const getStaticProps: GetStaticProps = async () => {
  const resp = await api.get("project/getProjects");

  const projects = resp.projects ? resp.projects : [];

  return {
    props: {
      projects: projects,
    },
    revalidate: 60 * 60, // a cada 1 hora
  };
};
