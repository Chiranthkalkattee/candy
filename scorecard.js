const player1=document.querySelector('#p1')
const player2=document.querySelector('#p2')
const reset=document.querySelector('#reset')
const sets=document.querySelector('#plays')
let p1=document.querySelector('#player1')
let p2=document.querySelector('#player2')
let winscore=5;
let p1score=0;
let p2score=0;
let gameover=false;
player1.addEventListener('click',function(){
    if(!gameover){
        p1score+=1;
    if(p1score===winscore){ 
        gameover=true;  
        p1.classList.add('winner')
        p2.classList.add('looser')
    }
    p1.textContent=p1score;
}
})
player2.addEventListener('click',function(){
    if(!gameover){
        p2score+=1;
    if(p2score===winscore){   
        gameover=true;
        p2.classList.add('winner')
        p1.classList.add('looser')
    }
    p2.textContent=p2score;
}
})
sets.addEventListener('change',function(){
    winscore=parseInt(this.value);
    resets();

})

reset.addEventListener('click',resets)

function resets(){
    gameover=false;
    p1score=0;
    p2score=0;
    p1.textContent=0;
    p2.textContent=0;
    p1.classList.remove('winner','looser')
    p2.classList.remove('winner','looser')
}