// miniprogram/pages/property/property.js
import * as COMMON from '../../common/common';
Page({
  data: {
    physique: COMMON.physique, // 体基础值
    health: COMMON.health,  // 额外气血
    primaryAttribute: COMMON.primaryAttribute, // 主属性
    luck: COMMON.luck, // 运
    quality: COMMON.quality, // 装等
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onShow() {
    const globalData = getApp().globalData;
    const data = this.data;
    this.setData({
      powIndex: globalData.powIndex,
      physique: data.physique + globalData.physique,
      health: globalData.health,
      primaryAttribute: globalData.primaryAttribute + data.primaryAttribute,
      luck: globalData.luck + data.luck,
      quality: globalData.quality + data.quality,
      // 攻击
      get ACK() { 
        let ACK = COMMON.baseACK;
        /* 主属性、运附加 */
        // D
        if (this.powIndex[0] === 0) {
          ACK += this.primaryAttribute * COMMON.DprimaryAttributeToACK;
        }
        if (this.powIndex[0] === 1) {
          ACK += this.luck * COMMON.NluckToACK;
        }
        // T
        if (this.powIndex[0] === 2) {
          ACK += this.primaryAttribute * COMMON.TprimaryAttributeToACK;
          ACK += this.luck * COMMON.TluckToACK;
        }
        return ACK.toFixed(2);
      },
      // 强度
      get intension() {
        let intension = 0;
        // 主属性增加强度
        if (this.powIndex[0] === 0) {
          intension += this.primaryAttribute * this.powIndex[1] <= 2 ? COMMON.DprimaryAttributeToIntension1 : COMMON.DprimaryAttributeToIntension2;
        } else if ( this.powIndex[0] === 1) {
          intension += this.primaryAttribute * COMMON.NprimaryAttributeToIntension;
        } else {
          intension += this.primaryAttribute * COMMON.TprimaryAttributeToIntension;
        }
        return intension.toFixed(2);
      },
      // 会心
      get thump() {
        let thump = 0;
        // 主属性增加强度
        if (this.powIndex[0] === 0) {
          thump += this.primaryAttribute * this.powIndex[1] <= 2 ? COMMON.DprimaryAttributeToThump1 : COMMON.DprimaryAttributeToThump2;
        } else if ( this.powIndex[0] === 1) {
          thump += this.primaryAttribute * COMMON.NprimaryAttributeToThump;
        } else {
          thump += this.primaryAttribute * this.powIndex[1] <= 1 ? COMMON.TprimaryAttributeToThump1 : COMMON.TprimaryAttributeToThump2;
        }
        return thump.toFixed(2);
      },
      // 治疗效果
      get cure() {
        let cure = 0;
        if (this.powIndex[0] === 1) {
          cure += this.primaryAttribute * COMMON.NprimaryAttributeToCure;
          cure += this.ACK * COMMON.ACKToCure;
        }
        return cure.toFixed(2);
      },
      // 生命
      get hp() {
        let hp = this.physique * COMMON.physiqueToHp + this.health;
        // T 主属性加血
        if ( this.powIndex[0] === 2) {
          hp += this.primaryAttribute * COMMON.TprimaryAttributeToHp;
        }
        return hp.toFixed(0);
      },
      // 仇恨
      get OMEN() {
        let OMEN = 0;
        // T 主属性 - 仇恨
        if (this.powIndex[0] === 1) {
          OMEN += this.primaryAttribute * COMMON.TprimaryAttributeToOMEN;
          OMEN += this.ACK * COMMON.ACKToOMEN;
        }
        return OMEN.toFixed(2);
      },
      // 攻击专注
      get focus() {
        let focus = 0;
        if (this.powIndex[0] === 0) {
          focus = this.luck * COMMON.DluckToFocus;
        }
        if (this.powIndex[0] === 2) {
          focus = this.luck * COMMON.TluckToFocus;
        }
        return focus.toFixed(2);
      },
      // 识破
      get penetrate() {
        let penetrate = 0;
        if (this.powIndex[0] === 2) {
          penetrate = this.luck * COMMON.TluckToPenetrate;
        }
        return penetrate.toFixed(2);
      },
      // 急速
      get speed() {
        let speed = 0;
        if (this.powIndex[0] === 1) {
          speed = this.luck * COMMON.NluckToSpeed;
        }
        return speed.toFixed(2);
      },
      // 防御强化等级 T专属
      get armorPlus() {
        let armor = COMMON.TbaseArmorPlus;
        return armor.toFixed(2) + '%';
      },
      // 攻击强化等级 TN专属
      get ACKPlus() {
        let ack = 0;
        // N
        if (this.powIndex[0] === 1) {
          ack = COMMON.NbaseACKPlus + (this.quality - COMMON.baseACKPlusQuality) * COMMON.NbaseAckPlusNum;
        }
        if (this.powIndex[0] === 2) {
          ack = COMMON.TbaseACKPlus + (this.quality - COMMON.baseACKPlusQuality) * COMMON.TbaseAckPlusNum;
        }
        return ack.toFixed(2) + '%';
      },
      // 仇恨强化等级
      get OMENPlus() {
        let OMENPlus = 0;
        if (this.powIndex[0] === 2) {
          OMENPlus += COMMON.baseOMENPlus;
        }
        return OMENPlus + '%';
      },
      // 治疗强化等级
      get curePlus() {
        let curePlus = 0;
        curePlus = COMMON.baseCurePlus;
        return curePlus + '%';
      }
    });
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