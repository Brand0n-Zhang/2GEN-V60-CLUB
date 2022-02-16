"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Page({
    data: {
        currentSeries: '全部',
        seriesOptions: ['全部', 'T', 'B'],
        currentModule: '全部',
        moduleOptions: ['全部', '重要部件', '内部设备', '刹车底盘', '外部设备'],
        currentList: [
            {
                series: '',
                symptom: '',
                reason: '',
                level: '',
                fix: '',
                remark: '',
                accessories: '',
                victim: '',
                module: '',
                isOpen: false,
            },
        ],
        issueList: [
            {
                series: 'T',
                symptom: '发动机故障灯亮',
                reason: '1. 蒸发管损坏；2. 氧传感器损坏；3. 碳罐损坏；',
                level: '轻微',
                fix: '4S官方召回免费更换相应配件',
                remark: '故障码 蒸发管：ECM-P04F000 EVAP 系统高压净化管路性能 氧传感器：暂无 碳罐损坏：暂无',
                accessories: '',
                victim: 'RZ，小潘东，芋头姐姐，Luce，Tremble，Tangyx，Holigen',
                module: '重要部件',
                isOpen: false,
            },
            {
                series: 'T',
                symptom: '仪表盘出现小乌龟',
                reason: '1. 燃油量极低；2. 燃油泵损坏；3. 燃油泵保险丝烧了；',
                level: '是',
                fix: '1. 加油； 2. 更换燃油泵；3. 更换燃油泵保险丝；',
                remark: '建议：尽早加油，尽量不要油箱跑干了再去',
                accessories: '',
                victim: '深圳-无名群众，杨清墨，J7，屌丝侠',
                module: '重要部件',
                isOpen: false,
            },
            {
                series: 'T',
                symptom: '12V蓄电池充电故障',
                reason: '可能由于大电流导致，电瓶侧面保险丝损坏',
                level: '是',
                fix: '联系4S，叫拖车',
                remark: '',
                accessories: '',
                victim: '苏州-pika，Steiner，接班人',
                module: '重要部件',
                isOpen: false,
            },
            {
                series: 'T',
                symptom: '烧机油(中控显示机油只有3/5)',
                reason: '正常损耗',
                level: '无影响',
                fix: '无需处理',
                remark: '',
                accessories: '',
                victim: '上海-沪AJL杰，',
                module: '重要部件',
                isOpen: false,
            },
            {
                series: 'B',
                symptom: '熄火后，排气管异响',
                reason: '排气管金属翻板缺少润滑',
                level: '无影响',
                fix: '无需对翻板进行润滑处理',
                remark: '',
                accessories: '',
                victim: '张老湿',
                module: '重要部件',
                isOpen: false,
            },
            {
                series: 'B',
                symptom: '熄火后发动机舱异响',
                reason: '4S说是集油器原因',
                level: '轻微',
                fix: '更换集油器',
                remark: '',
                accessories: '',
                victim: '张老湿',
                module: '重要部件',
                isOpen: false,
            },
            {
                series: 'T/B',
                symptom: '发动机运行时异响',
                reason: '空调那根粗管子和发动机舱箱体对撞',
                level: '轻微',
                fix: '包了一根套管就好了',
                remark: '',
                accessories: '',
                victim: 'Holigen，',
                module: '重要部件',
                isOpen: false,
            },
            {
                series: 'T',
                symptom: '1200转车厢共振',
                reason: '汽油泵的出油管与车身接触发生共振',
                level: '否',
                fix: '油箱落下来，缠海绵胶布',
                remark: '',
                accessories: '',
                victim: '天津 津C155X5，',
                module: '重要部件',
                isOpen: false,
            },
            {
                series: 'T/B',
                symptom: 'CarPlay 黑屏 or 无响应',
                reason: '车机系统抽风',
                level: '轻微',
                fix: '1. 长按Home键直至黑屏，再轻点Home键亮屏；2. 重新插拔手机；3. 熄火，下车，锁车，静候10s，重新点火尝试连接手机；4. 重启手机；5. 更换数据线；6. 更换手机；',
                remark: '',
                accessories: '',
                victim: 'RZ，小潘东，',
                module: '内部设备',
                isOpen: false,
            },
            {
                series: 'T/B',
                symptom: '发动机仓副驾驶侧靠近前保险杠位置出现绿色液体，或空调不制冷',
                reason: '低压空调管损坏',
                level: '否',
                fix: '4S质保免费更换软管',
                remark: '出风口有异响的时候，需要留意，有可能是这个问题。',
                accessories: '配件号软管：32226905(更新为：32226736)',
                victim: 'RZ，八毛安，菁小爷，Mars，北京-过去，Luce，Steiner Chen，小宇，小潘东，Elfinit1，芋头姐姐，接班人，深圳-冬先生，上海-KZ，屌丝侠，pika，邓生',
                module: '内部设备',
                isOpen: false,
            },
            {
                series: 'T',
                symptom: '仪表盘车外温度显示异常，导致车内空调无法制冷，方向盘和座椅加热功能异常',
                reason: '右后视镜的环境温度传感器故障',
                level: '否',
                fix: '4S质保免费更换传感器',
                remark: '重新调试固定线路针脚+更换PDM模组',
                accessories: '零件编号：31676500',
                victim: 'Tremble，',
                module: '内部设备',
                isOpen: false,
            },
            {
                series: 'T/B',
                symptom: '主驾驶腰托无法撑起',
                reason: '腰托气囊损坏',
                level: '否',
                fix: '4S质保免费更换气囊',
                remark: '',
                accessories: '',
                victim: '大帅，',
                module: '内部设备',
                isOpen: false,
            },
            {
                series: 'T/B',
                symptom: '副驾驶没人，安全带报警',
                reason: '坐垫内的压力传感故障',
                level: '否',
                fix: '4S质保免费更换传感器',
                remark: '',
                accessories: '',
                victim: '南通-虞，',
                module: '内部设备',
                isOpen: false,
            },
            {
                series: 'T/B',
                symptom: '仪表盘保安全气囊故障',
                reason: 'ACU模块问题',
                level: '是',
                fix: '1. 4S更换过安全带，但是问题仍未解决',
                remark: '',
                accessories: '',
                victim: 'Jan.Wu，玮哥，Mr.M，',
                module: '内部设备',
                isOpen: false,
            },
            {
                series: 'T/B',
                symptom: '方向盘多媒体按键失灵',
                reason: '按键品控问题',
                level: '否',
                fix: '4S质保免费更换按键',
                remark: '',
                accessories: '',
                victim: '浙Will，Oops，J7，上海-沪B552S2',
                module: '内部设备',
                isOpen: false,
            },
            {
                series: 'T/B',
                symptom: '转向灯心率不齐',
                reason: '未知',
                level: '否',
                fix: '升级维修2.0之后未复发',
                remark: '',
                accessories: '',
                victim: 'RZ，',
                module: '内部设备',
                isOpen: false,
            },
            {
                series: 'T/B',
                symptom: '安全带插头异响',
                reason: '安全带插头与安全带上圆形塑料限位扣在颠簸路面撞击发生的异响',
                level: '否',
                fix: '1. 在安全带限位圆形塑料与安全带插头接触点的地方贴缓震胶；2. 购买安全带插头胶套；',
                remark: '',
                accessories: '',
                victim: '大帅，',
                module: '内部设备',
                isOpen: false,
            },
            {
                series: 'T/B',
                symptom: '车窗玻璃异响',
                reason: '打开/关闭车窗玻璃时有叽叽叽的声音。猜测是胶条装配问题。',
                level: '否',
                fix: '1. 勤洗车；2. 把门板拆了，在玻璃和门板中间贴个减震胶；',
                remark: '',
                accessories: '',
                victim: '大帅，小潘东，',
                module: '内部设备',
                isOpen: false,
            },
            {
                series: 'T/B',
                symptom: '副驾驶装饰条开裂',
                reason: '饰条问题',
                level: '否',
                fix: '走4S质保更换',
                remark: '',
                accessories: '',
                victim: '南京-子健，',
                module: '内部设备',
                isOpen: false,
            },
            {
                series: 'T/B',
                symptom: '刹车时异响、抖动',
                reason: '刹车盘轻微变形',
                level: '轻微',
                fix: '4S质保免费更换刹车盘',
                remark: '',
                accessories: '',
                victim: 'Dino，叶落知风，辣子鸡，',
                module: '刹车底盘',
                isOpen: false,
            },
            {
                series: 'T/B',
                symptom: '跑偏',
                reason: '部分车友反映方向盘略微跑偏',
                level: '否',
                fix: '建议先排除路面不平整的因素。除非万不得已，不要轻易去做四轮定位。',
                remark: '',
                accessories: '',
                victim: 'Oops，博士，八毛安，J7',
                module: '刹车底盘',
                isOpen: false,
            },
            {
                series: 'T/B',
                symptom: '后雨刷无法喷水',
                reason: '玻璃水产生白色结晶导致后雨刷管路堵死（多数是单向阀）',
                level: '否',
                fix: '可去4S进行免费疏通',
                remark: '建议 1. 疏通后将剩余的玻璃水放掉；2. 之后不要加原厂玻璃水；',
                accessories: '',
                victim: 'RZ，芋头姐姐，小潘东，Spark，屌丝侠，',
                module: '外部设备',
                isOpen: false,
            },
            {
                series: 'T/B',
                symptom: '天窗无法打开 / 关闭',
                reason: '往上按和往后推一起操作了，系统骡子了不知道你要干啥，于是就只能推关掉，不能再打开',
                level: '否',
                fix: '可去4S刷系统恢复',
                remark: '建议 操作天窗时，注意用力的方向',
                accessories: '',
                victim: '大帅，',
                module: '外部设备',
                isOpen: false,
            },
            {
                series: 'T/B',
                symptom: '天窗遮阳帘无法完全关闭',
                reason: '遮阳帘的电机故障',
                level: '否',
                fix: '更换电机（质保范围）',
                remark: '',
                accessories: '',
                victim: '辣子鸡，',
                module: '外部设备',
                isOpen: false,
            },
            {
                series: 'T/B',
                symptom: '仪表盘显示雨刷不工作',
                reason: '系统抽风',
                level: '轻微',
                fix: '熄火锁车，10秒后解锁',
                remark: '',
                accessories: '',
                victim: 'Leo，',
                module: '外部设备',
                isOpen: false,
            },
            {
                series: 'T/B',
                symptom: '后备箱脚踢开关不灵',
                reason: '未知',
                level: '否',
                fix: '1. 4S送修；2. 重新插拔一下脚踢感应的插头（在备胎仓和后保中间）',
                remark: '',
                accessories: '',
                victim: '小潘东，',
                module: '外部设备',
                isOpen: false,
            },
            {
                series: 'T/B',
                symptom: '点火后外后视镜角度不对',
                reason: '未知',
                level: '否',
                fix: '以下方法都可以尝试一下，不一定能解决。1. 4S刷维修2.0程序；2. 把配置文件里“保护驾驶员配置文件”取消勾选；',
                remark: '',
                accessories: '',
                victim: 'Tremble，Spark，芋头姐姐，小潘东，Justin，Luce，',
                module: '外部设备',
                isOpen: false,
            },
            {
                series: 'T/B',
                symptom: '天窗异响',
                reason: '天窗龙骨问题',
                level: '否',
                fix: '可去4S免费更换龙骨',
                remark: '',
                accessories: '',
                victim: 'Spark，',
                module: '外部设备',
                isOpen: false,
            },
            {
                series: 'T/B',
                symptom: '引擎盖内部发黄',
                reason: '温度高，烤黄的',
                level: '否',
                fix: '经常洗洗擦擦就行',
                remark: '',
                accessories: '',
                victim: 'Justin，',
                module: '外部设备',
                isOpen: false,
            },
            {
                series: 'T/B',
                symptom: '发动机舱螺丝有拧过的痕迹',
                reason: '装配最后阶段的微调导致',
                level: '否',
                fix: '北欧工艺，无需处理',
                remark: '',
                accessories: '',
                victim: '小兵，汤大少，',
                module: '外部设备',
                isOpen: false,
            },
            {
                series: 'T/B',
                symptom: '外后视镜镜片脱落',
                reason: '质量问题',
                level: '是',
                fix: '4S质保更换',
                remark: '',
                accessories: '',
                victim: '4S质保更换',
                module: '外部设备',
                isOpen: false,
            },
        ],
    },
    onLoad: function () {
        this.setData({
            currentList: __spreadArray([], this.data.issueList),
        });
    },
    onReady: function () { },
    onShow: function () { },
    seriesChange: function (e) {
        var currentSeries = this.data.seriesOptions[e.detail.value];
        this.setData({
            currentSeries: currentSeries,
            currentModule: '全部',
        });
        var currentList = [];
        if (currentSeries === '全部') {
            currentList = this.data.issueList;
        }
        else {
            for (var _i = 0, _a = this.data.currentList; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.series === 'T/B' || item.series === currentSeries) {
                    currentList.push(item);
                }
            }
        }
        this.setData({
            currentList: currentList,
        });
    },
    moduleChange: function (e) {
        var currentModule = this.data.moduleOptions[e.detail.value];
        this.setData({
            currentModule: currentModule,
            currentSeries: '全部',
        });
        var currentList = [];
        if (currentModule === '全部') {
            currentList = this.data.issueList;
        }
        else {
            for (var _i = 0, _a = this.data.currentList; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.module === currentModule) {
                    currentList.push(item);
                }
            }
        }
        this.setData({
            currentList: currentList,
        });
    },
    clickItem: function (e) {
        var index = e.currentTarget.dataset['index'];
        if (this.data.issueList[index].isOpen) {
            this.closeDetail(index);
        }
        else {
            this.showDetail(index);
        }
    },
    showDetail: function (index) {
        var newList = this.data.issueList;
        newList[index].isOpen = true;
        this.setData({
            currentList: newList,
        });
    },
    closeDetail: function (index) {
        var newList = this.data.issueList;
        newList[index].isOpen = false;
        this.setData({
            currentList: newList,
        });
    },
    onHide: function () { },
    onUnload: function () { },
    onPullDownRefresh: function () { },
    onReachBottom: function () { },
    onShareAppMessage: function () { },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNzdWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpc3N1ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFjQSxJQUFJLENBQUM7SUFJSCxJQUFJLEVBQUU7UUFDSixhQUFhLEVBQUUsSUFBSTtRQUNuQixhQUFhLEVBQUUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztRQUMvQixhQUFhLEVBQUUsSUFBSTtRQUNuQixhQUFhLEVBQUUsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDO1FBQ3JELFdBQVcsRUFBRTtZQUNYO2dCQUNFLE1BQU0sRUFBRSxFQUFFO2dCQUNWLE9BQU8sRUFBRSxFQUFFO2dCQUNYLE1BQU0sRUFBRSxFQUFFO2dCQUNWLEtBQUssRUFBRSxFQUFFO2dCQUNULEdBQUcsRUFBRSxFQUFFO2dCQUNQLE1BQU0sRUFBRSxFQUFFO2dCQUNWLFdBQVcsRUFBRSxFQUFFO2dCQUNmLE1BQU0sRUFBRSxFQUFFO2dCQUNWLE1BQU0sRUFBRSxFQUFFO2dCQUNWLE1BQU0sRUFBRSxLQUFLO2FBQ2Q7U0FDRjtRQUNELFNBQVMsRUFBRTtZQUNUO2dCQUNFLE1BQU0sRUFBRSxHQUFHO2dCQUNYLE9BQU8sRUFBRSxTQUFTO2dCQUNsQixNQUFNLEVBQUUsNkJBQTZCO2dCQUNyQyxLQUFLLEVBQUUsSUFBSTtnQkFDWCxHQUFHLEVBQUUsZ0JBQWdCO2dCQUNyQixNQUFNLEVBQ0oscURBQXFEO2dCQUN2RCxXQUFXLEVBQUUsRUFBRTtnQkFDZixNQUFNLEVBQUUseUNBQXlDO2dCQUNqRCxNQUFNLEVBQUUsTUFBTTtnQkFDZCxNQUFNLEVBQUUsS0FBSzthQUNkO1lBQ0Q7Z0JBQ0UsTUFBTSxFQUFFLEdBQUc7Z0JBQ1gsT0FBTyxFQUFFLFVBQVU7Z0JBQ25CLE1BQU0sRUFBRSxnQ0FBZ0M7Z0JBQ3hDLEtBQUssRUFBRSxHQUFHO2dCQUNWLEdBQUcsRUFBRSw4QkFBOEI7Z0JB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LENBQUMsQ0FBQztRQUM3QyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sRUFBRTtZQUNyQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3pCO2FBQU07WUFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQztJQUVELFVBQVUsRUFBVixVQUFXLEtBQWE7UUFDdEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDbEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLFdBQVcsRUFBRSxPQUFPO1NBQ3JCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxXQUFXLEVBQVgsVUFBWSxLQUFhO1FBQ3ZCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ2xDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzlCLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxXQUFXLEVBQUUsT0FBTztTQUNyQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBS0QsTUFBTSxnQkFBSSxDQUFDO0lBS1gsUUFBUSxnQkFBSSxDQUFDO0lBS2IsaUJBQWlCLGdCQUFJLENBQUM7SUFLdEIsYUFBYSxnQkFBSSxDQUFDO0lBS2xCLGlCQUFpQixnQkFBSSxDQUFDO0NBQ3ZCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHt7cGFnZX19LnRzXG5pbnRlcmZhY2UgbGlzdEl0ZW0ge1xuICBzZXJpZXM6IHN0cmluZztcbiAgc3ltcHRvbTogc3RyaW5nO1xuICByZWFzb246IHN0cmluZztcbiAgbGV2ZWw6IHN0cmluZztcbiAgZml4OiBzdHJpbmc7XG4gIHJlbWFyazogc3RyaW5nO1xuICBhY2Nlc3Nvcmllczogc3RyaW5nO1xuICB2aWN0aW06IHN0cmluZztcbiAgaXNPcGVuOiBib29sZWFuO1xuICBtb2R1bGU6IHN0cmluZztcbn1cblxuUGFnZSh7XG4gIC8qKlxuICAgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHtcbiAgICBjdXJyZW50U2VyaWVzOiAn5YWo6YOoJyxcbiAgICBzZXJpZXNPcHRpb25zOiBbJ+WFqOmDqCcsICdUJywgJ0InXSxcbiAgICBjdXJyZW50TW9kdWxlOiAn5YWo6YOoJyxcbiAgICBtb2R1bGVPcHRpb25zOiBbJ+WFqOmDqCcsICfph43opoHpg6jku7YnLCAn5YaF6YOo6K6+5aSHJywgJ+WIuei9puW6leebmCcsICflpJbpg6jorr7lpIcnXSxcbiAgICBjdXJyZW50TGlzdDogW1xuICAgICAge1xuICAgICAgICBzZXJpZXM6ICcnLFxuICAgICAgICBzeW1wdG9tOiAnJyxcbiAgICAgICAgcmVhc29uOiAnJyxcbiAgICAgICAgbGV2ZWw6ICcnLFxuICAgICAgICBmaXg6ICcnLFxuICAgICAgICByZW1hcms6ICcnLFxuICAgICAgICBhY2Nlc3NvcmllczogJycsXG4gICAgICAgIHZpY3RpbTogJycsXG4gICAgICAgIG1vZHVsZTogJycsXG4gICAgICAgIGlzT3BlbjogZmFsc2UsXG4gICAgICB9LFxuICAgIF0sXG4gICAgaXNzdWVMaXN0OiBbXG4gICAgICB7XG4gICAgICAgIHNlcmllczogJ1QnLFxuICAgICAgICBzeW1wdG9tOiAn5Y+R5Yqo5py65pWF6Zqc54Gv5LquJyxcbiAgICAgICAgcmVhc29uOiAnMS4g6JK45Y+R566h5o2f5Z2P77ybMi4g5rCn5Lyg5oSf5Zmo5o2f5Z2P77ybMy4g56Kz572Q5o2f5Z2P77ybJyxcbiAgICAgICAgbGV2ZWw6ICfovbvlvq4nLFxuICAgICAgICBmaXg6ICc0U+WumOaWueWPrOWbnuWFjei0ueabtOaNouebuOW6lOmFjeS7ticsXG4gICAgICAgIHJlbWFyazpcbiAgICAgICAgICAn5pWF6Zqc56CBIOiSuOWPkeeuoe+8mkVDTS1QMDRGMDAwIEVWQVAg57O757uf6auY5Y6L5YeA5YyW566h6Lev5oCn6IO9IOawp+S8oOaEn+WZqO+8muaaguaXoCDnorPnvZDmjZ/lnY/vvJrmmoLml6AnLFxuICAgICAgICBhY2Nlc3NvcmllczogJycsXG4gICAgICAgIHZpY3RpbTogJ1Ja77yM5bCP5r2Y5Lic77yM6IqL5aS05aeQ5aeQ77yMTHVjZe+8jFRyZW1ibGXvvIxUYW5neXjvvIxIb2xpZ2VuJyxcbiAgICAgICAgbW9kdWxlOiAn6YeN6KaB6YOo5Lu2JyxcbiAgICAgICAgaXNPcGVuOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlcmllczogJ1QnLFxuICAgICAgICBzeW1wdG9tOiAn5Luq6KGo55uY5Ye6546w5bCP5LmM6b6fJyxcbiAgICAgICAgcmVhc29uOiAnMS4g54eD5rK56YeP5p6B5L2O77ybMi4g54eD5rK55rO15o2f5Z2P77ybMy4g54eD5rK55rO15L+d6Zmp5Lid54On5LqG77ybJyxcbiAgICAgICAgbGV2ZWw6ICfmmK8nLFxuICAgICAgICBmaXg6ICcxLiDliqDmsrnvvJsgMi4g5pu05o2i54eD5rK55rO177ybMy4g5pu05o2i54eD5rK55rO15L+d6Zmp5Lid77ybJyxcbiAgICAgICAgcmVtYXJrOiAn5bu66K6u77ya5bC95pep5Yqg5rK577yM5bC96YeP5LiN6KaB5rK5566x6LeR5bmy5LqG5YaN5Y67JyxcbiAgICAgICAgYWNjZXNzb3JpZXM6ICcnLFxuICAgICAgICB2aWN0aW06ICfmt7HlnLMt5peg5ZCN576k5LyX77yM5p2o5riF5aKo77yMSjfvvIzlsYzkuJ3kvqAnLFxuICAgICAgICBtb2R1bGU6ICfph43opoHpg6jku7YnLFxuICAgICAgICBpc09wZW46IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VyaWVzOiAnVCcsXG4gICAgICAgIHN5bXB0b206ICcxMlbok4TnlLXmsaDlhYXnlLXmlYXpmpwnLFxuICAgICAgICByZWFzb246ICflj6/og73nlLHkuo7lpKfnlLXmtYHlr7zoh7TvvIznlLXnk7bkvqfpnaLkv53pmankuJ3mjZ/lnY8nLFxuICAgICAgICBsZXZlbDogJ+aYrycsXG4gICAgICAgIGZpeDogJ+iBlOezuzRT77yM5Y+r5ouW6L2mJyxcbiAgICAgICAgcmVtYXJrOiAnJyxcbiAgICAgICAgYWNjZXNzb3JpZXM6ICcnLFxuICAgICAgICB2aWN0aW06ICfoi4/lt54tcGlrYe+8jFN0ZWluZXLvvIzmjqXnj63kuronLFxuICAgICAgICBtb2R1bGU6ICfph43opoHpg6jku7YnLFxuICAgICAgICBpc09wZW46IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VyaWVzOiAnVCcsXG4gICAgICAgIHN5bXB0b206ICfng6fmnLrmsrko5Lit5o6n5pi+56S65py65rK55Y+q5pyJMy81KScsXG4gICAgICAgIHJlYXNvbjogJ+ato+W4uOaNn+iAlycsXG4gICAgICAgIGxldmVsOiAn5peg5b2x5ZONJyxcbiAgICAgICAgZml4OiAn5peg6ZyA5aSE55CGJyxcbiAgICAgICAgcmVtYXJrOiAnJyxcbiAgICAgICAgYWNjZXNzb3JpZXM6ICcnLFxuICAgICAgICB2aWN0aW06ICfkuIrmtbct5rKqQUpM5p2w77yMJyxcbiAgICAgICAgbW9kdWxlOiAn6YeN6KaB6YOo5Lu2JyxcbiAgICAgICAgaXNPcGVuOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlcmllczogJ0InLFxuICAgICAgICBzeW1wdG9tOiAn54aE54Gr5ZCO77yM5o6S5rCU566h5byC5ZONJyxcbiAgICAgICAgcmVhc29uOiAn5o6S5rCU566h6YeR5bGe57+75p2/57y65bCR5ram5ruRJyxcbiAgICAgICAgbGV2ZWw6ICfml6DlvbHlk40nLFxuICAgICAgICBmaXg6ICfml6DpnIDlr7nnv7vmnb/ov5vooYzmtqbmu5HlpITnkIYnLFxuICAgICAgICByZW1hcms6ICcnLFxuICAgICAgICBhY2Nlc3NvcmllczogJycsXG4gICAgICAgIHZpY3RpbTogJ+W8oOiAgea5vycsXG4gICAgICAgIG1vZHVsZTogJ+mHjeimgemDqOS7ticsXG4gICAgICAgIGlzT3BlbjogZmFsc2UsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZXJpZXM6ICdCJyxcbiAgICAgICAgc3ltcHRvbTogJ+eGhOeBq+WQjuWPkeWKqOacuuiIseW8guWTjScsXG4gICAgICAgIHJlYXNvbjogJzRT6K+05piv6ZuG5rK55Zmo5Y6f5ZugJyxcbiAgICAgICAgbGV2ZWw6ICfovbvlvq4nLFxuICAgICAgICBmaXg6ICfmm7TmjaLpm4bmsrnlmagnLFxuICAgICAgICByZW1hcms6ICcnLFxuICAgICAgICBhY2Nlc3NvcmllczogJycsXG4gICAgICAgIHZpY3RpbTogJ+W8oOiAgea5vycsXG4gICAgICAgIG1vZHVsZTogJ+mHjeimgemDqOS7ticsXG4gICAgICAgIGlzT3BlbjogZmFsc2UsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZXJpZXM6ICdUL0InLFxuICAgICAgICBzeW1wdG9tOiAn5Y+R5Yqo5py66L+Q6KGM5pe25byC5ZONJyxcbiAgICAgICAgcmVhc29uOiAn56m66LCD6YKj5qC557KX566h5a2Q5ZKM5Y+R5Yqo5py66Iix566x5L2T5a+55pKeJyxcbiAgICAgICAgbGV2ZWw6ICfovbvlvq4nLFxuICAgICAgICBmaXg6ICfljIXkuobkuIDmoLnlpZfnrqHlsLHlpb3kuoYnLFxuICAgICAgICByZW1hcms6ICcnLFxuICAgICAgICBhY2Nlc3NvcmllczogJycsXG4gICAgICAgIHZpY3RpbTogJ0hvbGlnZW7vvIwnLFxuICAgICAgICBtb2R1bGU6ICfph43opoHpg6jku7YnLFxuICAgICAgICBpc09wZW46IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VyaWVzOiAnVCcsXG4gICAgICAgIHN5bXB0b206ICcxMjAw6L2s6L2m5Y6i5YWx5oyvJyxcbiAgICAgICAgcmVhc29uOiAn5rG95rK55rO155qE5Ye65rK5566h5LiO6L2m6Lqr5o6l6Kem5Y+R55Sf5YWx5oyvJyxcbiAgICAgICAgbGV2ZWw6ICflkKYnLFxuICAgICAgICBmaXg6ICfmsrnnrrHokL3kuIvmnaXvvIznvKDmtbfnu7Xog7bluIMnLFxuICAgICAgICByZW1hcms6ICcnLFxuICAgICAgICBhY2Nlc3NvcmllczogJycsXG4gICAgICAgIHZpY3RpbTogJ+Wkqea0pSDmtKVDMTU1WDXvvIwnLFxuICAgICAgICBtb2R1bGU6ICfph43opoHpg6jku7YnLFxuICAgICAgICBpc09wZW46IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VyaWVzOiAnVC9CJyxcbiAgICAgICAgc3ltcHRvbTogJ0NhclBsYXkg6buR5bGPIG9yIOaXoOWTjeW6lCcsXG4gICAgICAgIHJlYXNvbjogJ+i9puacuuezu+e7n+aKvemjjicsXG4gICAgICAgIGxldmVsOiAn6L275b6uJyxcbiAgICAgICAgZml4OiAnMS4g6ZW/5oyJSG9tZemUruebtOiHs+m7keWxj++8jOWGjei9u+eCuUhvbWXplK7kuq7lsY/vvJsyLiDph43mlrDmj5Lmi5TmiYvmnLrvvJszLiDnhoTngavvvIzkuIvovabvvIzplIHovabvvIzpnZnlgJkxMHPvvIzph43mlrDngrnngavlsJ3or5Xov57mjqXmiYvmnLrvvJs0LiDph43lkK/miYvmnLrvvJs1LiDmm7TmjaLmlbDmja7nur/vvJs2LiDmm7TmjaLmiYvmnLrvvJsnLFxuICAgICAgICByZW1hcms6ICcnLFxuICAgICAgICBhY2Nlc3NvcmllczogJycsXG4gICAgICAgIHZpY3RpbTogJ1Ja77yM5bCP5r2Y5Lic77yMJyxcbiAgICAgICAgbW9kdWxlOiAn5YaF6YOo6K6+5aSHJyxcbiAgICAgICAgaXNPcGVuOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlcmllczogJ1QvQicsXG4gICAgICAgIHN5bXB0b206ICflj5HliqjmnLrku5Plia/pqb7pqbbkvqfpnaDov5HliY3kv53pmanmnaDkvY3nva7lh7rnjrDnu7/oibLmtrLkvZPvvIzmiJbnqbrosIPkuI3liLblhrcnLFxuICAgICAgICByZWFzb246ICfkvY7ljovnqbrosIPnrqHmjZ/lnY8nLFxuICAgICAgICBsZXZlbDogJ+WQpicsXG4gICAgICAgIGZpeDogJzRT6LSo5L+d5YWN6LS55pu05o2i6L2v566hJyxcbiAgICAgICAgcmVtYXJrOiAn5Ye66aOO5Y+j5pyJ5byC5ZON55qE5pe25YCZ77yM6ZyA6KaB55WZ5oSP77yM5pyJ5Y+v6IO95piv6L+Z5Liq6Zeu6aKY44CCJyxcbiAgICAgICAgYWNjZXNzb3JpZXM6ICfphY3ku7blj7fova/nrqHvvJozMjIyNjkwNSjmm7TmlrDkuLrvvJozMjIyNjczNiknLFxuICAgICAgICB2aWN0aW06XG4gICAgICAgICAgJ1Ja77yM5YWr5q+b5a6J77yM6I+B5bCP54i377yMTWFyc++8jOWMl+S6rC3ov4fljrvvvIxMdWNl77yMU3RlaW5lciBDaGVu77yM5bCP5a6H77yM5bCP5r2Y5Lic77yMRWxmaW5pdDHvvIzoiovlpLTlp5Dlp5DvvIzmjqXnj63kurrvvIzmt7HlnLMt5Yas5YWI55Sf77yM5LiK5rW3LUta77yM5bGM5Lid5L6g77yMcGlrYe+8jOmCk+eUnycsXG4gICAgICAgIG1vZHVsZTogJ+WGhemDqOiuvuWkhycsXG4gICAgICAgIGlzT3BlbjogZmFsc2UsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZXJpZXM6ICdUJyxcbiAgICAgICAgc3ltcHRvbTogJ+S7quihqOebmOi9puWklua4qeW6puaYvuekuuW8guW4uO+8jOWvvOiHtOi9puWGheepuuiwg+aXoOazleWItuWGt++8jOaWueWQkeebmOWSjOW6p+akheWKoOeDreWKn+iDveW8guW4uCcsXG4gICAgICAgIHJlYXNvbjogJ+WPs+WQjuinhumVnOeahOeOr+Wig+a4qeW6puS8oOaEn+WZqOaVhemanCcsXG4gICAgICAgIGxldmVsOiAn5ZCmJyxcbiAgICAgICAgZml4OiAnNFPotKjkv53lhY3otLnmm7TmjaLkvKDmhJ/lmagnLFxuICAgICAgICByZW1hcms6ICfph43mlrDosIPor5Xlm7rlrprnur/ot6/pkojohJor5pu05o2iUERN5qih57uEJyxcbiAgICAgICAgYWNjZXNzb3JpZXM6ICfpm7bku7bnvJblj7fvvJozMTY3NjUwMCcsXG4gICAgICAgIHZpY3RpbTogJ1RyZW1ibGXvvIwnLFxuICAgICAgICBtb2R1bGU6ICflhoXpg6jorr7lpIcnLFxuICAgICAgICBpc09wZW46IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VyaWVzOiAnVC9CJyxcbiAgICAgICAgc3ltcHRvbTogJ+S4u+mpvumptuiFsOaJmOaXoOazleaSkei1tycsXG4gICAgICAgIHJlYXNvbjogJ+iFsOaJmOawlOWbiuaNn+WdjycsXG4gICAgICAgIGxldmVsOiAn5ZCmJyxcbiAgICAgICAgZml4OiAnNFPotKjkv53lhY3otLnmm7TmjaLmsJTlm4onLFxuICAgICAgICByZW1hcms6ICcnLFxuICAgICAgICBhY2Nlc3NvcmllczogJycsXG4gICAgICAgIHZpY3RpbTogJ+Wkp+W4he+8jCcsXG4gICAgICAgIG1vZHVsZTogJ+WGhemDqOiuvuWkhycsXG4gICAgICAgIGlzT3BlbjogZmFsc2UsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZXJpZXM6ICdUL0InLFxuICAgICAgICBzeW1wdG9tOiAn5Ymv6am+6am25rKh5Lq677yM5a6J5YWo5bim5oql6K2mJyxcbiAgICAgICAgcmVhc29uOiAn5Z2Q5Z6r5YaF55qE5Y6L5Yqb5Lyg5oSf5pWF6ZqcJyxcbiAgICAgICAgbGV2ZWw6ICflkKYnLFxuICAgICAgICBmaXg6ICc0U+i0qOS/neWFjei0ueabtOaNouS8oOaEn+WZqCcsXG4gICAgICAgIHJlbWFyazogJycsXG4gICAgICAgIGFjY2Vzc29yaWVzOiAnJyxcbiAgICAgICAgdmljdGltOiAn5Y2X6YCaLeiZnu+8jCcsXG4gICAgICAgIG1vZHVsZTogJ+WGhemDqOiuvuWkhycsXG4gICAgICAgIGlzT3BlbjogZmFsc2UsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZXJpZXM6ICdUL0InLFxuICAgICAgICBzeW1wdG9tOiAn5Luq6KGo55uY5L+d5a6J5YWo5rCU5ZuK5pWF6ZqcJyxcbiAgICAgICAgcmVhc29uOiAnQUNV5qih5Z2X6Zeu6aKYJyxcbiAgICAgICAgbGV2ZWw6ICfmmK8nLFxuICAgICAgICBmaXg6ICcxLiA0U+abtOaNoui/h+WuieWFqOW4pu+8jOS9huaYr+mXrumimOS7jeacquino+WGsycsXG4gICAgICAgIHJlbWFyazogJycsXG4gICAgICAgIGFjY2Vzc29yaWVzOiAnJyxcbiAgICAgICAgdmljdGltOiAnSmFuLld177yM546u5ZOl77yMTXIuTe+8jCcsXG4gICAgICAgIG1vZHVsZTogJ+WGhemDqOiuvuWkhycsXG4gICAgICAgIGlzT3BlbjogZmFsc2UsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZXJpZXM6ICdUL0InLFxuICAgICAgICBzeW1wdG9tOiAn5pa55ZCR55uY5aSa5aqS5L2T5oyJ6ZSu5aSx54G1JyxcbiAgICAgICAgcmVhc29uOiAn5oyJ6ZSu5ZOB5o6n6Zeu6aKYJyxcbiAgICAgICAgbGV2ZWw6ICflkKYnLFxuICAgICAgICBmaXg6ICc0U+i0qOS/neWFjei0ueabtOaNouaMiemUricsXG4gICAgICAgIHJlbWFyazogJycsXG4gICAgICAgIGFjY2Vzc29yaWVzOiAnJyxcbiAgICAgICAgdmljdGltOiAn5rWZV2lsbO+8jE9vcHPvvIxKN++8jOS4iua1ty3msqpCNTUyUzInLFxuICAgICAgICBtb2R1bGU6ICflhoXpg6jorr7lpIcnLFxuICAgICAgICBpc09wZW46IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VyaWVzOiAnVC9CJyxcbiAgICAgICAgc3ltcHRvbTogJ+i9rOWQkeeBr+W/g+eOh+S4jem9kCcsXG4gICAgICAgIHJlYXNvbjogJ+acquefpScsXG4gICAgICAgIGxldmVsOiAn5ZCmJyxcbiAgICAgICAgZml4OiAn5Y2H57qn57u05L+uMi4w5LmL5ZCO5pyq5aSN5Y+RJyxcbiAgICAgICAgcmVtYXJrOiAnJyxcbiAgICAgICAgYWNjZXNzb3JpZXM6ICcnLFxuICAgICAgICB2aWN0aW06ICdSWu+8jCcsXG4gICAgICAgIG1vZHVsZTogJ+WGhemDqOiuvuWkhycsXG4gICAgICAgIGlzT3BlbjogZmFsc2UsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZXJpZXM6ICdUL0InLFxuICAgICAgICBzeW1wdG9tOiAn5a6J5YWo5bim5o+S5aS05byC5ZONJyxcbiAgICAgICAgcmVhc29uOiAn5a6J5YWo5bim5o+S5aS05LiO5a6J5YWo5bim5LiK5ZyG5b2i5aGR5paZ6ZmQ5L2N5omj5Zyo6aKg57C46Lev6Z2i5pKe5Ye75Y+R55Sf55qE5byC5ZONJyxcbiAgICAgICAgbGV2ZWw6ICflkKYnLFxuICAgICAgICBmaXg6ICcxLiDlnKjlronlhajluKbpmZDkvY3lnIblvaLloZHmlpnkuI7lronlhajluKbmj5LlpLTmjqXop6bngrnnmoTlnLDmlrnotLTnvJPpnIfog7bvvJsyLiDotK3kubDlronlhajluKbmj5LlpLTog7blpZfvvJsnLFxuICAgICAgICByZW1hcms6ICcnLFxuICAgICAgICBhY2Nlc3NvcmllczogJycsXG4gICAgICAgIHZpY3RpbTogJ+Wkp+W4he+8jCcsXG4gICAgICAgIG1vZHVsZTogJ+WGhemDqOiuvuWkhycsXG4gICAgICAgIGlzT3BlbjogZmFsc2UsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZXJpZXM6ICdUL0InLFxuICAgICAgICBzeW1wdG9tOiAn6L2m56qX546755KD5byC5ZONJyxcbiAgICAgICAgcmVhc29uOiAn5omT5byAL+WFs+mXrei9pueql+eOu+eSg+aXtuacieWPveWPveWPveeahOWjsOmfs+OAgueMnOa1i+aYr+iDtuadoeijhemFjemXrumimOOAgicsXG4gICAgICAgIGxldmVsOiAn5ZCmJyxcbiAgICAgICAgZml4OiAnMS4g5Yuk5rSX6L2m77ybMi4g5oqK6Zeo5p2/5ouG5LqG77yM5Zyo546755KD5ZKM6Zeo5p2/5Lit6Ze06LS05Liq5YeP6ZyH6IO277ybJyxcbiAgICAgICAgcmVtYXJrOiAnJyxcbiAgICAgICAgYWNjZXNzb3JpZXM6ICcnLFxuICAgICAgICB2aWN0aW06ICflpKfluIXvvIzlsI/mvZjkuJzvvIwnLFxuICAgICAgICBtb2R1bGU6ICflhoXpg6jorr7lpIcnLFxuICAgICAgICBpc09wZW46IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VyaWVzOiAnVC9CJyxcbiAgICAgICAgc3ltcHRvbTogJ+WJr+mpvumptuijhemlsOadoeW8gOijgicsXG4gICAgICAgIHJlYXNvbjogJ+mlsOadoemXrumimCcsXG4gICAgICAgIGxldmVsOiAn5ZCmJyxcbiAgICAgICAgZml4OiAn6LWwNFPotKjkv53mm7TmjaInLFxuICAgICAgICByZW1hcms6ICcnLFxuICAgICAgICBhY2Nlc3NvcmllczogJycsXG4gICAgICAgIHZpY3RpbTogJ+WNl+S6rC3lrZDlgaXvvIwnLFxuICAgICAgICBtb2R1bGU6ICflhoXpg6jorr7lpIcnLFxuICAgICAgICBpc09wZW46IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VyaWVzOiAnVC9CJyxcbiAgICAgICAgc3ltcHRvbTogJ+WIuei9puaXtuW8guWTjeOAgeaKluWKqCcsXG4gICAgICAgIHJlYXNvbjogJ+WIuei9puebmOi9u+W+ruWPmOW9oicsXG4gICAgICAgIGxldmVsOiAn6L275b6uJyxcbiAgICAgICAgZml4OiAnNFPotKjkv53lhY3otLnmm7TmjaLliLnovabnm5gnLFxuICAgICAgICByZW1hcms6ICcnLFxuICAgICAgICBhY2Nlc3NvcmllczogJycsXG4gICAgICAgIHZpY3RpbTogJ0Rpbm/vvIzlj7bokL3nn6Xpo47vvIzovqPlrZDpuKHvvIwnLFxuICAgICAgICBtb2R1bGU6ICfliLnovablupXnm5gnLFxuICAgICAgICBpc09wZW46IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VyaWVzOiAnVC9CJyxcbiAgICAgICAgc3ltcHRvbTogJ+i3keWBjycsXG4gICAgICAgIHJlYXNvbjogJ+mDqOWIhui9puWPi+WPjeaYoOaWueWQkeebmOeVpeW+rui3keWBjycsXG4gICAgICAgIGxldmVsOiAn5ZCmJyxcbiAgICAgICAgZml4OiAn5bu66K6u5YWI5o6S6Zmk6Lev6Z2i5LiN5bmz5pW055qE5Zug57Sg44CC6Zmk6Z2e5LiH5LiN5b6X5bey77yM5LiN6KaB6L275piT5Y675YGa5Zub6L2u5a6a5L2N44CCJyxcbiAgICAgICAgcmVtYXJrOiAnJyxcbiAgICAgICAgYWNjZXNzb3JpZXM6ICcnLFxuICAgICAgICB2aWN0aW06ICdPb3Bz77yM5Y2a5aOr77yM5YWr5q+b5a6J77yMSjcnLFxuICAgICAgICBtb2R1bGU6ICfliLnovablupXnm5gnLFxuICAgICAgICBpc09wZW46IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VyaWVzOiAnVC9CJyxcbiAgICAgICAgc3ltcHRvbTogJ+WQjumbqOWIt+aXoOazleWWt+awtCcsXG4gICAgICAgIHJlYXNvbjogJ+eOu+eSg+awtOS6p+eUn+eZveiJsue7k+aZtuWvvOiHtOWQjumbqOWIt+euoei3r+Wgteatu++8iOWkmuaVsOaYr+WNleWQkemYgO+8iScsXG4gICAgICAgIGxldmVsOiAn5ZCmJyxcbiAgICAgICAgZml4OiAn5Y+v5Y67NFPov5vooYzlhY3otLnnlo/pgJonLFxuICAgICAgICByZW1hcms6ICflu7rorq4gMS4g55aP6YCa5ZCO5bCG5Ymp5L2Z55qE546755KD5rC05pS+5o6J77ybMi4g5LmL5ZCO5LiN6KaB5Yqg5Y6f5Y6C546755KD5rC077ybJyxcbiAgICAgICAgYWNjZXNzb3JpZXM6ICcnLFxuICAgICAgICB2aWN0aW06ICdSWu+8jOiKi+WktOWnkOWnkO+8jOWwj+a9mOS4nO+8jFNwYXJr77yM5bGM5Lid5L6g77yMJyxcbiAgICAgICAgbW9kdWxlOiAn5aSW6YOo6K6+5aSHJyxcbiAgICAgICAgaXNPcGVuOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlcmllczogJ1QvQicsXG4gICAgICAgIHN5bXB0b206ICflpKnnqpfml6Dms5XmiZPlvIAgLyDlhbPpl60nLFxuICAgICAgICByZWFzb246ICflvoDkuIrmjInlkozlvoDlkI7mjqjkuIDotbfmk43kvZzkuobvvIzns7vnu5/pqqHlrZDkuobkuI3nn6XpgZPkvaDopoHlubLllaXvvIzkuo7mmK/lsLHlj6rog73mjqjlhbPmjonvvIzkuI3og73lho3miZPlvIAnLFxuICAgICAgICBsZXZlbDogJ+WQpicsXG4gICAgICAgIGZpeDogJ+WPr+WOuzRT5Yi357O757uf5oGi5aSNJyxcbiAgICAgICAgcmVtYXJrOiAn5bu66K6uIOaTjeS9nOWkqeeql+aXtu+8jOazqOaEj+eUqOWKm+eahOaWueWQkScsXG4gICAgICAgIGFjY2Vzc29yaWVzOiAnJyxcbiAgICAgICAgdmljdGltOiAn5aSn5biF77yMJyxcbiAgICAgICAgbW9kdWxlOiAn5aSW6YOo6K6+5aSHJyxcbiAgICAgICAgaXNPcGVuOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlcmllczogJ1QvQicsXG4gICAgICAgIHN5bXB0b206ICflpKnnqpfpga7pmLPluJjml6Dms5XlrozlhajlhbPpl60nLFxuICAgICAgICByZWFzb246ICfpga7pmLPluJjnmoTnlLXmnLrmlYXpmpwnLFxuICAgICAgICBsZXZlbDogJ+WQpicsXG4gICAgICAgIGZpeDogJ+abtOaNoueUteacuu+8iOi0qOS/neiMg+WbtO+8iScsXG4gICAgICAgIHJlbWFyazogJycsXG4gICAgICAgIGFjY2Vzc29yaWVzOiAnJyxcbiAgICAgICAgdmljdGltOiAn6L6j5a2Q6bih77yMJyxcbiAgICAgICAgbW9kdWxlOiAn5aSW6YOo6K6+5aSHJyxcbiAgICAgICAgaXNPcGVuOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlcmllczogJ1QvQicsXG4gICAgICAgIHN5bXB0b206ICfku6rooajnm5jmmL7npLrpm6jliLfkuI3lt6XkvZwnLFxuICAgICAgICByZWFzb246ICfns7vnu5/mir3po44nLFxuICAgICAgICBsZXZlbDogJ+i9u+W+ricsXG4gICAgICAgIGZpeDogJ+eGhOeBq+mUgei9pu+8jDEw56eS5ZCO6Kej6ZSBJyxcbiAgICAgICAgcmVtYXJrOiAnJyxcbiAgICAgICAgYWNjZXNzb3JpZXM6ICcnLFxuICAgICAgICB2aWN0aW06ICdMZW/vvIwnLFxuICAgICAgICBtb2R1bGU6ICflpJbpg6jorr7lpIcnLFxuICAgICAgICBpc09wZW46IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VyaWVzOiAnVC9CJyxcbiAgICAgICAgc3ltcHRvbTogJ+WQjuWkh+euseiEmui4ouW8gOWFs+S4jeeBtScsXG4gICAgICAgIHJlYXNvbjogJ+acquefpScsXG4gICAgICAgIGxldmVsOiAn5ZCmJyxcbiAgICAgICAgZml4OiAnMS4gNFPpgIHkv67vvJsyLiDph43mlrDmj5Lmi5TkuIDkuIvohJrouKLmhJ/lupTnmoTmj5LlpLTvvIjlnKjlpIfog47ku5PlkozlkI7kv53kuK3pl7TvvIknLFxuICAgICAgICByZW1hcms6ICcnLFxuICAgICAgICBhY2Nlc3NvcmllczogJycsXG4gICAgICAgIHZpY3RpbTogJ+Wwj+a9mOS4nO+8jCcsXG4gICAgICAgIG1vZHVsZTogJ+WklumDqOiuvuWkhycsXG4gICAgICAgIGlzT3BlbjogZmFsc2UsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZXJpZXM6ICdUL0InLFxuICAgICAgICBzeW1wdG9tOiAn54K554Gr5ZCO5aSW5ZCO6KeG6ZWc6KeS5bqm5LiN5a+5JyxcbiAgICAgICAgcmVhc29uOiAn5pyq55+lJyxcbiAgICAgICAgbGV2ZWw6ICflkKYnLFxuICAgICAgICBmaXg6ICfku6XkuIvmlrnms5Xpg73lj6/ku6XlsJ3or5XkuIDkuIvvvIzkuI3kuIDlrprog73op6PlhrPjgIIxLiA0U+WIt+e7tOS/rjIuMOeoi+W6j++8mzIuIOaKiumFjee9ruaWh+S7tumHjOKAnOS/neaKpOmpvumptuWRmOmFjee9ruaWh+S7tuKAneWPlua2iOWLvumAie+8mycsXG4gICAgICAgIHJlbWFyazogJycsXG4gICAgICAgIGFjY2Vzc29yaWVzOiAnJyxcbiAgICAgICAgdmljdGltOiAnVHJlbWJsZe+8jFNwYXJr77yM6IqL5aS05aeQ5aeQ77yM5bCP5r2Y5Lic77yMSnVzdGlu77yMTHVjZe+8jCcsXG4gICAgICAgIG1vZHVsZTogJ+WklumDqOiuvuWkhycsXG4gICAgICAgIGlzT3BlbjogZmFsc2UsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZXJpZXM6ICdUL0InLFxuICAgICAgICBzeW1wdG9tOiAn5aSp56qX5byC5ZONJyxcbiAgICAgICAgcmVhc29uOiAn5aSp56qX6b6Z6aqo6Zeu6aKYJyxcbiAgICAgICAgbGV2ZWw6ICflkKYnLFxuICAgICAgICBmaXg6ICflj6/ljrs0U+WFjei0ueabtOaNoum+memqqCcsXG4gICAgICAgIHJlbWFyazogJycsXG4gICAgICAgIGFjY2Vzc29yaWVzOiAnJyxcbiAgICAgICAgdmljdGltOiAnU3BhcmvvvIwnLFxuICAgICAgICBtb2R1bGU6ICflpJbpg6jorr7lpIcnLFxuICAgICAgICBpc09wZW46IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VyaWVzOiAnVC9CJyxcbiAgICAgICAgc3ltcHRvbTogJ+W8leaTjuebluWGhemDqOWPkem7hCcsXG4gICAgICAgIHJlYXNvbjogJ+a4qeW6pumrmO+8jOeDpOm7hOeahCcsXG4gICAgICAgIGxldmVsOiAn5ZCmJyxcbiAgICAgICAgZml4OiAn57uP5bi45rSX5rSX5pOm5pOm5bCx6KGMJyxcbiAgICAgICAgcmVtYXJrOiAnJyxcbiAgICAgICAgYWNjZXNzb3JpZXM6ICcnLFxuICAgICAgICB2aWN0aW06ICdKdXN0aW7vvIwnLFxuICAgICAgICBtb2R1bGU6ICflpJbpg6jorr7lpIcnLFxuICAgICAgICBpc09wZW46IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VyaWVzOiAnVC9CJyxcbiAgICAgICAgc3ltcHRvbTogJ+WPkeWKqOacuuiIseieuuS4neacieaLp+i/h+eahOeXlei/uScsXG4gICAgICAgIHJlYXNvbjogJ+ijhemFjeacgOWQjumYtuauteeahOW+ruiwg+WvvOiHtCcsXG4gICAgICAgIGxldmVsOiAn5ZCmJyxcbiAgICAgICAgZml4OiAn5YyX5qyn5bel6Im677yM5peg6ZyA5aSE55CGJyxcbiAgICAgICAgcmVtYXJrOiAnJyxcbiAgICAgICAgYWNjZXNzb3JpZXM6ICcnLFxuICAgICAgICB2aWN0aW06ICflsI/lhbXvvIzmsaTlpKflsJHvvIwnLFxuICAgICAgICBtb2R1bGU6ICflpJbpg6jorr7lpIcnLFxuICAgICAgICBpc09wZW46IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VyaWVzOiAnVC9CJyxcbiAgICAgICAgc3ltcHRvbTogJ+WkluWQjuinhumVnOmVnOeJh+iEseiQvScsXG4gICAgICAgIHJlYXNvbjogJ+i0qOmHj+mXrumimCcsXG4gICAgICAgIGxldmVsOiAn5pivJyxcbiAgICAgICAgZml4OiAnNFPotKjkv53mm7TmjaInLFxuICAgICAgICByZW1hcms6ICcnLFxuICAgICAgICBhY2Nlc3NvcmllczogJycsXG4gICAgICAgIHZpY3RpbTogJzRT6LSo5L+d5pu05o2iJyxcbiAgICAgICAgbW9kdWxlOiAn5aSW6YOo6K6+5aSHJyxcbiAgICAgICAgaXNPcGVuOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cbiAgICovXG4gIG9uTG9hZCgpIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgY3VycmVudExpc3Q6IFsuLi50aGlzLmRhdGEuaXNzdWVMaXN0XSxcbiAgICB9KTtcbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliJ3mrKHmuLLmn5PlrozmiJBcbiAgICovXG4gIG9uUmVhZHkoKSB7fSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcbiAgICovXG4gIG9uU2hvdygpIHt9LFxuICBzZXJpZXNDaGFuZ2UoZTogYW55KSB7XG4gICAgbGV0IGN1cnJlbnRTZXJpZXMgPSB0aGlzLmRhdGEuc2VyaWVzT3B0aW9uc1tlLmRldGFpbC52YWx1ZV07XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGN1cnJlbnRTZXJpZXM6IGN1cnJlbnRTZXJpZXMsXG4gICAgICBjdXJyZW50TW9kdWxlOiAn5YWo6YOoJyxcbiAgICB9KTtcbiAgICBsZXQgY3VycmVudExpc3Q6IEFycmF5PGxpc3RJdGVtPiA9IFtdO1xuICAgIGlmIChjdXJyZW50U2VyaWVzID09PSAn5YWo6YOoJykge1xuICAgICAgY3VycmVudExpc3QgPSB0aGlzLmRhdGEuaXNzdWVMaXN0O1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5kYXRhLmN1cnJlbnRMaXN0KSB7XG4gICAgICAgIGlmIChpdGVtLnNlcmllcyA9PT0gJ1QvQicgfHwgaXRlbS5zZXJpZXMgPT09IGN1cnJlbnRTZXJpZXMpIHtcbiAgICAgICAgICBjdXJyZW50TGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBjdXJyZW50TGlzdDogY3VycmVudExpc3QsXG4gICAgfSk7XG4gIH0sXG4gIG1vZHVsZUNoYW5nZShlOiBhbnkpIHtcbiAgICBsZXQgY3VycmVudE1vZHVsZSA9IHRoaXMuZGF0YS5tb2R1bGVPcHRpb25zW2UuZGV0YWlsLnZhbHVlXTtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgY3VycmVudE1vZHVsZTogY3VycmVudE1vZHVsZSxcbiAgICAgIGN1cnJlbnRTZXJpZXM6ICflhajpg6gnLFxuICAgIH0pO1xuICAgIGxldCBjdXJyZW50TGlzdDogQXJyYXk8bGlzdEl0ZW0+ID0gW107XG4gICAgaWYgKGN1cnJlbnRNb2R1bGUgPT09ICflhajpg6gnKSB7XG4gICAgICBjdXJyZW50TGlzdCA9IHRoaXMuZGF0YS5pc3N1ZUxpc3Q7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLmRhdGEuY3VycmVudExpc3QpIHtcbiAgICAgICAgaWYgKGl0ZW0ubW9kdWxlID09PSBjdXJyZW50TW9kdWxlKSB7XG4gICAgICAgICAgY3VycmVudExpc3QucHVzaChpdGVtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgY3VycmVudExpc3Q6IGN1cnJlbnRMaXN0LFxuICAgIH0pO1xuICB9LFxuXG4gIGNsaWNrSXRlbTogZnVuY3Rpb24gKGU6IGFueSkge1xuICAgIGxldCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0WydpbmRleCddO1xuICAgIGlmICh0aGlzLmRhdGEuaXNzdWVMaXN0W2luZGV4XS5pc09wZW4pIHtcbiAgICAgIHRoaXMuY2xvc2VEZXRhaWwoaW5kZXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNob3dEZXRhaWwoaW5kZXgpO1xuICAgIH1cbiAgfSxcblxuICBzaG93RGV0YWlsKGluZGV4OiBudW1iZXIpIHtcbiAgICBsZXQgbmV3TGlzdCA9IHRoaXMuZGF0YS5pc3N1ZUxpc3Q7XG4gICAgbmV3TGlzdFtpbmRleF0uaXNPcGVuID0gdHJ1ZTtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgY3VycmVudExpc3Q6IG5ld0xpc3QsXG4gICAgfSk7XG4gIH0sXG5cbiAgY2xvc2VEZXRhaWwoaW5kZXg6IG51bWJlcikge1xuICAgIGxldCBuZXdMaXN0ID0gdGhpcy5kYXRhLmlzc3VlTGlzdDtcbiAgICBuZXdMaXN0W2luZGV4XS5pc09wZW4gPSBmYWxzZTtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgY3VycmVudExpc3Q6IG5ld0xpc3QsXG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXG4gICAqL1xuICBvbkhpZGUoKSB7fSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cbiAgICovXG4gIG9uVW5sb2FkKCkge30sXG5cbiAgLyoqXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXG4gICAqL1xuICBvblB1bGxEb3duUmVmcmVzaCgpIHt9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcbiAgICovXG4gIG9uUmVhY2hCb3R0b20oKSB7fSxcblxuICAvKipcbiAgICog55So5oi354K55Ye75Y+z5LiK6KeS5YiG5LqrXG4gICAqL1xuICBvblNoYXJlQXBwTWVzc2FnZSgpIHt9LFxufSk7XG4iXX0=