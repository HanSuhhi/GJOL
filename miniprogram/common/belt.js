const db = wx.cloud.database({});
const belts = db.collection('belt');
const charms = db.collection('charms');
/* 腰带装等 */
export const beltQuality = [210, 225, 240, 250, 255, 260, 270, 280]; 
/* 腰带符咒 */
export const beltCharm = ['法术输出', '物理输出', '通用', 'PVE通用', 'PVP通用'];

export function getBelt(pow, quality) {
  if (quality < 240) {
    belts.where({
      quality,
    }).get({
      success: arguments[2],
      fail: res => console.error(res)
    })
  } else {
    belts.where({
      // 根据 职业、装等选择
      type: pow,
      quality,
    }).get({
      success: arguments[2],
      fail: res => console.error(res)
    })
  }
}

export function getBeltCharm(type, ) {
  if (type === '其他') {
    type = '0'
  }
  charms.where({
    buwei: '腰带',
    types: type,
  }).get({
    success: arguments[1],
  })
}