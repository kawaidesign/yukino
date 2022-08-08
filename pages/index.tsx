import type { NextPage } from "next";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const images: string[] = [
    "/images/slide/hug_humor.jpg",
    "/images/slide/recruitment_illust.jpg",
    "/images/slide/slide1.jpg",
    "/images/slide/slide2.jpg",
    "/images/slide/slide3.jpg",
  ];

  const [imageNumber, setImageNumbaer] = useState(0);

  /**
   * 一定時間ごとにメイン画像を切り替える。
   */
  useEffect(() => {
    const intervalId = setInterval(() => {
      // imagesの最後の画像を表示していたら最初に戻す
      // 最後の画像でなければ次の画像を表示する
      setImageNumbaer(
        imageNumber === images.length - 1
          ? imageNumber - (images.length - 1)
          : imageNumber + 1
      );
    }, 8000);
    return function () {
      clearInterval(intervalId);
    };
  }, [imageNumber, images.length]);

  return (
    <Image
      className={styles.fadeIn}
      src={images[imageNumber]}
      objectFit="contain"
      width={1200}
      height={840}
      alt="slide"
    />
  );
};

export default Home;
