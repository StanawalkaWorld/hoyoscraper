import axios from 'axios';
import { Topic } from '~~/types/topic';

export default defineEventHandler(async (event) => {
    // https://bbs-api-os.hoyolab.com/community/painter/wapi/explore/topic/list
    // message: 'OK'
    // data->list: Array->base->[id, name, desc, cover]
    
    const endpoint: string = "https://bbs-api-os.hoyolab.com/community/painter/wapi/explore/topic/list";
    const resp = await (await axios.get(endpoint)).data;

    let result: Topic[];
    resp["data"]["list"].forEach(topic => {
        result.push({
            id: topic.base.id,
            name: topic.base.name,
            desc: topic.base.desc,
            cover: topic.base.cover
        });
    });

    return result;
})