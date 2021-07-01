function animatedForm(){
    const arrows=document.querySelectorAll('.fa-check-circle');
    arrows.forEach(arrow =>{
        arrow.addEventListener('click',()=>{
            const input=arrow.previousElementSibling;
            const parent=arrow.parentElement;
            const nextForm=parent.nextElementSibling;
            
            // check for validation and move to next
            if(input.type==='text'&&validateUser(input)){
                nextSlide(parent,nextForm);
            }
            else if(input.type==='email'&&validateMail(input)){
                nextSlide(parent,nextForm);
            }
            else if(input.type==='password'&&validateUser(input)){
                nextSlide(parent,nextForm);
            }
            else{
                parent.style.animation='shake 0.5s ease';
            }
            parent.addEventListener('animationend',()=>{
                parent.style.animation='';
            })
        })
    })
      
}
function validateMail(mail){
    const validation=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(validation.test(mail.value)){
        error('rgb(7,250,153)')
        return true;
    }
    else{
        error('#e33636')
        window.alert('Please enter an valid email');
        return false;
    }
    
}

function validateUser(user){
    if(user.value.length<6){
    error('#e33636');
    window.alert('Both username and password must be larger than 6 letters')
    return false
    }

    else{
        error('rgb(7,250,153)');
        return true;
    }
}

function nextSlide(parent,nextForm){
    parent.classList.remove('active');
    parent.classList.add('inactive');
    nextForm.classList.add('active');
}
  
function error (color){
    document.body.style.background=color;
}

animatedForm();