import { Footer } from "@components/Footer";
import { ProjectCard } from "@components/ProjectCard";
import { Box, Divider, Typography } from "@mui/material";
import { styles } from "@styles/project.styles";
import { useTranslate } from "@utils/useTranslate";
import { NextPage } from "next";

const Projects: NextPage = () => {
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
        <ProjectCard
          title="Projeto de teste"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          image="https://picsum.photos/id/237/200/300"
          tags={["teste", "teste2"]}
        />
        <ProjectCard
          title="Projeto de teste 2"
          description="LLorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adi
"
          image="/images/keyboard.png"
          tags={["teste", "teste2", "teste3", "React", "fon"]}
        />
      </Box>
      <Footer />
    </Box>
  );
};

export default Projects;
