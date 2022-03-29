import { Button } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const buttonStyle = {
    color: "white",
    textTransform: "none",
    fontSize: "1rem",
    textShadow: "1px 1px 4px rgba(0, 0, 0, 0.9)",
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Blog Pessoal</title>
        <meta name="Blog pessoal" content="Blog Pessoal criado no CIPET" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <Link href="#aboutMe" passHref>
          <Button sx={buttonStyle}>Sobre Mim</Button>
        </Link>
        <Link href="/projects" passHref>
          <Button sx={buttonStyle}>Projetos</Button>
        </Link>
        <Link href="#contact" passHref>
          <Button sx={buttonStyle}>Contato</Button>
        </Link>
      </header>

      <section className={styles.landing}>
        <div className={styles.mainLandingText}>
          <h1>Felipi Lima Matozinho</h1>
          <p>Estudante de Computação</p>
          <p>Desenvolvedor React</p>
          <p>Aluno Ciência da Computação na UNIOESTE</p>
        </div>
      </section>

      <section id="aboutMe" className={styles.aboutMe}>
        <h2>Sobre Mim</h2>
        <div>
          <article>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&aposs standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </article>
          <div className={styles.readerWrapper}>
            <Image
              src="/images/reading.svg"
              width={350}
              height={380}
              alt="illustrative image"
            />
          </div>
        </div>
      </section>
      <footer id="contact" className={styles.footer}>
        <span>©CIPET - PETComp</span>
        <div className={styles.socialMediaLinks}>
          <span>
            <Image
              src="/icons/github.svg"
              width={20}
              height={20}
              alt="github icon"
            />{" "}
            /matozinho
          </span>
          <span>
            <Image
              src="/icons/instagram.svg"
              width={20}
              height={20}
              alt="instagram icon"
            />{" "}
            @lima_felipi
          </span>
          <span>
            <Image
              src="/icons/facebook.svg"
              width={20}
              height={20}
              alt="facebook icon"
            />{" "}
            /Felipi Lima Matozinho
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Home;
