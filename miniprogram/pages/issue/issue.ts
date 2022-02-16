// {{page}}.ts
interface listItem {
  series: string;
  symptom: string;
  reason: string;
  level: string;
  fix: string;
  remark: string;
  accessories: string;
  victim: string;
  isOpen: boolean;
  module: string;
}

Page({
  /**
   * 页面的初始数据
   */
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
        remark:
          '故障码 蒸发管：ECM-P04F000 EVAP 系统高压净化管路性能 氧传感器：暂无 碳罐损坏：暂无',
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
        victim:
          'RZ，八毛安，菁小爷，Mars，北京-过去，Luce，Steiner Chen，小宇，小潘东，Elfinit1，芋头姐姐，接班人，深圳-冬先生，上海-KZ，屌丝侠，pika，邓生',
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.setData({
      currentList: [...this.data.issueList],
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},
  seriesChange(e: any) {
    let currentSeries = this.data.seriesOptions[e.detail.value];
    this.setData({
      currentSeries: currentSeries,
      currentModule: '全部',
    });
    let currentList: Array<listItem> = [];
    if (currentSeries === '全部') {
      currentList = this.data.issueList;
    } else {
      for (const item of this.data.currentList) {
        if (item.series === 'T/B' || item.series === currentSeries) {
          currentList.push(item);
        }
      }
    }
    this.setData({
      currentList: currentList,
    });
  },
  moduleChange(e: any) {
    let currentModule = this.data.moduleOptions[e.detail.value];
    this.setData({
      currentModule: currentModule,
      currentSeries: '全部',
    });
    let currentList: Array<listItem> = [];
    if (currentModule === '全部') {
      currentList = this.data.issueList;
    } else {
      for (const item of this.data.currentList) {
        if (item.module === currentModule) {
          currentList.push(item);
        }
      }
    }
    this.setData({
      currentList: currentList,
    });
  },

  clickItem: function (e: any) {
    let index = e.currentTarget.dataset['index'];
    if (this.data.issueList[index].isOpen) {
      this.closeDetail(index);
    } else {
      this.showDetail(index);
    }
  },

  showDetail(index: number) {
    let newList = this.data.issueList;
    newList[index].isOpen = true;
    this.setData({
      currentList: newList,
    });
  },

  closeDetail(index: number) {
    let newList = this.data.issueList;
    newList[index].isOpen = false;
    this.setData({
      currentList: newList,
    });
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {},
});
