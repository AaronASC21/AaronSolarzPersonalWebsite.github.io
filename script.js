// if (state == "body2"){
//     p[i].style.backgroundColor = 'rgb(9, 16, 41)'
//     p[i].style.color = 'blanchedalmond'
//     body.style.backgroundColor = ' rgb(35, 38, 58)'
// body.style.color = 'blanchedalmond'
// }
// Button dark mode light mode
// Hide nav bar

let state = 'body'

let modeButton = document.querySelector('.Mode')
modeButton.addEventListener('click', changeColor)

let body = document.querySelector('body')


// let createDiv = document.createElement('body2')
// maindiv.appendChild(newBody)



let p = document.querySelectorAll('.para')
let bigdiv = document.querySelectorAll('#skyline');
let al = document.querySelectorAll('.al');
console.log(bigdiv)

let modeparaButton = document.querySelector('.Mode')
modeparaButton.addEventListener('click', changeColor)

function changeColor() {
    console.log('hello')
    if (state == "body") {
        state = "body2"
        for(let i = 0; i < p.length; i++){
            p[i].style.backgroundColor = 'rgb(12, 17, 37)'
            p[i].style.color = 'blanchedalmond'
            body.style.backgroundColor = 'rgb(35, 38, 58)'
        body.style.color = 'blanchedalmond'
        }
        for(let i = 0; i <bigdiv.length; i++){
            bigdiv[i].style.backgroundColor = 'rgb(9, 16, 41)'
            bigdiv[i].style.color = 'blanchedalmond'
            body.style.backgroundColor = ' rgb(35, 38, 58)'
            body.style.color = 'blanchedalmond'
        }
        for(let i = 0; i <al.length; i++){
            al[i].style.backgroundColor = 'rgb(12, 17, 37)'
            al[i].style.color = 'blanchedalmond'
            body.style.backgroundColor = ' rgb(35, 38, 58)'
            body.style.color = 'blanchedalmond'
        }
    
    }
    //on a moue click if the state is "circles" switch it to "squares" do the opposite otherwise and then modify the line where you draw the ellipse

    else {
        state = "body"
        for(let i = 0; i < p.length; i++){
        p[i].style.backgroundColor = 'rgb(169, 181, 247)'
        p[i].style.color = 'black'
        body.style.backgroundColor = 'rgb(129, 147, 247)'
        body.style.color = 'black'
        }
        for(let i = 0; i < bigdiv.length; i++){
            bigdiv[i].style.backgroundColor = 'rgb(169, 181, 247)'
            bigdiv[i].style.color = 'black'
            body.style.backgroundColor = 'rgb(129, 147, 247)'
            body.style.color = 'black'
            }
            for(let i = 0; i < al.length; i++){
                al[i].style.backgroundColor = 'rgb(169, 181, 247)'
                al[i].style.color = 'black'
                body.style.backgroundColor = 'rgb(129, 147, 247)'
                body.style.color = 'black'
                }
    }
}

// p.addEventListener( 'change', function() {
//     localStorage.setItem('dark',this.checked);
//     if(this.checked) {
//          body.classList.add('dark')
//     } else {
//          body.classList.remove('dark')     
//     }
// });

// bigdiv.addEventListener( 'change', function() {
//     localStorage.setItem('dark',this.checked);
//     if(this.checked) {
//          body.classList.add('dark')
//     } else {
//          body.classList.remove('dark')     
//     }
// });

// if(localStorage.getItem('dark')) {
//     body.classList.add('dark');
// }