//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    selectedOrderTabIndex: 0,
    currentError: 0
  },
  //tab切换
  orderTabTap: function(e) {
    if (this.data.selectedOrderTabIndex == e.target.dataset.current) return;
    let selectedOrderTabIndex = e.target.dataset.current;
    this.setData({
      selectedOrderTabIndex
    });
  },
  //swiper切换
  orderSwiperChange: function(e) {
    let selectedOrderTabIndex = e.detail.current;
    this.setData({
      selectedOrderTabIndex
    });
  },
  // //解决swiper滑死情况
  // madeGoodOrderSwiper: function(e) {
  //   let currentIndex = e.detail.current;
  //   if (currentIndex == 0) {
  //     this.data.currentError++;
  //     console.log(this.data.currentError, "this.data.currentError")
  //   } else {
  //     this.data.currentError = 0;
  //   }
  //   if (this.data.currentError > 2) {
  //     this.setData({
  //       selectedOrderTabIndex: this.data.selectedOrderTabIndex
  //     })
  //   }
  // },
  onLoad: function() {
    wx.setNavigationBarTitle({
      title: "我的订单" //页面标题为路由参数
    })
  }
})