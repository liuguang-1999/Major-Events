


//  文章列表模块
var tabulation = {
    //  文章类别
    category: function () {
        return $.get(APILIST.user_load_get)
    },
    //  文章搜索 焦点图模块
    search: function () {
        return $.get(APILIST.user_search_get, { perpage: 5 })
    },
    //  获取热门文章排行
    rank: function () {
        return $.get(APILIST.user_rank_get)
    },
    // 最新文章
    lastest: function () {
        return $.get(APILIST.user_lastest_get)
    },
    //  列表页 获取列表数据
    /**
     * 类型编号type 
     * 页码page
     * 
     */
    upto: function (type, page) {
        return $.get(APILIST.user_search_get, { "type": type, "page": page })
    }
}





/*  url: APILIST.user_log_get,
            type: "post",
            data: fd,
            processData: false, // 不允许处理数据
            contentType: false, // 不要设置请求头 */