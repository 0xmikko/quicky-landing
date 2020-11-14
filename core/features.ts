/*
 * Copyright (c) 2020. Mikael Lazarev
 */

export interface Feature {
    id: string;
    name: string;
    weight: number;
    is_header: boolean;
    basic_plan?: string;
    premium_plan?: string;
    teams_plan?: string;

}
