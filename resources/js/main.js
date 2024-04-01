//import '../../style.css'

var accordion = document.getElementsByClassName('accordion');
var i;

function toggleAccordion(){
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    var icon = this.children[1].children[0];

    if (panel.style.maxHeight){
        panel.style.maxHeight = null;
        panel.style.marginTop = "0px";

        icon.src = "./resources/images/icon-plus.svg";
        icon.alt = "minus icon";

    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        panel.style.marginTop = "18px";

        icon.src = "./resources/images/icon-minus.svg";
        icon.alt = "plus icon";
        
    }
}

for (i = 0; i < accordion.length; i++){
    accordion[i].addEventListener("click", toggleAccordion);
}
