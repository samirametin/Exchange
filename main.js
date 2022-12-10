let basebtns=document.querySelectorAll(".base")
basebtns.forEach(button=>{
    button.addEventListener("click",function(e){
        let violet=document.querySelector(".left .btns_1 .active")
        violet.classList.remove("active")
        e.target.classList.add("active")
        //
    })
})
let symbolbtns=document.querySelectorAll(".symbol")
symbolbtns.forEach(button=>{
    button.addEventListener("click",function(e){
        let violetright=document.querySelector(".right .btns_2 .active")
        violetright.classList.remove("active")
        e.target.classList.add("active")
        //
    })
})

let inptBase=document.querySelector(".inpt_base")
let inptSymbol=document.querySelector(".inpt_symbol")
inptBase.addEventListener("keyup",function(){
    let baseActive=document.querySelector(".left .btns_1 .active")
    let base=baseActive.value;
    let symbolActive=document.querySelector(".right .btns_2 .active")
    let symbol=symbolActive.value;
    let result=inptBase.value;
    inptSymbol.value=result;
    fetch(`https://api.exchangerate.host/latest?base=${base}&symbols=${symbol}&amount=${result}`)
    .then(res=>res.json())
    .then(res=> console.log(res))
})