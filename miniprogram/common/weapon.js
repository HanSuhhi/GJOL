const db = wx.cloud.database({});
const weapons = db.collection('weapon');
const charms = db.collection('charms');
/* 武器装等 */
export const weaponQuality = [215, 225, 240, 250, 255, 260, 270, 280]; 
/* 武器符咒 */
export const weaponCharm = ['物理输出', '法术输出', '疗愈', '固御', 'PVE输出专精', 'PVE物理输出', 'PVE疗愈', 'PVE固御', 'PVP输出', 'PVP疗愈', '其他'];

export function getWeapon(pow, quality) {
  weapons.where({
    // 根据 职业、装等选择
    type: pow,
    quality: quality,
  }).get({
    success: arguments[2],
    fail: res => console.error(res)
  })
}

export function getWeaponCharm(type, ) {
  if (type === '其他') {
    type = '0'
  }
  charms.where({
    buwei: '武器',
    types: type,
  }).get({
    success: arguments[1],
  })
}