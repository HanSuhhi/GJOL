const db = wx.cloud.database({});
const shoes = db.collection('shoes');
const charms = db.collection('charms');
/* 鞋子装等 */
export const shoesQuality = [215, 225, 240, 250, 255, 260, 270, 280]; 
/* 鞋子符咒 */
export const shoesCharm = ['疗愈', '通用', '固御', 'PVE输出专精', 'PVE疗愈', 'PVE固御', 'PVP通用'];

export function getShoes(pow, quality) {
  if (quality < 240) {
    shoes.where({
      quality,
    }).get({
      success: arguments[2],
      fail: res => console.error(res)
    })
  } else {
    shoes.where({
      // 根据 职业、装等选择
      type: pow,
      quality,
    }).get({
      success: arguments[2],
      fail: res => console.error(res)
    })
  }
}

export function getShoesCharm(type, ) {
  if (type === '其他') {
    type = '0'
  }
  charms.where({
    buwei: '鞋子',
    types: type,
  }).get({
    success: arguments[1],
  })
}