import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import Head from "next/head";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {
  <>
    <Head>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
    </Head>
    <DefaultSeo
      defaultTitle="yukino design works"
      description="「hug&humor(ハグ&ユーモア)」をコンセプトに、ハートフルで遊び心のあるデザインを展開しているイラストレーターyukinoの HPです"
      openGraph={{
        type: "website",
        title: "yukino design works",
        description:
          "「hug&humor(ハグ&ユーモア)」をコンセプトに、ハートフルで遊び心のあるデザインを展開しているイラストレーターyukinoの HPです",
        site_name: "yukino design works",
        url: "https://www.yukinodesignworks.com/",
        images: [
          {
            url: "https://www.yukinodesignworks.com/images/header/hug_humor_ogp.jpg",
            width: 1200,
            height: 630,
            alt: "Og Image Alt",
            type: "image/jpeg",
          },
        ],
      }}
      twitter={{
        handle: "@handle",
        site: "@site",
        cardType: "summary_large_image",
      }}
    />
    return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
    );
  </>;
}

export default MyApp;
