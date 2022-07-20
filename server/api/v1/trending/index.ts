import axios from 'axios';
import { Topic } from '~~/types/topic';
import { TrendResponse } from '~~/types/Hoyoverse/trending-response';
import { SSC } from '~~/types/CacheClass';

const trending_ssc = new SSC<Topic[]>(60000, async (): Promise<Topic[]> => {
    try {
        const endpoint: string = "https://bbs-api-os.hoyolab.com/community/painter/wapi/explore/topic/list";
        const { data } = await axios.get<TrendResponse>(endpoint);
    
        let result: Topic[] = [];
        data["data"]["list"].forEach(topic => {
            result.push({
                id: parseInt(topic.base.id),
                name: topic.base.name,
                desc: topic.base.desc,
                stats: { 
                    views: parseInt(topic.stat.view_num), 
                    replies: parseInt(topic.stat.reply_num)
                }
            });
        });

        return result;
    } catch (error) {
        console.log("An error occured while requesting data from Hoyolab", error);

        return [
            {
                id: 0,
                name: "API ERROR",
                desc: `An error occured while processing request from Hoyolab: ${error}`,
                stats: {
                    views: 404,
                    replies: 0
                }
            }
        ]
    }

    
});

export default defineEventHandler((event): Promise<Topic[]> => {
    // https://bbs-api-os.hoyolab.com/community/painter/wapi/explore/topic/list
    // message: 'OK'
    // data->list: Array->base->[id, name, desc]

    return trending_ssc.validate();
})