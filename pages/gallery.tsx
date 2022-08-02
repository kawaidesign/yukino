import type { NextPage } from "next";
import Work from "../components/Work";
import { WORKLIST } from "../constants/workList";

const Gallery: NextPage = () => {
  return (
    <>
      {/* WORKLISTを読み込んでループして表示する */}
      {WORKLIST.map((work, index) => {
        return (
          <Work
            key={index}
            src={work.src}
            isCaption={true}
            title={work.title}
            caption={work.caption}
          />
        );
      })}
    </>
  );
};

export default Gallery;
