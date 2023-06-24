function getLength(arr){
    return arr.length;
  }
  function getFirst(arr){
    //return the first element of arr
    return arr[0];
  }
function getLast(arr){
    const lastNbm = arr.length -1
    console.log(lastNbm);
    return arr[lastNbm];
  }
  function pushElement(arr){
    var el=1;
    arr.push(el)
    
    return arr
  }
  function popElement(arr){
    //pop an element from arr
    arr.pop()
    return arr
  }