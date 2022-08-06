import Link from "next/link";
import Image from "next/image";
import { Grid } from "@mui/material";
import styles from "../styles/Home.module.css";

/**
 * ヘッダーのコンポーネント。
 */
const Header = () => {
  return (
    <>
      <Grid item mb={3} mt={3} className={styles.navButton}>
        <Link href="/">
          <Image
            src="/images/header/logo.png"
            width={220}
            height={75}
            objectFit="contain"
            alt="yukino_logo"
          />
        </Link>
      </Grid>
    </>
  );
};

export default Header;
