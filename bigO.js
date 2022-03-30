// big O

function binarySearch(list, choice) {
  let [low, high] = [0, list.length - 1]

  while (low <= high) {
    let middle = Math.round((low + high) / 2)
    
    console.log(`> Current check: ${list[middle]}`)

    if (list[middle] === choice) return middle
    
    list[middle] > choice ? high = middle - 1 : low = middle + 1
  }
}

function simpleSearch(list, choice) {
  for (let index = 0; index < list.length; index++) {
    console.log(`> Current check: ${list[index]}`)
  
    if (list[index] === choice) return index
  }
}

function main() {
  const list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
  const choice = 24

  console.log('Simple Search | O(n)\n')
  console.log(`\nArray position of choice: ${simpleSearch(list, choice)}\n\n`)

  console.log('Binary Search | O(log n)\n')
  console.log(`\nArray position of choice: ${binarySearch(list, choice)}\n\n`)
}

main()
