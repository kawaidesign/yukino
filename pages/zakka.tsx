import type { NextPage } from "next";
import Work from "../components/Work";
import { ZAKKALIST } from "../constants/zakkaList";

const Zakka: NextPage = () => {
  return (
    <>
      {/* WORKLISTを読み込んでループして表示する */}
      {ZAKKALIST.map((work, index) => {
        return <Work key={index} src={work.src} isCaption={false} />;
      })}
    </>
  );
};

export default Zakka;
