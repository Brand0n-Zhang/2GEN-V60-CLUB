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
  onShareAppMessage() {
    // const promise = new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve({
    //       title: '自定义转发标题',
    //     });
    //   }, 2000);
    // });
    // return {
    //   title: '2GEN V60 CLUB',
    //   path: '/pages/index/index',
    //   //   promise,
    // };
  },
});
