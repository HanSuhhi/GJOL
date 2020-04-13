const db = wx.cloud.database({});
const rings = db.collection('ring');
const gems = db.collection('gem');
/* 戒指装等 */
export const ringQuality = [ 215, 225, 240, 250, 255, 260, 270, 280,];
export const gemRing = ['碧桐珏(饰)', '震金珏(饰)', '琼霜珏(饰)'];
const others = ['疗愈', '法战', '刃战', '固御', '兵战'];

export function getRing(pow, quality) {
    rings.where({
      // 根据 职业、装等选择
      "$or": [{"type": pow}, {"type": '法战'}, {"type": '疗愈'}, {"type": '刃战'}, {"type": '固御'}, {"type": '兵战'}],
      quality,
    }).get({
      success: arguments[2],
      fail: res => console.error(res)
    })
}

export function getRingGem(gemType) {
  gems.where({
    type: gemType
  }).get({
    success: arguments[1],
    fail: res => console.error(res),
  });
}