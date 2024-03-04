const arr1 =[1,2,34,65,76,8,9,65,43]
const arr2 = new Array()
const students = 'ebade joseph efosa'.split(' ')

console.log(students[0])
console.log(students[1])
console.log(students.length)

students.push('darlington')
console.log(students)

const fewStds = ['kehinde', 'philips', 'aisha']
students.push(...fewStds)
students.unshift('darlington', 'habeeb')
students.shift()
students.shift()
students.pop()
students.pop()
students.splice(2,0,'promise')

students.splice(3,2,...['john', 'adebare', 'aramide'])

students.sort((a,b) => b.length -a.length)

students.reverse()

students.join()

arr1.sort((x,y)=>y-x)

students.push('john')

const students2 = students.slice() 

students2.pop()

const students3 = [...students]

students3.pop()

const students4 = students.slice(0,5)

const eStd = students.find(name => name.endsWith('e'))
const eStds = students.filter(name => name.endsWith('e'))
const containsAB = students.filter(name => name.includes('a') && name.includes('b'))

// console.log(arr1)
// console.log(students.join('-'))
console.log(eStd)
console.log(eStds)
console.log(containsAB)

function addTen(x){
    return x + 10
}

function TS(x){
    return x >= 30 && x <= 70
}
const upper = student => student.replace(student[0], student[0].toUpperCase())

function uppers(student){
    return student.replace(student[0], student[0].toUpperCase())
}

const toUpper = students.map(upper)

function sortData(a,b){
    return b-a
}