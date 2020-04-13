import { weaponQuality, getWeapon, getWeaponCharm, weaponCharm } from "../../common/weapon";
import { treasureLeftQuality, getTreasureLeft, gemList1, getTreasureGem, gemListD2, gemListN2, gemListT2 } from "../../common/treasureL";
import { getTreasureGemMiddle, gemMiddleListD1, gemMiddleListN1, gemMidlleListT1, gemMiddleList2, treasureMiddleQuality, getTreasureMiddle } from "../../common/treasureM";
import { treasureRightQuality, getTreasureRight, gemRightList1, gemRightListD2, gemRightListN2, gemRightListT2, getTreasureGemRight } from '../../common/treasureR';
import { headQuality, getHead, getHeadCharm, headCharm } from '../../common/head';
import { clothCharm, clothQuality, getCloth, getClothCharm } from '../../common/cloth';
import { nipperCharm, nipperQuality, getNipper, getNipperCharm } from "../../common/nipper";
import { beltCharm, beltQuality, getBelt, getBeltCharm } from "../../common/belt";
import { pantsCharm, pantsQuality, getPants, getPantsCharm } from '../../common/pants';
import { shoesCharm, shoesQuality, getShoes, getShoesCharm } from "../../common/shoes";
import { necklaceQuality, getNecklace, getNecklaceGem, gemNecklaceRight, gemNecklaceLeft1, gemNecklaceLeft2, gemNecklaceLeft3 } from "../../common/necklace";
import { pendantQuality, getPendant } from "../../common/pendant";
import { ringQuality, getRing, gemRing, getRingGem } from "../../common/ring";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    pow: '龙城',
    pows: [['输出 D', '治疗 N', '坦克 T'], [ '飞星', '窈冥', '弹铗', '龙城', '苍石', '唤灵', '神虹', '非花', '琴章']],
    powIndex: [0, 0],
    intensify: [0, 1, 2, 3, 4, 5, 6],
    charms: [],
    allEquipments: ['武器', '左信物', '中信物', '右信物', '头饰', '上装', '护手', '腰带', '下装', '鞋子', '项链', '配饰1', '配饰2', '戒指1', '戒指2'],
    equipments: [
      {
        title: '武器',
        item: '点击选择+', // 装备名称
        itemIndex: [-1, -1],
        items: [],
        detail: '',
        property: '',
        hiddenDetail: true, // 是否显示
        haveIntensify: true,
        haveCharm: true, // 是否拥有符咒
        haveGem1: false,  // 拥有宝石1
        haveGem2: false,  // 拥有宝石2
        intensifyVal: 0,  // 强化等级
        charm: '待添加',  // 符咒
        charmIndex: [0, 0],
        charmRange: weaponCharm,
        quality: 0,
      },
      {
        title: '左信物',
        item: '点击选择+',
        itemIndex: [-1, -1],
        items: [],
        detail: '',
        property: '',
        hiddenDetail: true,
        haveIntensify: true,
        haveCharm: false, // 是否拥有符咒
        haveGem1: true,  // 拥有宝石1
        haveGem2: true,  // 拥有宝石2
        intensifyVal: 0,
        type: 0,
        gem1: '待添加',
        gemIndex1: [0, 0],
        gemRange1: [],
        gem2: '待添加',
        gemIndex2: [0, 0],
        gemRange2: [],
      },
      {
        title: '中信物',
        item: '点击选择+',
        itemIndex: [-1, -1],
        items: [],
        detail: '',
        property: '',
        hiddenDetail: true,
        haveIntensify: true,
        haveCharm: false, // 是否拥有符咒
        haveGem1: true,  // 拥有宝石1
        haveGem2: true,  // 拥有宝石2
        intensifyVal: 0,
        type: 1,
        gem1: '待添加',
        gemIndex1: [0, 0],
        gemRange1: [],
        gem2: '待添加',
        gemIndex2: [0, 0],
        gemRange2: [],
      },
      {
        title: '右信物',
        item: '点击选择+',
        itemIndex: [-1, -1],
        items: [],
        detail: '',
        property: '',
        hiddenDetail: true,
        haveCharm: false, // 是否拥有符咒
        haveGem1: true,  // 拥有宝石1
        haveGem2: true,  // 拥有宝石2
        intensifyVal: 0,
        type: 2,
        gem1: '待添加',
        gemIndex1: [0, 0],
        gemRange1: [],
        gem2: '待添加',
        gemIndex2: [0, 0],
        gemRange2: [],
      },
      {
        title: '头饰',
        item: '点击选择+', // 装备名称
        itemIndex: [-1, -1],
        items: [],
        detail: '',
        property: '',
        hiddenDetail: true, // 是否显示
        haveIntensify: true,
        haveCharm: true, // 是否拥有符咒
        haveGem1: false,  // 拥有宝石1
        haveGem2: false,  // 拥有宝石2
        intensifyVal: 0,  // 强化等级
        charm: '待添加',  // 符咒
        charmIndex: [0, 0],
        charmRange: headCharm,
        quality: 0,
      },
      {
        title: '上装',
        item: '点击选择+', // 装备名称
        itemIndex: [-1, -1],
        items: [],
        detail: '',
        property: '',
        hiddenDetail: true, // 是否显示
        haveIntensify: true,
        haveCharm: true, // 是否拥有符咒
        haveGem1: false,  // 拥有宝石1
        haveGem2: false,  // 拥有宝石2
        intensifyVal: 0,  // 强化等级
        charm: '待添加',  // 符咒
        charmIndex: [0, 0],
        charmRange: clothCharm,
        quality: 0,
      },
      {
        title: '护手',
        item: '点击选择+', // 装备名称
        itemIndex: [-1, -1],
        items: [],
        detail: '',
        property: '',
        hiddenDetail: true, // 是否显示
        haveIntensify: true,
        haveCharm: true, // 是否拥有符咒
        haveGem1: false,  // 拥有宝石1
        haveGem2: false,  // 拥有宝石2
        intensifyVal: 0,  // 强化等级
        charm: '待添加',  // 符咒
        charmIndex: [0, 0],
        charmRange: nipperCharm,
        quality: 0,
      },
      {
        title: '腰带',
        item: '点击选择+', // 装备名称
        itemIndex: [-1, -1],
        items: [],
        detail: '',
        property: '',
        hiddenDetail: true, // 是否显示
        haveIntensify: true,
        haveCharm: true, // 是否拥有符咒
        haveGem1: false,  // 拥有宝石1
        haveGem2: false,  // 拥有宝石2
        intensifyVal: 0,  // 强化等级
        charm: '待添加',  // 符咒
        charmIndex: [0, 0],
        charmRange: beltCharm,
        quality: 0,
      },
      {
        title: '下装',
        item: '点击选择+', // 装备名称
        itemIndex: [-1, -1],
        items: [],
        detail: '',
        property: '',
        hiddenDetail: true, // 是否显示
        haveIntensify: true,
        haveCharm: true, // 是否拥有符咒
        haveGem1: false,  // 拥有宝石1
        haveGem2: false,  // 拥有宝石2
        intensifyVal: 0,  // 强化等级
        charm: '待添加',  // 符咒
        charmIndex: [0, 0],
        charmRange: pantsCharm,
        quality: 0,
      },
      {
        title: '鞋子',
        item: '点击选择+', // 装备名称
        itemIndex: [-1, -1],
        items: [],
        detail: '',
        property: '',
        hiddenDetail: true, // 是否显示
        haveIntensify: true,
        haveCharm: true, // 是否拥有符咒
        haveGem1: false,  // 拥有宝石1
        haveGem2: false,  // 拥有宝石2
        intensifyVal: 0,  // 强化等级
        charm: '待添加',  // 符咒
        charmIndex: [0, 0],
        charmRange: shoesCharm,
        quality: 0,
      },
      {
        title: '项链',
        item: '点击选择+',
        itemIndex: [-1, -1],
        items: [],
        detail: '',
        property: '',
        hiddenDetail: true,
        haveIntensify: false,
        haveCharm: false, // 是否拥有符咒
        haveGem1: true,  // 拥有宝石1
        haveGem2: true,  // 拥有宝石2
        type: 3,
        gem1: '待添加',
        gemIndex1: [0, 0],
        gemRange1: [],
        gem2: '待添加',
        gemIndex2: [0, 0],
        gemRange2: [],
      },
      {
        title: '配饰1',
        item: '点击选择+',
        itemIndex: [-1, -1],
        items: [],
        detail: '',
        property: '',
        hiddenDetail: true,
        haveIntensify: false,
        haveCharm: false, // 是否拥有符咒
        haveGem1: false,  // 拥有宝石1
        haveGem2: false,  // 拥有宝石2
      },
      {
        title: '配饰2',
        item: '点击选择+',
        itemIndex: [-1, -1],
        items: [],
        detail: '',
        property: '',
        hiddenDetail: true,
        haveIntensify: false,
        haveCharm: false, // 是否拥有符咒
        haveGem1: false,  // 拥有宝石1
        haveGem2: false,  // 拥有宝石2
      },
      {
        title: '戒指1',
        item: '点击选择+',
        itemIndex: [-1, -1],
        items: [],
        detail: '',
        property: '',
        hiddenDetail: true,
        haveIntensify: false,
        haveCharm: false, // 是否拥有符咒
        haveGem1: true,  // 拥有宝石1
        haveGem2: false,  // 拥有宝石2
        type: 4,
        gem1: '待添加',
        gemIndex1: [0, 0],
        gemRange1: [],
      },
      {
        title: '戒指2',
        item: '点击选择+',
        itemIndex: [-1, -1],
        items: [],
        detail: '',
        property: '',
        hiddenDetail: true,
        haveIntensify: false,
        haveCharm: false, // 是否拥有符咒
        haveGem1: true,  // 拥有宝石1
        haveGem2: false,  // 拥有宝石2
        type: 5,
        gem1: '待添加',
        gemIndex1: [0, 0],
        gemRange1: [],
      },
    ],
    mainPro: -1,
    health: -1,
  },

  /* 生命周期函数--监听页面加载 */
  onLoad: function (options) {
    this.setData({
      powIndex: [0, 1]
    })
  },
  /* 生命周期函数--监听页面初次渲染完成 */
  onReady: function () {
    this.setData({
      powIndex: [0, 0]
    })
    this.indexPage()
  },
  /* 页面初始化方法 */
  indexPage() {
    this.indexWeaponCharm();
    this.indexTreasureGem();
    this.indexTreasureGemMiddle();
    this.indexTreasureGemRight();
    this.indexHeadCharm();
    this.indexClothCharm();
    this.indexNipperCharm();
    this.indexBeltCharm();
    this.indexPantsCharm();
    this.indexShoesCharm();
    this.indexNecklaceGem();
    this.indexRingGem1();
    this.indexRingGem2();
    for (let i in this.data.allEquipments) {
      this.indexEquipments(i);
    }    
  },
  /* 初始化picker 中的装备 */
  indexEquipments(type) {
    type = parseInt(type, 10);
    // 1. 武器
    // 2. 左信物
    // 3. 中信物
    // 4. 右信物
    // 5. 头饰
    // 6. 上装
    // 7. 护手
    // 8. 下装
    // 9. 鞋子
    // 10. 项链
    // 11. 配饰1
    // 12. 配饰2
    // 13. 戒指1
    // 14. 戒指2
    function callback(e) {
      let items = e.data.map((item) => {
        return item.name;
      })
      let itemQuality = [];
      switch(type) {
        case 0:
          itemQuality = weaponQuality;
          break;
        case 1:
          itemQuality = treasureLeftQuality;
          break;
        case 2:
          itemQuality = treasureMiddleQuality;
          break;
        case 3:
          itemQuality = treasureRightQuality;
          break;
        case 4:
          itemQuality = headQuality;
          break;
        case 5:
          itemQuality = clothQuality;
          break;
        case 6:
          itemQuality = nipperQuality;
          break;
        case 7:
          itemQuality = beltQuality;
          break;
        case 8:
          itemQuality = pantsQuality;
          break;
        case 9:
          itemQuality = shoesQuality;
          break;
        case 10:
          itemQuality = necklaceQuality;
          break;
        case 11:
          itemQuality = pendantQuality;
          break;
        case 12:
          itemQuality = pendantQuality;
          break;
        case 13:
          itemQuality = ringQuality;
          break;
        case 14:
          itemQuality = ringQuality;
          break;
      }
      items = [itemQuality, items]
      const title = 'equipments[' + type + '].items';
      const title1 = 'equipments[' + type + '].detail';
      this.setData({
        [title]: items,
        [title1]: e,
      });
    }
    switch (type) {
      case 0:
        getWeapon(this.data.pow, weaponQuality[0].toString(), callback.bind(this));
        break;
      case 1:
        getTreasureLeft(this.data.pow, treasureLeftQuality[0].toString(), callback.bind(this));
        break;
      case 2:
        getTreasureMiddle(this.data.pow, treasureMiddleQuality[0].toString(), callback.bind(this));
      case 3:
        getTreasureRight(this.data.pow, treasureRightQuality[0].toString(), callback.bind(this));
        break;
      case 4:
        getHead(this.data.pow, headQuality[0].toString(), callback.bind(this));
        break;
      case 5:
        getCloth(this.data.pow, clothQuality[0].toString(), callback.bind(this));
        break;
      case 6:
        getNipper(this.data.pow, nipperQuality[0].toString(), callback.bind(this));
        break;
      case 7:
        getBelt(this.data.pow, beltQuality[0].toString(), callback.bind(this));
        break;
      case 8:
        getPants(this.data.pow, pantsQuality[0].toString(), callback.bind(this));
        break;
      case 9:
        getShoes(this.data.pow, shoesQuality[0].toString(), callback.bind(this))
        break;
      case 10:
        getNecklace(this.data.pow, necklaceQuality[0].toString(), callback.bind(this));
        break;
      case 11:
        getPendant(this.data.pow, pendantQuality[0].toString(), callback.bind(this));
        break;
      case 12:
        getPendant(this.data.pow, pendantQuality[0].toString(), callback.bind(this));
        break;
      case 13:
        getRing(this.data.row, ringQuality[0].toString(), callback.bind(this));
        break;
      case 14:
        getRing(this.data.row, ringQuality[0].toString(), callback.bind(this));
        break;
      default:
        break;
    }
  },
  /* 初始化武器符咒 */
  indexWeaponCharm() {
    let type = this.data.equipments[0].charmRange[0];
    function callback(e) {
      let weaponRanges = [];
      weaponRanges.push(weaponCharm)
      weaponRanges.push(e.data.map((item) => {
        return item.name;
      }));
      let title = 'equipments[0].charmRange';
      this.setData({
        [title]: weaponRanges,
      })
    }
    getWeaponCharm(type, callback.bind(this))
  },
  /* 获取职业定位 */
  getPosition(type) {
    let position = this.data.pows[0][this.data.powIndex[0]].slice(3, 4);
    let gem1 = '';
    let gem2 = '';
    switch (type) {
      case 0: // 左信物
        gem1 = gemList1;
        if (position === 'D') {
          gem2 = gemListD2;
        } else if (position === 'N') {
          gem2 = gemListN2;
        } else {
          gem2 = gemListT2;
        }
        break;
      case 1: // 中信物
        gem2 = gemMiddleList2;
        if (position === 'D') {
          gem1 = gemMiddleListD1;
        } else if (position === 'N') {
          gem1 = gemMiddleListN1;
        } else {
          gem1 = gemMidlleListT1;
        }
        break;
      case 2: // 右信物
        gem1 = gemRightList1;
        if (position === 'D') {
          gem2 = gemRightListD2;
        } else if (position === 'N') {
          gem2 = gemRightListN2;
        } else {
          gem2 = gemRightListT2;
        }
        break;
      case 3: // 项链
        gem2 = gemNecklaceRight;
        if (position === 'D') {
          gem1 = gemNecklaceLeft1;
        } else if (position === 'N') {
          gem1 = gemNecklaceLeft2;
        } else {
          gem1 = gemNecklaceLeft3;
        }
        break;
      default:
        break;
    }
    return [gem1, gem2];
  },
  /* 初始化左信物宝石 */
  indexTreasureGem() {
    const gem1 = gemList1;
    let gem2 = this.getPosition(0)[1];
    function callback1(e) {
      let gemRange1 = [];
      gemRange1.push(gem1)
      gemRange1.push(e.data.map((item) => {
        return item.name;
      }));
      let title = 'equipments[1].gemRange1';
      this.setData({
        [title]: gemRange1,
      })
    }
    function callback2(e) {
      let gemRange2 = [];
      gemRange2.push(gem2)
      gemRange2.push(e.data.map((item) => {
        return item.name;
      }));
      let title = 'equipments[1].gemRange2';
      this.setData({
        [title]: gemRange2,
      });
    }
    getTreasureGem(gem1[0], callback1.bind(this));
    getTreasureGem(gem2[0], callback2.bind(this));
  },
  /* 初始化中信物宝石 */
  indexTreasureGemMiddle() {
    const gem1 = this.getPosition(1)[0];
    let gem2 = gemMiddleList2;
    function callback1(e) {
      let gemRange1 = [];
      gemRange1.push(gem1)
      gemRange1.push(e.data.map((item) => {
        return item.name;
      }));
      let title = 'equipments[2].gemRange1';
      this.setData({
        [title]: gemRange1,
      })
    }
    function callback2(e) {
      let gemRange2 = [];
      gemRange2.push(gem2)
      gemRange2.push(e.data.map((item) => {
        return item.name;
      }));
      let title = 'equipments[2].gemRange2';
      this.setData({
        [title]: gemRange2,
      });
    }
    getTreasureGemMiddle(gem1[0], callback1.bind(this));
    getTreasureGemMiddle(gem2[0], callback2.bind(this));
  },
  /* 初始化右信物宝石 */
  indexTreasureGemRight() {
    const gem1 = gemRightList1;
    let gem2 = this.getPosition(2)[1];
    function callback1(e) {
      let gemRange1 = [];
      gemRange1.push(gem1)
      gemRange1.push(e.data.map((item) => {
        return item.name;
      }));
      let title = 'equipments[3].gemRange1';
      this.setData({
        [title]: gemRange1,
      })
    }
    function callback2(e) {
      let gemRange2 = [];
      gemRange2.push(gem2)
      gemRange2.push(e.data.map((item) => {
        return item.name;
      }));
      let title = 'equipments[3].gemRange2';
      this.setData({
        [title]: gemRange2,
      });
    }
    getTreasureGem(gem1[0], callback1.bind(this));
    getTreasureGem(gem2[0], callback2.bind(this));
  },
  /* 初始化头饰符咒 */
  indexHeadCharm() {
    let type = this.data.equipments[4].charmRange[0];
    function callback(e) {
      let headRanges = [];
      headRanges.push(headCharm)
      headRanges.push(e.data.map((item) => {
        return item.name;
      }));
      let title = 'equipments[4].charmRange';
      this.setData({
        [title]: headRanges,
      })
    }
    getHeadCharm(type, callback.bind(this))
  },
  /* 初始化上装符咒 */
  indexClothCharm() {
    let type = this.data.equipments[5].charmRange[0];
    function callback(e) {
      let clothRanges = [];
      clothRanges.push(clothCharm)
      clothRanges.push(e.data.map((item) => {
        return item.name;
      }));
      let title = 'equipments[5].charmRange';
      this.setData({
        [title]: clothRanges,
      })
    }
    getClothCharm(type, callback.bind(this))
  },
  /* 初始化护手符咒 */
  indexNipperCharm() {
    let type = this.data.equipments[6].charmRange[0];
    function callback(e) {
      let nipperRanges = [];
      nipperRanges.push(nipperCharm)
      nipperRanges.push(e.data.map((item) => {
        return item.name;
      }));
      let title = 'equipments[6].charmRange';
      this.setData({
        [title]: nipperRanges,
      })
    }
    getNipperCharm(type, callback.bind(this));
  },
  /* 初始化腰带符咒 */
  indexBeltCharm() {
    let type = this.data.equipments[7].charmRange[0];
    function callback(e) {
      let beltRanges = [];
      beltRanges.push(beltCharm)
      beltRanges.push(e.data.map((item) => {
        return item.name;
      }));
      let title = 'equipments[7].charmRange';
      this.setData({
        [title]: beltRanges,
      })
    }
    getBeltCharm(type, callback.bind(this));
  },
  /* 初始化下装符咒 */
  indexPantsCharm() {
    let type = this.data.equipments[8].charmRange[0];
    function callback(e) {
      let pantsRanges = [];
      pantsRanges.push(pantsCharm)
      pantsRanges.push(e.data.map((item) => {
        return item.name;
      }));
      let title = 'equipments[8].charmRange';
      this.setData({
        [title]: pantsRanges,
      })
    }
    getPantsCharm(type, callback.bind(this));
  },
  /* 初始化鞋子符咒 */
  indexShoesCharm() {
    let type = this.data.equipments[9].charmRange[0];
    function callback(e) {
      let shoesRanges = [];
      shoesRanges.push(shoesCharm)
      shoesRanges.push(e.data.map((item) => {
        return item.name;
      }));
      let title = 'equipments[9].charmRange';
      this.setData({
        [title]: shoesRanges,
      })
    }
    getShoesCharm(type, callback.bind(this));
  },
  /* 初始化项链宝石 */
  indexNecklaceGem() {
    const gem1 = this.getPosition(3)[0];
    let gem2 = gemNecklaceRight;
    function callback1(e) {
      let gemRange1 = [];
      gemRange1.push(gem1)
      gemRange1.push(e.data.map((item) => {
        return item.name;
      }));
      let title = 'equipments[10].gemRange1';
      this.setData({
        [title]: gemRange1,
      })
    }
    function callback2(e) {
      let gemRange2 = [];
      gemRange2.push(gem2)
      gemRange2.push(e.data.map((item) => {
        return item.name;
      }));
      let title = 'equipments[10].gemRange2';
      this.setData({
        [title]: gemRange2,
      });
    }
    getNecklaceGem(gem1[0], callback1.bind(this));
    getNecklaceGem(gem2[0], callback2.bind(this));
  },
  /* 初始化戒指1宝石 */
  indexRingGem1() {
    const gem1 = gemRing;
    function callback(e) {
      let gemRange1 = [];
      gemRange1.push(gem1)
      gemRange1.push(e.data.map((item) => {
        return item.name;
      }));
      let title = 'equipments[13].gemRange1';
      this.setData({
        [title]: gemRange1,
      })
    }
    getRingGem(gem1[0], callback.bind(this));
  },
  /* 初始化戒指2宝石 */
  indexRingGem2() {
    const gem1 = gemRing;
    function callback(e) {
      let gemRange1 = [];
      gemRange1.push(gem1)
      gemRange1.push(e.data.map((item) => {
        return item.name;
      }));
      let title = 'equipments[14].gemRange1';
      this.setData({
        [title]: gemRange1,
      })
    }
    getRingGem(gem1[0], callback.bind(this));
  },
  /* 显示/ 隐藏装备详情 */
  toggleHiddenDetail(e) {
    const index = e.currentTarget.dataset['index']
    let equipments = this.data.equipments;
    // 手风琴菜单
    if (equipments[index].hiddenDetail) {
      for (let i of equipments) {
        i.hiddenDetail = true;
      }
    }
    equipments[index].hiddenDetail = !equipments[index].hiddenDetail;
    this.setData({
      equipments,
    });
  },
  /* 选择职业方法 */
  bindPowPickerChange: function (e) {
    const powIndex = e.detail.value;
    const pow = this.data.pows[1][powIndex[1]];
    const title = 'equipments[0].item'
    this.setData({
      powIndex,
      pow,
      [title]: '点击添加+',
    });
    // 刷新页面
    this.indexPage();
  },
  bindPowPickerColumnChange: function (e) {
    var data = {
      pows: this.data.pows,
      powIndex: this.data.powIndex
    };
    data.powIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        switch (data.powIndex[0]) {
          case 0:
            // D
            data.pows[1] = [ '飞星', '窈冥', '弹铗', '龙城', '苍石', '唤灵', '神虹', '非花', '琴章'];
            break;
          case 1:
            // N
            data.pows[1] = ['香云', '圣佑', '祝由', '洞渊'];
            break;
          case 2:
            // T
            data.pows[1] = ['不动', '玄武', '酩酊'];
            break;
        }
      data.powIndex[1] = 0;
      break;
    }
    this.setData(data);
  },
  /* 选择装备方法 */
  bindItemPickerChange: function (e) {
    const type = parseInt(e.currentTarget.dataset.index, 10);
    const itemIndex = e.detail.value;
    const item = this.data.equipments[type].items[1][itemIndex[1]];
    const quality = this.data.equipments[type].items[0][itemIndex[0]];
    const property = this.data.equipments[type].detail.data[itemIndex[1]];
    const title = 'equipments[' + type + '].quality';
    const title2 = 'equipments[' + type + '].itemIndex';
    const title3 = 'equipments[' + type + '].item';
    const title4 = 'equipments[' + type + '].property';
    this.setData({
      [title]: quality,
      [title2]: itemIndex,
      [title3]: item,
      [title4]: property,
    })
  },
  bindItemPickerColumnChange: function (e) {
    // 获取当前的装备部位类型
    const type = parseInt(e.currentTarget.dataset.index, 10);
    var data = {
      items: this.data.equipments[type].items,
      itemIndex: this.data.equipments[type].itemIndex,
      pow: this.data.pow,
      detail: '',
      property: '',
    };
    let quality;
    switch (type) {
      case 0:
        try {
          quality = weaponQuality[e.detail.value].toString();
        } catch (error) {
          console.log('问题不大');
        }
        break;
      case 1:
        try {
          quality = treasureLeftQuality[e.detail.value].toString();
        } catch (error) {
          console.log('问题不大');
        }
        break;
      case 2:
        try {
          quality = treasureMiddleQuality[e.detail.value].toString();
        } catch (error) {
          console.log('问题不大');
        }
        break;
      case 3:
        try {
          quality = treasureRightQuality[e.detail.value].toString();
        } catch (error) {
          console.log('问题不大');
        }
        break;
      case 4:
        try {
          quality = headQuality[e.detail.value].toString();
        } catch (error) {
          console.log('问题不大');
        }
        break;
      case 5:
        try {
          quality = clothQuality[e.detail.value].toString();
        } catch (error) {
          console.log('问题不大');
        }
        break;
      case 6:
        try {
          quality = nipperQuality[e.detail.value].toString();
        } catch (error) {
          console.log('问题不大');
        }
        break;
      case 7:
        try {
          quality = beltQuality[e.detail.value].toString();
        } catch (error) {
          console.log('问题不大');
        }
        break;
      case 8:
        try {
          quality = pantsQuality[e.detail.value].toString();
        } catch (error) {
          console.log('问题不大');
        }
        break;
      case 9:
        try {
          quality = shoesQuality[e.detail.value].toString();
        } catch (error) {
          console.log('问题不大');
        }
        break;
      case 10:
        try {
          quality = necklaceQuality[e.detail.value].toString();
        } catch (error) {
          console.log('问题不大');
        }
        break;
      case 11:
        try {
          quality = pendantQuality[e.detail.value].toString();
        } catch(error) {
          console.log('问题不大');
        }
        break;
      case 12:
        try {
          quality = pendantQuality[e.detail.value].toString();
        } catch(error) {
          console.log('问题不大');
        }
        break;
      case 13:
        try {
          quality = ringQuality[e.detail.value].toString();
        } catch(error) {
          console.log('问题不大');
        }
        break;
      case 14:
        try {
          quality = ringQuality[e.detail.value].toString();
        } catch(error) {
          console.log('问题不大');
        }
        break;
      default:
        wx.showToast({
          icon: 'none',
          title: '完啦，碧油唧来了！',
        });
        break;
    }
    data.itemIndex[e.detail.column] = e.detail.value;
    // 回调函数
    function callback(e) {
      data.items[1] = e.data.map((item) => {
        return item.name;
      });
      data.detail = e,
      data.itemIndex[1] = 0;
      const title = 'equipments[' + type + '].items';
      const title2 = 'equipments[' + type + '].itemIndex';
      const title3 = 'equipments[' + type + '].detail';
      this.setData({
        [title]: data.items,
        [title2]: data.itemIndex,
        [title3]: data.detail,
        pow: data.pow,
      });
    }
    switch (e.detail.column) {
      case 0:
        for (let i = 0; i < 7; i++) {
          if (data.itemIndex[0] === i) {
            switch (type) {
              case 0:
                getWeapon(data.pow, quality, callback.bind(this))
                break;
              case 1:
                getTreasureLeft(data.pow, quality, callback.bind(this));
                break;
              case 2:
                getTreasureMiddle(data.pow, quality, callback.bind(this));
                break;
              case 3:
                getTreasureRight(data.pow, quality, callback.bind(this));
                break;
              case 4:
                getHead(data.pow, quality, callback.bind(this));
                break;
              case 5:
                getCloth(data.pow, quality, callback.bind(this));
                break;
              case 6:
                getNipper(data.pow, quality, callback.bind(this));
                break;
              case 7:
                getBelt(data.pow, quality, callback.bind(this));
                break;
              case 8:
                getPants(data.pow, quality, callback.bind(this));
                break;
              case 9:
                getShoes(data.pow, quality, callback.bind(this));
                break;
              case 10:
                getNecklace(data.pow, quality, callback.bind(this));
                break;
              case 11:
                getPendant(data.pow, quality, callback.bind(this));
                break;
              case 12:
                getPendant(data.pow, quality, callback.bind(this));
                break;
              case 13:
                getRing(data.pow, quality, callback.bind(this));
                break;
              case 14:
                getRing(data.pow, quality, callback.bind(this));
                break;
              default:
                wx.showToast({
                  title: '出现碧油唧了~',
                  icon: 'none',
                  duration: 1500,
                });
                break;
            }
          }
        }
    }
  },
  /* 强化等级控制 */
  bindIntensifyChange(e) {
    const index = e.currentTarget.dataset['index'];
    let equipments = this.data.equipments;
    equipments[index].intensifyVal = parseInt(e.detail.value, 10);
    this.setData({
      equipments,
    });
  },
  /* 符咒变化 */
  bindCharmPickerChange(e) {
    const type = parseInt(e.currentTarget.dataset.index, 10);
    const charmIndex = e.detail.value;
    const charm = this.data.equipments[type].charmRange[1][charmIndex[1]];
    let title = 'equipments[' + type + '].charmIndex';
    let title2 = 'equipments[' + type + '].charm';
    this.setData({
      [title]: charmIndex,
      [title2]: charm,
    })
  },
  bindCharmPickerColumnChange(e) {
    const index = parseInt(e.currentTarget.dataset.index, 10);
    let charms = this.data.equipments[index].charmRange;
    let charmIndex = this.data.equipments[index].charmIndex;
    const charmRange = this.data.equipments[index].charmRange[0];
    charmIndex[e.detail.column] = e.detail.value;
    let type;
    if (e.detail.column === 0) {
      type = charmRange[e.detail.value].toString();
    }
    function callback(e) {
      charms[1] = e.data.map((item) => {
        return item.name;
      });
      charmIndex[1] = 0;
      let title = 'equipments[' + index + '].charmIndex';
      let title2 = 'equipments[' + index + '].charmRange';
      this.setData({
        [title]: charmIndex,
        [title2]: charms,
      });
    }
    switch (e.detail.column) {
      case 0:
        for (let i = 0; i < charmRange.length; i++) {
          if (charmIndex[0] === i) {
            switch (index) {
              case 0:
                getWeaponCharm(type, callback.bind(this));
                break;
              case 4:
                getHeadCharm(type, callback.bind(this));
                break;
              case 5:
                getClothCharm(type, callback.bind(this));
                break;
              case 6:
                getNipperCharm(type, callback.bind(this));
                break;
              case 7:
                getBeltCharm(type, callback.bind(this));
                break;
              case 8:
                getPantsCharm(type, callback.bind(this));
                break;
              case 9:
                getShoesCharm(type, callback.bind(this));
                break;
              default:
                wx.showToast({
                  title: '好像是碧油唧出没了呢',
                  icon: 'none',
                  duration: 1500,
                });
                break;
            }
          }
        }
    }
  },
  /* 宝石1选择方法 */
  bindGemPickerChange1(e) {
    const type = parseInt(e.currentTarget.dataset.index, 10);
    const gemIndex = e.detail.value;
    const gem = this.data.equipments[type].gemRange1[1][gemIndex[1]];
    let title = 'equipments[' + type + '].gemIndex1';
    let title2 = 'equipments[' + type + '].gem1';
    this.setData({
      [title]: gemIndex,
      [title2]: gem,
    })
  },
  bindGemPickerColumnChange1(e) {
    const index = parseInt(e.currentTarget.dataset.index, 10);
    const type = parseInt(e.currentTarget.dataset.type, 10);
    let gemRange = this.data.equipments[index].gemRange1;
    let gemIndex = this.data.equipments[index].gemIndex1;
    gemIndex[e.detail.column] = e.detail.value;
    let gem;
    if (e.detail.column === 0) {
      if (type < 4) {
        gem = (this.getPosition(type)[0])[e.detail.value].toString();
      } else {
        gem = gemRing[e.detail.value];
      }
    }
    // 回调函数
    function callback(e) {
      gemRange[1] = e.data.map((item) => {
        return item.name;
      });
      gemIndex[1] = 0;
      let title = 'equipments[' + index + '].gemIndex1';
      let title2 = 'equipments[' + index + '].gemRange1';
      this.setData({
        [title]: gemIndex,
        [title2]: gemRange,
      });
    }
    switch (e.detail.column) {
      case 0:
        for (let i = 0; i < 7; i++) {
          if (gemIndex[0] === i) {
            switch (type) {
              case 0:
                getTreasureGem(gem, callback.bind(this));
                break;
              case 1:
                getTreasureGemMiddle(gem, callback.bind(this));
                break;
              case 2:
                getTreasureGemRight(gem, callback.bind(this));
                break;
              case 3:
                getNecklaceGem(gem, callback.bind(this));
                break;
              case 4:
                getRingGem(gem, callback.bind(this));
                break;
              case 5:
                getRingGem(gem, callback.bind(this));
                break;
              default:
                wx.showToast({
                  title: '处理请求异常',
                });
                break;
            }
          }
        }
    }
  },
  /* 宝石2选择方法 */
  bindGemPickerChange2(e) {
    const type = parseInt(e.currentTarget.dataset.index, 10);
    const gemIndex = e.detail.value;
    const gem = this.data.equipments[type].gemRange2[1][gemIndex[1]];
    let title = 'equipments[' + type + '].gemIndex2';
    let title2 = 'equipments[' + type + '].gem2';
    this.setData({
      [title]: gemIndex,
      [title2]: gem,
    })
  },
  bindGemPickerColumnChange2(e) {
    const index = parseInt(e.currentTarget.dataset.index, 10);
    const type = parseInt(e.currentTarget.dataset.type, 10);
    let gemRange = this.data.equipments[index].gemRange2;
    let gemIndex = this.data.equipments[index].gemIndex2;
    gemIndex[e.detail.column] = e.detail.value;
    let gem;
    if (e.detail.column === 0) {
      gem = (this.getPosition(type)[1])[e.detail.value].toString();
    }
    // 回调函数
    function callback(e) {
      gemRange[1] = e.data.map((item) => {
        return item.name;
      });
      gemIndex[1] = 0;
      let title = 'equipments[' + index + '].gemIndex2';
      let title2 = 'equipments[' + index + '].gemRange2';
      this.setData({
        [title]: gemIndex,
        [title2]: gemRange,
      });
    }
    switch (e.detail.column) {
      case 0:
        for (let i = 0; i < 7; i++) {
          if (gemIndex[0] === i) {
            switch (type) {
              case 0:
                getTreasureGem(gem, callback.bind(this));
                break;
              case 1:
                getTreasureGemMiddle(gem, callback.bind(this));
                break;
              case 2:
                getTreasureGemRight(gem, callback.bind(this));
                break;
              case 3:
                getNecklaceGem(gem, callback.bind(this));
                break;
              default:
                wx.showToast({
                  title: '处理请求异常',
                  icon: 'none'
                });
                break;
            }
          }
        }
    }
  },
  /* 跳转属性页面 */
  routeToProperty() {
    wx.navigateTo({
      url: '../property/property',
      success: this.calcPro.bind(this),
    });
  },
  // 计算总属性
  calcPro() {
    let data = this.data;
    const global = getApp().globalData;
    for (let equip in this.data.allEquipments) {
      if (equip === "0") {
        let _equip = data.equipments[0].detail.data[data.equipments[0].itemIndex[1]];
        // 已选武器
        if (data.equipments[equip].itemIndex[0] > -1 && data.equipments[equip].itemIndex[1] > -1) {
          global.powIndex = this.data.powIndex;
          // 增加体
          if (_equip.ti !== "0") {
            console.log(_equip, '_equip');
            global.physique += parseInt(_equip.ti, 10);
          }
          // 增加生命
          if (_equip.shengming !== "0") {
            global.health += parseInt(_equip.shengming, 10);
          }
          // 增加主属性
          if (_equip.zhushuxing !== "0") {
            global.primaryAttribute += parseInt(_equip.zhushuxing, 10);
          }
        } else {
          wx.showToast({
            icon: 'none',
            title: '未选择' + data.allEquipments[parseInt(equip, 10)],
          })
        }
      }
    }
    console.log(global);
  }
})