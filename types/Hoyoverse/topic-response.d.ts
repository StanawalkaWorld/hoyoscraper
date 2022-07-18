export interface TopicResponse {
    retcode: number;
    message: string;
    data:    Data;
}

export interface Data {
    posts:   PostElement[];
    is_last: boolean;
    last_id: string;
}

export interface PostElement {
    post:               PostPost;
    forum:              null;
    topics:             Topic[];
    user:               User;
    self_operation:     SelfOperation;
    stat:               Stat;
    help_sys:           HelpSys;
    cover:              Cover;
    image_list:         Cover[];
    is_official_master: boolean;
    is_user_master:     boolean;
    hot_reply_exist:    boolean;
    vote_count:         number;
    last_modify_time:   number;
    contribution:       null;
    classification:     null;
    video:              null;
    game:               Game;
    data_box:           string;
    is_top_icon:        boolean;
    tags:               null;
    hot_reply:          HotReply | null;
    collection:         Collection | null;
    is_rich_text:       boolean;
}

export interface Collection {
    id:            string;
    title:         string;
    current_index: number;
    post_num:      number;
    last_id:       string;
    next_id:       string;
}

export interface Cover {
    url:     string;
    height:  number;
    width:   number;
    format:  Format;
    size:    string;
    spoiler: boolean;
}

export enum Format {
    Empty = "",
    Jpg = "jpg",
    PNG = "png",
}

export interface Game {
    game_id:          number;
    game_name:        GameName;
    color:            Color;
    background_color: BackgroundColor;
    icon:             string;
}

export enum BackgroundColor {
    F3E9C8 = "#F3E9C8",
}

export enum Color {
    The7D6631 = "#7D6631",
}

export enum GameName {
    GenshinImpact = "Genshin Impact",
}

export interface HelpSys {
    top_up: null;
}

export interface HotReply {
    reply_id: string;
    content:  string;
    uid:      string;
    nickname: string;
    type:     string;
    floor_id: number;
}

export interface PostPost {
    game_id:                 number;
    post_id:                 string;
    f_forum_id:              number;
    uid:                     string;
    subject:                 string;
    content:                 string;
    cover:                   string;
    view_type:               number;
    created_at:              number;
    images:                  string[];
    post_status:             PostStatus;
    topic_ids:               number[];
    view_status:             number;
    max_floor:               number;
    is_original:             number;
    republish_authorization: number;
    reply_time:              Date;
    is_deleted:              number;
    is_interactive:          boolean;
    structured_content:      string;
    structured_content_rows: any[];
    lang:                    Lang;
    official_type:           number;
    reply_forbid:            null;
    video:                   string;
    contribution_id:         string;
    event_start_date:        string;
    event_end_date:          string;
    classification_id:       string;
    is_audit:                boolean;
    is_multi_language:       boolean;
    origin_lang:             Lang;
    sub_type:                number;
    reprint_source:          string;
}

export enum Lang {
    EnUs = "en-us",
}

export interface PostStatus {
    is_top:      boolean;
    is_good:     boolean;
    is_official: boolean;
}

export interface SelfOperation {
    attitude:     number;
    is_collected: boolean;
}

export interface Stat {
    view_num:          number;
    reply_num:         number;
    like_num:          number;
    bookmark_num:      number;
    share_num:         number;
    view_num_unit:     string;
    reply_num_unit:    string;
    like_num_unit:     string;
    bookmark_num_unit: string;
    share_num_unit:    string;
    true_view_num:     number;
}

export interface Topic {
    id:             number;
    name:           string;
    cover:          string;
    is_top:         boolean;
    is_good:        boolean;
    is_interactive: boolean;
    game_id:        number;
}

export interface User {
    uid:           string;
    nickname:      string;
    introduce:     string;
    avatar:        string;
    gender:        number;
    certification: Certification | null;
    level_exp:     LevelExp;
    is_following:  boolean;
    is_followed:   boolean;
    avatar_url:    string;
    auth:          null;
    is_logoff:     boolean;
    pendant:       string;
}

export interface Certification {
    type:     number;
    icon_url: string;
    desc:     Desc;
}

export enum Desc {
    Artist = "Artist",
    Cosplayer = "Cosplayer",
    GuideCreatorModerator = "Guide Creator,Moderator",
}

export interface LevelExp {
    level: number;
    exp:   number;
}
