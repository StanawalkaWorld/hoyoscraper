import { Ref } from "vue";
import { useQuery } from "vue-query";
import { MaybeRef } from "~~/types/monad";
import { TopicEndpoint } from "~~/types/topic";

export const useTopicPosts = (topicId: MaybeRef<number>) => {
    return useQuery<TopicEndpoint>(
        ["topicPosts", unref(topicId)],
        () => {
            return $fetch(`/api/v1/topic/${topicId}`);
        },
        {
            placeholderData: {
                posts: [],
                error: false,
                topic: {
                    id: 0,
                    name: "Loading...",
                    stats: { views: 420, replies: 69 },
                },
            },
        }
    );
};
