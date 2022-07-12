import { Topic } from "./topic";

export interface Post {
    id: number;
    user_id: number;
    subject: string;
    content: string;
    cover: string;
    created_at: Date;
    images: string[];
    game: string;
    topics: Topic[];
};