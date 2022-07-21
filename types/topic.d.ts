import { Post } from "./post";
import { Statistics } from "./stats";

export interface Topic {
    id: number;
    name: string;
    desc?: string;
    stats: Statistics;
};

export interface TopicEndpoint {
    posts?: Post[];
    error: string | false;
    topic?: Topic;
}