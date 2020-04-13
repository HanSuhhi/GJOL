const db = wx.cloud.database({});
const treasureLefts = db.collection('treasureLeft');
const gems = db.collection('gem');
/* 左信物装等 */
export const treasureLeftQuality = [215, 225, 240, 250, 255, 260, 270, 280];
/* 宝石 */
export const gemList1 = ['震金珏(信)', '赫炎珏(信)'];
export const gemListD2 = ['千魔珏(输出)', '碧桐珏(信)', '琼霜珏(信)', '飞砂珏(信)'];
export const gemListT2 = ['千魔珏(防御)', '碧桐珏(信)', '琼霜珏(信)', '飞砂珏(信)'];
export const gemListN2 = ['千魔珏(治疗)', '碧桐珏(信)', '琼霜珏(信)', '飞砂珏(信)'];
export function getTreasureLeft(pow, quality) {
  treasureLefts.where({
    // 根据 职业、装等选择
    zhiye: pow,
    zhuangdeng: quality,
  }).get({
    success: arguments[2],
    fail: res => console.error(res)
  })
}

export function getTreasureGem(gemType) {
  gems.where({
    type: gemType
  }).get({
    success: arguments[1],
    fail: res => console.error(res),
  });
}