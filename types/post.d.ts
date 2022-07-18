import { Statistics } from "./stats";
import { Topic } from "./topic";
import { User } from "./user";

export interface Post {
    id: number;
    user: User;
    subject: string;
    content: string;
    cover: string;
    created_at: Date;
    images: string[];
    game: string;
    topics: number[];
    stats: Statistics;
    is_official: boolean;
};