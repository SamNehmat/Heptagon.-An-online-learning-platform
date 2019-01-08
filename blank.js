var selects = new Array();
var Return = "\r";
var modal1 = document.getElementById('myModal1');// Get the modal
var btn1 = document.getElementById("myBtn1");// Get the button that opens the modal

window.onclick = function(event) {// When the user clicks anywhere outside of the modal, close it
    if (event.target == modal1) {
        modal1.style.display = "none";
	}
}
/**
     * Function to create blanks
     *
     */
var sel = 0;
function getSelText() {
    sel = 0;
	var duplicate = false;
    while (sel < 1) {
        var txt = [null];
        if (window.getSelection) {//if statement accounds for different browsers
            txt = window.getSelection();//store selected text as txt
        } else if (document.getSelection) {//if browser doesnt use window.getSelection, try this
            txt = document.getSelection();
        } else if (document.selection) {//if browser doesnt use document.getSelection, try this
            txt = document.selection.createRange().text;
        } else return;
        if (txt != "") {
            if (/\s/.test(txt)) {
				//validation
				document.getElementById('modalText').innerHTML = 'Please select single keywords only (No spaces)'
				modal1.style.display = "block";
				$('#myModal1').delay(2000).fadeOut('slow');
				setTimeout(function(){modal1.style.display = "none";}, 2500);
                break;
            } else {//get length of selection
				for(var j = 0; j<= selects.length; j++){
					if(txt == selects[j]){//checks if its the same word
						duplicate = true;
					}else{}
				}
				if(duplicate == true){//validation
					document.getElementById('modalText').innerHTML = 'You can not make the same word blank twice.'
					modal1.style.display = "block";
					$('#myModal1').delay(2000).fadeOut('slow');
					setTimeout(function(){modal1.style.display = "none";}, 2500);
					break;
				} else {
                selects.push("" + txt);//make word blank
                sel++;//increment blank number
				document.getElementById('modalText').innerHTML = txt + " added to the blank wordlist."
				modal1.style.display = "block";
				$('#myModal1').delay(2000).fadeOut('slow');
				setTimeout(function(){modal1.style.display = "none";}, 2500);
                var str = document.getElementById("userInput").innerHTML;
                var data = str.replace(txt, "<span>" + txt + "</span>");
                document.getElementById("userInput").innerHTML = data;
				}
            }
        } else {//validation
			document.getElementById('modalText').innerHTML = "Please highlight a word to add it to the blank wordlist."
			modal1.style.display = "block";
			$('#myModal1').delay(2000).fadeOut('slow');
			setTimeout(function(){modal1.style.display = "none";}, 2500);
            break;
        }
    };
    document.menu.selectedtext.value = selects;
}
/**
     * Function to remove blanks
     *
     */
function removeSelText() {
    var sel = 0;
    while (sel < 1) {
        var txt = [null];
        if (window.getSelection) {//if statement accounds for different browsers
            txt = window.getSelection();//store selected text as txt
        } else if (document.getSelection) {//if browser doesnt use window.getSelection, try this
            txt = document.getSelection();
        } else if (document.selection) {//if browser doesnt use document.getSelection, try this
            txt = document.selection.createRange().text;
        } else return;
        var index = selects.indexOf(txt);
        index = index;
        if (selects.length != 0) {
			document.getElementById('modalText').innerHTML = selects[selects.length - 1] + " has been removed from the blank wordlist."
			modal1.style.display = "block";
			$('#myModal1').delay(2000).fadeOut('slow');
			setTimeout(function(){modal1.style.display = "none";}, 2500);
            var str = document.getElementById("userInput").innerHTML;
            var data = str.replace("<span>" + selects[selects.length - 1] + "</span>", selects[selects.length - 1]);
            document.getElementById("userInput").innerHTML = data;
            selects.splice(index, 1);
            sel++;
        } else {
			document.getElementById('modalText').innerHTML = "There are no words in the blanks wordlist to remove."
			modal1.style.display = "block";
			$('#myModal1').delay(2000).fadeOut('slow');
			setTimeout(function(){modal1.style.display = "none";}, 2500);
            break;
        }
    };
    document.menu.selectedtext.value = selects;
}

function compareText() {
   if (document.getElementById('selectedText').value == "") {
		document.getElementById('modalText').innerHTML = "Please make at least one word blank in order to create this exercise"
		modal1.style.display = "block";
		$('#myModal1').delay(2000).fadeOut('slow');
		setTimeout(function(){modal1.style.display = "none";}, 2500);
    } else if (document.getElementById('exerciseTitle').value == "") {
		document.getElementById('modalText').innerHTML = "Please enter a title."
		modal1.style.display = "block";
		$('#myModal1').delay(2000).fadeOut('slow');
		setTimeout(function(){modal1.style.display = "none";}, 2500);
    } else {
        for (var i = 0; i <= selects.length; i++) {
            if (document.getElementById('userInput').innerHTML.match(selects[i]) == selects[i]) {
                if (document.getElementById("previewText").value == "") {
                    document.getElementById("previewText").value = document.getElementById("userInput").innerHTML;
                }
                var str = document.getElementById("previewText").value;
                var res = str.replace(selects[i], "<input type='text' style='width:" + selects[i].length + "em;' id='answerBox" + i + "'>");
                document.getElementById("previewText").value = res;
            } else {}
        }
    }
}

function previewExercise(form) {
	 if (document.getElementById('selectedText').value == "") {
		document.getElementById('modalText').innerHTML = "Please make at least one word blank in order to create this exercise"
		modal1.style.display = "block";
		$('#myModal1').delay(2000).fadeOut('slow');
		setTimeout(function(){modal1.style.display = "none";}, 2500);
    } else if (document.getElementById('exerciseTitle').value == "") {
		document.getElementById('modalText').innerHTML = "Please enter a title."
		modal1.style.display = "block";
		$('#myModal1').delay(2000).fadeOut('slow');
		setTimeout(function(){modal1.style.display = "none";}, 2500);
    } else {
    var previewWindow = window.open("", "")
    if (previewWindow != null) {
        previewWindow.document.open("text/html")
        previewWindow.document.write("</BASE>" + document.getElementById('exerciseSource').value)
        previewWindow.document.close()
    }
	}
}
/**
     * Uses array created to form the html code for the exercise to be produced
     *
     * @param {form} current form to write exercise from
     * @param {howMany} number of questions to produce
     * @param {online} whether the quiz generated should display login information for online use
     */
function writeExercise(form, howMany, online) {
    document.getElementById('exerciseSource').value = Return + "<html>" + Return + "<head><link rel='shortcut icon' href='https://belooga.000webhostapp.com/images/transparent_logo.png'/>" + Return + "<title>" +
        document.getElementById('exerciseTitle').value + "</title>" + Return + "<link href='https://fonts.googleapis.com/css?family=Roboto:100,300,700|Oswald:300,400,700' rel='stylesheet'/>" + Return +
        "<link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'/>" + Return +
        "<link type='text/css' rel='stylesheet' href='https://belooga.000webhostapp.com/css/common.css'/>" + Return +
        "<link type='text/css' rel='stylesheet' href='https://belooga.000webhostapp.com/css/blanks.css'/>" + Return +
        "<script type='text/javascript' src='https://belooga.000webhostapp.com/js/blank.js'></script></head>" + Return +
        "<script type='text/javascript' src='https://belooga.000webhostapp.com/jquery/jquery-3.1.1.min.js'></script>" + Return +
        "<script type='text/javascript' src='//cdn.auth0.com/w2/auth0-7.0.3.min.js'></script>" + Return +
        "<script type='text/javascript' src='https://belooga.000webhostapp.com/js/auth.js'></script>" + Return +
        "<div class='navbar'><table class='navContent'><tr><td><table class='navBarLeft'><tr><td id='logoNav'>" + Return +
        "<img src='https://belooga.000webhostapp.com/images/navLogo.png' /></td>" + Return +
        "<td id='appName'><input type='button' value='Belooga' class='navBarElement'/></td>" + Return +
        "<td id='createNav'><input type='button' value='Dashboard' class='navBarElementSmall' /></td></tr></table></td>" + Return +
        "<td><table class='navBarRight'><tr>" + Return
		if(online == true){ //If online is true then display login information
				document.getElementById('exerciseSource').value += "<td id='profilePicTD'> <img id='profilePic' src='https://belooga.000webhostapp.com/images/profile.png' /> </td>" + Return +
					"<td id='usernameTD'> <input type='button' value='k1502609' class='navBarElementNormal'/></td>" + Return
				}else{ //Else do not display profile picture or username
					document.getElementById('exerciseSource').value += "<td></td><td></td>" + Return
			}
		document.getElementById('exerciseSource').value += "</tr></table></td></tr></table></div>" + Return + "<div class='signOutButton'><table><tr><td class='iconFont' id='lock'>lock</td><td><input class='button' id='logOutButton' type='button' value='Sign Out'/></td></tr></table></div>" + Return + "<table class='blanksCreateTitleRow'><tr><td><table id='blanksCreateTitleRowLeft'><tr>" + Return +
        "<td><img id='blanksIconCreate' src='https://belooga.000webhostapp.com/images/gaps.jpg' /></td> <td id='blanksTitle'>" + document.getElementById('exerciseTitle').value + "</td>" + Return +
        "</tr></table><br></tr></table>" + Return + "<table class='blanksPractice'><tr><td>" + Return +
        document.getElementById("previewText").value + Return + "</table></tr></td>" + Return +
        "<div style='display: none' contenteditable='true' id='correctData' >" + document.getElementById('userInput').innerHTML + "</div>"
    for (var i = 1; i <= howMany; i++) {
        document.getElementById('exerciseSource').value += "<input type='text' hidden id='select" + i + "' value='" + selects[i - 1] + "'>" + Return
    }
    document.getElementById('exerciseSource').value += "<br><table class='saveAndQuitButtons'><tr><td style='width: 800px'></td></td><td class='saveAndQuit effectButton'><input type='button' class='button' value='Submit' id='submitBtn' onClick='Submit(" + howMany + ");'/></td></tr></table><div class='contactBar'><table class='contactTable'><tr><td id='KCL'>King&#39s&nbspCollege&nbspLondon&nbspModern&nbspLanguage&nbspCentre</td><td><table><tr><td id='About'><input type='button' value='About' class='navBarElementNormal'/></td>" + Return +
        "<td id='Contact'><input type='button' value='Contact Us' class='navBarElementNormal'/></td></tr></table></td></tr></table></div></body><script type='text/javascript' src='https://belooga.000webhostapp.com/js/commonSignedIn.js'></script><script type='text/javascript' src='https://belooga.000webhostapp.com/js/commonLinks.js'></script></html></body>"
}
var windowtext;
function Submit(howMany) {
     windowtext = "<!DOCTYPE html><html><head><link rel='shortcut icon' href='https://belooga.000webhostapp.com/images/transparent_logo.png'/><title>Blanks - Result</title><link href='https://fonts.googleapis.com/css?family=Roboto:100,300,700|Oswald:300,400,700' rel='stylesheet'/>" + Return +
        "<link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'/><link type='text/css' rel='stylesheet' href='https://belooga.000webhostapp.com/css/blanks.css'/><link type='text/css' rel='stylesheet' href='https://belooga.000webhostapp.com/css/common.css'/>" + Return +
        "<script type='text/javascript' src='https://belooga.000webhostapp.com/js/blank.js'></script>" + Return +
        "<script type='text/javascript' src='https://belooga.000webhostapp.com/jquery/jquery-3.1.1.min.js'></script>" + Return +
        "<script type='text/javascript' src='//cdn.auth0.com/w2/auth0-7.0.3.min.js'></script>" + Return +
        "<script type='text/javascript' src='https://belooga.000webhostapp.com/js/auth.js'></script>" + Return +
        "<body onLoad = ''></head><body>" + Return +
        //Nav bar
        "<div class='navbar'><table class='navContent'><tr><td><table class='navBarLeft'><tr>" + Return +
        "<td id='logoNav'><img src='https://belooga.000webhostapp.com/images/navLogo.png' /></td><td id='appName'><input type='button' value='Belooga' class='navBarElement'/></td>" + Return +
        "<td id='createNav'><input type='button' value='Dashboard' class='navBarElementSmall' /></td>" + Return +
        "</tr></table></td><td><table class='navBarRight'><tr><td id='profilePicTD'> <img id='profilePic' src='https://belooga.000webhostapp.com/images/profile.png'/></td><td id='usernameTD'> <input type='button' value='k1502609' class='navBarElementNormal'/></td></tr></table></td></tr></table></div>" + Return + "<div class='signOutButton'><table><tr><td class='iconFont' id='lock'>lock</td><td><input class='button' id='logOutButton' type='button' value='Sign Out'/></td></tr></table></div>" + Return +
        "<table class='blanksCreateTitleRow'><tr><td><table id='blanksCreateTitleRowLeft'><tr>" + Return +

        "<td><img id='blanksIconCreate' src='https://belooga.000webhostapp.com/images/gaps.jpg' /></td><td id='blanksSubmitTitle'>" + document.getElementById('blanksTitle').innerHTML + "</td></tr></table></td></tr></table>" + Return +
        "<table class='blanksResultsTable'><tr id='header'><td id='questionResultTD' colspan='2'>Blank No.</td><td id='correctCol'>Correct Answer</td><td colspan='2' id='yourAnswerTD'>Your Answer</td></tr>" + Return
    var correctAns = 0;
    var totalAns = 0;
    var arrayCheck;
    var arrayStr;
    var inputCheck;
    var inputStr;
    for (var i = 1; i <= howMany; i++) {
        windowtext += "<tr class ='resultsTableRow'><td id='paddingTD'></td>" + Return +
            "<td id='questionResultNo'>" + i + "</td>" + Return +
            "<td id='correctAnswerCol" + i + "'>" + document.getElementById('select' + i).value + "</td>" + Return +
            "<td id='submittedAnswerCol" + i + "'>" + document.getElementById('answerBox' + (i - 1)).value + "</td>" + Return
        arrayCheck = document.getElementById('select' + i).value;
        arrayStr = arrayCheck.replace(/\s/g, '');
        inputCheck = document.getElementById('answerBox' + (i - 1)).value;
        inputStr = inputCheck.replace(/\s/g, '');
        if (arrayStr.toLowerCase() == inputStr.toLowerCase()) {
            windowtext += "<td id='resultCheck' class='iconFont correct'>check</td>" + Return
            correctAns++;
            totalAns++;
        } else {
            windowtext += "<td id='resultClear' class='iconFont wrong'>clear</td>" + Return
            totalAns++;
        }
        windowtext += "<td id='paddingTD'></td></tr><tr id='paddingRow'>" + Return
    }
    windowtext += "</tr></table><table class='blanksResultsTab'><tr><td id='rightAnswersTD' class='questionNumberCreate'>Right Answers:" + correctAns + " / " + totalAns + "</td><td class='questionNumberCreate'>Overall Score:" + ((correctAns / totalAns) * 100).toFixed(2) + " %</td></tr></table>" + Return + "<table class='correctText'><tr><td>Correct Answer</td></tr><tr><td><div>" + document.getElementById('correctData').innerHTML + "</div></td></tr></table>" + Return +
    //Contact bar
    "<div class='contactBar'><table class='contactTable'><tr><td id='KCL'>King&#39s&nbspCollege&nbspLondon&nbspModern&nbspLanguage&nbspCentre</td><td><table><tr><td id='About'><input type='button' value='About' class='navBarElementNormal'/>" + Return +
        "</td><td id='Contact'><input type='button' value='Contact Us' class='navBarElementNormal'/></td></tr></table></td></tr></table></div></body><script type='text/javascript' src='https://belooga.000webhostapp.com/js/commonSignedIn.js'></script><script type='text/javascript' src='https://belooga.000webhostapp.com/js/commonLinks.js'></script></html></body>" + Return
    /*swindow = window.open("", "Formatted Text", "width=1000,height=800,scrollbars=yes,resizable=1");
    swindow.document.write(windowtext);
    swindow.document.close();*/

    var swindow = window.open("", "")
    if (swindow != null) {
        swindow.document.open("text/html")
        swindow.document.write("</BASE>" + windowtext)
        swindow.document.close()
        window.opener = self;
        window.close();
    }
}

/*
 * Removes all formatting when text is pasted
 * into the textarea.
 */
var _onPaste_StripFormatting_IEPaste = false;

function OnPaste_StripFormatting(elem, e) {

    if (e.originalEvent && e.originalEvent.clipboardData && e.originalEvent.clipboardData.getData) {
        e.preventDefault();
        var text = e.originalEvent.clipboardData.getData('text/plain');
        window.document.execCommand('insertText', false, text);
    } else if (e.clipboardData && e.clipboardData.getData) {
        e.preventDefault();
        var text = e.clipboardData.getData('text/plain');
        window.document.execCommand('insertText', false, text);
    } else if (window.clipboardData && window.clipboardData.getData) {
        // Stop stack overflow
        if (!_onPaste_StripFormatting_IEPaste) {
            _onPaste_StripFormatting_IEPaste = true;
            e.preventDefault();
            window.document.execCommand('ms-pasteTextOnly', false);
        }
        _onPaste_StripFormatting_IEPaste = false;
    }

}
/**
 * Allows user to download html file for the quiz
 *
 */
function saveTextAsFileOnline() {
    var textToWrite = document.getElementById("exerciseSource").value;
    if (textToWrite == "") {} else {
        var textFileAsBlob = new Blob([textToWrite], {
            type: "html"
        });
        var fileNameToSaveAs = document.getElementById('exerciseTitle').value + "_blank.html";

        var downloadLink = document.createElement("a");
        downloadLink.download = fileNameToSaveAs;
        downloadLink.innerHTML = "Download File";
        if (window.webkitURL != null) {
            // Chrome allows the link to be clicked without actually adding it to the DOM.
            downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
        } else {
            // Firefox requires the link to be added to the DOM before it can be clicked.
            downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
            downloadLink.onclick = destroyClickedElement;
            downloadLink.style.display = "none";
            document.body.appendChild(downloadLink);
        }

        //downloadLink.click();
    }

    var kNumber = localStorage.getItem('kNumber');
    var html = $('#exerciseSource').val();
    var folder = localStorage.getItem('currentFolder');

    $.ajax({
        type: 'POST',
        url:  'createFile.php',
        data: {kNumber: kNumber, html: html, name: fileNameToSaveAs, folder: folder},
        success: function(res) {alert(res);}
    });
}

/**
 * Remove the link from the DOM
 *
 */
function destroyClickedElement(event) {
    document.body.removeChild(event.target);
}

/**
	* Allows user to download html file for the exercise (Local Area)
	*
	*/
	function saveTextAsFileOffline() {
    var textToWrite = document.getElementById("exerciseSource").value;
    if (textToWrite == "") {} else {
        var textFileAsBlob = new Blob([textToWrite], {
            type: "html"
        });
        var fileNameToSaveAs = document.getElementById('exerciseTitle').value + "_blank.html";

        var downloadLink = document.createElement("a");
        downloadLink.download = fileNameToSaveAs;
        downloadLink.innerHTML = "Download File";
        if (window.webkitURL != null) {
            // Chrome allows the link to be clicked without actually adding it to the DOM.
            downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
        } else {
            // Firefox requires the link to be added to the DOM before it can be clicked.
            downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
            downloadLink.onclick = destroyClickedElement;
            downloadLink.style.display = "none";
            document.body.appendChild(downloadLink);
        }

        downloadLink.click();
    }
}
