import styles from "../styles/Home.module.css";
import Link from "next/link";
import { MouseEventHandler } from "react";

type props = {
  modalHandleClick: MouseEventHandler | undefined;
};

/**
 * モーダル。
 * @prop {{ onClick: MouseEventHandler | undefined; }} props モーダルの表示・非表示の切り替えメソッド
 */
const GalleryModal = (props: props) => {
  return (
    <div
      className={styles.galleryModalBackground}
      onClick={props.modalHandleClick}
    >
      <div className={styles.galleryModalContainer}>
        <p className={styles.galleyModaltitle}>どちらを見ますか？</p>
        <div className={styles.galleryModalButtonContainer}>
          <Link href="/gallery">
            <button
              className={styles.galleyModalButton}
              onClick={props.modalHandleClick}
            >
              イラスト
            </button>
          </Link>
          <Link href="/zakka">
            <button
              className={styles.galleyModalButton}
              onClick={props.modalHandleClick}
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
