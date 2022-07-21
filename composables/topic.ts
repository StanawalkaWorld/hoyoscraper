import { Ref } from 'vue';
import { useQuery } from 'vue-query';
import { TopicEndpoint } from '~~/types/topic';

export const useTopicPosts = (topicId: number | Ref<number>) => {
    return useQuery<TopicEndpoint>(
        ["topicPosts", unref(topicId)],
        () => {
            return $fetch(`/api/v1/topic/${topicId}`);
        },
        { placeholderData: { posts: [], error: false, topic: { id: 0, name: "Loading...", stats: { views: 420, replies: 69 } } } }
    );
}