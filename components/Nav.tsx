import Image from "next/image";
import { Grid } from "@mui/material";
import React, { useState } from "react";
import GalleryModal from "./GalleryModal";
import styles from "../styles/Home.module.css";

/**
 * ナビゲーションのコンポーネント。
 * @param children 子要素
 */
const Nav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <Grid item mb={1} ml={-1.4}>
        <a
          href="https://www.yukinoshop.com/about"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className={styles.navButton}
            src="/images/nav/about.jpg"
            width={90}
            height={32}
            objectFit="contain"
            alt="about"
          />
        </a>
      </Grid>
      <Grid item mb={1} ml={-1}>
        <Image
          className={styles.navButton}
          onClick={handleClick}
          src="/images/nav/gallery.jpg"
          width={90}
          height={32}
          objectFit="contain"
          alt="gallery"
        />
      </Grid>
      {isModalOpen && <GalleryModal onClick={handleClick} />}
      <Grid item mb={1} ml={-2}>
        <a
          href="https://www.yukinoshop.com/blog"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className={styles.navButton}
            src="/images/nav/blog.jpg"
            width={90}
            height={32}
            objectFit="contain"
            alt="blog"
          />
        </a>
      </Grid>
      <Grid item mb={1} ml={-2}>
        <a
          href="https://www.yukinoshop.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className={styles.navButton}
            src="/images/nav/shop.jpg"
            width={90}
            height={32}
            objectFit="contain"
            alt="shop"
          />
        </a>
      </Grid>
      <Grid item mb={1}>
        <a
          href="https://thebase.in/inquiry/getumenlabo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className={styles.navButton}
            src="/images/nav/contact.jpg"
            width={90}
            height={32}
            objectFit="contain"
            alt="contact"
          />
        </a>
      </Grid>
      {/* 以下、SNS */}
      <Grid container alignItems="center" mb={1}>
        <Grid item mr={1} className={styles.navButton}>
          <a
            href="https://linktr.ee/cinnamonsasaki"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/nav/usagi.png"
              width={26}
              height={26}
              objectFit="contain"
              alt="usagi"
            />
          </a>
        </Grid>
        <Grid item ml={0.5} mr={1.5} className={styles.navButton}>
          <a
            href="https://www.instagram.com/yukino_design_works/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/nav/instagram.png"
              width={20}
              height={20}
              objectFit="contain"
              alt="instagram"
            />
          </a>
        </Grid>
        <Grid item className={styles.navButton}>
          <a
            href="https://twitter.com/yukino_dw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/nav/twitter.png"
              width={28}
              height={28}
              objectFit="contain"
              alt="twitter"
            />
          </a>
        </Grid>
      </Grid>
    </>
  );
};

export default Nav;
