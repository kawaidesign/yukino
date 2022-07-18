import type { NextPage } from "next";
import Layout from "../components/Layout";
import Work from "../components/Work";

const Gallery: NextPage = () => {
  return (
    <Layout>
      <Work
        src="/images/gallery/29_rocca_skirt.jpg"
        title="「ブーケ」/ textile / 2021"
        caption="説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。"
      />
    </Layout>
  );
};

export default Gallery;
