function findRes() {
  let n1 = parseInt(document.getElementById("firstNum").value, 10)
  let n2 = parseInt(document.getElementById("lastNum").value, 10)
//       let result = twoNumbers(n1, n2).forEach(arr => {
    
//     })
  document.getElementById("result").innerHTML = "These are the numbers that take the longest to result in 1, with their respective number of times" + twoNumbers(n1, n2).join("; ")
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

result = twoNumbers(1,10).map(arr =>{
  console.log(arr.slice(1))
})
console.log("hi "+result)





//Fibonacci
function fib(n){
  let x = 1
  if(n===1){
    return 1
  } else{
    for(i=0; i<= n; i++){
      x+x
      x++
      console.log(x)
    }
    return x
  }
}
fib(10)
