const db = wx.cloud.database({});
const necklaces = db.collection('necklace');
const gems = db.collection('gem');
/* 项链等 */
export const necklaceQuality = [ 215, 225, 240, 250, 255, 260, 270, 280,];
const others = ['疗愈', '法战', '刃战', '固御', '兵战'];
/* 宝石 */
export const gemNecklaceLeft1 = ['千魔珏(输出)', '碧桐珏(饰)', '琼霜珏(饰)', '赫炎珏(饰)'];
export const gemNecklaceLeft2 = ['千魔珏(防御)', '碧桐珏(饰)', '琼霜珏(饰)', '赫炎珏(饰)'];
export const gemNecklaceLeft3 = ['千魔珏(治疗)', '碧桐珏(饰)', '琼霜珏(饰)', '赫炎珏(饰)'];
export const gemNecklaceRight = ['飞砂珏(饰)', '震金珏(饰)', '琼霜珏(饰)'];
export function getNecklace(pow, quality) {
    necklaces.where({
      // 根据 职业、装等选择
      "$or": [{"type": pow}, {"type": '法战'}, {"type": '疗愈'}, {"type": '刃战'}, {"type": '固御'}, {"type": '兵战'}],
      quality,
    }).get({
      success: arguments[2],
      fail: res => console.error(res)
    })
}

export function getNecklaceGem(gemType) {
  gems.where({
    type: gemType
  }).get({
    success: arguments[1],
    fail: res => console.error(res),
  });
}