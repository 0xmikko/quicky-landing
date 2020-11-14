/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import React from "react";
import { Footer } from "../../components/Footer/Footer";
import { Landing } from "../../core/landing";
import { PageNotFound } from "../../containers/404";
import AppBar from "../../components/AppBar/AppBar";
import { BlockWidget } from "../../containers/Block/BlockWidget";
import { MetaTag } from "../../components/MetaTag";

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
      <MetaTag data={data} />

      <AppBar backgroundColor="#20bf6b" />
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
    metaDescription:
      "quicky is a nocode platform for building self-service apps. Bring your business online and serve your customers better. Get started for free.",
    metaKeywords: "",
    title: "Product | quicky",
    url: "/product",

    blocks: [
      {
        id: "1",
        type: "HeroProduct",
        content: {
          id: "1",
          title: "Bring your business online",
          subtitle: "No code platform for self-service apps",
          imageUrl: "/banner_app.png",
          backgroundColor: "#20bf6b",
        },
      },
      {
        id: "2",
        type: "Feature",
        content: {
          id: "22",
          title: "Create your app by filling out a few spreadsheets",
          position: "Left",
          description:
            "Select an industry-based template, fill out a few spreadsheets, and your app is ready to serve your customers.",
          imageUrl: "/employees.png",
          // backgroundColor: "#d1d8e0",
        },
      },
      {
        id: "2",
        type: "Feature",
        content: {
          id: "22",
          title: "Self-service & automation",
          position: "Right",
          description:
            "Using self-service apps, your customers can manage their needs without making phone calls. quicky shows information in real-time, sends notifications to managers, and helps automate many routine operations based on user actions.",
          imageUrl: "/appointments.png",
          backgroundColor: "#2bcbba",
        },
      },
      {
        id: "2",
        type: "Feature",
        content: {
          id: "22",
          title: "Manage your customers with user-friendly CRM",

          position: "Left",
          description:
            "quicky CRM is designed to help you serve your customer better. Place a phone call in 1 click, create segments and email campaigns, and keep all customer data close at hand on a laptop or mobile app.",
          imageUrl: "/crm.png",

          // backgroundColor: "#2bcbba",
        },
      },
      {
        id: "6",
        type: "Register",
        content: {
          id: "5",
          title: "Build your customer app now",
          subtitle: "Hello",
          backgroundColor: "#fd9644",
        },
      },
    ],
  };

  return {
    props: { data },
  };
}
