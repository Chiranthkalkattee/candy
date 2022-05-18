// let btn=document.querySelector('#b1');

// btn.onclick=function(){
//     console.log("you clicked me again");

// }
// function s(){
//     console.log("don't touch it");
//     console.log("please don't touchit  again");
// }
// btn.onmouseenter=s;
// let btn2=document.querySelector('#b2');
// btn2.addEventListener('click',s);


// btn3=document.querySelector('#b3');

// btn3.addEventListener('click',function(){
//     let r=Math.floor(Math.random()*255)
//     let g=Math.floor(Math.random()*255)
//     let b=Math.floor(Math.random()*255)
//     let rgb=`rgb(${r},${g},${b})`;
//     document.body.style.backgroundColor=rgb;
//     h1=document.querySelector('#h1').innerHTML=rgb;
// })

function changebackgroundcolor(){
    let r=Math.floor(Math.random()*255)
    let g=Math.floor(Math.random()*255)
    let b=Math.floor(Math.random()*255)
    return `rgb(${r},${g},${b})`;
}
let d1=document.querySelectorAll('#d1');
for(let d of d1)
d.addEventListener('click',function(){
d.style.backgroundColor=changebackgroundcolor();
d.style.color=changebackgroundcolor();
})

let h2=document.querySelectorAll('h2')
    for(let h of h2)
    h.addEventListener('click',function(){
        h.style.backgroundColor=changebackgroundcolor();
        h.style.color=changebackgroundcolor();
    })

    function colorized(){
        this.style.backgroundColor=changebackgroundcolor();
        this.style.color=changebackgroundcolor();
    }
let t=document.querySelector('#this')
t.addEventListener('click',colorized)

document.querySelector('#evobj').addEventListener('click',function(evt){
    console.log(evt)
})


document.querySelector('input').addEventListener('keydown',function(e){
    console.log(e.key);
    console.assert(e.code)
})


let m=document.querySelector('form');
let inp=document.querySelector('#input1');
let inp1=document.querySelector('#input2');
let list=document.querySelector('#list');
m.addEventListener('submit',function(e){
    e.preventDefault();
    let input=inp.value;
    let input1=inp1.value;
    let createli=document.createElement("li");
    createli.innerText=`${input} and ${input1}`;
    list.append(createli)
    inp.value=" ";
})

let q=document.querySelector('#newbtn');
let r=document.querySelector('#para');
q.addEventListener('click',function(e){
r.style.backgroundColor=changebackgroundcolor();
r.style.color=changebackgroundcolor();
e.stopPropagation()
});

r.addEventListener('click',function(){
r.classList.toggle('hide');
})