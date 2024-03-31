//import '../../style.css'

var accordion = document.getElementsByClassName('accordion');
var i;

function toggleAccordion(){
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    var icon = this.children[1];

    if (panel.style.maxHeight){
        panel.style.maxHeight = null;
        panel.style.marginTop = "0px";
        // toggle icon = minus
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        panel.style.marginTop = "18px";
        // toggle icon = plus
    }
}


for (i = 0; i < accordion.length; i++){
    accordion[i].addEventListener("click", toggleAccordion);
}
