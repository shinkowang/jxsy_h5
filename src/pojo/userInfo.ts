 export class UserInfo {

    //主键
    _id;
    get id() {
        return this._id;
    }
    set id(val) {
        this._id = val;
    }

    //真实姓名
    _member_name;
    get member_name() {
        return this._member_name;
    }
    set member_name(val) {
        this._member_name = val;
    }

    //邮箱
    _mail;
    get mail() {
        return this._mail;
    }
    set mail(val) {
        this._mail = val;
    }

    //手机号
    _mobile_phone;
    get mobile_phone() {
        return this._mobile_phone;
    }
    set mobile_phone(val) {
        this._mobile_phone = val;
    }

    //昵称
    _alias;
    get alias() {
        return this._alias;
    }
    set alias(val) {
        this._alias = val;
    }

    //qq号
    _qq;
    get qq() {
        return this._qq;
    }
    set qq(val) {
        this._qq = val;
    }

    //微信号
    _wechat;
    get wechat() {
        return this._wechat;
    }
    set wechat(val) {
        this._wechat = val;
    }

    //最后登录时间
    _last_login;
    get last_login() {
        return this._last_login;
    }
    set last_login(val) {
        this._last_login = val;
    }

    //证件类型
    _certificate_type;
    get certificate_type() {
        return this._certificate_type;
    }
    set certificate_type(val) {
        this._certificate_type = val;
    }

    //证件号码
    _certificate_number;
    get certificate_number() {
        return this._certificate_number;
    }
    set certificate_number(val) {
        this._certificate_number = val;
    }

    //会员等级
    _member_level;
    get member_level() {
        return this._member_level;
    }
    set member_level(val) {
        this._member_level = val;
    }

    //可用积分
    _rank_points;
    get rank_points() {
        return this._rank_points;
    }
    set rank_points(val) {
        this._rank_points = val;
    }

    //累计积分
    _top_points;
    get top_points() {
        return this._top_points;
    }
    set top_points(val) {
        this._top_points = val;
    }

    //生日
    _birthday;
    get birthday() {
        return this._birthday;
    }
    set birthday(val) {
        this._birthday = val;
    }

    //性别
    _sex;
    get sex() {
        return this._sex;
    }
    set sex(val) {
        this._sex = val;
    }

    //头像
    _head_portrait;
    get head_portrait() {
        return this._head_portrait;
    }
    set head_portrait(val) {
        this._head_portrait = val;
    }
    constructor(qq,wechat,last_login,certificate_type,certificate_number,member_level,rank_points,top_points,birthday,sex,head_portrait) {
        this._qq = qq;
        this._wechat = wechat;
        this._last_login = last_login;
        this._certificate_type = certificate_type;
        this._certificate_number = certificate_number;
        this._member_level = member_level;
        this._rank_points = rank_points;
        this._top_points = top_points;
        this._birthday = birthday;
        this._sex = sex;
        this._head_portrait = head_portrait;
    }
}
