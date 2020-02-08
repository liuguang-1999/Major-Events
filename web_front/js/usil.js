


//  文章列表模块
const tabulation = {
    //  文章类别
    category: () => $.get(APILIST.user_load_get),

    //  文章搜索 焦点图模块
    search: () => $.get(APILIST.user_search_get, { perpage: 5 }),

    //  获取热门文章排行
    rank: () => $.get(APILIST.user_rank_get),

    // 最新文章
    lastest: () => $.get(APILIST.user_lastest_get),

    //  列表页 获取列表数据
    upto: (type, page) => $.get(APILIST.user_search_get, { "type": type, "page": page }),

    // 获取详情页列表
    article: id => $.get(APILIST.user_article_get, { id })
}




