// pages/personal/personal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      src:'cloud://cloud1-4gbwokwg02e88fc2.636c-cloud1-4gbwokwg02e88fc2-1309747500/tx/0.png',
      t:1,
      msg:'修改',
      val:"呵呵",
      navl:""
  },
  getval:function(e){
    this.setData({
      nval:e.detail.value
    })
  },
  quit:function(){
    wx.setStorageSync('user', '')
    wx.navigateTo({
      url: '/pages/login/login',
    })
  },
  update:function(){
    var _this=this
    if(this.data.t==0){
      const db = wx.cloud.database()
      db.collection('student').where({
        user:this.data.val
      })
      .update({
        data:{
          user:this.data.nval
        },
          success:function(){
            wx.setStorageSync('user', '')
            _this.setData({
              t:1,
              msg:'修改',
              val:_this.data.nval
            })
          }
      }) 
    }else{
      this.setData({
        t:0,
        msg:'确认'
      })
    }
  },
  chooseImg:function(){
    var _this=this;
    //选择图片
    wx.chooseImage({
      //限制最多选择几张
      count: 1,
      //文件类型
      sizeType:['original','compressed'],
      //文件来源
      sourceType:['album','camera'],
      //success成功以后的代码
      success(res){
        //tempFilePath可以作为img标签的src属性显示图片
        //成功以后会把代码储存到缓存里面
        const tempFilePaths = res.tempFilePaths
        console.log(res)
        //上传图片
          wx.cloud.uploadFile({
            cloudPath:Math.random()+'png' ,    //上传到云端的路径
            filePath:tempFilePaths[0],//小程序临时文件路径
            success:res =>{
              //返回文件id
              console.log(res.fileID)
              _this.setData({
                src:res.fileID
              })
            },
            fail:console.error
          })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.setData({
        val:wx.getStorageSync('user')
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