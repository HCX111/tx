// pages/details/details.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        title:'霜落又识君',
        list:['1','2','3','4','5','6','7','8','9','10','第1092话 太阁名人的将棋盘（将军篇）','第1093话 乳白天空（上集）','第1094话 乳白天空（下集)','第1095话 警察学校篇 疯狂警察故事 伊达航篇'],
        lists:[
            {
                title:'为你推荐',
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
    ],
    coms:[]
 },
    send:function(e){
        console.log(e.detail.value.con)
        // 初始化数据库
        const db = wx.cloud.database()
        // collection集合名字
        //增加数据
        var _this=this;
        db.collection('comments').add({
            //data字段表示需新增的JSON数据
            data:{
                con:e.detail.value.con
            },
            success:function(res){
                //res是一个对象，其中有_id字段标记
                console.log(res)
                var t = _this.data.coms;
                t.push({
                    con:e.detail.value.con
                })
                _this.setData({
                    coms:t
                })
            }
        })
    },
   


    

    

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(options)
        if(options.id==0){
            this.setData({
                title:'霜落又识君',
                src:'cloud://cloud1-4gbwokwg02e88fc2.636c-cloud1-4gbwokwg02e88fc2-1309747500/tx/a.mp4'
            })
        }else{
            this.setData({
                title:'琅琊榜：权谋三十六计',
                src:'cloud://cloud1-4gbwokwg02e88fc2.636c-cloud1-4gbwokwg02e88fc2-1309747500/tx/b.mp4'
            })
        }

    const db = wx.cloud.database()
    var _this = this;
    db.collection('comments').where({})
    .get({
        success:function(res){
            console.log(res.data)
            _this.setData({
                coms:res.data
            })
        }
    })
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