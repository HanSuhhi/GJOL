const db = wx.cloud.database({});
const treasureMiddles = db.collection('treasureMiddle');
const gems = db.collection('gem');
/* 中信物装等 */
export const treasureMiddleQuality = [215, 225, 240, 250, 255, 260, 270, 280];
/* 宝石 */
export const gemMiddleListD1 = ['千魔珏(输出)', '碧桐珏(信)', '琼霜珏(信)', '震金珏(信)'];
export const gemMidlleListT1 = ['千魔珏(防御)', '碧桐珏(信)', '琼霜珏(信)', '震金珏(信)'];
export const gemMiddleListN1 = ['千魔珏(治疗)', '碧桐珏(信)', '琼霜珏(信)', '震金珏(信)'];
export const gemMiddleList2 = ['飞砂珏(信)', '赫炎珏(信)'];
export function getTreasureMiddle(pow, quality) {
  treasureMiddles.where({
    // 根据 职业、装等选择
    type: pow,
    quality: quality,
  }).get({
    success: arguments[2],
    fail: res => console.error(res)
  })
}

export function getTreasureGemMiddle(gemType) {
  gems.where({
    type: gemType
  }).get({
    success: arguments[1],
    fail: res => console.error(res),
  });
}