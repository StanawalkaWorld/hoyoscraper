import { useQuery } from 'vue-query';
import { Post } from '~~/types/post';

export const useHotPosts = () => {
    return useQuery<Post[]>(
        "hot",
        () => {
            return new Promise<Post[]>(async (resolve, reject) => {
                try {
                    const { data, error } = await useFetch<Post[]>("/api/v1/trending/hot");
    
                    if(unref(error)) reject("Server-side error has occured while fetching posts.");
    
                    resolve(unref(data))
                } catch (error) {
                    reject("Error has occured fetching posts");
                }
            });
        },
        { placeholderData: [] }
    );
}