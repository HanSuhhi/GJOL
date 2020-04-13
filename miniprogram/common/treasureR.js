const db = wx.cloud.database({});
const treasureRights = db.collection('treasureRight');
const gems = db.collection('gem');
/* 右信物装等 */
export const treasureRightQuality = [215, 225, 240, 250, 255, 260, 270, 280];
/* 宝石 */
export const gemRightList1 = ['碧桐珏(信)', '赫炎珏(信)', '琼霜珏(信)'];
export const gemRightListD2 = ['千魔珏(输出)', '震金珏(信)', '飞砂珏(信)'];
export const gemRightListT2 = ['千魔珏(防御)', '震金珏(信)', '飞砂珏(信)'];
export const gemRightListN2 = ['千魔珏(治疗)', '震金珏(信)', '飞砂珏(信)'];
export function getTreasureRight(pow, quality) {
  treasureRights.where({
    // 根据 职业、装等选择
    type: pow,
    quality: quality,
  }).get({
    success: arguments[2],
    fail: res => console.error(res)
  })
}

export function getTreasureGemRight(gemType) {
  gems.where({
    type: gemType
  }).get({
    success: arguments[1],
    fail: res => console.error(res),
  });
}