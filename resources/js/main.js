//import '../../style.css'

var accordion = document.getElementsByClassName('accordion');
var i;

console.log("loaded script")

function toggleAccordion(){
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
        panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
    }
}

for (i = 0; i < accordion.length; i++){
    accordion[i].addEventListener("click", toggleAccordion);
}
