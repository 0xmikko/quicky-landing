/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import React from "react";
import {Block} from "../../core/block";
import {HeroBlock} from "../../components/Hero/HeroBlock";
import {FeatureBlockWidget} from "../../components/FeatureBlock/FeatureBlockWidget";
import {RegisterBlockWidget} from "../../components/Register/RegisterBlockWidget";

export interface BlockWidgetProps {
  data: Block;
}

export function BlockWidget({ data }: BlockWidgetProps): React.ReactElement {
  switch (data.type) {
    case "Hero":
      return <HeroBlock data={data.content} />;
    case "Feature":
      return <FeatureBlockWidget data={data.content} />;
    case "Register":
      return <RegisterBlockWidget data={data.content} />;

  }
  return <div />;
}
