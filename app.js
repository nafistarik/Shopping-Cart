//ONE MORE PHONE

var phonePlusButton=document.getElementById("phone-plus-button");

phonePlusButton.addEventListener("click",function(){
    var numberOfPhone=document.getElementById("number-of-phone");
    numberOfPhone.value=parseFloat(numberOfPhone.value)+1;
})

//ONE MORE COVER

var coverPlusButton=document.getElementById("cover-plus-button");

coverPlusButton.addEventListener("click",function(){
    var numberOfCover=document.getElementById("number-of-cover");
    numberOfCover.value=parseFloat(numberOfCover.value)+1;
})

//ONE LESS PHONE

var phoneMinusButton=document.getElementById("phone-minus-button");

phoneMinusButton.addEventListener("click",function(){
    var numberOfPhone=document.getElementById("number-of-phone");
    numberOfPhone.value=parseFloat(numberOfPhone.value)-1;
    
    if(numberOfPhone.value==-1){
        var numberOfPhone=document.getElementById("number-of-phone");
        numberOfPhone.value=parseFloat(numberOfPhone.value)+1;
    }
})

//ONE LESS COVER

var coverMinusButton=document.getElementById("cover-minus-button");

coverMinusButton.addEventListener("click",function(){
    var numberOfCover=document.getElementById("number-of-cover");
    numberOfCover.value=parseFloat(numberOfCover.value)-1;
    
    if(numberOfCover.value==-1){
        var numberOfCover=document.getElementById("number-of-cover");
        numberOfCover.value=parseFloat(numberOfCover.value)+1;
       }
    
    
})

//Money

document.getElementsByClassName("container")[0].addEventListener("mousemove",function(){
    var numberOfPhone=document.getElementById("number-of-phone").value;
    var phonePrice=document.getElementById("phone-price");
    phonePrice.innerText=parseFloat(numberOfPhone)*1219;
    
    var numberOfCover=document.getElementById("number-of-cover").value;
    var coverPrice=document.getElementById("cover-price");
    coverPrice.innerText=parseFloat(numberOfCover)*59;
    
    var subtotal=document.getElementById("subtotal");
    subtotal.innerText=parseFloat(numberOfCover)*59+parseFloat(numberOfPhone)*1219;
    
    var total=document.getElementById("total");
    total.innerText=parseFloat(numberOfCover)*59+parseFloat(numberOfPhone)*1219;
})
