const element = document.getElementById("show-hide");
const button_open = document.getElementById("open");
const button_close = document.getElementById("close");

function toggle() {
    if (element.style.display === "none") {
    show();
    change_button();
    document.addEventListener('mouseup', function eventHandler(){
        hide();
        change_button();
        this.removeEventListener('mouseup', eventHandler)
    });
    } else {
    hide();
    change_button();
    }
}

function show() {
    element.style.display = "block";
}

function change_button() {
    if (button_open.style.display === "block") {
        button_open.style.display = "none";
        button_close.style.display = "block";
    } else {
        button_open.style.display = "block";
        button_close.style.display = "none";
    }
    
}

function hide() {
    element.style.display = "none";
}