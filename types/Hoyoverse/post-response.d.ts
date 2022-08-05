export interface FullPostResponse {
    retcode: number;
    message: string;
    data: Data;
}

export interface Data {
    post: DataPost;
}

export interface DataPost {
    post: PostPost;
    forum: null;
    topics: Topic[];
    user: User;
    self_operation: SelfOperation;
    stat: Stat;
    help_sys: null;
    cover: null;
    image_list: ImageList[];
    is_official_master: boolean;
    is_user_master: boolean;
    hot_reply_exist: boolean;
    vote_count: number;
    last_modify_time: number;
    contribution: null;
    classification: Classification;
    video: null;
    game: Game;
    data_box: string;
    is_top_icon: boolean;
    tags: null;
    hot_reply: null;
    collection: null;
    is_rich_text: boolean;
}

export interface Classification {
    id: string;
    name: string;
    icon: string;
}

export interface Game {
    game_id: number;
    game_name: string;
    color: string;
    background_color: string;
    icon: string;
}

export interface ImageList {
    url: string;
    height: number;
    width: number;
    format: string;
    size: string;
    spoiler: boolean;
    cuts: Cut[];
}

export interface Cut {
    ratio: number;
    lt_point: Point;
    rb_point: Point;
}

export interface Point {
    x: number;
    y: number;
}

export interface PostPost {
    game_id: number;
    post_id: string;
    f_forum_id: number;
    uid: string;
    subject: string;
    content: string;
    cover: string;
    view_type: number;
    created_at: number;
    images: any[];
    post_status: PostStatus;
    topic_ids: number[];
    view_status: number;
    max_floor: number;
    is_original: number;
    republish_authorization: number;
    reply_time: Date;
    is_deleted: number;
    is_interactive: boolean;
    structured_content: string;
    structured_content_rows: any[];
    lang: string;
    official_type: number;
    reply_forbid: ReplyForbid;
    video: string;
    contribution_id: string;
    event_start_date: string;
    event_end_date: string;
    classification_id: string;
    is_audit: boolean;
    is_multi_language: boolean;
    origin_lang: string;
    sub_type: number;
    reprint_source: string;
    can_edit: boolean;
}

export interface PostStatus {
    is_top: boolean;
    is_good: boolean;
    is_official: boolean;
}

export interface ReplyForbid {
    date_type: number;
    start_date: string;
    cur_date: string;
    level: number;
}

export interface SelfOperation {
    attitude: number;
    is_collected: boolean;
}

export interface Stat {
    view_num: number;
    reply_num: number;
    like_num: number;
    bookmark_num: number;
    share_num: number;
    view_num_unit: string;
    reply_num_unit: string;
    like_num_unit: string;
    bookmark_num_unit: string;
    share_num_unit: string;
    true_view_num: number;
}

export interface Topic {
    id: number;
    name: string;
    cover: string;
    is_top: boolean;
    is_good: boolean;
    is_interactive: boolean;
    game_id: number;
}

export interface User {
    uid: string;
    nickname: string;
    introduce: string;
    avatar: string;
    gender: number;
    certification: null;
    level_exp: LevelExp;
    is_following: boolean;
    is_followed: boolean;
    avatar_url: string;
    auth: null;
    is_logoff: boolean;
    pendant: string;
}

export interface LevelExp {
    level: number;
    exp: number;
}
