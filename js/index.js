let button=document.querySelectorAll('.btn');
let succsess=document.querySelector('.success');
let input=document.querySelector('input')
let from=document.querySelector('.forms')
button.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        if(btn.innerHTML=="Dismiss message"){
            from.style.display='flex'
            succsess.classList.remove('active')
        }
        else{
            if(input.value==""){
                input.classList.add('vaild');
                document.querySelector('.error').classList.add('show')
                console.log("vaild");
            }
            else{
            console.log("active");
                succsess.classList.add('active')
                from.style.display='none'
            }
        }
    })
})