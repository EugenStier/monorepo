class CopyEntity{
  static copyObject(object) {
    // const copyOb = {};
    // for (const key in object) {
      // copyOb[key] = object[key];
      // }
    return
    JSON.parse(JSON.stringify(object));
  }
}
const arr1 = [1, 2, 3];
const arr2 = CopyEntity.copyObject(arr1);
arr1(0) =999;
console.log(arr2);
console.log(arr1);