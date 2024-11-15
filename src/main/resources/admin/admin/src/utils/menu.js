const menu = {
    list() {
        return [
    {
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"管理员管理",
                        "menuJump":"列表",
                        "tableName":"users"
                    }
                ],
                "menu":"管理员管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"公告类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryGonggao"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"景点类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryJingdian"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"房型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryJiudian"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"美食类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryMeishi"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"商家信用类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryShangjiaXingji"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"商品类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryShangpin"
                    }
                ],
                "menu":"基础数据管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"公告信息管理",
                        "menuJump":"列表",
                        "tableName":"gonggao"
                    }
                ],
                "menu":"公告信息管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"景点管理",
                        "menuJump":"列表",
                        "tableName":"jingdian"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "修改",
                            "删除"
                        ],
                        "menu":"景点评价管理",
                        "menuJump":"列表",
                        "tableName":"jingdianCommentback"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"景点收藏管理",
                        "menuJump":"列表",
                        "tableName":"jingdianCollection"
                    }
                    ,
                    {
                        "buttons":[
                            "订单",
                            "查看",
                            "删除"
                        ],
                        "menu":"景点门票订单管理",
                        "menuJump":"列表",
                        "tableName":"jingdianOrder"
                    }
                ],
                "menu":"景点管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"酒店管理",
                        "menuJump":"列表",
                        "tableName":"jiudian"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "修改",
                            "删除"
                        ],
                        "menu":"酒店评价管理",
                        "menuJump":"列表",
                        "tableName":"jiudianCommentback"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"房间收藏管理",
                        "menuJump":"列表",
                        "tableName":"jiudianCollection"
                    }
                    ,
                    {
                        "buttons":[
                            "订单",
                            "查看",
                            "删除"
                        ],
                        "menu":"酒店订单管理",
                        "menuJump":"列表",
                        "tableName":"jiudianOrder"
                    }
                ],
                "menu":"酒店管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"美食管理",
                        "menuJump":"列表",
                        "tableName":"meishi"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "修改",
                            "删除"
                        ],
                        "menu":"美食评价管理",
                        "menuJump":"列表",
                        "tableName":"meishiCommentback"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"美食收藏管理",
                        "menuJump":"列表",
                        "tableName":"meishiCollection"
                    }
                    ,
                    {
                        "buttons":[
                            "订单",
                            "查看",
                            "删除"
                        ],
                        "menu":"美食订单管理",
                        "menuJump":"列表",
                        "tableName":"meishiOrder"
                    }
                ],
                "menu":"美食管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"商品管理",
                        "menuJump":"列表",
                        "tableName":"shangpin"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "修改",
                            "删除"
                        ],
                        "menu":"商品评价管理",
                        "menuJump":"列表",
                        "tableName":"shangpinCommentback"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"商品收藏管理",
                        "menuJump":"列表",
                        "tableName":"shangpinCollection"
                    }
                    ,
                    {
                        "buttons":[
                            "订单",
                            "查看",
                            "删除"
                        ],
                        "menu":"商品订单管理",
                        "menuJump":"列表",
                        "tableName":"shangpinOrder"
                    }
                ],
                "menu":"商品管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"商家管理",
                        "menuJump":"列表",
                        "tableName":"shangjia"
                    }
                ],
                "menu":"商家管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"用户管理",
                        "menuJump":"列表",
                        "tableName":"yonghu"
                    }
                ],
                "menu":"用户管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"轮播图管理",
                        "menuJump":"列表",
                        "tableName":"config"
                    }
                ],
                "menu":"轮播图信息"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    }
    ,
            {
                "backMenu":[
                    {
                        "child":[
                            {
                                "buttons":[
                                    "查看"
                                ],
                                "menu":"公告信息管理",
                                "menuJump":"列表",
                                "tableName":"gonggao"
                            }
                        ],
                        "menu":"公告信息管理"
                    }
                    ,{
                        "child":[
                            {
                                "buttons":[
                                    "查看",
                                    "新增",
                                    "修改",
                                    "删除"
                                ],
                                "menu":"景点管理",
                                "menuJump":"列表",
                                "tableName":"jingdian"
                            }
                            ,
                            {
                                "buttons":[
                                    "查看",
                                    "修改"
                                ],
                                "menu":"景点评价管理",
                                "menuJump":"列表",
                                "tableName":"jingdianCommentback"
                            }
                            ,
                            {
                                "buttons":[
                                    "订单",
                                    "报表",
                                    "查看"
                                ],
                                "menu":"景点门票订单管理",
                                "menuJump":"列表",
                                "tableName":"jingdianOrder"
                            }
                        ],
                        "menu":"景点管理"
                    }
                    ,{
                        "child":[
                            {
                                "buttons":[
                                    "查看",
                                    "新增",
                                    "修改",
                                    "删除"
                                ],
                                "menu":"酒店管理",
                                "menuJump":"列表",
                                "tableName":"jiudian"
                            }
                            ,
                            {
                                "buttons":[
                                    "查看",
                                    "修改"
                                ],
                                "menu":"酒店评价管理",
                                "menuJump":"列表",
                                "tableName":"jiudianCommentback"
                            }
                            ,
                            {
                                "buttons":[
                                    "订单",
                                    "查看",
                                    "报表"
                                ],
                                "menu":"酒店订单管理",
                                "menuJump":"列表",
                                "tableName":"jiudianOrder"
                            }
                        ],
                        "menu":"酒店管理"
                    }
                    ,{
                        "child":[
                            {
                                "buttons":[
                                    "查看",
                                    "新增",
                                    "修改",
                                    "删除"
                                ],
                                "menu":"美食管理",
                                "menuJump":"列表",
                                "tableName":"meishi"
                            }
                            ,
                            {
                                "buttons":[
                                    "查看",
                                    "修改"
                                ],
                                "menu":"美食评价管理",
                                "menuJump":"列表",
                                "tableName":"meishiCommentback"
                            }
                            ,
                            {
                                "buttons":[
                                    "订单",
                                    "查看",
                                    "报表"
                                ],
                                "menu":"美食订单管理",
                                "menuJump":"列表",
                                "tableName":"meishiOrder"
                            }
                        ],
                        "menu":"美食管理"
                    }
                    ,{
                        "child":[
                            {
                                "buttons":[
                                    "查看",
                                    "新增",
                                    "修改",
                                    "删除"
                                ],
                                "menu":"商品管理",
                                "menuJump":"列表",
                                "tableName":"shangpin"
                            }
                            ,
                            {
                                "buttons":[
                                    "查看",
                                    "修改"
                                ],
                                "menu":"商品评价管理",
                                "menuJump":"列表",
                                "tableName":"shangpinCommentback"
                            }
                            ,
                            {
                                "buttons":[
                                    "订单",
                                    "查看",
                                    "报表"
                                ],
                                "menu":"商品订单管理",
                                "menuJump":"列表",
                                "tableName":"shangpinOrder"
                            }
                        ],
                        "menu":"商品管理"
                    }
                    ,{
                        "child":[
                            {
                                "buttons":[
                                    "查看",
                                    "新增",
                                    "修改",
                                    "删除"
                                ],
                                "menu":"商家管理",
                                "menuJump":"列表",
                                "tableName":"shangjia"
                            }
                        ],
                        "menu":"商家管理"
                    }
                ],
                "frontMenu":[],
                "hasBackLogin":"是",
                "hasBackRegister":"否",
                "hasFrontLogin":"否",
                "hasFrontRegister":"否",
                "roleName":"商家",
                "tableName":"shangjia"
            }
]
    }
}
export default menu;
