import { Ref } from 'vue';
import { useQuery } from 'vue-query';
import { Post } from '~~/types/post';

export const useTopicPosts = (topicId: number | Ref<number>) => {
    return useQuery<Post[]>(
        ["topicPosts", unref(topicId)],
        () => {
            return $fetch(`/api/v1/topic/${topicId}`);
        },
        { placeholderData: [] }
    );
}