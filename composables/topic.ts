import { Ref } from 'vue';
import { useQuery } from 'vue-query';
import { Post } from '~~/types/post';

export const useTopicPosts = (topicId: number | Ref<number>) => {
    return useQuery<Post[]>(
        ["topicPosts", unref(topicId)],
        () => {
            return new Promise<Post[]>(async (resolve, reject) => {
                try {
                    const { data, error } = await useFetch<Post[]>(`/api/v1/topic/${unref(topicId)}`);
    
                    if(unref(error)) reject("Error has occured fetching posts");
    
                    resolve(unref(data));
                } catch (error) {
                    reject("Error has occured fetching posts");
                }
            });
        }
    );
}