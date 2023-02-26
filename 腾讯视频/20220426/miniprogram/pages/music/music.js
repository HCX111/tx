// pages/music/music.js

// 创建音频
// innerAudioContext存放的是音频
const innerAudioContext = wx.createInnerAudioContext()
// 设置播放地址
innerAudioContext.src='cloud://zsh-gmx9p.7a73-zsh-gmx9p-1257218395/aa.m4a'
//自动播放
// innerAudioContext.autoplay=true
// 循环播放
innerAudioContext.loop=true
Page({

    /**
     * 页面的初始数据
     */
    data: {
        num:1,
        danmuList:
            [{
            text: 'xxx',
            color: '#ff0000',
            time: 1
            }, {
            text: '吐槽',
            color: '#ff00ff',
            time: 3
            }],
            con:''
    },
    danmu:function(e){
        console.log(e.detail.value)
        this.setData({
            con:e.detail.value
        })
    },
    getcon:function(){
        console.log(this.videoContext)
        this.videoContext.sendDanmu({
            text: this.data.con,
            color: '#ff0000'
          })
    },
    change:function(){
        if(this.data.num==0){
            this.setData({
                num:1
            })
            // 音乐播放
            innerAudioContext.play()
        }else{
            this.setData({
                num:0
            })
            // 音乐暂停
            innerAudioContext.pause()
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
        this.videoContext = wx.createVideoContext('myVideo')
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