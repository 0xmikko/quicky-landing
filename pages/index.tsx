/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import React from "react";
import {Footer} from "../components/Footer/Footer";
import {Landing} from "../core/landing";
import {PageNotFound} from "../containers/404";
import AppBar from "../components/AppBar/AppBar";
import {BlockWidget} from "../containers/Block/BlockWidget";
import {MetaTag} from "../components/MetaTag";

interface LandingProps {
  data: Landing | null;
}

export default function IndexPage({ data }: LandingProps) {
  if (data === null) {
    return <PageNotFound />;
  }

  const blocks = data.blocks.map((b, index) => (
    <BlockWidget data={b} key={index} />
  ));

  return (
    <>
      <MetaTag data={data} />
      <AppBar />
      {blocks}
      <Footer />
    </>
  );
}

export async function getStaticProps(): Promise<{ props: LandingProps }> {

  const data: Landing = {
    id: "1",
    metaDescription:
      "Quicky is no-code platform for business apps that perfectly fits for small business. Get started for free.",
    metaKeywords: "nocode, business apps, apps development",
    title: "Quicky - AI business app builder for Quickbase apps",
    url: "/",

    blocks: [
      {
        id: "1",
        type: "Hero",
        content: {
          id: "1",
          // title: "Bring your business online",
          // subtitle:
          //     "Create your business app in 5 minutes! With your new app, customers can place orders, manage appointments, and interact with your business online.",
          title: "Speed up innovation process with AI & Quickbase",
          subtitle:
            "Build business apps using smart AI assistant in minutes. No programming skills requires.",
          imageUrl: "/banner/two_women.jpg",
        },
      },
      {
        id: "2",
        type: "Feature",
        content: {
          id: "22",
          title: "AI powered business app builder",
          position: "Left",
          description: `Build, design & launch your app in minutes using power of Artificial Intelligence and wide choice of templates designed to fulfill your businesses needs.
    `,
          imageUrl: "/banner/videoImg.jpg",
          youtubeLink: "https://www.youtube.com/embed/RB9NmLZ6UrM",
          backgroundColor: "#EEE",
        },
      },


      {
        id: "3",
        type: "Feature",
        content: {
          id: "2",
          title: "Digital transformation starts here",
          subtitle: "[Check the product tour]",
          description:
              "Quicky provides powerful tools for everyday management, which are perfectly connected with apps.",
          position: "Right",
          imageUrl: "/banner/videoImg.jpg",
          backgroundColor: "#D6C9AA",
        },
      },

      {
        id: "4",
        type: "Feature",
        content: {
          id: "2",
          title: "Automate everything with Quickbase power",
          subtitle: "[Check the product tour]",
          description:
              "Quicky provides powerful tools for everyday management, which are perfectly connected with apps.",
          position: "Left",
          imageUrl: "/banner/videoImg.jpg",
        },
      },
      {
        id: "5",
        type: "Register",
        content: {
          id: "5",
          title: "Develop your business app in minutes",
          subtitle: "Hello",
          backgroundColor: "#79429d",
        },
      },
    ],
  };

  return {
    props: { data },
  };
}
