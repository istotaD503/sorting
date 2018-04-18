function split(arr) {
    let middle = Math.floor(arr.length/2);
    let firstArr = arr.slice(0, middle);
    let secondArr = arr.slice(middle);
    return [firstArr, secondArr];
  }
  function merge(arr1, arr2) { 
    let newArr = [];
    if (!arr1.length || !arr2.length) {
      let long = arr1.length ? arr1 : arr2;
      newArr = newArr.concat(long);
    } else {
      if (arr1[0] < arr2[0]) {
        newArr.push(arr1[0]);
        newArr = newArr.concat(merge(arr1.slice(1), arr2))
      }
      else {
        newArr.push(arr2[0]);
        newArr = newArr.concat(merge(arr1, arr2.slice(1)));
      }
    }
    return newArr;
  }
  function mergeSort(arr) {
    let retArr = [];
    if (arr.length <= 1) return arr;
    var splits = split(arr),
        left = splits[0],
        right = splits[1];
    return merge(mergeSort(left), mergeSort(right));  
  }