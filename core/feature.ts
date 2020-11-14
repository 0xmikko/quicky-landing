/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import {BlockModel} from "./block";

export interface Feature extends BlockModel{
    description: string;
    position: 'Left' | 'Right';
    youtubeLink?: string;
    imageUrl?: string
}
