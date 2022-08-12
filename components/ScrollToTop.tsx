import { useEffect, useState } from "react";
import ArrowCircleUpRoundedIcon from "@mui/icons-material/ArrowCircleUpRounded";
import styles from "../styles/Home.module.css";

const PAGE_Y_OFFSET = 300;

const ScrollToTop = () => {
  const [show, setShow] = useState<boolean>(false);

  const changeShow = () => {
    if (window.pageYOffset > PAGE_Y_OFFSET) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const onScrollTop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", changeShow);
    return () => window.removeEventListener("scroll", changeShow);
  }, []);

  if (show)
    return (
      <div className={styles.scrollToTopIcon}>
        <ArrowCircleUpRoundedIcon fontSize="large" onClick={onScrollTop} />
      </div>
    );
  else return null;
};

export default ScrollToTop;
