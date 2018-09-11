// pages/custom/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    customArr:[
      {query:"定制的酒什么时候能发货?",answer:"我们会在您下单后72小时内进行发货处理（遇法定节假日顺延）。"},
      { query: "能退换货吗？", answer: "如非包装破损等质量问题，定制商品是不支持退换货的哟。"},
      { query: "可以自己上传图片和文字吗？", answer: "可以上传自己喜欢的图片和语录的,通过审核后,即可生成您独一无二的定制小酒。" },
      { query: "一箱内图片和语录都是一样的吗？", answer: "一箱（6瓶）的图案和文字都是一样的哟。" },
      ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: "了解定制" //页面标题为路由参数
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