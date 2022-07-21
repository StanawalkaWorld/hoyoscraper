import axios from 'axios';
import { KeyBasedCache } from '~~/types/CacheClass';
import { TopicResponse } from '~~/types/Hoyoverse/topic-response';
import { Post } from '~~/types/post';

const post_scc = new KeyBasedCache<Post[]>(60000, async (id: number): Promise<Post[]> => {
    try {
        const endpoint: string = `https://bbs-api-os.hoyolab.com/community/post/wapi/topic/post/list?gids=2&loading_type=0&page_size=30&reload_times=0&topic_id=${id}`;
        const { data } = await axios.get<TopicResponse>(endpoint);
    
        let result: Post[] = [];
        data.data.posts.forEach(post_record => {
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


export default defineEventHandler(({ event }): Promise<Post[]> => {
    // Posts: https://bbs-api-os.hoyolab.com/community/post/wapi/topic/post/list?gids=2&loading_type=0&page_size=30&reload_times=0&topic_id=${topicId}
    // Info: https://bbs-api-os.hoyolab.com/community/painter/wapi/topic/info?topic_id=${topicId}


    return post_scc.validate(event.context.params.id);
})