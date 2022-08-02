import { Grid } from "@mui/material";
import Head from "next/head";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import styles from "../styles/Home.module.css";

type Props = {
  children?: React.ReactNode;
};

/**
 * レイアウトのコンポーネント。
 */
export default function Layout({ children }: Props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>yukino</title>
        <meta name="description" content="yukino web site" />
        <link rel="icon" href="/images/nav/usagi.png" />
      </Head>

      <main>
        <Grid container alignItems="top">
          <Grid container item md={3} xs={12} pr={2} direction="column">
            {/* ロゴとサブコピー */}
            <Header />
            {/* ナビゲーション */}
            <Nav />
            {/* コピーライト */}
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
