// faq section code 

const questionContainers = document.querySelectorAll('.question-container');

questionContainers.forEach(question => {
    question.addEventListener('click',()=>{
        question.classList.toggle('active');
    })
})

const buttons = document.querySelectorAll('.nav-button');
buttons.forEach(button => {
    button.addEventListener('click', ()=>{
        if (!button.classList.contains('nav-active')) {
            
            button.classList.add('nav-active')
        }else{
            
        }
    })
})
