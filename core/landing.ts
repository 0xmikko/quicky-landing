/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import { Block } from "./block";
import { Meta } from "./meta";

export interface Landing extends Meta {
  id: string;

  // Blocks
  blocks: Array<Block>;
}
