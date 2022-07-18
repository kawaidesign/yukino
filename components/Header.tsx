import Image from "next/image";
import { Grid } from "@mui/material";

const Header = () => {
  return (
    <>
      <Grid item mb={-1} mt={3}>
        <Image
          src="/images/header/yukino_logo.png"
          width={220}
          height={100}
          objectFit="contain"
          alt="yukino_logo"
        />
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
