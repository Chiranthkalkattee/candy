// let m=document.querySelector('form');
// let input1=document.querySelector('inp1')
// let input2=document.querySelector('inp2')
// let btn=document.querySelector('button')
// let list=document.querySelector('list');
// m.addEventListener('submit',function(e){
//     e.preventDefault();
//     let inp1=input1.value;
//     let inp2=input2.value;
//     let createli=document.createElement("li");
//     createli.innerText=`${inp1} and ${inp2}`;
//     list.append(list)
// })

// let multiply=function(x,y){
// x*y;
// }
// let square=function(x){
// multiply(x,x)
// }
// let triangle=function(a,b,c){
//     return square(a)+square(b)===square(c);
// }
// console.log("sendiing.......")
// setTimeout(()=>
// console.log("yes")
// ,2000)

// console.log("sendiing.......")
// setInterval(()=>{
// console.log("yes")
// },20000)
// console.log("im ahere")

// setTimeout(()=>{
//     document.body.style.backgroundColor="red";setTimeout(()=>{
//         document.body.style.backgroundColor="green";setTimeout(()=>{
//             document.body.style.backgroundColor="yellow";setTimeout(()=>{
//                 document.body.style.backgroundColor="blue";
//             },1000)
//         },1000)
//     },1000)
// },1000)

const fake=(url)=>
{
   return new Promise((resolve,reject)=>{
       let rand=Math.random()
        setTimeout(()=>{
            if (rand>0.5){
                resolve('you are not fake');
            }else{
                reject("no data your fake")
            }
        },2000)

    })
}

// fake('www.gamil.com')
// .then((data)=>{
//     console.log("done with request",data)
// })
// .catch((err)=>{
//     console.log("done with request",err)
// })


async function makerequest(){
    try{
        let data1=await fake('www.gmail');
        console.log(data1)
        let data2=await fake('www.gmail');
        console.log(data2)
    }catch (err)
    {
        console.log("error caught")
    }
}