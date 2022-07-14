import axios from 'axios';
import { Topic } from '~~/types/topic';
import { TrendResponse } from '~~/types/Hoyoverse/trending-response';

export default defineEventHandler(async (event): Promise<Topic[]> => {
    // https://bbs-api-os.hoyolab.com/community/painter/wapi/explore/topic/list
    // message: 'OK'
    // data->list: Array->base->[id, name, desc]
    
    const endpoint: string = "https://bbs-api-os.hoyolab.com/community/painter/wapi/explore/topic/list";
    const resp = await axios.get<TrendResponse>(endpoint);
    const data = await resp.data;

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
})