// pages/first/first.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list:['电影','电视剧','动漫','VIP','电影','电视剧','动漫','VIP',],
        num:0,
        banners:[
            {
            src:"cloud://cloud1-4gbwokwg02e88fc2.636c-cloud1-4gbwokwg02e88fc2-1309747500/tx/1.jpg",
            title:'【王牌7】沈腾贾玲斗嘴互指卧底 岳云鹏狂搅局'
        },
        {
            src:"cloud://cloud1-4gbwokwg02e88fc2.636c-cloud1-4gbwokwg02e88fc2-1309747500/tx/2.png",
            title:'【天赐3】周深GAI《玫瑰少年》高音混rap炸场'
        },
        {
            src:"cloud://cloud1-4gbwokwg02e88fc2.636c-cloud1-4gbwokwg02e88fc2-1309747500/tx/3.jpg",
            title:'【斗罗大陆·更新】为了复活我的爱人，出发'
        },
        {
            src:"cloud://cloud1-4gbwokwg02e88fc2.636c-cloud1-4gbwokwg02e88fc2-1309747500/tx/4.jpg",
            title:'【追爱】熊梓淇社死现场：老爸为儿相亲勇闯夜店'
        },   
    ],
    lists:[
        {
        title:'重磅热播',
        hots:[
            {
                src:"cloud://cloud1-4gbwokwg02e88fc2.636c-cloud1-4gbwokwg02e88fc2-1309747500/tx/5.jpg",
                top:'JoJo英语启蒙',
                des:'适龄启蒙，亲子英语'
            },
            {
                src:"cloud://cloud1-4gbwokwg02e88fc2.636c-cloud1-4gbwokwg02e88fc2-1309747500/tx/6.jpg",
                top:'会说话的汤姆猫家族',
                des:'搞笑动物的日常'
            },
            {
                src:"cloud://cloud1-4gbwokwg02e88fc2.636c-cloud1-4gbwokwg02e88fc2-1309747500/tx/7.jpg",
                top:'小伶魔法世界第三季',
                des:'传说中的旋律精灵'
            },
            {
                src:"cloud://cloud1-4gbwokwg02e88fc2.636c-cloud1-4gbwokwg02e88fc2-1309747500/tx/8.jpg",
                top:'如果从没爱过你',
                des:'隐婚娇妻与霸总相爱相杀'
            },
        ]
},
    {   
            title:'猜你喜欢',
            hots:[
                {
                    src:"cloud://cloud1-4gbwokwg02e88fc2.636c-cloud1-4gbwokwg02e88fc2-1309747500/tx/5.jpg",
                    top:'JoJo英语启蒙',
                    des:'适龄启蒙，亲子英语'
                },
                {
                    src:"cloud://cloud1-4gbwokwg02e88fc2.636c-cloud1-4gbwokwg02e88fc2-1309747500/tx/6.jpg",
                    top:'会说话的汤姆猫家族',
                    des:'搞笑动物的日常'
                },
                {
                    src:"cloud://cloud1-4gbwokwg02e88fc2.636c-cloud1-4gbwokwg02e88fc2-1309747500/tx/7.jpg",
                    top:'小伶魔法世界第三季',
                    des:'传说中的旋律精灵'
                },
                {
                    src:"cloud://cloud1-4gbwokwg02e88fc2.636c-cloud1-4gbwokwg02e88fc2-1309747500/tx/8.jpg",
                    top:'如果从没爱过你',
                    des:'隐婚娇妻与霸总相爱相杀'
                },
            ]
    },
    {   
        title:'下饭神剧',
        hots:[
            {
                src:"cloud://cloud1-4gbwokwg02e88fc2.636c-cloud1-4gbwokwg02e88fc2-1309747500/tx/5.jpg",
                top:'JoJo英语启蒙',
                des:'适龄启蒙，亲子英语'
            },
            {
                src:"cloud://cloud1-4gbwokwg02e88fc2.636c-cloud1-4gbwokwg02e88fc2-1309747500/tx/6.jpg",
                top:'会说话的汤姆猫家族',
                des:'搞笑动物的日常'
            },
            {
                src:"cloud://cloud1-4gbwokwg02e88fc2.636c-cloud1-4gbwokwg02e88fc2-1309747500/tx/7.jpg",
                top:'小伶魔法世界第三季',
                des:'传说中的旋律精灵'
            },
        ]
},
]
    },
    
    

    change:function(e){
        this.setData({
            num:e.target.dataset.id
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})