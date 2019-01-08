var aboutBtn = document.getElementById("About");
var contactBtn = document.getElementById("Contact");

aboutBtn.onclick = function(){
	window.open("about.html", "_blank", "width=1000,height=800,scrollbars=yes,resizable=1")
}

contactBtn.onclick = function(){
	window.open("contact.html", "_blank", "width=1000,height=800,scrollbars=yes,resizable=1")
}
