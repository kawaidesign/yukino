import { Grid } from "@mui/material";
import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Nav";
import styles from "../styles/Home.module.css";

type Props = {
  children?: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>rocca</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Grid container alignItems="center">
          <Grid container md={3} xs={12} pr={2} direction="column">
            <Header />
            {/* <Nav /> */}
            <Footer />
          </Grid>
          <Grid item md={9} xs={12}>
            {children}
          </Grid>
        </Grid>
      </main>
    </div>
  );
}
