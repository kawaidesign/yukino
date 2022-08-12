import { Grid } from "@mui/material";
import Head from "next/head";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import styles from "../styles/Home.module.css";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import NavModal from "./NavModal";
import GalleryModal from "./GalleryModal";
import { DefaultSeo } from "next-seo";

type Props = {
  children?: React.ReactNode;
};

/**
 * レイアウトのコンポーネント。
 */
export default function Layout({ children }: Props) {
  // ナビゲーション用のモーダル
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navHandleClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  // gallery用のモーダル
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalHandleClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className={styles.container}>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="icon" href="/images/favicon/favicon.png" />
      </Head>
      <DefaultSeo
        defaultTitle="yukino design works"
        description="「hug&humor(ハグ&ユーモア)」をコンセプトに、ハートフルで遊び心のあるデザインを展開しているイラストレーターyukinoの HPです"
        openGraph={{
          type: "website",
          title: "yukino design works",
          description:
            "「hug&humor(ハグ&ユーモア)」をコンセプトに、ハートフルで遊び心のあるデザインを展開しているイラストレーターyukinoの HPです",
          site_name: "yukino design works",
          url: "https://www.yukinodesignworks.com",
          images: [
            {
              url: "https://www.yukinodesignworks.com/images/header/hug_humor_ogp.jpg",
              width: 1200,
              height: 630,
              alt: "Og Image Alt",
              type: "image/jpeg",
            },
          ],
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />

      <main>
        <Grid container alignItems="top">
          {/* PC表示用（ロゴ・ナビゲーション・コピーライト） */}
          <Grid
            container
            item
            md={3}
            xs={12}
            pr={2}
            direction="column"
            sx={{ display: { xs: "none", md: "block" } }}
          >
            {/* ロゴ */}
            <Header />
            {/* ナビゲーション */}
            <Nav />
            {/* コピーライト */}
            <Footer />
          </Grid>
          {/* SP表示用（ロゴ・ナビゲーション） */}
          <Grid
            container
            item
            xs={12}
            mb={2}
            sx={{
              display: { xs: "flex", md: "none" },
              justifyContent: "space-between",
            }}
          >
            <Grid item xs={6}>
              <Header />
            </Grid>
            <Grid item mt={2}>
              <IconButton onClick={navHandleClick}>
                <MenuRoundedIcon fontSize="large" />
              </IconButton>
            </Grid>
            {isNavOpen && (
              <NavModal
                navHandleClick={navHandleClick}
                modalHandleClick={modalHandleClick}
              />
            )}
            {isModalOpen && (
              <GalleryModal modalHandleClick={modalHandleClick} />
            )}
          </Grid>
          <Grid item md={9} xs={12}>
            {children}
          </Grid>
          {/* SP表示用（コピーライト） */}
          <Grid
            container
            item
            mt={6}
            mb={10}
            xs={12}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <Footer />
          </Grid>
        </Grid>
      </main>
    </div>
  );
}
