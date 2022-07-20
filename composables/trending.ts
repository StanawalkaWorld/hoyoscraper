import { Topic } from '~~/types/topic';
import { useQuery } from 'vue-query';

export const useTrendingTopics = () => {
    return useQuery<Topic[]>(
        "trending",
        () => {
            return $fetch("/api/v1/trending");
        },
        { placeholderData: [] }
    );
}