export default defineEventHandler((event) => {
    // https://bbs-api-os.hoyolab.com/community/painter/wapi/explore/topic/list?gids=2&loading_type=0&page_size=15&reload_times=1
    // message: 'OK'
    // data->list: Array->base->[id, name, desc, cover]
    return {
        error: 501,
        msg: "Not implemented"
    }
})