import axios from 'axios';
import { SSC } from '~~/types/CacheClass';
import { HotResponse } from '~~/types/Hoyoverse/hot-response';
import { Post } from '~~/types/post';

const post_scc = new SSC<Post[]>(60000, async (): Promise<Post[]> => {
    try {
        const endpoint: string = "https://bbs-api-os.hoyolab.com/community/post/wapi/post/list?loading_type=0&page_size=30&reload_times=0&type=1";
        const { data } = await axios.get<HotResponse>(endpoint);
    
        let result: Post[] = [];
        data.data.list.forEach(post_record => {
            result.push({
                id: parseInt(post_record.post.post_id),
                user: {
                    id: parseInt(post_record.user.uid),
                    nickname: post_record.user.nickname,
                    description: post_record.user.introduce,
                    level: post_record.user.level_exp.level,
                    avatar_url: post_record.user.avatar_url,
                    pendant: post_record.user.pendant
                },
                subject: post_record.post.subject,
                content: post_record.post.content,
                cover: post_record.post.cover,
                created_at: new Date(post_record.post.created_at),
                images: post_record.post.images || undefined,
                game: post_record.game.game_name,
                topics: post_record.post.topic_ids,
                stats: {
                    views: post_record.stat.view_num,
                    replies: post_record.stat.reply_num
                },
                is_official: post_record.post.post_status.is_official
            });
        });
    
        return result;
    } catch (error) {
        console.log("An error occured while requesting posts from hoyolab", error);

        return [

        ]
    }
});

export default defineEventHandler((event): Promise<Post[]> => {
    // https://bbs-api-os.hoyolab.com/community/post/wapi/post/list?loading_type=0&page_size=15&reload_times=0&type=1

    return post_scc.validate();
})