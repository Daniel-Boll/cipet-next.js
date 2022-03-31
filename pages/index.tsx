import { Footer } from "@components/Footer";
import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { styles } from "@styles/home.styles";
import { useTranslate } from "@utils/useTranslate";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  const i18n = useTranslate("home");

  return (
    <Box sx={styles.container}>
      <Head>
        <title>Blog Pessoal</title>
        <meta name="Blog pessoal" content="Blog Pessoal criado no CIPET" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box sx={styles.header}>
        <Link href="#aboutMe" passHref>
          <Button sx={styles.headerButton}>{i18n.headerButtons.aboutMe}</Button>
        </Link>
        <Link href="/projects" passHref>
          <Button sx={styles.headerButton}>
            {i18n.headerButtons.projects}
          </Button>
        </Link>
        <Link href="#contact" passHref>
          <Button sx={styles.headerButton}>{i18n.headerButtons.contact}</Button>
        </Link>
      </Box>

      <Box sx={styles.landing}>
        <Container sx={styles.mainLandingText}>
          <Typography variant="h3" sx={styles.mainLandingTitle}>
            {i18n.landingSection.mainTitle}
          </Typography>
          <Typography variant="h4" sx={styles.subTextLanding}>
            {i18n.landingSection.subText1}
          </Typography>
          <Typography variant="h4" sx={styles.subTextLanding}>
            {i18n.landingSection.subText2}
          </Typography>
          <Typography variant="h4" sx={styles.subTextLanding}>
            {i18n.landingSection.subText3}
          </Typography>
        </Container>
      </Box>

      <Box id="aboutMe" sx={styles.aboutMe}>
        <Typography variant="h4" sx={styles.aboutMeTitle}>
          {i18n.aboutMeSection.title}
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Container sx={styles.aboutMeArticle}>
            {i18n.aboutMeSection.description}
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
