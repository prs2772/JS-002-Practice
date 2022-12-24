const mainHeader = document.querySelector('h1')
const firstSectionHeader = document.querySelector('#first-section-header')
const firstSectionForm = document.querySelector('#first-section-form')
const firstSectionPar1 = document.querySelector('#first-section-par1')
const firstSectionPar2 = document.querySelector('#first-section-par2')
const firstSectionInputName = document.querySelector('#first-section-name')
const firstSectionDate = document.querySelector('#first-section-date')
const mainSection = document.querySelector('#main-section')

mainHeader.innerText = 'This is the main title assigned from JS'
firstSectionPar1.innerHTML = 'Not lorem <p>here</p>'
firstSectionPar2.innerText = 'Not lorem <p>here</p>'
console.log(firstSectionPar1.getAttribute('id'))
firstSectionHeader.setAttribute('class', 'section--header')
firstSectionHeader.classList.add('style--header__main')
//firstSectionHeader.classList.remove('style--header__two')
//firstSectionHeader.classList.toggle('style--header__two')
//firstSectionHeader.classList.contains('style--header__two')
firstSectionHeader.value = 'Text'

const image = document.createElement('img')
image.setAttribute('src', 'https://cdn.pixabay.com/photo/2018/12/18/21/52/new-years-eve-3883137_960_720.png')
image.setAttribute('alt', 'Christmas tree animated')

console.log(image)

mainSection.append(image)


