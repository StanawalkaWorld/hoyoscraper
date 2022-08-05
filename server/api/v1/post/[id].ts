import axios from "axios";
import { KeyBasedCache } from "~~/types/CacheClass";
import { FullPostResponse } from "~~/types/Hoyoverse/post-response";
import { Post } from "~~/types/post";

const post_scc = new KeyBasedCache<Post>(
    60000,
    async (id: number): Promise<Post> => {
        try {
            const endpoint: string = `https://bbs-api-os.hoyolab.com/community/post/wapi/getPostFull?post_id=${id}&read=1`;
            const { data } = await axios.get<FullPostResponse>(endpoint);

            const { post, user, stat, game } = data.data.post;

            let result: Post = {
                id: parseInt(post.post_id),
                user: {
                    id: parseInt(user.uid),
                    nickname: user.nickname,
                    description: user.introduce,
                    level: user.level_exp.level,
                    avatar_url: user.avatar_url,
                    pendant: user.pendant,
                },
                subject: post.subject,
                content: post.content,
                cover: post.cover,
                created_at: new Date(post.created_at),
                images: post.images || undefined,
                game: game.game_name,
                topics: post.topic_ids,
                stats: {
                    views: stat.view_num,
                    replies: stat.reply_num,
                },
                is_official: post.post_status.is_official,
            };

            return result;
        } catch (error) {
            console.log(
                "An error occured while requesting posts from hoyolab:",
                error
            );

            throw new Error(error);
        }
    }
);

export default defineEventHandler(({ event }): Promise<Post> => {
    // Posts: https://bbs-api-os.hoyolab.com/community/post/wapi/topic/post/list?gids=2&loading_type=0&page_size=30&reload_times=0&topic_id=${topicId}
    // Info: https://bbs-api-os.hoyolab.com/community/painter/wapi/topic/info?topic_id=${topicId}

    return post_scc.validate(event.context.params.id);
});
