export interface TrendResponse {
    retcode: number;
    message: string;
    data:    Data;
}

export interface Data {
    list:    List[];
    is_last: boolean;
}

export interface List {
    base:     Base;
    stat:     Stat;
    data_box: string;
    avatars:  string[];
}

export interface Base {
    id:    string;
    name:  string;
    desc:  string;
    order: number;
    cover: string;
    type:  Type;
    uid:   string;
}

export enum Type {
    Official = "Official",
    UserDef = "UserDef",
}

export interface Stat {
    topic_id:   string;
    view_num:   string;
    reply_num:  string;
    member_num: string;
    post_num:   string;
}
