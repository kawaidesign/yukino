import styles from "../styles/Home.module.css";
import Link from "next/link";
import { MouseEventHandler } from "react";

/**
 * モーダル。
 * @prop {{ onClick: MouseEventHandler | undefined; }} props モーダルの表示・非表示の切り替えメソッド
 */
const GalleryModal = (props: { onClick: MouseEventHandler }) => {
  return (
    <div className={styles.galleryModalBackground} onClick={props.onClick}>
      <div className={styles.galleryModalContainer}>
        <p className={styles.galleyModaltitle}>どちらを見ますか？</p>
        <div className={styles.galleryModalButtonContainer}>
          <Link href="/gallery">
            <button
              className={styles.galleyModalButton}
              onClick={props.onClick}
            >
              イラスト
            </button>
          </Link>
          <Link href="/zakka">
            <button
              className={styles.galleyModalButton}
              onClick={props.onClick}
            >
              雑貨
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;
