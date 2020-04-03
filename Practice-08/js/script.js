var heading = document.querySelector('h1')

heading.addEventListener('mouseover', function (){
    heading.classList.add('heading')
})

heading.addEventListener('mouseout', function (){
    heading.classList.remove('heading')
})