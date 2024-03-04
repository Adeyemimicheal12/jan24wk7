const numbers =[12, 34, 76, 123, 56, 8, 2, 988, 90, 345]


max = Math.max(...numbers)
min = Math.min(...numbers)

greater = numbers.filter(num => num > 50)
order = numbers.slice().sort((a, b) => a - b);
even = numbers.every(num => num % 2 === 0)
index = numbers.indexOf(76)
order2 = numbers.slice().reverse()








console.log(max)
console.log(min)

console.log(greater)
console.log(order)
console.log(even)
console.log(index)
console.log(order2)