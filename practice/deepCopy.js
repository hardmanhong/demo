/**
 * 深拷贝
 */
function deepCopy(obj) {
  if (!obj || typeof obj !== 'object') return obj;
  const result = obj instanceof Array ? [] : {};
  //   tips: or...in不应该用于迭代一个关注索引顺序的 Array。在这里没有关系，因为 key是下标，不关系顺序
  for (let key in obj) {
    //   hasOwnProperty 防止遍历原型上的属性（不可枚举）
    if (obj.hasOwnProperty(key)) {
      result[key] =
        typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
    }
  }
  return result;
}
