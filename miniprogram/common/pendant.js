const db = wx.cloud.database({});
const pendants = db.collection('pendant');
const gems = db.collection('gem');
/* 配饰装等 */
export const pendantQuality = [ 215, 225, 240, 250, 255, 260, 270, 280,];
const others = ['疗愈', '法战', '刃战', '固御', '兵战'];

export function getPendant(pow, quality) {
    pendants.where({
      // 根据 职业、装等选择
      "$or": [{"type": pow}, {"type": '法战'}, {"type": '疗愈'}, {"type": '刃战'}, {"type": '固御'}, {"type": '兵战'}],
      quality,
    }).get({
      success: arguments[2],
      fail: res => console.error(res)
    })
}