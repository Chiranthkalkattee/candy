const nwlist=document.querySelector('#newmanufacture')
const button=document.querySelector('#btt')
const addnewcycle=async()=>{
    const data1=await newproject()
    const nwele=document.createElement('li');
    nwele.append(data1);
    nwlist.append(nwele);
}
const newproject=async()=>{
    try{
    const config = {headers: {Accept: 'application/json'}}
    const res=await axios.get("https://bikeindex.org:443/api/v3/manufacturers/bca",config)
    d=res.data.manufacturer;
    return `${d.name}, Company URL:${d.company_url}`
    }catch(e){
        return "oops no cycle"
    }
}
let newqty=3
button.addEventListener('click',addnewcycle)
const quantity=document.querySelector('#qty')
quantity.addEventListener('change',function(){
   newqty=parseInt(this.value);
    
})
//let newqty=(this.value);
const pricecal=document.querySelector('#price')
pricecal.addEventListener('click',function(){
    let price=parseInt(pricecal.textContent)
    //document.write(price)
    //document.write(newqty)
    let p=price*newqty;
    document.write(p)
})