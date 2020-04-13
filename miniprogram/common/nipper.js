const db = wx.cloud.database({});
const nippers = db.collection('nipper');
const charms = db.collection('charms');
/* 护手装等 */
export const nipperQuality = [210, 225, 240, 250, 255, 260, 270, 280]; 
/* 护手符咒 */
export const nipperCharm = ['物理输出', '法术输出', '通用', 'PVE通用', 'PVP通用', '其他'];

export function getNipper(pow, quality) {
  if (quality < 240) {
    nippers.where({
      quality,
    }).get({
      success: arguments[2],
      fail: res => console.error(res)
    })
  } else {
    nippers.where({
      // 根据 职业、装等选择
      type: pow,
      quality,
    }).get({
      success: arguments[2],
      fail: res => console.error(res)
    })
  }
}

export function getNipperCharm(type, ) {
  if (type === '其他') {
    type = '0'
  }
  charms.where({
    buwei: '护手',
    types: type,
  }).get({
    success: arguments[1],
  })
}