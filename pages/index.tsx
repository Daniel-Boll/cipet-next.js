import { Footer } from "@components/Footer";
import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { styles } from "@styles/home.styles";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <Box sx={styles.container}>
      <Head>
        <title>Blog Pessoal</title>
        <meta name="Blog pessoal" content="Blog Pessoal criado no CIPET" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box sx={styles.header}>
        <Link href="#aboutMe" passHref>
          <Button sx={styles.headerButton}>Sobre Mim</Button>
        </Link>
        <Link href="/projects" passHref>
          <Button sx={styles.headerButton}>Projetos</Button>
        </Link>
        <Link href="#contact" passHref>
          <Button sx={styles.headerButton}>Contato</Button>
        </Link>
      </Box>

      <Box sx={styles.landing}>
        <Container sx={styles.mainLandingText}>
          <Typography variant="h3" sx={styles.mainLandingTitle}>
            Felipi Lima Matozinho
          </Typography>
          <Typography variant="h4" sx={styles.subTextLanding}>
            Estudante de Computação
          </Typography>
          <Typography variant="h4" sx={styles.subTextLanding}>
            Desenvolvedor React
          </Typography>
          <Typography variant="h4" sx={styles.subTextLanding}>
            Aluno Ciência da Computação na UNIOESTE
          </Typography>
        </Container>
      </Box>

      <Box id="aboutMe" sx={styles.aboutMe}>
        <Typography variant="h4" sx={styles.aboutMeTitle}>
          Sobre Mim
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Container sx={styles.aboutMeArticle}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&aposs standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </Container>
          <Box sx={styles.readerWrapper}>
            <Image
              src="/images/reading.svg"
              width={350}
              height={380}
              alt="illustrative image"
            />
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
