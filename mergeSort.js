function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr
  }

  let half = arr.length / 2
  let arrLeft = arr.slice(0, half)
  let arrRight = arr.slice(half)

  return merge(mergeSort(arrLeft),mergeSort(arrRight))

}

function merge(left, right) {
  let i = 0
  let j = 0
  let sortArr = []
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      sortArr.push(left[i])
      i++
    }
    else {
      sortArr.push(right[j])
      j++
    }
  }
  if (j == right.length) {
    sortArr = [...sortArr, ...left.slice(i)]
  }
  if (i == left.length) {
    sortArr = [...sortArr, ...right.slice(j)]

  }
  return sortArr
}