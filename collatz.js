function findRes() {
  let n1 = parseInt(document.getElementById("firstNum").value, 10)
  let n2 = parseInt(document.getElementById("lastNum").value, 10)
  let numbers = twoNumbers(n1, n2).map(arr =>{
    return arr.slice(0,1)
  })
  let values = twoNumbers(n1, n2).map(arr =>{
    return arr.slice(1)
  })
  console.log(numbers + values)
  document.getElementById("desc").innerHTML = "These are the numbers that take the longest to result in 1, with their respective number of times: "
  makeTable(numbers, values)
}
function makeTable(numbers, values){
    let table = document.getElementById("numTable")
  numbers.forEach(number => {
    let n = numbers.indexOf(number);
    let row = table.insertRow(n+1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.innerHTML = number;
    cell2.innerHTML = values[n];
  })
}
const m = new Map();
function RGame(number) {
  if (number === 1) {
    return 0;
  } else if (m.has(number)) {
    return m.get(number);
  } else {
    m.set(number, 1 + RGame(number % 2 === 0 ? number / 2 : number * 3 + 1));
    return m.get(number);
  }
}
function twoNumbers(startN, endN) {
  for (i = startN; i <= endN; i++) {
    RGame(i);
  }
  let maxVal = 0;
  let maxKey = 0;
  m.forEach((value, key) => {
    if (value > maxVal) {
      maxVal = value;
      maxKey = key;
    }
  });
  console.log("This is the highest number: ", { maxKey, maxVal });
  const entries = [...m.entries()].filter(([k,v]) => {
    return k <= endN && k >= startN
  })
  entries.sort(([k1, v1], [k2, v2]) => {
     return v2 - v1;
  });
  console.log(entries.slice(0, 10));  
  return entries.slice(0, 10)
}





//Fibonacci
function fib(n){
  if (n <= 1){
    return 1
  } else{
    return fib(n-1) + fib(n-2);
  }
}
console.log(fib(6))
