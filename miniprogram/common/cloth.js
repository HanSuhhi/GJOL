const db = wx.cloud.database({});
const cloths = db.collection('cloth');
const charms = db.collection('charms');
/* 衣服装等 */
export const clothQuality = [210, 225, 235, 240, 250, 255, 260, 270, 280]; 
/* 帽子符咒 */
export const clothCharm = ['兵战', '刃战', '疗愈', 'PVE通用', 'PVP通用'];

export function getCloth(pow, quality) {
  if (quality < 225) {
    cloths.where({
      quality,
    }).get({
      success: arguments[2],
      fail: res => console.error(res)
    })
  } else {
    console.log('coming');
    console.log(pow);
    console.log(quality);
    cloths.where({
      // 根据 职业、装等选择
      type: pow,
      quality,
    }).get({
      success: arguments[2],
      fail: res => console.error(res)
    })
  }
}

export function getClothCharm(type, ) {
  if (type === '其他') {
    type = '0'
  }
  console.log(type);
  charms.where({
    buwei: '上装',
    types: type,
  }).get({
    success: arguments[1],
  })
}