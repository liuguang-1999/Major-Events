


//  配置文件 
//  把项目中 所有的 基地址 和 接口 集中在一起进行管理
//  所有项目的 基地址
var BASEURL = "http://192.168.137.1:8000"

//  定义对象用来管理接口 
var APILIST = {
    // 渲染 文章类别
    user_load_get: BASEURL + "/category",
    // 文章搜索 焦点图模块
    user_search_get: BASEURL + "/search",
    // 获取热门文章排行
    user_rank_get: BASEURL + "/rank",
    // 最新文章
    user_lastest_get: BASEURL + "/lastest",
    // 文章的详情
    user_article_get: BASEURL + "/article"
};