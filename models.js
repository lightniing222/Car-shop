const modeChanger = document.querySelector('#circle')
const uni = document.querySelector('.universal')

const modeChangerText = document.querySelector('#circle')
const text = document.querySelectorAll('.text')

document.body.style.color="black"

document.body.style.backgroundColor="white"

modeChanger.addEventListener('click',(e)=>{
    if(document.body.style.backgroundColor==="white"){
        uni.classList.replace("universal","change")
        document.body.style.backgroundColor="black"
       text.forEach(element => {
            element.style.color='white'
       });
       
            document.body.style.color = "white"
    }else{
        let text1 = document.querySelectorAll('.textchange')
        text.forEach(e=>{
            e.style.color='black'
        })
       
        document.body.style.color="black"
        uni.classList.replace("change","universal")
        document.body.style.backgroundColor="white" 
    }
})
