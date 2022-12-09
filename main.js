let basebtns=document.querySelector(".btns_1")
basebtns.addEventListener("click",function(e){
    var base=e.target.innerText;
    let symbolbtns=document.querySelector(".btns_2")
symbolbtns.addEventListener("click",function(e){
    var symbol=e.target.innerText;
})

fetch(`https://api.exchangerate.host/latest?base=${base}&symbol=${symbol}`)
.then(res=> res.json())
.then(res=> alert(res))

})

