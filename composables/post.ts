import { MaybeRef } from "~~/types/monad";
import { useQuery } from "vue-query";
import { Post } from "~~/types/post";

export const usePost = (id: MaybeRef<number>) => {
    return useQuery<Post>(
        ["post", unref(id)],
        () => {
            return $fetch(`/api/v1/post/${id}`);
        },
        {
            placeholderData: {
                id: 0,
                user: {
                    avatar_url: "",
                    id: 0,
                    level: 0,
                    nickname: "...",
                },
                content: "Loading...",
                cover: "",
                created_at: 0,
                game: "Loading...",
                is_official: false,
                stats: {
                    replies: 0,
                    views: 0,
                },
                subject: "Loading...",
                topics: [69],
                images: [],
            },
        }
    );
};
