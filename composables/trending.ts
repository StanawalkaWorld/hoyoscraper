import { Topic } from '~~/types/topic';
import { useQuery } from 'vue-query';

export const useTrendingTopics = () => {
    return useQuery<Topic[]>(
        "trending",
        () => {
            return new Promise<Topic[]>(async (resolve, reject) => {
                const { data, error } = await useFetch("/api/v1/trending");

                if(unref(error)) reject("Error has occured fetching topics");

                resolve(unref(data));
            });
        }
    );
}