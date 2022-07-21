import { useQuery } from 'vue-query';
import { Post } from '~~/types/post';

export const useHotPosts = () => {
    return useQuery<Post[]>(
        "hot",
        () => {
            return $fetch("/api/v1/trending/hot");
        },
        { placeholderData: [] }
    );
}