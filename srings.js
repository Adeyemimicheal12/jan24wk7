const efosa = document.querySelectorAll('ol li')
const aramide = document.getElementsByTagName('p')[0]
const letters = aramide.textContent
names =['efosa' ,'aramide', 'joshua' ,'adebare']
// alert(letters)
// length property
efosa[0].innerHTML = '<strong>Length property: </strong>' + letters.length
efosa[1].innerHTML = '<strong>First character: </strong>' + letters[0]
efosa[2].innerHTML = '<strong>Last character: </strong>' + letters[length.length - 1]
efosa[3].innerHTML = '<strong>Index of a particular str: </strong>' + letters.indexOf('x')
efosa[4].innerHTML = '<strong>Index of a particular str: </strong>' + letters.indexOf('o', letters.indexOf('dog'))
efosa[5].innerHTML = '<strong>Index of a particular str: </strong>' + letters.lastIndexOf('o', letters.indexOf('jump'))
efosa[6].innerHTML = '<strong>Index of a str that does not exists: </strong>' + letters.lastIndexOf('Y')
efosa[7].innerHTML = '<strong>Uppercase: </strong>' + letters.toUpperCase()
efosa[8].innerHTML = '<strong>Lowercase: </strong>' + letters.toLowerCase()
efosa[9].innerHTML = '<strong>Find a character of a particular index: </strong>' + letters.charAt(12)
efosa[10].innerHTML = '<strong>Replace: </strong>' + letters.replace('jump', 'walk')
efosa[11].innerHTML = '<strong>Replace all: </strong>' + letters.replaceAll('o', 'O')
efosa[12].innerHTML = '<strong>Split: </strong>' + letters.split(' ')
efosa[13].innerHTML = '<strong>Slice: </strong>' + letters.slice(7)
efosa[14].innerHTML = '<strong>Concat: </strong>' + letters.concat(' kehinde')
efosa[15].innerHTML = '<strong>Concat: </strong>' + 'jagun'.concat('jagun')
efosa[16].innerHTML = '<strong>Names: </strong>' + names.filter(names => names.startsWith('a'))
efosa[17].innerHTML = '<strong>Names: </strong>' + names.filter(names => names.endsWith('e'))
efosa[18].innerHTML = '<strong>Names: </strong>' + names.filter(names => names.includes('e'))

console.log(aramide.textContent)
       