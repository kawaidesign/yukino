import Image from "next/image";
import styles from "../styles/Home.module.css";

type props = {
  src: string;
  title: string;
  caption: string;
};

const Work = (props: props) => {
  return (
    <div className={styles.gallery}>
      <Image
        src={props.src}
        width={1170}
        height={814}
        objectFit="contain"
        alt="works"
      />
      <div className={styles.mask}>
        <div>
          <div className={styles.title}>{props.title}</div>
          <div className={styles.caption}>{props.caption}</div>
        </div>
      </div>
    </div>
  );
};

export default Work;
