var imageLogo = document.getElementById("logoNav");
var appName = document.getElementById("appName");
var createBtn = document.getElementById("createNav");
var kNumber = document.getElementById("usernameTD");
var signOutBtn = document.getElementsByClassName("signOutButton");

imageLogo.onclick = function(){
	var request;
	if(window.XMLHttpRequest)
    request = new XMLHttpRequest();
	else
    request = new ActiveXObject("Microsoft.XMLHTTP");
	request.open('GET', 'dashboard.html', false);
	request.send(); // there will be a 'pause' here until the response to come.
	// the object request will be actually modified
	if (request.status === 404) {
    window.location.href = "https://belooga.000webhostapp.com/dashboard";
}else{
	window.open("dashboard.html", "_self");
}
}

appName.onclick = function(){
	var request;
	if(window.XMLHttpRequest)
    request = new XMLHttpRequest();
	else
    request = new ActiveXObject("Microsoft.XMLHTTP");
	request.open('GET', 'dashboard.html', false);
	request.send(); // there will be a 'pause' here until the response to come.
	// the object request will be actually modified
	if (request.status === 404) {
    window.location.href = "https://belooga.000webhostapp.com/dashboard";
}else{
	window.open("dashboard.html", "_self");
}
}

createBtn.onclick = function(){
	var request;
	if(window.XMLHttpRequest)
    request = new XMLHttpRequest();
	else
    request = new ActiveXObject("Microsoft.XMLHTTP");
	request.open('GET', 'dashboard.html', false);
	request.send(); // there will be a 'pause' here until the response to come.
	// the object request will be actually modified
	if (request.status === 404) {
    window.location.href = "https://belooga.000webhostapp.com/dashboard";
}else{
	window.open("dashboard.html", "_self");
}
}

kNumber.onclick = function(){
	signOutBtn[0].style.display = "inline-block";
}

$(document).mouseup(function (e)
{
    var container = $(signOutBtn[0]);

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.hide();
    }
});
