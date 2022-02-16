Page({
  data: {
    num: 1,
  },
  onLoad: function () {
    console.log(this.data.num);
    wx.showTabBar({
      animation: true,
    });
  },
});
