const names = ["Alice", "Bob", "Charlie", "Darlington", "Emma", "Fiona", "George", "Hannah", "Joy", "Julia"];

// How many names are there in the array?
function namAny(arr) {
    return arr.length
}
// Is "Charlie" included in the array?
function nameCheck(arr) {
    return arr.includes('Charlie')
}
// Find the longest name in the array.
function longestNam(arr) {
    return arr.reduce((a,b) => a.length > b.length ? a : b)
}
// .Find the shortest name in the array.
function shortestNam(arr) {
    return arr.reduce((a,b) => a.length > b.length ? b : a)
}
// Create a new array with all names in uppercase letters.
function uper(arr) {
    return arr.map(name => name.toUpperCase())
}
// Sort the names in alphabetical order.
function order(arr) {
    return arr.sort()
}
// Check if all names in the array contain at least 5 characters
function five(arr) {
    return arr.filter(name => name.length < 5) 

}
// Replace "Alice" with "Eleanor" in the array.
function rePla(arr) {
    return arr.map(name => name === "Alice" ? "Eleanor" : name)
}
// Find the index of "Emma" in the array.
function inAny(arr) {
    return arr.indexOf("Emma")
}
// Concatenate all names in the array into a single string separated by commas.
function con(arr) {
    return arr.join(',')
}
console.log(namAny(names))
console.log(nameCheck(names))
console.log(longestNam(names))
console.log(shortestNam(names))
console.log(uper(names))
console.log(order(names))
console.log(rePla(names))
console.log(inAny(names))
console.log(con(names))
console.log (five(names))
