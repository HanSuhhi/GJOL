const db = wx.cloud.database({});
const heads = db.collection('head');
const charms = db.collection('charms');
/* 帽子装等 */
export const headQuality = [215, 225, 240, 250, 255, 260, 270, 280]; 
/* 帽子符咒 */
export const headCharm = ['通用', '疗愈', '固御', 'PVE输出专精', 'PVE疗愈', 'PVE固御', 'PVE通用', 'PVP输出', 'PVP疗愈', 'PVP通用', '其他'];

export function getHead(pow, quality) {
  if (quality < 240) {
    heads.where({
      quality,
    }).get({
      success: arguments[2],
      fail: res => console.error(res)
    })
  } else {
    console.log(pow, 'pow');
    
    heads.where({
      // 根据 职业、装等选择
      type: pow,
      quality,
    }).get({
      success: arguments[2],
      fail: res => console.error(res)
    })
  }
}

export function getHeadCharm(type, ) {
  if (type === '其他') {
    type = '0'
  }
  console.log(type);
  charms.where({
    buwei: '头饰',
    types: type,
  }).get({
    success: arguments[1],
  })
}