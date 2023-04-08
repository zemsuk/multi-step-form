const form = document.querySelector('#zems_step')
const action = form.querySelectorAll('button')
const steps = document.querySelectorAll('.step')
var current = '';
var next = '';
var curr = 0;
var total = steps.length;
// var nextAc = '';
// buttons 
const prevBtn = form.querySelector('.prev')
const nextBtn = form.querySelector('.next')
const submitBtn = form.querySelector('.submit')
prevBtn.style.display = 'none'
submitBtn.style.display = 'none'
prevBtn.addEventListener('click', function(e){
    e.preventDefault()
    process('prev')
})
nextBtn.addEventListener('click', function(e){
    e.preventDefault()
    process('next')
})
submitBtn.addEventListener('click', function(e){
    // e.preventDefault()
    form.submit();
})
// action.forEach(el =>  {   
//     el.addEventListener('click', function(e){
//         e.preventDefault()
//         // const nextAc = el.classList.contains('next');
//         if(el.classList.contains('prev')){
//             nextAc = 'prev'
//         } else if(el.classList.contains('next')){
//             nextAc = 'next'
//         } else if(el.classList.contains('submit')){
//             nextAc = 'submit'
//             form.submit();
//         }        
//         process(nextAc)
//     })     
// })
let process = (nextAc) => { 
    var i = 0;   
    console.log("Hi");
    console.log(steps.length);
    steps.forEach(step =>{
        i++;
        const active = step.classList.contains('active');
        if(active){
            validation(active)
            console.log(nextAc);
            current = active
            if(nextAc == 'prev'){
                next = step.previousElementSibling
                curr = i - 1 
            } else if(nextAc == 'next'){
                start = 1
                next = step.nextElementSibling
                curr = i + 1
            } 
            step.classList.remove("active");
        }
        console.log("Cur "+curr);
        if(curr >1) {
            prevBtn.style.display = 'inline-block'
        } else {
            prevBtn.style.display = 'none'
        }
        if(total == curr){
            nextBtn.style.display = 'none'
            submitBtn.style.display = 'inline-block' 
        } else {
            nextBtn.style.display = 'inline-block'
            submitBtn.style.display = 'none' 
        }
        console.log("Sl "+i);
    })
    next.classList.add("active");
    console.log("<hr>");
    console.log(current);
    console.log(next);
}

let validation = (data) =>{
    console.log("Hi Data");
}