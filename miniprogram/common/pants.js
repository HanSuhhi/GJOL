const db = wx.cloud.database({});
const pants = db.collection('pants');
const charms = db.collection('charms');
/* 下装装等 */
export const pantsQuality = [210, 225, 240, 250, 255, 260, 270, 280]; 
/* 下装符咒 */
export const pantsCharm = ['兵战', '刃战', '法战', '疗愈', 'PVE通用', 'PVP通用'];

export function getPants(pow, quality) {
  if (quality < 240) {
    pants.where({
      quality,
    }).get({
      success: arguments[2],
      fail: res => console.error(res)
    })
  } else {
    pants.where({
      // 根据 职业、装等选择
      type: pow,
      quality,
    }).get({
      success: arguments[2],
      fail: res => console.error(res)
    })
  }
}

export function getPantsCharm(type, ) {
  if (type === '其他') {
    type = '0'
  }
  charms.where({
    buwei: '下装',
    types: type,
  }).get({
    success: arguments[1],
  })
}