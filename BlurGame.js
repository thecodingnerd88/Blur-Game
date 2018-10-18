var inputs= document.querySelectorAll(".controls input");
inputs.forEach(input => input.addEventListener("change",HandleUpdate));
inputs.forEach(input => input.addEventListener("mousemove",HandleUpdate));


function HandleUpdate(){
 var suffix= this.dataset.sizing || "";
 document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}