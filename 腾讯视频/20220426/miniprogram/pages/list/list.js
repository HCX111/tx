// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    con:'',
    list:[
      {
        con:'震惊不敢信',
        date:'2022-03-15'
      },
      {
        con:'要无了',
        date:'2022-03-15'
      }
    ]
  },
  getcon:function(e){
    console.log(e.detail.value)
    this.setData({
      con:e.detail.value
    })
  },
  send:function(){
    // 获取值
    var mylist=this.data.list
    // push在数据后面追加元素
    mylist.push({con:this.data.con,
      date:'2022-03-15'})
    this.setData({
      list:mylist
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