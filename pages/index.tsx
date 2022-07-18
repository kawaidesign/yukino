import type { NextPage } from "next";
import Image from "next/image";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Image
        src="/images/slide/slide1.jpg"
        width={1170}
        height={814}
        objectFit="contain"
        alt="slide1"
      />
    </Layout>
  );
};

export default Home;
