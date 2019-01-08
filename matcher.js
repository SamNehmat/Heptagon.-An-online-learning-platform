    var numberOfQuestions = 0 //number of questions added to the exercise
    var maxQuestions = 99 //max number of questions
    var Return = "\r" //For adding a new line
    var prev; //Previous Question
    var current = 1; //Current Question
    var next; //Next Question
    var correctAns = 0 //Number of correct answers
    var totalAns = 0 //Number of total answers
    var pairs = 4; // Number of pairs in use
    var questionArray = new createArray(maxQuestions)
    var leftAArray = new createArray(maxQuestions)
    var rightAArray = new createArray(maxQuestions)
    var leftBArray = new createArray(maxQuestions)
    var rightBArray = new createArray(maxQuestions)
    var leftCArray = new createArray(maxQuestions)
    var rightCArray = new createArray(maxQuestions)
    var leftDArray = new createArray(maxQuestions)
    var rightDArray = new createArray(maxQuestions)
    var leftEArray = new createArray(maxQuestions)
    var rightEArray = new createArray(maxQuestions)
    var leftFArray = new createArray(maxQuestions)
    var rightFArray = new createArray(maxQuestions)
    var leftGArray = new createArray(maxQuestions)
    var rightGArray = new createArray(maxQuestions)
    var leftHArray = new createArray(maxQuestions)
    var rightHArray = new createArray(maxQuestions)
    var leftIArray = new createArray(maxQuestions)
    var rightIArray = new createArray(maxQuestions)
    var leftJArray = new createArray(maxQuestions)
    var rightJArray = new createArray(maxQuestions)
	var modal1 = document.getElementById('myModal1');// Get the modal
	var btn1 = document.getElementById("myBtn1");// Get the button that opens the modal
	var span1 = document.getElementsByClassName("close1")[0];// Get the <span> element that closes the modal

	span1.onclick = function() {// When the user clicks on <span> (x), close the modal
    modal1.style.display = "none";
	}
	window.onclick = function(event) {// When the user clicks anywhere outside of the modal, close it
    if (event.target == modal1) {
        modal1.style.display = "none";
	}
	}

    /**
     * Function to create array
     *
     * @param {number} n desired length of array
     * @this {length of array}
     * @return {array}
     */
    function createArray(n) {
        length = n;
        for (var i = 1; i <= n; i++) {
            this[i] = ""
        }
        return this
    }

    /**
     * Previews the current exercise created in a new tab
     *
     * @param {form} form(exercise) to be previewed
     *
     */
    function previewExercise() {
        if (numberOfQuestions != 0) {
            var previewWindow = window.open("", "")
            if (previewWindow != null) {
                previewWindow.document.open("text/html")
                previewWindow.document.write("</BASE>" + document.getElementById('exerciseSource').value)
                previewWindow.document.close()
            }
        }
    }

    /**
     * Clears all text areas of the exercise
     *
     */
    function clearForm() {
		document.getElementById('question').value = "";
		document.getElementById('left1').value = "";
        document.getElementById('left2').value = "";
        document.getElementById('left3').value = "";
        document.getElementById('right1').value = "";
        document.getElementById('right2').value = "";
        document.getElementById('right3').value = "";
		document.getElementById('left4').value = "";
        document.getElementById('left5').value = "";
        document.getElementById('left6').value = "";
		document.getElementById('right4').value = "";
        document.getElementById('right5').value = "";
        document.getElementById('right6').value = "";
		document.getElementById('left7').value = "";
        document.getElementById('left8').value = "";
        document.getElementById('left9').value = "";
		document.getElementById('right7').value = "";
        document.getElementById('right8').value = "";
        document.getElementById('right9').value = "";
		document.getElementById('left10').value = "";
		document.getElementById('right10').value = "";
    }

    function addNewPair() {
        var div = document.getElementById('row' + pairs);
        if (pairs > 10) {
			document.getElementById('modalText').innerHTML = "You have reached the maximum number of pairs."
			modal1.style.display = "block";
			$('#myModal1').delay(2000).fadeOut('slow');
			setTimeout(function(){modal1.style.display = "none";}, 2500);
        } else {
            pairs++;
            div.style.display = 'table-row';
        }
    }

    function removePair() {
        pairs--;
        var div = document.getElementById('row' + pairs);
        if (pairs == 2) {
			document.getElementById('modalText').innerHTML = "This exercise requires at least two pairs."
			modal1.style.display = "block";
			$('#myModal1').delay(2000).fadeOut('slow');
			setTimeout(function(){modal1.style.display = "none";}, 2500);
            pairs++;
        } else {
            div.style.display = 'none';
        }
    }
    /**
     * Adds question from form into array
     *
     * @param {form} form to add questions from
     * @param {questionNumber} current question number to add to array
     *
     */
    function addQuestion(form, questionNumber) {
        if (document.getElementById('exerciseTitle').value == "") {
			document.getElementById('modalText').innerHTML = "Please enter a title."
			modal1.style.display = "block";
			$('#myModal1').delay(2000).fadeOut('slow');
			setTimeout(function(){modal1.style.display = "none";}, 2500);
        } else if (document.getElementById('question').value == "") {
			document.getElementById('modalText').innerHTML = "Please enter a question."
			modal1.style.display = "block";
			$('#myModal1').delay(2000).fadeOut('slow');
			setTimeout(function(){modal1.style.display = "none";}, 2500);
        } else if (document.getElementById('left1').value == "" || document.getElementById('right1').value == "" || document.getElementById('left2').value == "" || document.getElementById('right2').value == "") {
			document.getElementById('modalText').innerHTML = "Please fill in at least two pairs."
			modal1.style.display = "block";
			$('#myModal1').delay(2000).fadeOut('slow');
			setTimeout(function(){modal1.style.display = "none";}, 2500);
        } else {
            questionArray[questionNumber] = document.getElementById('question').value;
            leftAArray[questionNumber] = document.getElementById('left1').value;
            rightAArray[questionNumber] = document.getElementById('right1').value;
            leftBArray[questionNumber] = document.getElementById('left2').value;
            rightBArray[questionNumber] = document.getElementById('right2').value;
            leftCArray[questionNumber] = document.getElementById('left3').value;
            rightCArray[questionNumber] = document.getElementById('right3').value;
            leftDArray[questionNumber] = document.getElementById('left4').value;
            rightDArray[questionNumber] = document.getElementById('right4').value;
            leftEArray[questionNumber] = document.getElementById('left5').value;
            rightEArray[questionNumber] = document.getElementById('right5').value;
            leftFArray[questionNumber] = document.getElementById('left6').value;
            rightFArray[questionNumber] = document.getElementById('right6').value;
            leftGArray[questionNumber] = document.getElementById('left7').value;
            rightGArray[questionNumber] = document.getElementById('right7').value;
            leftHArray[questionNumber] = document.getElementById('left8').value;
            rightHArray[questionNumber] = document.getElementById('right8').value;
            leftIArray[questionNumber] = document.getElementById('left9').value;
            rightIArray[questionNumber] = document.getElementById('right9').value;
            leftJArray[questionNumber] = document.getElementById('left10').value;
            rightJArray[questionNumber] = document.getElementById('right10').value;
            current += 1;
			document.getElementById('modalText').innerHTML = "Question number " + questionNumber + " added to matcher."
			modal1.style.display = "block";
			$('#myModal1').delay(2000).fadeOut('slow');
			setTimeout(function(){modal1.style.display = "none";}, 2500);
            numberOfQuestions++
            document.getElementById("questNo").value = numberOfQuestions + 1
            document.getElementById("matcherQuestionNumber").value = numberOfQuestions + 1
            document.getElementById('maxQuestNo').value = numberOfQuestions + 1
            next = (document.getElementById("questNo").value * 1 + 1)
            clearForm()
        }
    }
    /**
     * Obtains the previously added question and loads it into the form
     *
     */
    function prevQuestion() {
        prev = document.getElementById("questNo").value - 1
        if (prev == 0) {
			document.getElementById('modalText').innerHTML = "This is the first question."
			modal1.style.display = "block";
			$('#myModal1').delay(2000).fadeOut('slow');
			setTimeout(function(){modal1.style.display = "none";}, 2500);
        } else {
            document.getElementById("addQ").disabled = true;
            document.getElementById("clear").disabled = true;
            document.getElementById('question').value = questionArray[prev]
            document.getElementById('left1').value = leftAArray[prev]
            document.getElementById('left2').value = leftBArray[prev]
            document.getElementById('left3').value = leftCArray[prev]
            document.getElementById('right1').value = rightAArray[prev]
            document.getElementById('right2').value = rightBArray[prev]
            document.getElementById('right3').value = rightCArray[prev]
            document.getElementById('left4').value = leftDArray[prev]
            document.getElementById('left5').value = leftEArray[prev]
            document.getElementById('left6').value = leftFArray[prev]
            document.getElementById('right4').value = rightDArray[prev]
            document.getElementById('right5').value = rightEArray[prev]
            document.getElementById('right6').value = rightFArray[prev]
            document.getElementById('left7').value = leftGArray[prev]
            document.getElementById('left8').value = leftHArray[prev]
            document.getElementById('left9').value = leftIArray[prev]
            document.getElementById('right7').value = rightGArray[prev]
            document.getElementById('right8').value = rightHArray[prev]
            document.getElementById('right9').value = rightIArray[prev]
            document.getElementById('left10').value = leftJArray[prev]
            document.getElementById('right10').value = rightJArray[prev]
            document.getElementById("questNo").value = prev
            document.getElementById("matcherQuestionNumber").value = prev
            next = (prev * 1 + 1)
        }
    }
    /**
     * Obtains the next question and loads it into the form
     *
     */
    function nextQuestion() {
        next = (document.getElementById("questNo").value * 1 + 1)
        if (next > current) {
			document.getElementById('modalText').innerHTML = "There are no more questions."
			modal1.style.display = "block";
			$('#myModal1').delay(2000).fadeOut('slow');
			setTimeout(function(){modal1.style.display = "none";}, 2500);
            next = (document.getElementById("questNo").value * 1 - 1)
        } else {
            if (next == current) {
                document.getElementById("addQ").disabled = false;
                document.getElementById("clear").disabled = false;
            }
            next = (document.getElementById("questNo").value * 1 + 1)
            document.getElementById('question').value = questionArray[next]
            document.getElementById('left1').value = leftAArray[next]
            document.getElementById('left2').value = leftBArray[next]
            document.getElementById('left3').value = leftCArray[next]
            document.getElementById('right1').value = rightAArray[next]
            document.getElementById('right2').value = rightBArray[next]
            document.getElementById('right3').value = rightCArray[next]
            document.getElementById('left4').value = leftDArray[next]
            document.getElementById('left5').value = leftEArray[next]
            document.getElementById('left6').value = leftFArray[next]
            document.getElementById('right4').value = rightDArray[next]
            document.getElementById('right5').value = rightEArray[next]
            document.getElementById('right6').value = rightFArray[next]
            document.getElementById('left7').value = leftGArray[next]
            document.getElementById('left8').value = leftHArray[next]
            document.getElementById('left9').value = leftIArray[next]
            document.getElementById('right7').value = rightGArray[next]
            document.getElementById('right8').value = rightHArray[next]
            document.getElementById('right9').value = rightIArray[next]
            document.getElementById('left10').value = leftJArray[next]
            document.getElementById('right10').value = rightJArray[next]
            document.getElementById("questNo").value = next
            document.getElementById("matcherQuestionNumber").value = next
        }
    }

    /**
     * button function to display a currently hidden element
     * @param {pageID} pageID desired questions to display
     */
    function displayPage(pageID) {
        if (document.getElementById('createPage' + pageID) !== null) {
            if (document.getElementById('createPage' + (pageID - 1)) !== null) {
                var cur = document.getElementById('createPage' + (pageID - 1));
                cur.style.display = 'none';
            }
            if (document.getElementById('createPage' + (pageID + 1)) !== null) {
                var cur = document.getElementById('createPage' + (pageID + 1));
                cur.style.display = 'none';
            }
            var div = document.getElementById('createPage' + pageID);
            div.style.display = 'block';

        }
    }
    /**
     * button function to hide the submit button
     */
    function hideSubmit(howMany) {
        if (howMany == 1) {} else {
            for (i = 1; i <= maxQuestions; i++) {
                var div = document.getElementById('submitBtn' + i);
                div.style.display = 'none';
                var div = document.getElementById('previousQuestion1');
                div.style.display = 'none';
            }
        }
    }
    /**
     * button function to display the submit button
     * @param {i, howMany} i current question number
     * howMany the number of questions in total.
     */
    function checkSubmit(i, howMany) {
        if (howMany == 1) {
            div2 = document.getElementById('nextQuestion' + (i));
            div2.style.display = 'none';
            div3 = document.getElementById('previousQuestion' + (i));
            div3.style.display = 'none';
            div = document.getElementById('submitBtn' + i);
            div.style.display = 'block';
        } else if (i + 1 == howMany) {
            div = document.getElementById('submitBtn' + (i + 1));
            div.style.display = 'block';
            div2 = document.getElementById('nextQuestion' + (i + 1));
            div2.style.display = 'none';
        }
        if (i == 1) {
            div2 = document.getElementById('previousQuestion' + i);
            div2.style.display = 'none';
        }
    }

    function removeEmpty(selectOption) {
        var drdown = document.getElementById(selectOption);
        for (var i = 0; i <= 9; i++) {
            if (drdown.options[i].text == "") {
                var oOption = drdown.options[i];
                drdown.removeChild(oOption);
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
        if (current == "1") {
			document.getElementById('modalText').innerHTML = "Please add at least one question in order to create this exercise."
			modal1.style.display = "block";
			$('#myModal1').delay(2000).fadeOut('slow');
			setTimeout(function(){modal1.style.display = "none";}, 2500);
        } else {
            document.getElementById('exerciseSource').value = "<html><head><link rel='shortcut icon' href='https://belooga.000webhostapp.com/images/transparent_logo.png'/><title id='exerciseTitle'>" + document.getElementById('exerciseTitle').value + "</title>" + Return +
                "<link href='https://fonts.googleapis.com/css?family=Roboto:100,300,700|Oswald:300,400,700' rel='stylesheet'/>" + Return +
                "<link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'/>" + Return +
                "<body onload='{displayPage(1);hideSubmit(" + howMany + ");checkSubmit(1," + howMany + ");}'>" + Return +
                "<script type='text/javascript' src='https://belooga.000webhostapp.com/js/matcher.js'></script>" + Return +
                "<link type='text/css' rel='stylesheet' href='https://belooga.000webhostapp.com/css/matcher.css'/>" + Return +
                "<link type='text/css' rel='stylesheet' href='https://belooga.000webhostapp.com/css/common.css'/>" + Return +
                "<script type='text/javascript' src='https://belooga.000webhostapp.com/jquery/jquery-3.1.1.min.js'></script>" + Return +
                "<script type='text/javascript' src='//cdn.auth0.com/w2/auth0-7.0.3.min.js'></script>" + Return +
                "<script type='text/javascript' src='https://belooga.000webhostapp.com/js/auth.js'></script>" + Return +
                "</head>" + Return +
                "<body>" + Return +
                "<div class='navbar'> <table class='navContent'> <tr> <td> <table class='navBarLeft'> <tr> <td id='logoNav'> <img src='https://belooga.000webhostapp.com/images/navLogo.png'/> </td>" + Return +
                "<td id='appName'> <input type='button' value='Belooga' class='navBarElement'/></td>" + Return
				if(online == true){ //If online is true then display login information
				document.getElementById('exerciseSource').value += "<td id='createNav'><input type='button' value='Dashboard' class='navBarElementSmall' /></td> </tr> </table>" + Return +
                "</td> <td> <table class='navBarRight'> <tr>" + Return +
				"<td id='profilePicTD'> <img id='profilePic' src='https://belooga.000webhostapp.com/images/profile.png' /> </td>" + Return +
                "<td id='usernameTD'> <input type='button' value='k1502609' class='navBarElementNormal'/></td>" + Return
				}else{ //Else do not display profile picture or username
					document.getElementById('exerciseSource').value += "<td id='createNav'></td> </tr> </table>" + Return +
					"</td> <td> <table class='navBarRight'> <tr>" + Return +
					"<td></td><td></td>" + Return
				}
				document.getElementById('exerciseSource').value += "</tr></table></td></tr></table></div>" + Return + "<div class='signOutButton'><table><tr><td class='iconFont' id='lock'>lock</td><td><input class='button' id='logOutButton' type='button' value='Sign Out'/></td></tr></table></div>" + Return +
                "<table class='matcherCreateTitleRow'><tr><td><table id='matcherCreateTitleRowLeft'><tr>" + Return + "<td><img id='matcherIconCreate' src='https://belooga.000webhostapp.com/images/matcher.jpg' /></td> <td id='matcherTitle'>" + document.getElementById('exerciseTitle').value + "</td>" + Return +
                "</tr></table><br></tr></table>" + Return
            for (var i = 1; i <= howMany; i++) {
                document.getElementById('exerciseSource').value += "<div id=createPage" + i + " class='MatcherCreatePage1'><table class='matcherAnswerQuestion'>" + Return +
                    "<tr><td class='questionNumberCreate'>Question</td> <td id='questionNumberAnswer'><input type=text size=1 name='questNo' value=" + i + " readonly>/&nbsp&nbsp <input type=text size=1 name='maxQuestNo' value=" + howMany + " readonly></td></tr>" + Return +
                    "<form>" + Return + "<ol>" + Return +
                    "<tr><td colspan='2' class='questionToAnswer'>" + questionArray[i] + "</td></tr></table>" + Return +
                    "<table class='matcherAnswers'>" + Return +
                    "<tr><td class='answerEmptyTD'></td><th>Left</th><th>Right</th></tr>"

                if (leftAArray[i] != "") {
                    document.getElementById('exerciseSource').value += "<tr><td class='answerEmptyTD'>1. </td><td>" + leftAArray[i] + "</td><td>" + Return +
                        "<select class='selectOptions' id='Aselect" + i + "'>" + Return +
                        "<option selected='true' disabled='disabled'>Select</option>" + Return +
                        "<option id='rightCArray" + i + "' value='rightCArray'>" + rightCArray[i] + "</option>" + Return +
                        "<option id='rightBArray" + i + "' value='rightBArray'>" + rightBArray[i] + "</option>" + Return +
                        "<option id='rightGArray" + i + "' value='rightGArray'>" + rightGArray[i] + "</option>" + Return +
                        "<option id='rightDArray" + i + "' value='rightDArray'>" + rightDArray[i] + "</option>" + Return +
                        "<option id='rightAArray" + i + "' value='rightAArray'>" + rightAArray[i] + "</option>" + Return +
                        "<option id='rightHArray" + i + "' value='rightHArray'>" + rightHArray[i] + "</option>" + Return +
                        "<option id='rightEArray" + i + "' value='rightEArray'>" + rightEArray[i] + "</option>" + Return +
                        "<option id='rightIArray" + i + "' value='rightIArray'>" + rightIArray[i] + "</option>" + Return +
                        "<option id='rightFArray" + i + "' value='rightFArray'>" + rightFArray[i] + "</option>" + Return +
                        "<option id='rightJArray" + i + "' value='rightJArray'>" + rightJArray[i] + "</option></select></td>" + Return
                }
                if (leftBArray[i] != "") {
                    document.getElementById('exerciseSource').value += "<tr><td class='answerEmptyTD'>2. </td><td>" + leftBArray[i] + "</td><td>" + Return +
                        "<select class='selectOptions' id='Bselect" + i + "'>" + Return +
                        "<option selected='true' disabled='disabled'>Select</option>" + Return +
                        "<option id='rightCArray" + i + "' value='rightCArray'>" + rightCArray[i] + "</option>" + Return +
                        "<option id='rightBArray" + i + "' value='rightBArray'>" + rightBArray[i] + "</option>" + Return +
                        "<option id='rightGArray" + i + "' value='rightGArray'>" + rightGArray[i] + "</option>" + Return +
                        "<option id='rightDArray" + i + "' value='rightDArray'>" + rightDArray[i] + "</option>" + Return +
                        "<option id='rightAArray" + i + "' value='rightAArray'>" + rightAArray[i] + "</option>" + Return +
                        "<option id='rightHArray" + i + "' value='rightHArray'>" + rightHArray[i] + "</option>" + Return +
                        "<option id='rightEArray" + i + "' value='rightEArray'>" + rightEArray[i] + "</option>" + Return +
                        "<option id='rightIArray" + i + "' value='rightIArray'>" + rightIArray[i] + "</option>" + Return +
                        "<option id='rightFArray" + i + "' value='rightFArray'>" + rightFArray[i] + "</option>" + Return +
                        "<option id='rightJArray" + i + "' value='rightJArray'>" + rightJArray[i] + "</option></select></td>" + Return
                }
                if (leftCArray[i] != "") {
                    document.getElementById('exerciseSource').value += "<tr><td class='answerEmptyTD'>3. </td><td>" + leftCArray[i] + "</td><td>" + Return +
                        "<select class='selectOptions' id='Cselect" + i + "'>" + Return +
                        "<option selected='true' disabled='disabled'>Select</option>" + Return +
                        "<option id='rightCArray" + i + "' value='rightCArray'>" + rightCArray[i] + "</option>" + Return +
                        "<option id='rightBArray" + i + "' value='rightBArray'>" + rightBArray[i] + "</option>" + Return +
                        "<option id='rightGArray" + i + "' value='rightGArray'>" + rightGArray[i] + "</option>" + Return +
                        "<option id='rightDArray" + i + "' value='rightDArray'>" + rightDArray[i] + "</option>" + Return +
                        "<option id='rightAArray" + i + "' value='rightAArray'>" + rightAArray[i] + "</option>" + Return +
                        "<option id='rightHArray" + i + "' value='rightHArray'>" + rightHArray[i] + "</option>" + Return +
                        "<option id='rightEArray" + i + "' value='rightEArray'>" + rightEArray[i] + "</option>" + Return +
                        "<option id='rightIArray" + i + "' value='rightIArray'>" + rightIArray[i] + "</option>" + Return +
                        "<option id='rightFArray" + i + "' value='rightFArray'>" + rightFArray[i] + "</option>" + Return +
                        "<option id='rightJArray" + i + "' value='rightJArray'>" + rightJArray[i] + "</option></select></td>" + Return
                }
                if (leftDArray[i] != "") {
                    document.getElementById('exerciseSource').value += "<tr><td class='answerEmptyTD'>4. </td><td>" + leftDArray[i] + "</td><td>" + Return +
                        "<select class='selectOptions' id='Dselect" + i + "'>" + Return +
                        "<option selected='true' disabled='disabled'>Select</option>" + Return +
                        "<option id='rightCArray" + i + "' value='rightCArray'>" + rightCArray[i] + "</option>" + Return +
                        "<option id='rightBArray" + i + "' value='rightBArray'>" + rightBArray[i] + "</option>" + Return +
                        "<option id='rightGArray" + i + "' value='rightGArray'>" + rightGArray[i] + "</option>" + Return +
                        "<option id='rightDArray" + i + "' value='rightDArray'>" + rightDArray[i] + "</option>" + Return +
                        "<option id='rightAArray" + i + "' value='rightAArray'>" + rightAArray[i] + "</option>" + Return +
                        "<option id='rightHArray" + i + "' value='rightHArray'>" + rightHArray[i] + "</option>" + Return +
                        "<option id='rightEArray" + i + "' value='rightEArray'>" + rightEArray[i] + "</option>" + Return +
                        "<option id='rightIArray" + i + "' value='rightIArray'>" + rightIArray[i] + "</option>" + Return +
                        "<option id='rightFArray" + i + "' value='rightFArray'>" + rightFArray[i] + "</option>" + Return +
                        "<option id='rightJArray" + i + "' value='rightJArray'>" + rightJArray[i] + "</option></select></td>" + Return
                }
                if (leftEArray[i] != "") {
                    document.getElementById('exerciseSource').value += "<tr><td class='answerEmptyTD'>5. </td><td>" + leftEArray[i] + "</td><td>" + Return +
                        "<select class='selectOptions' id='Eselect" + i + "'>" + Return +
                        "<option selected='true' disabled='disabled'>Select</option>" + Return +
                        "<option id='rightCArray" + i + "' value='rightCArray'>" + rightCArray[i] + "</option>" + Return +
                        "<option id='rightBArray" + i + "' value='rightBArray'>" + rightBArray[i] + "</option>" + Return +
                        "<option id='rightGArray" + i + "' value='rightGArray'>" + rightGArray[i] + "</option>" + Return +
                        "<option id='rightDArray" + i + "' value='rightDArray'>" + rightDArray[i] + "</option>" + Return +
                        "<option id='rightAArray" + i + "' value='rightAArray'>" + rightAArray[i] + "</option>" + Return +
                        "<option id='rightHArray" + i + "' value='rightHArray'>" + rightHArray[i] + "</option>" + Return +
                        "<option id='rightEArray" + i + "' value='rightEArray'>" + rightEArray[i] + "</option>" + Return +
                        "<option id='rightIArray" + i + "' value='rightIArray'>" + rightIArray[i] + "</option>" + Return +
                        "<option id='rightFArray" + i + "' value='rightFArray'>" + rightFArray[i] + "</option>" + Return +
                        "<option id='rightJArray" + i + "' value='rightJArray'>" + rightJArray[i] + "</option></select></td>" + Return
                }
                if (leftFArray[i] != "") {
                    document.getElementById('exerciseSource').value += "<tr><td class='answerEmptyTD'>6. </td><td>" + leftFArray[i] + "</td><td>" + Return +
                        "<select class='selectOptions' id='Fselect" + i + "'>" + Return +
                        "<option selected='true' disabled='disabled'>Select</option>" + Return +
                        "<option id='rightCArray" + i + "' value='rightCArray'>" + rightCArray[i] + "</option>" + Return +
                        "<option id='rightBArray" + i + "' value='rightBArray'>" + rightBArray[i] + "</option>" + Return +
                        "<option id='rightGArray" + i + "' value='rightGArray'>" + rightGArray[i] + "</option>" + Return +
                        "<option id='rightDArray" + i + "' value='rightDArray'>" + rightDArray[i] + "</option>" + Return +
                        "<option id='rightAArray" + i + "' value='rightAArray'>" + rightAArray[i] + "</option>" + Return +
                        "<option id='rightHArray" + i + "' value='rightHArray'>" + rightHArray[i] + "</option>" + Return +
                        "<option id='rightEArray" + i + "' value='rightEArray'>" + rightEArray[i] + "</option>" + Return +
                        "<option id='rightIArray" + i + "' value='rightIArray'>" + rightIArray[i] + "</option>" + Return +
                        "<option id='rightFArray" + i + "' value='rightFArray'>" + rightFArray[i] + "</option>" + Return +
                        "<option id='rightJArray" + i + "' value='rightJArray'>" + rightJArray[i] + "</option></select></td>" + Return
                }
                if (leftGArray[i] != "") {
                    document.getElementById('exerciseSource').value += "<tr><td class='answerEmptyTD'>7. </td><td>" + leftGArray[i] + "</td><td>" + Return +
                        "<select class='selectOptions' id='Gselect" + i + "'>" + Return +
                        "<option selected='true' disabled='disabled'>Select</option>" + Return +
                        "<option id='rightCArray" + i + "' value='rightCArray'>" + rightCArray[i] + "</option>" + Return +
                        "<option id='rightBArray" + i + "' value='rightBArray'>" + rightBArray[i] + "</option>" + Return +
                        "<option id='rightGArray" + i + "' value='rightGArray'>" + rightGArray[i] + "</option>" + Return +
                        "<option id='rightDArray" + i + "' value='rightDArray'>" + rightDArray[i] + "</option>" + Return +
                        "<option id='rightAArray" + i + "' value='rightAArray'>" + rightAArray[i] + "</option>" + Return +
                        "<option id='rightHArray" + i + "' value='rightHArray'>" + rightHArray[i] + "</option>" + Return +
                        "<option id='rightEArray" + i + "' value='rightEArray'>" + rightEArray[i] + "</option>" + Return +
                        "<option id='rightIArray" + i + "' value='rightIArray'>" + rightIArray[i] + "</option>" + Return +
                        "<option id='rightFArray" + i + "' value='rightFArray'>" + rightFArray[i] + "</option>" + Return +
                        "<option id='rightJArray" + i + "' value='rightJArray'>" + rightJArray[i] + "</option></select></td>" + Return
                }
                if (leftHArray[i] != "") {
                    document.getElementById('exerciseSource').value += "<tr><td class='answerEmptyTD'>8. </td><td>" + leftHArray[i] + "</td><td>" + Return +
                        "<select class='selectOptions' id='Hselect" + i + "'>" + Return +
                        "<option selected='true' disabled='disabled'>Select</option>" + Return +
                        "<option id='rightCArray" + i + "' value='rightCArray'>" + rightCArray[i] + "</option>" + Return +
                        "<option id='rightBArray" + i + "' value='rightBArray'>" + rightBArray[i] + "</option>" + Return +
                        "<option id='rightGArray" + i + "' value='rightGArray'>" + rightGArray[i] + "</option>" + Return +
                        "<option id='rightDArray" + i + "' value='rightDArray'>" + rightDArray[i] + "</option>" + Return +
                        "<option id='rightAArray" + i + "' value='rightAArray'>" + rightAArray[i] + "</option>" + Return +
                        "<option id='rightHArray" + i + "' value='rightHArray'>" + rightHArray[i] + "</option>" + Return +
                        "<option id='rightEArray" + i + "' value='rightEArray'>" + rightEArray[i] + "</option>" + Return +
                        "<option id='rightIArray" + i + "' value='rightIArray'>" + rightIArray[i] + "</option>" + Return +
                        "<option id='rightFArray" + i + "' value='rightFArray'>" + rightFArray[i] + "</option>" + Return +
                        "<option id='rightJArray" + i + "' value='rightJArray'>" + rightJArray[i] + "</option></select></td>" + Return
                }
                if (leftIArray[i] != "") {
                    document.getElementById('exerciseSource').value += "<tr><td class='answerEmptyTD'>9. </td><td>" + leftIArray[i] + "</td><td>" + Return +
                        "<select class='selectOptions' id='Iselect" + i + "'>" + Return +
                        "<option selected='true' disabled='disabled'>Select</option>" + Return +
                        "<option id='rightCArray" + i + "' value='rightCArray'>" + rightCArray[i] + "</option>" + Return +
                        "<option id='rightBArray" + i + "' value='rightBArray'>" + rightBArray[i] + "</option>" + Return +
                        "<option id='rightGArray" + i + "' value='rightGArray'>" + rightGArray[i] + "</option>" + Return +
                        "<option id='rightDArray" + i + "' value='rightDArray'>" + rightDArray[i] + "</option>" + Return +
                        "<option id='rightAArray" + i + "' value='rightAArray'>" + rightAArray[i] + "</option>" + Return +
                        "<option id='rightHArray" + i + "' value='rightHArray'>" + rightHArray[i] + "</option>" + Return +
                        "<option id='rightEArray" + i + "' value='rightEArray'>" + rightEArray[i] + "</option>" + Return +
                        "<option id='rightIArray" + i + "' value='rightIArray'>" + rightIArray[i] + "</option>" + Return +
                        "<option id='rightFArray" + i + "' value='rightFArray'>" + rightFArray[i] + "</option>" + Return +
                        "<option id='rightJArray" + i + "' value='rightJArray'>" + rightJArray[i] + "</option></select></td>" + Return
                }
                if (leftJArray[i] != "") {
                    document.getElementById('exerciseSource').value += "<tr><td class='answerEmptyTD'>10. </td><td>" + leftJArray[i] + "</td><td>" + Return +
                        "<select class='selectOptions' id='Jselect" + i + "'>" + Return +
                        "<option selected='true' disabled='disabled'>Select</option>" + Return +
                        "<option id='rightCArray" + i + "' value='rightCArray'>" + rightCArray[i] + "</option>" + Return +
                        "<option id='rightBArray" + i + "' value='rightBArray'>" + rightBArray[i] + "</option>" + Return +
                        "<option id='rightGArray" + i + "' value='rightGArray'>" + rightGArray[i] + "</option>" + Return +
                        "<option id='rightDArray" + i + "' value='rightDArray'>" + rightDArray[i] + "</option>" + Return +
                        "<option id='rightAArray" + i + "' value='rightAArray'>" + rightAArray[i] + "</option>" + Return +
                        "<option id='rightHArray" + i + "' value='rightHArray'>" + rightHArray[i] + "</option>" + Return +
                        "<option id='rightEArray" + i + "' value='rightEArray'>" + rightEArray[i] + "</option>" + Return +
                        "<option id='rightIArray" + i + "' value='rightIArray'>" + rightIArray[i] + "</option>" + Return +
                        "<option id='rightFArray" + i + "' value='rightFArray'>" + rightFArray[i] + "</option>" + Return +
                        "<option id='rightJArray" + i + "' value='rightJArray'>" + rightJArray[i] + "</option></select></td>" + Return
                }
                document.getElementById('exerciseSource').value += "</table>" + Return +
                    "<table class='addNewMatcherPair'></table><table class='saveAndQuitButtons'><tr><td id='toTransparent'></td><td id='toTransparent'></td><td id='toTransparent'></td>" + Return + "<td class='saveAndQuit effectButton' id='previousQuestion" + i + "'><input type='button' class='button' id='pQuestion' value='Previous Question' onClick='displayPage(" + (i - 1) + ");hideSubmit(" + howMany + ");'></td>" + Return +
                    "<td class='saveAndQuit effectButton' id='nextQuestion" + i + "'><input type='button' id='nQuestion' class='button' value='Next Question' onClick='displayPage(" + (i + 1) + "); checkSubmit(" + i + "," + howMany + ");'></td>" + Return +
                    "<td class = 'saveAndQuit effectButton' id='submitBtn" + i + "'><input type='button' id='submitBtn' class='button' value='Submit' onclick='Submit(this.form, " + howMany + ");'/></td>" + Return +
                    "</tr></table></div>" + Return
            }
            document.getElementById('exerciseSource').value += "<div class='contactBar'><table class='contactTable'><tr><td id='KCL'>King&#39s&nbspCollege&nbspLondon&nbspModern&nbspLanguage&nbspCentre</td><td><table><tr>" + Return
			if(online == true){
				document.getElementById('exerciseSource').value += "<td id='About'><input type='button' value='About' class='navBarElementNormal'/></td>" + Return +
                "<td id='Contact'><input type='button' value='Contact Us' class='navBarElementNormal'/></td>" + Return
			} else {
				document.getElementById('exerciseSource').value += "<td></td><td></td>" + Return
			}
				document.getElementById('exerciseSource').value += "</tr></table></td></tr></table></div></body><script type='text/javascript' src='https://belooga.000webhostapp.com/js/commonLinks.js'></script><script type='text/javascript' src='https://belooga.000webhostapp.com/js/commonSignedIn.js'></script><script type='text/javascript'src='https://belooga.000webhostapp.com/js/commonLinks.js'></script></html>" + Return
        }


    }
    /**
     * Uses information selected in write exercise to provide result feedback
     *
     * @param {form} current form to write exercise from
     * @param {howMany} number of results to return
     *
     */
    function Submit(form, howMany) {

        var windowtext = "<!DOCTYPE html><html><head><link rel='shortcut icon' href='https://belooga.000webhostapp.com/images/transparent_logo.png'/><title>Matcher - Result</title><link href='https://fonts.googleapis.com/css?family=Roboto:100,300,700|Oswald:300,400,700' rel='stylesheet'/>" + Return +
            "<link href='https://fonts.googleapis.com/icon?family=Material+Icons'rel='stylesheet'/><link type='text/css' rel='stylesheet' href='https://belooga.000webhostapp.com/css/matcher.css'/><link type='text/css' rel='stylesheet' href='https://belooga.000webhostapp.com/css/common.css'/>" + Return +
            "<script type='text/javascript' src='https://belooga.000webhostapp.com/jquery/jquery-3.1.1.min.js'></script>" + Return +
            "<script type='text/javascript' src='//cdn.auth0.com/w2/auth0-7.0.3.min.js'></script>" + Return +
            "<script type='text/javascript' src='https://belooga.000webhostapp.com/js/auth.js'></script>" + Return +
            "<body onLoad = ''></head><body>" + Return +
            "<div class='navbar'><table class='navContent'><tr><td><table class='navBarLeft'><tr><td id='logoNav'><img src='https://belooga.000webhostapp.com/images/navLogo.png' /></td><td id='appName'><input type='button' value='Belooga' class='navBarElement'/></td>" + Return +
            "<td id='createNav'><input type='button' value='Dashboard' class='navBarElementSmall' /></td></tr></table></td>" + Return +
            "<td><table class='navBarRight'><tr><td id='profilePicTD'><img id='profilePic' src='https://belooga.000webhostapp.com/images/profile.png' /></td><td id='usernameTD'> <input type='button' value='k1502609' class='navBarElementNormal'/></td></tr></table></td></tr></table></div>" + Return + "<div class='signOutButton'><table><tr><td class='iconFont' id='lock'>lock</td><td><input class='button' id='logOutButton' type='button' value='Sign Out'/></td></tr></table></div>" + Return +

            "<table class='matcherCreateTitleRow'><tr><td><table id='matcherCreateTitleRowLeft'><tr><td><img id='matcherIconCreate' src='https://belooga.000webhostapp.com/images/matcher.jpg' /></td><td id='matcherTitle'>" + document.getElementById('exerciseTitle').innerHTML + "</td></tr></table></td></tr></table>" + Return +
            "<table class='matcherResultsTable'><tr id='header'>" + Return +
            "<td id='questionResultTD' colspan='2'>Question</td><td id='pairResultTD' >Pair No.</td><td>Correct Answer</td><td colspan='2'>Your Answer</td></tr>" + Return
        var selectedIndex1;
        var selectedValue;
        var correctAns = 0;
        var totalAns = 0;
        for (var i = 1; i <= howMany; i++) {
            selectedIndex1 = document.getElementById("Aselect" + i).selectedIndex;
            selectedValue = document.getElementById("Aselect" + i).options[selectedIndex1].innerHTML;
            windowtext += "<tr class ='resultsTableRow'><td id='paddingTD'></td><td id='questionResultNo'>" + i + "</td>" + Return
            windowtext += "<td id='pairResultNo'>1</td>" + Return
            windowtext += "<td id='correctAnswerCol'>" + document.getElementById('rightAArray' + i).innerHTML + "</td>" + Return
            windowtext += "<td id='submittedAnswerCol'>" + selectedValue + "</td>" + Return
            if (document.getElementById('rightAArray' + i).innerHTML == selectedValue) {
                windowtext += "<td id='resultCheck' class='iconFont correct'>check</td>";
                correctAns++;
                totalAns++;
            } else {
                windowtext += "<td id='resultCheck' class='iconFont wrong'>clear</td>";
                totalAns++;
            }
            windowtext += "<td id='paddingTD'></td></tr><tr id='paddingRow'></tr>" + Return

            selectedIndex1 = document.getElementById("Bselect" + i).selectedIndex;
            selectedValue = document.getElementById("Bselect" + i).options[selectedIndex1].innerHTML;
            windowtext += "<tr class ='resultsTableRow'><td id='paddingTD'></td><td id='questionResultNo'>" + i + "</td>" + Return
            windowtext += "<td id='pairResultNo'>2</td>" + Return
            windowtext += "<td id='correctAnswerCol'>" + document.getElementById('rightBArray' + i).innerHTML + "</td>" + Return
            windowtext += "<td id='submittedAnswerCol'>" + selectedValue + "</td>" + Return
            if (document.getElementById('rightBArray' + i).innerHTML == selectedValue) {
                windowtext += "<td id='resultCheck' class='iconFont correct'>check</td>"
                correctAns++;
                totalAns++;
            } else {
                windowtext += "<td id='resultCheck' class='iconFont wrong'>clear</td>";
                totalAns++;
            }
            windowtext += "<td id='paddingTD'></td></tr><tr id='paddingRow'></tr>" + Return

            if (selectedValue != "" && document.getElementById('rightCArray' + i).innerHTML != "") {
                selectedIndex1 = document.getElementById("Cselect" + i).selectedIndex;
                selectedValue = document.getElementById("Cselect" + i).options[selectedIndex1].innerHTML;
                windowtext += "<tr class ='resultsTableRow'><td id='paddingTD'></td><td id='questionResultNo'>" + i + "</td>" + Return
                windowtext += "<td id='pairResultNo'>3</td>" + Return
                windowtext += "<td id='correctAnswerCol'>" + document.getElementById('rightCArray' + i).innerHTML + "</td>" + Return
                windowtext += "<td id='submittedAnswerCol'>" + selectedValue + "</td>" + Return
                if (document.getElementById('rightCArray' + i).innerHTML == selectedValue) {
                    windowtext += "<td id='resultCheck' class='iconFont correct'>check</td>"
                    correctAns++;
                    totalAns++;
                } else {
                    windowtext += "<td id='resultCheck' class='iconFont wrong'>clear</td>";
                    totalAns++;
                }
                windowtext += "<td id='paddingTD'></td></tr><tr id='paddingRow'></tr>" + Return
            } else {}

            if (selectedValue != "" && document.getElementById('rightDArray' + i).innerHTML != "") {
                selectedIndex1 = document.getElementById("Dselect" + i).selectedIndex;
                selectedValue = document.getElementById("Dselect" + i).options[selectedIndex1].innerHTML;
                windowtext += "<tr class ='resultsTableRow'><td id='paddingTD'></td><td id='questionResultNo'>" + i + "</td>" + Return
                windowtext += "<td id='pairResultNo'>4</td>" + Return
                windowtext += "<td id='correctAnswerCol'>" + document.getElementById('rightDArray' + i).innerHTML + "</td>" + Return
                windowtext += "<td id='submittedAnswerCol'>" + selectedValue + "</td>" + Return
                if (document.getElementById('rightDArray' + i).innerHTML == selectedValue) {
                    windowtext += "<td id='resultCheck' class='iconFont correct'>check</td>"
                    correctAns++;
                    totalAns++;
                } else {
                    windowtext += "<td id='resultCheck' class='iconFont wrong'>clear</td>";
                    totalAns++;
                }
                windowtext += "<td id='paddingTD'></td></tr><tr id='paddingRow'></tr>" + Return
            } else {}

            if (selectedValue != "" && document.getElementById('rightEArray' + i).innerHTML != "") {
                selectedIndex1 = document.getElementById("Eselect" + i).selectedIndex;
                selectedValue = document.getElementById("Eselect" + i).options[selectedIndex1].innerHTML;
                windowtext += "<tr class ='resultsTableRow'><td id='paddingTD'></td><td id='questionResultNo'>" + i + "</td>" + Return
                windowtext += "<td id='pairResultNo'>5</td>" + Return
                windowtext += "<td id='correctAnswerCol'>" + document.getElementById('rightEArray' + i).innerHTML + "</td>" + Return
                windowtext += "<td id='submittedAnswerCol'>" + selectedValue + "</td>" + Return
                if (document.getElementById('rightEArray' + i).innerHTML == selectedValue) {
                    windowtext += "<td id='resultCheck' class='iconFont correct'>check</td>"
                    correctAns++;
                    totalAns++;
                } else {
                    windowtext += "<td id='resultCheck' class='iconFont wrong'>clear</td>";
                    totalAns++;
                }
                windowtext += "<td id='paddingTD'></td></tr><tr id='paddingRow'></tr>" + Return
            } else {}

            if (selectedValue != "" && document.getElementById('rightFArray' + i).innerHTML != "") {
                selectedIndex1 = document.getElementById("Fselect" + i).selectedIndex;
                selectedValue = document.getElementById("Fselect" + i).options[selectedIndex1].innerHTML;
                windowtext += "<tr class ='resultsTableRow'><td id='paddingTD'></td><td id='questionResultNo'>" + i + "</td>" + Return
                windowtext += "<td id='pairResultNo'>6</td>" + Return
                windowtext += "<td id='correctAnswerCol'>" + document.getElementById('rightFArray' + i).innerHTML + "</td>" + Return
                windowtext += "<td id='submittedAnswerCol'>" + selectedValue + "</td>" + Return
                if (document.getElementById('rightFArray' + i).innerHTML == selectedValue) {
                    windowtext += "<td id='resultCheck' class='iconFont correct'>check</td>"
                    correctAns++;
                    totalAns++;
                } else {
                    windowtext += "<td id='resultCheck' class='iconFont wrong'>clear</td>";
                    totalAns++;
                }
                windowtext += "<td id='paddingTD'></td></tr><tr id='paddingRow'></tr>" + Return
            } else {}

            if (selectedValue != "" && document.getElementById('rightGArray' + i).innerHTML != "") {
                selectedIndex1 = document.getElementById("Gselect" + i).selectedIndex;
                selectedValue = document.getElementById("Gselect" + i).options[selectedIndex1].innerHTML;
                windowtext += "<tr class ='resultsTableRow'><td id='paddingTD'></td><td id='questionResultNo'>" + i + "</td>" + Return
                windowtext += "<td id='pairResultNo'>7</td>" + Return
                windowtext += "<td id='correctAnswerCol'>" + document.getElementById('rightGArray' + i).innerHTML + "</td>" + Return
                windowtext += "<td id='submittedAnswerCol'>" + selectedValue + "</td>" + Return
                if (document.getElementById('rightGArray' + i).innerHTML == selectedValue) {
                    windowtext += "<td id='resultCheck' class='iconFont correct'>check</td>"
                    correctAns++;
                    totalAns++;
                } else {
                    windowtext += "<td id='resultCheck' class='iconFont wrong'>clear</td>";
                    totalAns++;
                }
                windowtext += "<td id='paddingTD'></td></tr><tr id='paddingRow'></tr>" + Return
            } else {}

            if (selectedValue != "" && document.getElementById('rightHArray' + i).innerHTML != "") {
                selectedIndex1 = document.getElementById("Hselect" + i).selectedIndex;
                selectedValue = document.getElementById("Hselect" + i).options[selectedIndex1].innerHTML;
                windowtext += "<tr class ='resultsTableRow'><td id='paddingTD'></td><td id='questionResultNo'>" + i + "</td>" + Return
                windowtext += "<td id='pairResultNo'>8</td>" + Return
                windowtext += "<td id='correctAnswerCol'>" + document.getElementById('rightHArray' + i).innerHTML + "</td>" + Return
                windowtext += "<td id='submittedAnswerCol'>" + selectedValue + "</td>" + Return
                if (document.getElementById('rightHArray' + i).innerHTML == selectedValue) {
                    windowtext += "<td id='resultCheck' class='iconFont correct'>check</td>"
                    correctAns++;
                    totalAns++;
                } else {
                    windowtext += "<td id='resultCheck' class='iconFont wrong'>clear</td>";
                    totalAns++;
                }
                windowtext += "<td id='paddingTD'></td></tr><tr id='paddingRow'></tr>" + Return
            } else {}

            if (selectedValue != "" && document.getElementById('rightIArray' + i).innerHTML != "") {
                selectedIndex1 = document.getElementById("Iselect" + i).selectedIndex;
                selectedValue = document.getElementById("Iselect" + i).options[selectedIndex1].innerHTML;
                windowtext += "<tr class ='resultsTableRow'><td id='paddingTD'></td><td id='questionResultNo'>" + i + "</td>" + Return
                windowtext += "<td id='pairResultNo'>9</td>" + Return
                windowtext += "<td id='correctAnswerCol'>" + document.getElementById('rightIArray' + i).innerHTML + "</td>" + Return
                windowtext += "<td id='submittedAnswerCol'>" + selectedValue + "</td>" + Return
                if (document.getElementById('rightIArray' + i).innerHTML == selectedValue) {
                    windowtext += "<td id='resultCheck' class='iconFont correct'>check</td>"
                    correctAns++;
                    totalAns++;
                } else {
                    windowtext += "<td id='resultCheck' class='iconFont wrong'>clear</td>";
                    totalAns++;
                }
                windowtext += "<td id='paddingTD'></td></tr><tr id='paddingRow'></tr>" + Return
            } else {}

            if (selectedValue != "" && document.getElementById('rightJArray' + i).innerHTML != "") {
                selectedIndex1 = document.getElementById("Jselect" + i).selectedIndex;
                selectedValue = document.getElementById("Jselect" + i).options[selectedIndex1].innerHTML;
                windowtext += "<tr class ='resultsTableRow'><td id='paddingTD'></td><td id='questionResultNo'>" + i + "</td>" + Return
                windowtext += "<td id='pairResultNo'>10</td>" + Return
                windowtext += "<td id='correctAnswerCol'>" + document.getElementById('rightJArray' + i).innerHTML + "</td>" + Return
                windowtext += "<td id='submittedAnswerCol'>" + selectedValue + "</td>" + Return
                if (document.getElementById('rightJArray' + i).innerHTML == selectedValue) {
                    windowtext += "<td id='resultCheck' class='iconFont correct'>check</td>"
                    correctAns++;
                    totalAns++;
                } else {
                    windowtext += "<td id='resultCheck' class='iconFont wrong'>clear</td>";
                    totalAns++;
                }
                windowtext += "<td id='paddingTD'></td></tr><tr id='paddingRow'></tr>" + Return
            } else {}

        }

        windowtext += "<table class='matcherResultsTab'><tr><td id='rightAnswersTD' class='questionNumberCreate'>Right Answers:" + correctAns + " / " + totalAns + "</td><td id='overallScoreTD' class='questionNumberCreate'>Overall Score:" + ((correctAns / totalAns) * 100).toFixed(2) + " %</td></tr></table>" + Return +
            "<div class='contactBar'><table class='contactTable'><tr><td id='KCL'>King&#39s&nbspCollege&nbspLondon&nbspModern&nbspLanguage&nbspCentre</td><td><table><tr>" + Return +
            "<td id='About'><input type='button' value='About' class='navBarElementNormal'/></td><td id='Contact'><input type='button' value='Contact Us' class='navBarElementNormal'/></td>" + Return +
            "</tr></table></td></tr></table></div></body><script type='text/javascript' src='https://belooga.000webhostapp.com/js/commonSignedIn.js'></script><script type='text/javascript' src='https://belooga.000webhostapp.com/js/commonLinks.js'></script></html>" + Return

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

    /**
     * Allows user to download html file for the quiz (On the server)
     *
     */
    function saveTextAsFileOnline() {
        var textToWrite = document.getElementById("exerciseSource").value;
        if (textToWrite == "") {} else {
            var textFileAsBlob = new Blob([textToWrite], {
                type: "html"
            });
            var fileNameToSaveAs = document.forms[0].ExerciseTitle.value + "_matcher.html";

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
        var fileNameToSaveAs = document.forms[0].ExerciseTitle.value + "_matcher.html";

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
