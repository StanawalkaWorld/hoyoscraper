import axios from 'axios';
import { ApiError } from '~~/types/api';
import { Topic } from '~~/types/topic';

export default defineEventHandler(async (event): Promise<Topic[] | ApiError> => {
    // https://bbs-api-os.hoyolab.com/community/painter/wapi/explore/topic/list
    // message: 'OK'
    // data->list: Array->base->[id, name, desc, cover]
    
    const endpoint: string = "https://bbs-api-os.hoyolab.com/community/painter/wapi/explore/topic/list";
    const resp = await axios.get(endpoint);
    const data = await resp.data;

    if(resp.status !== 200 || data.message !== "OK") {
        const result: ApiError = {
            code: data.retcode || resp.status,
            msg: data.message || resp.statusText
        }
    }

    let result: Topic[] = [];
    data["data"]["list"].forEach(topic => {
        result.push({
            id: topic.base.id,
            name: topic.base.name,
            desc: topic.base.desc,
            stats: { 
                views: topic.stat.view_num, 
                replies: topic.stat.reply_num
            }
        });
    });

    return result;
})