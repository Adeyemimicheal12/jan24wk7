const names = ["Alice", "Bob", "Charlie", "Darlington", "Emma", "Fiona", "George", "Hannah", "Joy", "Julia"];
totalNames = names.length
check = names.includes("Charlie")
longest = names.reduce((longest, current) => longest.length > current.length ? longest : current)
smallest = names.reduce((shortest, current) => current.length > current.length ? shortest : current)
upcase = names.map(name => name.toUpperCase())
orders = names.slice().sort()
all = names.every(name => name.length >= 5)
place =  names.map(name => name === "Alice" ? "Eleanor" : name)
indexs = names.indexOf('Emma')
con = names.join(',')


console.log(totalNames)
console.log(check)
console.log(longest)
console.log(smallest)
console.log(upcase)
console.log(orders)
console.log(all)
console.log(place)
console.log(indexs)
console.log(con)


