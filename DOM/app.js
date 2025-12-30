let ip = document.querySelector("input")
let h2 = document.querySelector("h2")

ip.addEventListener('input',function(){
    this.value = this.value.replace(/[^a-zA-Z ]/g,"")
    h2.innerText = this.value;
});


