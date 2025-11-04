//Iterative
function fibs(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];

  let arr = [0, 1]
  for (let i = 0; i < n - 2; i++) {
    arr.push(arr[i] + arr[i + 1]);
  }
  return arr
}

function fibsRec(n) {
  if (n <= 0) return [];
  else if (n === 1) return [0];
  else if( n === 2) return [0,1];

  const rest = fibsRec(n-1)

  return [...rest, rest[rest.length-1] + rest[rest.length-2] ]

}

