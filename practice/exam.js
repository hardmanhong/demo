/**
 * 对两个不定长的数组进行相加
 * 给 [1,2,3] [4,2] 返回 [1,6,5]
 */
function add(arr1, arr2) {
  const arr = arr1.length > arr2.length ? arr2 : arr1;
  const arr3 = arr1.length > arr2.length ? arr1 : arr2;
  const result = [];
  while (arr.length) {
    const a = arr.pop();
    const b = arr3.pop();
    const res = a + b;
    result.unshift(res);
  }
  return arr3.concat(result);
}
console.log(add([1, 2, 3, 4], [7, 9, 1]));

/**
 * [
    {
        id: 1,
        pid: 0,
        name: 'body'
    }, {
        id: 2,
        pid: 1,
        name: 'title'
    }, {
        id: 3,
        pid: 2,
        name: 'div'
    },
    {
        id: 4,
        pid: 0,
        name: 'div'
    },
    {
        id: 9,
        pid: 4,
        name: 'div'
    }
]
 * 扁平化数组转树结构
 */
function toTree(list) {
  const map = {};
  const result = [];
  list.forEach((item) => {
    if (!map[item.id]) {
      map[item.id] = item;
    }
  });
  list.forEach((item) => {
    const p = map[item.pid];
    if (p) {
      if (!p.children) p.children = [];
      p.children.push(item);
    } else {
      result.push(item);
    }
  });
  return result;
}
toTree([
  {
    id: 1,
    pid: 0,
    name: 'body'
  },
  {
    id: 2,
    pid: 1,
    name: 'title'
  },
  {
    id: 3,
    pid: 2,
    name: 'div'
  },
  {
    id: 4,
    pid: 0,
    name: 'div'
  },
  {
    id: 9,
    pid: 4,
    name: 'div'
  }
]);
