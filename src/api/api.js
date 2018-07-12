const APIURL = 'http://wap.llzmh.com/wap'
const wxPayUrl = 'http://wap.llzmh.com/index.php?s=wap'
module.exports = {
  api: {
    menus: `${APIURL}/menus/index`,
    rank_list: `${APIURL}/show/ranking/index`,
    get_today_number: `${APIURL}/show/ranking/get_today_number`,
    vote_free: `${APIURL}/show/ranking_auth/vote_free`,
    vote_pay_ajax: `${wxPayUrl}/show/ranking_auth/vote_pay_ajax`,
    vote_pay: `${wxPayUrl}/show/ranking_auth/vote_pay`,
    test_login: `${APIURL}/user/test/index`,
    check_login: `${APIURL}/user/login/check_login`,
    getUserInfo: `${APIURL}/user/login/get_user_info`,
    jssdk: `${APIURL}/user/jssdk/index`,
    user_info: `${APIURL}/user/user/get_info`,
    bouns_info: `${APIURL}/user/bouns/index`,
    take_bouns: `${APIURL}/user/bouns/take_bouns`,
    integral: `${APIURL}/user/money/integral`,
    money: `${APIURL}/user/money/index`,
    like_list: `${APIURL}/user/user/like_list`,
    concern_me: `${APIURL}/user/user/follow_me`,
    concern: `${APIURL}/user/user/follow`,
    choose_ranked: `${APIURL}/show/ranking/choose_ranked`,
    concern_search: `${APIURL}/user/user/search_follow`,
    orders: `${APIURL}/user/user/order_list`,
    ranking_search: `${APIURL}/show/ranking/search`,
    cancel_follow: `${APIURL}/user/user/cancel_follow`,
    ranking_more: `${APIURL}/show/ranking/ranking_more`,
    tools: `${APIURL}/user/tools/activities`,
    pay_money: `${APIURL}/show/Ranking_auth/pay_money`,
    pay_weixin: `${APIURL}/show/Ranking_auth/pay_weixin`,
    active_detail: `${APIURL}/user/tools/activities_details`,
    choose_shop: `${APIURL}/show/ranking/choose_shop`,
    change_collection_status: `${APIURL}/user/tools/change_collection_status`,
    applyPost: `${APIURL}/user/tools/activities_apply_post`
  }
}
