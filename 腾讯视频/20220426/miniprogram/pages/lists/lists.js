// pages/lists/lists.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        num:1,
        mvs:['1','2','3','4','5','6'],
      details:[
          {  
                title:'全部',
                lists:[
                    '电视剧',
                    '电影',
                    '其他',
                ]
          },
          {  
            title:'不限',
            lists:[
                '0-10分钟',
                '10-30分钟',
                '30-60分钟', 
            ]
      },
      {  
        title:'不限',
        lists:[
            '一天',
            '一周',
            '两周',
            '一个月',
        ]
  },
      ],
      movies:['电视剧','娱乐','电影','动漫'],
      t0:-1,
      t1:-1,
      t2:-1
    },
    change0:function(e){
        this.setData({
            t0:e.target.dataset.id
        })
    },
    change1:function(e){
        this.setData({
            t1:e.target.dataset.id
        })
    },
    change2:function(e){
        this.setData({
            t2:e.target.dataset.id
        })
    },
    change(){
        if(this.data.num==0){
            this.setData({
                num:1
            })
        }else{
            this.setData({
                num:0
            })
        }
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