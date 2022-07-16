export default defineEventHandler(async (event) => {
    // https://bbs-api-os.hoyolab.com/community/post/wapi/topic/post/list?gids=2&loading_type=0&page_size=30&reload_times=0&topic_id=${topicId}
    // message: 'OK'
    // data->posts: Array->[post, topics, user, stat]
    return {
        error: 501,
        msg: "Not implemented"
    }
})