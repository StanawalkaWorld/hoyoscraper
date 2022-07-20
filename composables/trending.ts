import { Topic } from '~~/types/topic';
import { useQuery } from 'vue-query';

export const useTrendingTopics = () => {
    return useQuery<Topic[]>(
        "trending",
        () => {
            return new Promise<Topic[]>(async (resolve, reject) => {
                try {
                    const { data, error } = await useFetch<Topic[]>("/api/v1/trending");
    
                    if(unref(error)) reject("Error has occured fetching topics");
    
                    resolve(unref(data));
                } catch (error) {
                    reject("Error has occured fetching topics");
                }
            });
        },
        { placeholderData: [] }
    );
}