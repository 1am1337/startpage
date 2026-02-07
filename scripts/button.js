const element = document.getElementById("show-hide");
function toggle() {
    if (element.style.display === "none") {
    show();
    document.addEventListener('mouseup', function eventHandler(){
        hide();
    });
    } else {
    hide();
    }
}

function show() {
    element.style.display = "block";
}

function hide() {
    element.style.display = "none";
    document.removeEventListener('mouseup', eventHandler);
}