//import '../../style.css'

var accordion = document.getElementsByClassName('accordion');
var i;

console.log("loaded script")

function toggleAccordion(){
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
        panel.style.maxHeight = null;
        panel.style.marginTop = "0px";
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        panel.style.marginTop = "18px";
    }
}

for (i = 0; i < accordion.length; i++){
    accordion[i].addEventListener("click", toggleAccordion);
}
