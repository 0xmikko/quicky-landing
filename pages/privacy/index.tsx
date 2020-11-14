/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import React from "react";
import Head from "next/head";
import {Footer} from "../../components/Footer/Footer";
import {Landing} from "../../core/landing";
import {PageNotFound} from "../../containers/404";
import AppBar from "../../components/AppBar/AppBar";
import {Favicon} from "../../components/Favicon";
import {BlockWidget} from "../../containers/Block/BlockWidget";

interface LandingProps {
  data: Landing | null;
}

export default function Home({ data }: LandingProps) {
  if (data === null) {
    return <PageNotFound />;
  }

  const blocks = data.blocks.map((b, index) => (
    <BlockWidget data={b} key={index} />
  ));

  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <AppBar />
      {blocks}
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  // try {
  //   const response = await axios.get<Landing>(
  //     getFullUrlWithId("/api/landings/:id/", {
  //       id: "30ae1aeb-dddc-4b84-9f56-eda76b29f7f2",
  //       host: LANDING_ADDR,
  //     })
  //   );
  //
  //   if (response.status === 200) {
  //     console.log(`got:`);
  //     console.log(response.data);
  //     // The value of the `props` key will be
  //     //  passed to the `Home` component
  //     return {
  //       props: { data: response.data },
  //     };
  //   }
  // } catch (e) {
  //   console.log("");
  //   return {
  //     props: { data: null },
  //   };
  // }

  const data: Landing = {
    id: "1",
    metaDescription: "",
    metaKeywords: "",
    title: "Privacy | quickyv",
    url: "/privacy",
    metaImageUrl: "https://storage.googleapis.com/quicky-apps/landing/embed/quicky.jpg",
    blocks: [
      {
        id: "2",
        type: "Markdown",
        content: {
          id: "2",
          title: "Privacy",
          text: "This is privacey issues cncerning"
        }
      }

    ],
  };

  return {
    props: { data },
  };
}
