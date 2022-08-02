import Link from "next/link";
import Image from "next/image";
import { Grid } from "@mui/material";

/**
 * ヘッダーのコンポーネント。
 */
const Header = () => {
  return (
    <>
      <Grid item mb={-1} mt={3}>
        <Link href="/">
          <Image
            src="/images/header/yukino_logo.png"
            width={220}
            height={100}
            objectFit="contain"
            alt="yukino_logo"
          />
        </Link>
      </Grid>
      <Grid item mb={2}>
        <Image
          src="/images/header/copy.png"
          width={260}
          height={24}
          objectFit="contain"
          alt="copy"
        />
      </Grid>
    </>
  );
};

export default Header;
