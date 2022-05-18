// const req=new XMLHttpRequest();
// req.onload=function(){
//     console.log("welcome.......")
//     const data=JSON.parse(this.responseText);
//     console.log(data.name,data.height)
// }
// req.onerror=function(){
//     console.log("loading................")
//     console.log(this)
// }
// req.open("GET","https://swapi.dev/api/people/1")
// req.send();

// fetch("https://swapi.dev/api/people/1")
// .then((res)=>{
//     console.log("responding",res)
//     return res.json()
// })
// .then((data)=>
// {
//     console.log(data)
// })
// .catch((e)=>{
//     console.log("error",e)
// })

// const loadtheapi = async () => {
//     try {
//         const res = await fetch("https://swapi.dev/api/people/1/");
//         const data = await res.json();
//         console.log(data);
//         const res1 = await fetch("https://swapi.dev/api/people/2/");
//         const data1 = await res1.json();
//         console.log(data1);
//     }
//     catch(e){
//         console.log("error",e);
//     }
  
// };
// loadtheapi()




// axios.get("https://swapi.dev/api/people/1/")
// .then((res)=>{
//     console.log(res)
// })
// .catch((e)=>{
//     console.log(e)
// })
// const newloadapi=async(id)=>{
//     try{
//         const res=await axios.get(`https://swapi.dev/api/people/${id}/`)
//     console.log(res.data) 
//     }
//     catch{
//         console.log(e)
//     }
// }
// const jokes=document.querySelector('#joke');
// const newload = async()=>{
//     try{
//         const config = {headers: {Accept: 'application/json'}}
//     const res = await axios.get("https://icanhazdadjoke.com/", config);
//     console.log(res.data.joke)
//     const newele=document.createElement('li');
//     newele.append(res.data.joke);
//     jokes.append(newele)     
//     }
//     catch{
//         document.write("no joke")
//     }
    
// }

// class Fruit{
//     constructor(name,price){
//         this.name=name;
//         this.price=price;
//     }
//     result(){
//         console.log(`${this.name},${this.price}`);
//     }
//     type(){
//         console.log(`thothapuri ${this.name} `)
//     }
// }
// const f=new Fruit('mango',120)

// class vechile{
//     constructor(name,cc){
//         console.log("next")
//         this.name=name;
//         this.cc=cc;
//     }
// }

// class bike extends vechile{
//     super(){
//         console("executed")}
//     bike(){
        
//         console.log(`${this.name} is ${this.cc}`);
//     }
// }

// class car extends vechile{
//     car(){
//         console.log(`${this.name} is ${this.cc}`);
//     }
// }

class maths{
    constructor(a,b)
    {
        this.a=a;
        this.b=b;
    }
    addition(){
        return parseInt(a)+parseInt(b);
    }
    sub(){
        return a-b;
    }
}