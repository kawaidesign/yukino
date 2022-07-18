import type { NextPage } from "next";
import Layout from "../components/Layout";
import Work from "../components/Work";
import { WORKLIST } from "../constants/workList";

const Gallery: NextPage = () => {
  return (
    <Layout>
      {/* WORKLISTを読み込んでループして表示する */}
      {WORKLIST.map((work, index) => {
        return (
          <Work
            key={index}
            src={work.src}
            title={work.title}
            caption={work.caption}
          />
        );
      })}
    </Layout>
  );
};

export default Gallery;
