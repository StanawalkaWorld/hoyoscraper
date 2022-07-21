export interface TopicInfoResponse {
    retcode: number;
    message: string;
    data:    Data;
}

export interface Data {
    info:      Info;
    is_joined: boolean;
}

export interface Info {
    base:     Base;
    stat:     Stat;
    data_box: string;
    avatars:  any[];
    infos:    any[];
    tabs:     Tab[];
}

export interface Base {
    id:    string;
    name:  string;
    desc:  string;
    order: number;
    cover: string;
    type:  string;
    uid:   string;
}

export interface Stat {
    topic_id:      string;
    view_num:      string;
    reply_num:     string;
    member_num:    string;
    post_num:      string;
    post_num_incr: string;
}

export interface Tab {
    id:               string;
    tab_name:         string;
    bubble_desc:      string;
    app_path:         string;
    web_path:         string;
    is_default:       boolean;
    is_bubble:        boolean;
    bubble_create_at: string;
}
