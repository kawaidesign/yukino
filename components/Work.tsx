import Image from "next/image";
import styles from "../styles/Home.module.css";

// 画像の情報の型定義
type props = {
  src: string; // パス
  isCaption: boolean; // ホバー時にキャプションを表示する = true / 表示しない = false
  title?: string; // タイトル
  caption?: string; // キャプション
};

/**
 * galleryに表示するイラスト
 * @param work 画像の情報
 */
const Work = (props: props) => {
  return (
    <div className={styles.gallery}>
      <Image
        src={props.src}
        width={1200}
        height={840}
        objectFit="contain"
        alt="works"
      />
      {/* ホバー時に表示する説明文 */}
      {props.isCaption && (
        <div className={styles.mask}>
          <div>
            <div className={styles.title}>{props.title}</div>
            <div className={styles.caption}>{props.caption}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Work;
