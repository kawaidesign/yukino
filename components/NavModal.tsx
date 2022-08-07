import styles from "../styles/Home.module.css";
import Image from "next/image";
import { Grid } from "@mui/material";
import React, { useState } from "react";
import { MouseEventHandler } from "react";

type props = {
  navHandleClick: MouseEventHandler | undefined;
  modalHandleClick: MouseEventHandler | undefined;
};

/**
 * モーダル。
 * @prop {{ onClick: MouseEventHandler | undefined; }} props モーダルの表示・非表示の切り替えメソッド
 */
const NavModal = (props: props) => {
  return (
    <div
      className={styles.galleryModalBackground}
      onClick={props.navHandleClick}
    >
      <div className={styles.galleryModalContainer}>
        <Grid item mb={2}>
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
        <Grid item mb={2}>
          <Image
            className={styles.navButton}
            onClick={props.modalHandleClick}
            src="/images/nav/gallery.jpg"
            width={90}
            height={32}
            objectFit="contain"
            alt="gallery"
          />
        </Grid>
        <Grid item mb={2}>
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
        <Grid item mb={2}>
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
        <Grid item mb={4}>
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
        <Grid container alignItems="center">
          <Grid item mr={3} className={styles.navButton}>
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
          <Grid item mr={3} className={styles.navButton}>
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
      </div>
    </div>
  );
};

export default NavModal;
