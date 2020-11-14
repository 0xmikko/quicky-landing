/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import {Hero} from "./hero";
import {Feature} from "./feature";
import {RegisterBlock} from "./register";
import {MarkdownBlock} from "./markdown";

export interface BlockModel {
  id: string;
  title: string;
  subtitle?: string;
  color?: string;
  backgroundColor?: string;
}

export type Block =
  | {
      id: string;
      type: "Hero";
      content: Hero;
    }
  | {
      id: string;
      type: "Feature";
      content: Feature;
    }
  | {
      id: string;
      type: "Register";
      content: RegisterBlock;
    }
  | {
      id: string;
      type: "Markdown";
      content: MarkdownBlock;
    }
