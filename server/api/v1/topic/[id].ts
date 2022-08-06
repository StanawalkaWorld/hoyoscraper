import axios from "axios";
import { KeyBasedCache } from "~~/types/CacheClass";
import { TopicInfoResponse } from "~~/types/Hoyoverse/topic-info-response";
import { TopicResponse } from "~~/types/Hoyoverse/topic-response";
import { Post } from "~~/types/post";
import { TopicEndpoint } from "~~/types/topic";

const post_scc = new KeyBasedCache<TopicEndpoint>(
    60000,
    async (id: number): Promise<TopicEndpoint> => {
        try {
            const endpoint: string = `https://bbs-api-os.hoyolab.com/community/post/wapi/topic/post/list?gids=2&loading_type=0&page_size=30&reload_times=0&topic_id=${id}`;
            const { data } = await axios.get<TopicResponse>(endpoint);

            let posts: Post[] = [];
            data.data.posts.forEach((post_record) => {
                posts.push({
                    id: parseInt(post_record.post.post_id),
                    user: {
                        id: parseInt(post_record.user.uid),
                        nickname: post_record.user.nickname,
                        description: post_record.user.introduce,
                        level: post_record.user.level_exp.level,
                        avatar_url: post_record.user.avatar_url,
                        pendant: post_record.user.pendant,
                    },
                    subject: post_record.post.subject,
                    content: post_record.post.content,
                    cover: post_record.post.cover,
                    created_at: new Date(post_record.post.created_at),
                    images: post_record.post.images || undefined,
                    video: post_record.post.video || undefined,
                    game: post_record.game.game_name,
                    topics: post_record.post.topic_ids,
                    stats: {
                        views: post_record.stat.view_num,
                        replies: post_record.stat.reply_num,
                    },
                    is_official: post_record.post.post_status.is_official,
                });
            });

            const { data: topicInfo } = await axios.get<TopicInfoResponse>(
                `https://bbs-api-os.hoyolab.com/community/painter/wapi/topic/info?topic_id=${id}`
            );

            return {
                posts,
                error: false,
                topic: {
                    id: parseInt(topicInfo.data.info.base.id),
                    name: topicInfo.data.info.base.name,
                    desc: topicInfo.data.info.base.desc,
                    stats: {
                        views: parseInt(topicInfo.data.info.stat.view_num),
                        replies: parseInt(topicInfo.data.info.stat.reply_num),
                    },
                },
            };
        } catch (error) {
            console.log(
                "An error occured while requesting posts from hoyolab:",
                error
            );

            return {
                error,
            };
        }
    }
);

export default defineEventHandler(({ event }): Promise<TopicEndpoint> => {
    // Posts: https://bbs-api-os.hoyolab.com/community/post/wapi/topic/post/list?gids=2&loading_type=0&page_size=30&reload_times=0&topic_id=${topicId}
    // Info: https://bbs-api-os.hoyolab.com/community/painter/wapi/topic/info?topic_id=${topicId}

    return post_scc.validate(event.context.params.id);
});
