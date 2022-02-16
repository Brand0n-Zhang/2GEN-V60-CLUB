"use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osR0FBRyxFQUFFLENBQUM7S0FDUDtJQUNELE1BQU0sRUFBRTtRQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMzQixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osU0FBUyxFQUFFLElBQUk7U0FDaEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgbnVtOiAxLFxuICB9LFxuICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGEubnVtKTtcbiAgICB3eC5zaG93VGFiQmFyKHtcbiAgICAgIGFuaW1hdGlvbjogdHJ1ZSxcbiAgICB9KTtcbiAgfSxcbn0pO1xuIl19