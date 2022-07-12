import axios from 'axios';
import { ApiError } from '~~/types/api';
import { Topic } from '~~/types/topic';

export default defineEventHandler(async (event): Promise<Topic[] | ApiError> => {
    // https://bbs-api-os.hoyolab.com/community/painter/wapi/explore/topic/list
    // message: 'OK'
    // data->list: Array->base->[id, name, desc, cover]
    
    const endpoint: string = "https://bbs-api-os.hoyolab.com/community/painter/wapi/explore/topic/list";
    const resp = await (await axios.get(endpoint));

    if(resp.status !== 200 || resp.data.message !== "OK") {
        const result: ApiError = {
            code: resp.data.retcode || resp.status,
            msg: resp.data.message || resp.statusText
        }
    }

    let result: Topic[] = [];
    resp.data["data"]["list"].forEach(topic => {
        result.push({
            id: topic.base.id,
            name: topic.base.name,
            desc: topic.base.desc,
        });
    });

    return result;
})