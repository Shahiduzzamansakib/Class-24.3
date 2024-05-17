let qrinput = document.querySelector('.qrinput');
let btn = document.querySelector('.btn');
let qrimg = document.querySelector('.qrimg');



btn.addEventListener("click",function(){

  let result = qrinput.value;

  qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrinput.value;

});

