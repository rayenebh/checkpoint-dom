var favs=Array.from(document.querySelectorAll('.fa-heart'));
var deleteBtns=Array.from(document.querySelectorAll('.fa-trash-alt'));
var cards = Array.from(document.querySelectorAll(".card"));
var plusBtns=Array.from(document.querySelectorAll(".fa-plus-circle"));
var minusBtns=Array.from(document.querySelectorAll(".fa-minus-circle"));


for (let fav of favs)
{
    fav.addEventListener("click",
    function(){
        if (fav.style.color=="black"){
            fav.style.color="red"
        } else {
            fav.style.color="black"
        }
    }
    )
}


for (let i in deleteBtns) {
    deleteBtns[i].addEventListener("click",
    function(){
        cards[i].remove(),
        total()
    })
}




for (let plusBtn of plusBtns) {
    plusBtn.addEventListener("click",
    function(){
        plusBtn.nextElementSibling.innerHTML++
        total()
    })
}


for (let minusBtn of minusBtns) {
    minusBtn.addEventListener("click",
    function(){
        minusBtn.previousElementSibling.innerHTML > 0 ? 
        minusBtn.previousElementSibling.innerHTML-- :
        null,
        total()
    })
}

function total() {
    let qte = Array.from(document.querySelectorAll('.total'));
    let price = Array.from(document.querySelectorAll('.unit-price'));
    let s = 0;
    for (let i = 0; i < price.length; i++) {
      s += parseInt(price[i].innerHTML) * parseInt(qte[i].innerHTML);
    }
    document.querySelector(".total-price").innerHTML = "Total Price :" + s + "$";
  }

    