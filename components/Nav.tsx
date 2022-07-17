import Link from "next/link";
import Image from "next/image";
import { Grid } from "@mui/material";

const Nav = () => {
  return (
    <>
      <Grid item mb={1} ml={-1.4}>
        <a
          href="https://www.yukinoshop.com/about"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/nav/about.jpg"
            width={90}
            height={32}
            objectFit="contain"
            alt="about"
          />
        </a>
      </Grid>
      <Grid item mb={1} ml={-1}>
        <Link href="/gallery">
          <Image
            src="/images/nav/gallery.jpg"
            width={90}
            height={32}
            objectFit="contain"
            alt="gallery"
          />
        </Link>
      </Grid>
      <Grid item mb={1} ml={-2}>
        <a
          href="https://www.yukinoshop.com/blog"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/nav/blog.jpg"
            width={90}
            height={32}
            objectFit="contain"
            alt="blog"
          />
        </a>
      </Grid>
      <Grid item mb={1} ml={-2}>
        <a
          href="https://www.yukinoshop.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/nav/shop.jpg"
            width={90}
            height={32}
            objectFit="contain"
            alt="shop"
          />
        </a>
      </Grid>
      <Grid item mb={1}>
        <a
          href="https://thebase.in/inquiry/getumenlabo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/nav/contact.jpg"
            width={90}
            height={32}
            objectFit="contain"
            alt="contact"
          />
        </a>
      </Grid>
      <Grid item mb={1}>
        <a
          href="https://linktr.ee/cinnamonsasaki"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/nav/usagi.png"
            width={32}
            height={32}
            objectFit="contain"
            alt="usagi"
          />
        </a>
      </Grid>
    </>
  );
};

export default Nav;
