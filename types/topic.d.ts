import { Statistics } from "./stats";

export interface Topic {
    id: number;
    name: string;
    desc?: string;
    stats: Statistics;
};