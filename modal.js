
var modal = document.getElementById('myModal'); // Get the modal
var modalSave = document.getElementById('myModalSave'); // Get the modal
var btn = document.getElementById("help");// Get the button that opens the modal
var span = document.getElementsByClassName("close")[0];// Get the <span> element that closes the modal
var close = document.getElementsByClassName("close")[1];// Get the <span> element that closes the modal
btn.onclick = function() {// When the user clicks the button, open the modal
    modal.style.display = "block";
}
span.onclick = function() {// When the user clicks on <span> (x), close the modal
    modalSave.style.display = "none";
}

close.onclick = function() {// When the user clicks on (x), close the helpModal
    modal.style.display = "none";
}

window.onclick = function(event) {// When the user clicks anywhere outside of the modal, close it
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

$(document).mouseup(function (e)
{
    var container = $(modal);

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.hide();
    }
});
