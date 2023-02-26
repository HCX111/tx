// pages/data/data.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        user:'',
        pass:''

    },
    remove:function(){
        const db = wx.cloud.database()
        db.collection('student').where({
            user:'s'
        }).remove()
    },
    update:function(){
        const db = wx.cloud.database()
        db.collection('student').where({
            user:'555'
        })
        .update({
            data:{
                pass:'aaa'
            },
        })
    },
    query:function(){
        const db = wx.cloud.database()
        db.collection('student').where({
            user:'zs',
            pass:'123'
        })
        .get({
            success:function(res){
                console.log(res.data)
            }
        })
    },
   
    add:function(){
        const db = wx.cloud.database()
        db.collection('student').add({
            data:{
              user:this.data.user,
              pass:this.data.pass
            },
            success:function(res){
                console.log(res)
            }
        })
    },
    getuser:function(e){
        this.setData({
            user:e.detail.value
        })
    },
    getpass:function(e){
        this.setData({
            pass:e.detail.value
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