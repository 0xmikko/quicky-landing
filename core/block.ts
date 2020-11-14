/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import { Hero } from "./hero";
import { Feature } from "./feature";
import { NumberBlock } from "./numberBlock";
import { UseCase, UseCaseListBlock } from "./useCase";
import { GalleryBlock } from "./gallery";
import { RegisterBlock } from "./register";
import { MarkdownBlock } from "./markdown";
import { DriveBlock } from "./drive";

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
      type: "HeroProduct";
      content: Hero;
    }
  | {
      id: string;
      type: "Feature";
      content: Feature;
    }
  | {
      id: string;
      type: "NumberBlock";
      content: NumberBlock;
    }
  | {
      id: string;
      type: "UseCaseList";
      content: UseCaseListBlock;
    }
  | {
      id: string;
      type: "Gallery";
      content: GalleryBlock;
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
  | {
      id: string;
      type: "Drive";
      content: DriveBlock;
    };
