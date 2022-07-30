import type { NextPage } from "next";
import Image from "next/image";
import Layout from "../components/Layout";
import React, { useState, useEffect } from "react";

const Home: NextPage = () => {
  const images: string[] = [
    "/images/slide/slide1.jpg",
    "/images/slide/slide2.jpg",
    "/images/slide/slide3.jpg",
    "/images/slide/slide4.jpg",
  ];

  const [imageNumber, setImageNumbaer] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log(imageNumber);
      // imagesの最後の画像を表示していたら最初に戻す
      // 最後の画像でなければ次の画像を表示する
      setImageNumbaer(
        imageNumber === images.length - 1
          ? imageNumber - (images.length - 1)
          : imageNumber + 1
      );
    }, 1000);
    return function () {
      clearInterval(intervalId);
    };
  }, [imageNumber, images.length]);

  return (
    <Layout>
      <Image
        src={images[imageNumber]}
        objectFit="contain"
        width={1170}
        height={814}
        alt="slide"
      />
    </Layout>
  );
};

export default Home;
