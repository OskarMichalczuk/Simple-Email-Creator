import { allTemplates} from "./templates.js";


/// Kategorie LI
const navList = document.querySelector('.nav-list')

//Template
const templatePlace = document.querySelector('.templates');
const templateList = templatePlace.querySelector('ul');

//Formularz
const form = document.querySelector('form');
const emailDescription = form.querySelector('.description');
const emailText = form.querySelector('.email-text');
const sendBtn = form.querySelector('button');

//Wszystkie LI
const allLi = navList.querySelectorAll('li');

let category;

allLi.forEach(li =>{
    li.addEventListener('click', () => {
        category = li.classList.value;
        allLi.forEach(li =>{
            li.classList.remove('active-li')
        })
        li.classList.add('active-li')
        emailDescription.value = ''
        emailText.textContent = ''
        chooseTemplate(category);
        
    })
})

const chooseTemplate = (category) => {
    switch(category){
        case 'link':
            openTemplate(allTemplates[0])
            break
        case 'content' :
            openTemplate(allTemplates[1])
            break
        case 'digital' :
            openTemplate(allTemplates[2])
            break
        case 'colaboration' :
            openTemplate(allTemplates[3])
            break
        case 'buisness' :
            openTemplate(allTemplates[4])
            break
        case 'late-payment' :
            openTemplate(allTemplates[5])
            break
        case 'meeting' :
            openTemplate(allTemplates[6])
            break
        case 'sales' :
            openTemplate(allTemplates[7])
            break
        case 'event' :
            openTemplate(allTemplates[8])
            break
        case 'product' :
            openTemplate(allTemplates[9])
            break
        default: console.log('Error');
    }
}

const openTemplate = (template) =>{
    // console.log(template);
    clearTemplates()
    templatePlace.classList.remove('hidden')
    let i = 0

    template.forEach(el => {
        const li = document.createElement('li')
        li.textContent = `Template: ${i + 1}`
        li.dataset.index = i
        templateList.appendChild(li)
        i++
    })

    activeTemplate()

    const currentTemplate = templateList.querySelectorAll('li')
    currentTemplate.forEach(el => {
        el.addEventListener('click', () => {
            
            const {re , text} = template[el.dataset.index]
            
            emailDescription.value = re
            emailText.innerHTML = text
            
        })
    })

}

const clearTemplates = () => {
 const li = templateList.querySelectorAll('li')
   li.forEach(el => {
       el.remove()
   })
}

const activeTemplate = () =>{
    const allTemplateLi = templateList.querySelectorAll('li')

    allTemplateLi.forEach(li => {
        li.addEventListener('click',() => {
            allTemplateLi.forEach(li =>{
                li.classList.remove('active-template-li')
            })
            li.classList.add('active-template-li')
        })
    })
}