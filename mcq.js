var numberOfQuestions = 0 //number of questions added to quiz
    var maxQuestions = 99 //max number of questions
    var Return = "\r" //For adding a new line
    var prev; //Previous Question
    var current = 1; //Current Question
    var next; //Next Question
    var correctAns = 0 //Number of correct answers
    var totalAns = 0 //Number of total answers
	//Creating new arrays to store user inputs
    questionArray = new createArray(maxQuestions)
    feedbackArray = new createArray(maxQuestions)
    answerAArray = new createArray(maxQuestions)
    radioAArray = new createArray(maxQuestions)
    answerBArray = new createArray(maxQuestions)
    radioBArray = new createArray(maxQuestions)
    answerCArray = new createArray(maxQuestions)
    radioCArray = new createArray(maxQuestions)
    answerDArray = new createArray(maxQuestions)
    radioDArray = new createArray(maxQuestions)
    answerEArray = new createArray(maxQuestions)
    radioEArray = new createArray(maxQuestions)
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
     * Previews the current quiz created in a new unopened tab
     *
     * @param {form} form(quiz) to be previewed
     *
     */
    function previewQuiz(form) {
        if (current == "1") {} else {
            var previewWindow = window.open("", "")
            if (previewWindow != null) {
                previewWindow.document.open("text/html")
                previewWindow.document.write("</BASE>" + document.getElementById('quizFSource').value)
                previewWindow.document.close()
            }
        }
    }

	var modal1 = document.getElementById('myModal1');// Get the modal
	var btn1 = document.getElementById("myBtn1");// Get the button that opens the modal
	var span1 = document.getElementsByClassName("close1")[0];// Get the <span> element that closes the modal
	span1.onclick = function() {// When the user clicks on <span> (x), close the modal
    modal1.style.display = "none";//Sets the modal style display to close when the (x) button is clicked
	}
	window.onclick = function(event) {// When the user clicks anywhere outside of the modal, close it
    if (event.target == modal) {
        modal.style.display = "none";
    }
	}
	/* Displays a notification using a modal at the bottom of the screen.
	 *
	 * @param {string} The string that should be displayed in the notification
	 */
	function displayInfo(string){
		document.getElementById('modalText').innerHTML = string;
		modal1.style.display = "block"; //Sets the modal style to display (will slide in from the bottom of the screen)
		$('#myModal1').delay(2000).fadeOut('slow');//Waits two seconds then performs the fade out animation
		setTimeout(function(){modal1.style.display = "none";}, 2500);//Sets the modal style to 'none'
	}
  /**		
      * Clears all text areas of the quiz		
      *		
     */		
    function clearForm() {			
		document.getElementById("question").value = ""
        document.getElementById("answer1").value = ""
        document.getElementById("answer2").value = ""
        document.getElementById("answer3").value = ""
        document.getElementById("answer4").value = ""
        document.getElementById("answer5").value = ""
        document.getElementById("answera").checked = false
        document.getElementById("answerb").checked = false
        document.getElementById("answerc").checked = false
        document.getElementById("answerd").checked = false
        document.getElementById("answere").checked = false
        document.getElementById("feedbackInput").value = ""
    }
    /**
     * Adds question from form into array
     *
     * @param {form} form to add questions from
     * @param {questionNumber} current question number to add to array
     *
     */
    function addQuestion(form, questionNumber) {
        if (document.getElementById("exerciseTitle").value == "") { //Validation for if no exercise title has been entered
           displayInfo("Please enter a title");
        } else if (document.getElementById("question").value == "") { //Validation for if no question has been entered
			displayInfo("Please enter a question");
        } else if (document.getElementById("answer1").value == "" || document.getElementById("answer2").value == "") { //Validation to make sure that there are at least two options to choose from
			displayInfo("Please enter at least two options to choose from.");
        } else if (document.getElementById("answera").checked == false && document.getElementById("answerb").checked == false && document.getElementById("answerc").checked == false && document.getElementById("answerd").checked == false && document.getElementById("answere").checked == false) { //Validation to make sure that a correct answer has been selected.
			displayInfo("Please make sure a correct answer is selected.");
        } else {
			//Adds user inputs and pushes them to the array.
            questionArray[questionNumber] = document.getElementById("question").value
            answerAArray[questionNumber] = document.getElementById("answer1").value
            radioAArray[questionNumber] = document.getElementById("answera").checked
            answerBArray[questionNumber] = document.getElementById("answer2").value
            radioBArray[questionNumber] = document.getElementById("answerb").checked
            answerCArray[questionNumber] = document.getElementById("answer3").value
            radioCArray[questionNumber] = document.getElementById("answerc").checked
            answerDArray[questionNumber] = document.getElementById("answer4").value
            radioDArray[questionNumber] = document.getElementById("answerd").checked
            answerEArray[questionNumber] = document.getElementById("answer5").value
            radioEArray[questionNumber] = document.getElementById("answere").checked
            feedbackArray[questionNumber] = document.getElementById("feedbackInput").value
            current += 1; //Adds one to the current question value.
			displayInfo("Question number " + questionNumber + " added to Quiz");
            if (questionNumber > numberOfQuestions) { //Makes sure that the question number is not higher than the number of questions
                numberOfQuestions++
            }
            form.questNo.value = numberOfQuestions + 1 //Adds one to the question value on the page
            form.maxQuestNo.value = numberOfQuestions + 1//Adds one to the max question value on the page
            next = (document.getElementById("questNo").value * 1 + 1) //Changes where the next button points.
            clearForm(); //Clears the form.
        }
    }
    /**
     * Obtains the previously added question and loads it into the form
     * Uses the array to obtain previous values
     */
    function prevQuestion() {
        prev = document.getElementById("questNo").value - 1
        if (prev == 0) { //Validation incase the previous button is clicked on the first question
			displayInfo("This is the first question");
        } else {
			//Disables the add and clear buttons to prevent questions from being duplicated in the array
            document.getElementById("addQ").disabled = true;
            document.getElementById("clear").disabled = true;
            document.getElementById("question").value = questionArray[prev]
            document.getElementById("answer1").value = answerAArray[prev]
            document.getElementById("answer2").value = answerBArray[prev]
            document.getElementById("answer3").value = answerCArray[prev]
            document.getElementById("answer4").value = answerDArray[prev]
            document.getElementById("answer5").value = answerEArray[prev]
            document.getElementById("answera").checked = radioAArray[prev]
            document.getElementById("answerb").checked = radioBArray[prev]
            document.getElementById("answerc").checked = radioCArray[prev]
            document.getElementById("answerd*").checked = radioDArray[prev]
            document.getElementById("answere").checked = radioEArray[prev]
            document.getElementById("feedbackInput").value = feedbackArray[prev]
            document.getElementById("questNo").value = prev
            next = (prev * 1 + 1)
        }
    }
    /**
     * Obtains the next question and loads it into the form
     *
     */
    function nextQuestion() {
        next = (document.getElementById("questNo").value * 1 + 1)
        if (next > current) {//Validation incase the previous button is clicked on the latest question
			displayInfo("There are no more questions");
            next = (document.getElementById("questNo").value * 1 - 1)
        } else {
            if (next == current) {//Enables the add and clear buttons if the latest question is being displayed
                document.getElementById("addQ").disabled = false;
                document.getElementById("clear").disabled = false;
            }
			//Disables the add and clear buttons to prevent questions from being duplicated in the array
            next = (document.getElementById("questNo").value * 1 + 1)
            document.forms[0].question.value = questionArray[next]
            document.forms[0].answer1.value = answerAArray[next]
            document.forms[0].answer2.value = answerBArray[next]
            document.forms[0].answer3.value = answerCArray[next]
            document.forms[0].answer4.value = answerDArray[next]
            document.forms[0].answer5.value = answerEArray[next]
            document.forms[0].answera.checked = radioAArray[next]
            document.forms[0].answerb.checked = radioBArray[next]
            document.forms[0].answerc.checked = radioCArray[next]
            document.forms[0].answerd.checked = radioDArray[next]
            document.forms[0].answere.checked = radioEArray[next]
            document.forms[0].feedback.value = feedbackArray[next]
            document.getElementById("questNo").value = next
        }
    }
     /**
     * correct answer button onclick function
     * Adds to current and total score
     */
    function correctAnsFnc() {
        correctAns += 1;
        totalAns += 1;
    }

    /**
     * correct answer button onclick function
     * only increases total answers attempted.
     */
    function incorrectAnsFnc() {
        totalAns += 1;
    }

    /**
     * answer button onclick function
     * shows the green tick next to the correct answer
     */
    function showCheck(i) {
        var div;
		//Based on which radio button is selected, display the corresponding tick next to that button.
        if (document.getElementById('checkA' + i) !== null) {
            div = document.getElementById('checkA' + i);
        } else if (document.getElementById('checkB' + i) !== null) {
            div = document.getElementById('checkB' + i);
        } else if (document.getElementById('checkC' + i) !== null) {
            div = document.getElementById('checkC' + i);
        } else if (document.getElementById('checkD' + i) !== null) {
            div = document.getElementById('checkD' + i);
        } else if (document.getElementById('checkE' + i) !== null) {
            div = document.getElementById('checkE' + i);
        } else {}
        div.style.display = 'table'; //Display the tick in the table
    }

    /**
     * answer button onclick function
     * shows the red cross next to all incorrect answers
     */
    function showCross(i) {
		//Based on which radio buttons are not selected, display the corresponding cross next to those buttons.
        if (document.getElementById('crossA' + i) !== null) {
            var div = document.getElementById('crossA' + i);
            div.style.display = 'table';//Display the cross in the table
        }
        if (document.getElementById('crossB' + i) !== null) {
            var div2 = document.getElementById('crossB' + i);
            div2.style.display = 'table';//Display the cross in the table
        }
        if (document.getElementById('crossC' + i) !== null) {
            var div3 = document.getElementById('crossC' + i);
            div3.style.display = 'table';//Display the cross in the table
        }
        if (document.getElementById('crossD' + i) !== null) {
            var div4 = document.getElementById('crossD' + i);
            div4.style.display = 'table';//Display the cross in the table
        }
        if (document.getElementById('crossE' + i) !== null) {
            var div5 = document.getElementById('crossE' + i);
            div5.style.display = 'table';//Display the cross in the table
        }
    }
    /**
     * Onload function to hide all ticks on body load
     */
    function hideCheck() {
        var div;
		//For loop to go around all questions and hide all ticks
        for (i = 1; i <= 99; i++) {
            if (document.getElementById('checkA' + i) !== null) {
                div = document.getElementById('checkA' + i);
            } else if (document.getElementById('checkB' + i) !== null) {
                div = document.getElementById('checkB' + i);
            } else if (document.getElementById('checkC' + i) !== null) {
                div = document.getElementById('checkC' + i);
            } else if (document.getElementById('checkD' + i) !== null) {
                div = document.getElementById('checkD' + i);
            } else if (document.getElementById('checkE' + i) !== null) {
                div = document.getElementById('checkE' + i);
            } else {}
            div.style.display = 'none';//sets display to 'none'
        }
    }
    /**
     * Onload function to hide all crosses on body load
     */
    function hideCross() {
        var i = 1;
		//For loop to go around all questions and hide all ticks
        for (i = 1; i <= 99; i++) {
            if (document.getElementById('crossA' + i) !== null) {
                var div = document.getElementById('crossA' + i);
                div.style.display = 'none';//sets display to 'none'
            }
            if (document.getElementById('crossB' + i) !== null) {
                var div2 = document.getElementById('crossB' + i);
                div2.style.display = 'none';//sets display to 'none'
            }
            if (document.getElementById('crossC' + i) !== null) {
                var div3 = document.getElementById('crossC' + i);
                div3.style.display = 'none';//sets display to 'none'
            }
            if (document.getElementById('crossD' + i) !== null) {
                var div4 = document.getElementById('crossD' + i);
                div4.style.display = 'none';//sets display to 'none'
            }
            if (document.getElementById('crossE' + i) !== null) {
                var div5 = document.getElementById('crossE' + i);
                div5.style.display = 'none';//sets display to 'none'
            }
        }
    }
    /**
     * Onload function to hide feedback for each question
     */
    function hideFeedback() {
        var i = 1;
        for (i = 1; i <= maxQuestions; i++) {
            if (document.getElementById('feedback' + i) !== null) {
                var div = document.getElementById('feedback' + i);
                div.style.display = 'none';
            }
        }
    }
    /**
     * button function to show feedback for a specific question
     * @param {i} i desired feedback to display
     */
    function showFeedback(i) {
        if (document.getElementById('feedback' + i) !== null) {
            if (document.getElementById('showFeedback' + i).innerHTML != "") {
                var div = document.getElementById('feedback' + i);
                div.style.display = 'table';
            }
        }
    }
    /**
     * button function to disable all buttons on a specific question
     * @param {i} i desired question number buttons to disable
     */
    function disable(i) {
        document.getElementById('btnA' + i).disabled = true;
        document.getElementById('btnB' + i).disabled = true;
        document.getElementById('btnC' + i).disabled = true;
        document.getElementById('btnD' + i).disabled = true;
        document.getElementById('btnE' + i).disabled = true;
    }
    /**
     * button function to display a currently hidden question page
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
     * button function to hide the submit button for all questions
     */
    function hideSubmit(howMany) {
        if (howMany == 1) {} else {
            for (i = 1; i <= maxQuestions; i++) {
                var div = document.getElementById('submitBtn' + i);
                div.style.display = 'none';
				var div2 = document.getElementById('previousQuestion1');
                div2.style.display = 'none';
            }
        }
    }
    /**
     * button function to display the submit button
     * @param {i, howMany} i current question number
     * howMany the number of questions in total.
     */
    function checkSubmit(i, howMany) {
        if (howMany == 1) {//If there is only one question, hide the "nextQuestion/previousQuestion" buttons and display Submit button
            var div2 = document.getElementById('nextQuestion' + (i));
            div2.style.display = 'none';
			var div3 = document.getElementById('previousQuestion' + i);
            div3.style.display = 'none';
			var div = document.getElementById('submitBtn' + i);
            div.style.display = 'block';
        }else if (i + 1 == howMany) {//If user is on the last question, hide the  next question button and display the Submit button
            var div = document.getElementById('submitBtn' + (i + 1));
            div.style.display = 'block';
            var div2 = document.getElementById('nextQuestion' + (i + 1));
            div2.style.display = 'none';
        }
		if(i == 1){ //If user is on the first question, hide the previous question button
			var div2 = document.getElementById('previousQuestion' + i);
            div2.style.display = 'none';
		}
    }

    /**
     * Uses array created to form the html code for the quiz to be produced
     *
     * @param {form} current form to write quiz from
     * @param {howMany} number of questions to produce
     * @param {online} whether the quiz generated should display login information for online use
     */
    function writeQuiz(form, howMany, online) {
        if (current == "1") { //Validation for if there are no questions added to the array
			displayInfo("At least one question must be added to create the quiz");
        } else {
			//Write html and add links to hidden text area.
            document.getElementById('quizFSource').value = Return + "<html>" + Return + "<head><link rel='shortcut icon' href='https://belooga.000webhostapp.com/images/transparent_logo.png'/>" + Return + "<title id='MCQTitle'>" +
                document.getElementById('exerciseTitle').value + "</title>" + Return +
                "<link href='https://fonts.googleapis.com/css?family=Roboto:100,300,700|Oswald:300,400,700' rel='stylesheet'/>" + Return +
                "<link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'/>" + Return +
				"<link type='text/css' rel='stylesheet' href='https://belooga.000webhostapp.com/css/MCQ.css'/>" + Return + //HERE
                "<link type='text/css' rel='stylesheet' href='https://belooga.000webhostapp.com/css/common.css'/>" + Return + //HERE
                "<script type='text/javascript' src='https://belooga.000webhostapp.com/js/mcq.js'></script>" + Return + //HERE
                "<script type='text/javascript' src='https://belooga.000webhostapp.com/jquery/jquery-3.1.1.min.js'></script>" + Return +
                "<script type='text/javascript' src='//cdn.auth0.com/w2/auth0-7.0.3.min.js'></script>" + Return +
                "<script type='text/javascript' src='https://belooga.000webhostapp.com/js/auth.js'></script>" + Return +
                "</head>" + Return +
                "<body onload='{hideFeedback();hideCross();hideCheck();displayPage(1);hideSubmit(" + howMany + ");checkSubmit(1," + howMany + ");}'>" + Return +
                "<div class='navbar'> <table class='navContent'> <tr> <td> <table class='navBarLeft'> <tr> <td id='logoNav'> <img src='https://belooga.000webhostapp.com/images/navLogo.png'/> </td>" + Return +
                "<td id='appName'> <input type='button' value='Belooga' class='navBarElement'/></td>" + Return +
                "<td id='createNav'><input type='button' value='Dashboard' class='navBarElementSmall' /></td> </tr> </table>" + Return +
                "</td> <td> <table class='navBarRight'> <tr>" + Return
				if(online == true){
				document.getElementById('quizFSource').value += "<td id='profilePicTD'> <img id='profilePic' src='https://belooga.000webhostapp.com/images/profile.png' /> </td>" + Return +
                "<td id='usernameTD'> <input type='button' value='k1502609' class='navBarElementNormal'/></td>" + Return
				}else{
					document.getElementById('quizFSource').value += "<td></td><td></td>" + Return
				}
				document.getElementById('quizFSource').value += "</tr></table></td></tr></table></div>" + Return + 
				"<div class='signOutButton'><table><tr><td class='iconFont' id='lock'>lock</td><td><input class='button' id='logOutButton' type='button' value='Sign Out'/></td></tr></table></div>" + Return +
                "<table class='MCQCreateTitleRow'><tr><td><table id='MCQCreateTitleRowLeft'><tr>" + Return +
                "<td><img id='MCQIconCreate' src='https://belooga.000webhostapp.com/images/MCQ.jpg' /></td> <td id='MCQTitle'>" + document.forms[0].ExerciseTitle.value + "</td>" + Return +
                "</tr></table></td></tr></table>" + Return
            for (var i = 1; i <= howMany; i++) {//For loop to write html code for as many questions exist.
                document.getElementById('quizFSource').value += "<div id=createPage" + i + " class='MCQCreatePage1'><table class='MCQAnswerQuestion'>" + Return +
                    "<tr><td class='questionNumberCreate'>Question:</td> <td id='questionNumberAnswer'><input type=text size=1 name='questNo' value=" + i + " readonly>/&nbsp&nbsp <input type=text size=1 name='maxQuestNo' value=" + howMany + " readonly></td></tr>" + Return +
                    "<form>" + Return + "<ol>" + Return +
                    "<tr><td colspan='2' class='questionToAnswer'>" + questionArray[i] + "</td></tr></table>" + Return +
                    "<table class='MCQCreateAnswer'><tr><td colspan='2' id='createAnswer'>Answer:</td></tr>"
				//Hidden text areas to pass values through to submit page
                document.getElementById('quizFSource').value += "<textarea ID='radioA" + i + "' hidden>" + radioAArray[i] + "</textarea>"
                document.getElementById('quizFSource').value += "<textarea ID='radioB" + i + "' hidden>" + radioBArray[i] + "</textarea>"
                document.getElementById('quizFSource').value += "<textarea ID='radioC" + i + "' hidden>" + radioCArray[i] + "</textarea>"
                document.getElementById('quizFSource').value += "<textarea ID='radioD" + i + "' hidden>" + radioDArray[i] + "</textarea>"
                document.getElementById('quizFSource').value += "<textarea ID='radioE" + i + "' hidden>" + radioEArray[i] + "</textarea>"
                document.getElementById('quizFSource').value += "<textarea ID='answer" + i + "' hidden></textarea>"

                if (answerAArray[i] != "") {//If answer A array is not empty
                    document.getElementById('quizFSource').value += "<tr><td class='answerNo'>A.</td><td class='MCQAnswerStyle'>" + Return
                    if (radioAArray[i] == true) {//If answer A array is the correct answer
                        document.getElementById('quizFSource').value += "\t<input type='button' id='btnA" + i + "' class='MCQAnswerButton' name='answer1' value=\"" + answerAArray[i] + "\" onClick='document.getElementById(\"btnA" + i + "\").className+=\" selected\";document.getElementById(\"answer" + i + "\").value=\"A\";showFeedback(" + i + ");correctAnsFnc();showCheck(" + i + ");showCross(" + i + ");disable(" + i + ");'>" + Return +
                            "</td><td id='checkA" + i + "' class='iconFont correct'><img src='https://belooga.000webhostapp.com/images/check.jpg'></td></tr>" + Return
                    } else if (radioAArray[i] == false) {//If answer A array is not the correct answer
                        document.getElementById('quizFSource').value += "\t<input type='button' id='btnA" + i + "' class='MCQAnswerButton' name='answer1' value=\"" + answerAArray[i] + "\" onClick='document.getElementById(\"btnA" + i + "\").className+=\" selected\";document.getElementById(\"answer" + i + "\").value=\"A\";showFeedback(" + i + ");incorrectAnsFnc();showCheck(" + i + ");showCross(" + i + ");disable(" + i + ");'>" + Return +
                            "</td><td id='crossA" + i + "' class='iconFont wrong'><img src='https://belooga.000webhostapp.com/images/cross.jpg'></td></tr>" + Return
                    }
                }
                if (answerBArray[i] != "") {//If answer B array is not empty
                    document.getElementById('quizFSource').value += "<tr><td class='answerNo'>B.</td><td class='MCQAnswerStyle'>" + Return
                    if (radioBArray[i] == true) {//If answer B array is the correct answer
                        document.getElementById('quizFSource').value += "\t<input type='button' id='btnB" + i + "' class='MCQAnswerButton' name='answer2' value=\"" + answerBArray[i] + "\" onClick='document.getElementById(\"btnB" + i + "\").className+=\" selected\";document.getElementById(\"answer" + i + "\").value=\"B\";showFeedback(" + i + ");correctAnsFnc();showCheck(" + i + ");showCross(" + i + ");disable(" + i + ");'>" + Return +
                            "</td><td id='checkB" + i + "' class='iconFont correct'><img src='https://belooga.000webhostapp.com/images/check.jpg'></td></tr>" + Return
                    } else if (radioBArray[i] == false) {//If answer B array is not the correct answer
                        document.getElementById('quizFSource').value += "\t<input type='button' id='btnB" + i + "' class='MCQAnswerButton' name='answer2' value=\"" + answerBArray[i] + "\" onClick='document.getElementById(\"btnB" + i + "\").className+=\" selected\";document.getElementById(\"answer" + i + "\").value=\"B\";showFeedback(" + i + ");incorrectAnsFnc();showCheck(" + i + ");showCross(" + i + ");disable(" + i + ");'>" + Return +
                            "</td><td id='crossB" + i + "' class='iconFont wrong'><img src='https://belooga.000webhostapp.com/images/cross.jpg'></td></tr>" + Return
                    }
                }
                if (answerCArray[i] != "") {//If answer C array is not empty
                    document.getElementById('quizFSource').value += "<tr><td class='answerNo'>C.</td><td class='MCQAnswerStyle'>" + Return
                    if (radioCArray[i] == true) {//If answer C array is the correct answer
                        document.getElementById('quizFSource').value += "\t<input type='button'  id='btnC" + i + "' class='MCQAnswerButton' name='answer3' value=\"" + answerCArray[i] + "\" onClick='document.getElementById(\"btnC" + i + "\").className+=\" selected\";document.getElementById(\"answer" + i + "\").value=\"C\";showFeedback(" + i + ");correctAnsFnc();showCheck(" + i + ");showCross(" + i + ");disable(" + i + ");'>" + Return +
                            "</td><td id='checkC" + i + "' class='iconFont correct'><img src='https://belooga.000webhostapp.com/images/check.jpg'></td></tr>" + Return
                    } else if (radioCArray[i] == false) {//If answer C array is not the correct answer
                        document.getElementById('quizFSource').value += "\t<input type='button'  id='btnC" + i + "' class='MCQAnswerButton' name='answer3' value=\"" + answerCArray[i] + "\" onClick='document.getElementById(\"btnC" + i + "\").className+=\" selected\";document.getElementById(\"answer" + i + "\").value=\"C\";showFeedback(" + i + ");incorrectAnsFnc();showCheck(" + i + ");showCross(" + i + ");disable(" + i + ");'>" + Return +
                            "</td><td id='crossC" + i + "' class='iconFont wrong'><img src='https://belooga.000webhostapp.com/images/cross.jpg'></td></tr>" + Return
                    }
                }
                if (answerDArray[i] != "") {//If answer D array is not empty
                    document.getElementById('quizFSource').value += "<tr><td class='answerNo'>D.</td><td class='MCQAnswerStyle'>" + Return
                    if (radioDArray[i] == true) {//If answer D array is the correct answer
                        document.getElementById('quizFSource').value += "\t<input type='button'  id='btnD" + i + "' class='MCQAnswerButton' name='answer4' value=\"" + answerDArray[i] + "\" onClick='document.getElementById(\"btnD" + i + "\").className+=\" selected\";document.getElementById(\"answer" + i + "\").value=\"D\";showFeedback(" + i + ");correctAnsFnc();showCheck(" + i + ");showCross(" + i + ");disable(" + i + ");'>" + Return +
                            "</td><td id='checkD" + i + "' class='iconFont correct'><img src='https://belooga.000webhostapp.com/images/check.jpg'></td></tr>" + Return
                    } else if (radioDArray[i] == false) {//If answer D array is not the correct answer
                        document.getElementById('quizFSource').value += "\t<input type='button'  id='btnD" + i + "' class='MCQAnswerButton' name='answer4' value=\"" + answerDArray[i] + "\" onClick='document.getElementById(\"btnD" + i + "\").className+=\" selected\";document.getElementById(\"answer" + i + "\").value=\"D\";showFeedback(" + i + ");incorrectAnsFnc();showCheck(" + i + ");showCross(" + i + ");disable(" + i + ");'>" + Return +
                            "</td><td id='crossD" + i + "' class='iconFont wrong'><img src='https://belooga.000webhostapp.com/images/cross.jpg'></td></tr>" + Return
                    }
                }
                if (answerEArray[i] != "") {//If answer E array is not empty
                    document.getElementById('quizFSource').value += "<tr><td class='answerNo'>E.</td><td class='MCQAnswerStyle'>" + Return
                    if (radioEArray[i] == true) {//If answer E array is the correct answer
                        document.getElementById('quizFSource').value += "\t<input type='button'  id='btnE" + i + "' class='MCQAnswerButton' name='answer5' value=\"" + answerEArray[i] + "\" onClick='document.getElementById(\"btnE" + i + "\").className+=\" selected\";document.getElementById(\"answer" + i + "\").value=\"E\";showFeedback(" + i + ");correctAnsFnc();showCheck(" + i + ");showCross(" + i + ");disable(" + i + ");'>" + Return +
                            "</td><td id='checkE" + i + "' class='iconFont correct'><img src='https://belooga.000webhostapp.com/images/check.jpg'></td></tr>" + Return
                    } else if (radioEArray[i] == false) {//If answer E array is not the correct answer
                        document.getElementById('quizFSource').value += "\t<input type='button'  id='btnE" + i + "' class='MCQAnswerButton' name='answer5' value=\"" + answerEArray[i] + "\" onClick='document.getElementById(\"btnE" + i + "\").className+=\" selected\";document.getElementById(\"answer" + i + "\").value=\"E\";showFeedback(" + i + ");incorrectAnsFnc();showCheck(" + i + ");showCross(" + i + ");disable(" + i + ");'>" + Return +
                            "</td><td id='crossE" + i + "' class='iconFont wrong'><img src='https://belooga.000webhostapp.com/images/cross.jpg'></td></tr>" + Return
                    }
                }
				//Feedback
                document.getElementById('quizFSource').value += "</table><table id=feedback" + i + " class='MCQCreateFeedback'><tr><td>Feedback:</td></tr><tr>" + Return +
                    "<td id='showFeedback" + i + "' class='showFeedback'>" + feedbackArray[i] + "</td></tr></table><br>" + Return +
                    "<table class='saveAndQuitButtons' id='practiceSaveAndQuit'><tr><td id='toTransparent'></td><td id='toTransparent'></td><td id='toTransparent'></td>" + Return +
                    "<td class='saveAndQuit effectButton' id='previousQuestion" + i + "'><input type='button' class='button' name='pQuestion' value='Previous Question' onClick='displayPage(" + (i - 1) + ");hideSubmit(" + howMany + ");'></td>" + Return +
                    "<td class='saveAndQuit effectButton' id='nextQuestion" + i + "'><input type='button' class='button' name='nQuestion' value='Next Question' onClick='displayPage(" + (i + 1) + "); checkSubmit(" + i + "," + howMany + ");'></td>" + Return +
                    "<td class='saveAndQuit effectButton' id='submitBtn" + i + "'><input type='button' value='Submit'  class='button' onclick='Submit(document.forms.myForm, " + howMany + ");'/></td>" + Return +
                    "</tr></table></div></form>" + Return

            }
			//Contact bar
            document.getElementById('quizFSource').value += "<br><div class='contactBar'><table class='contactTable'><tr><td id='KCL'>King&#39s&nbspCollege&nbspLondon&nbspModern&nbspLanguage&nbspCentre</td><td><table><tr><td id='About'><input type='button' value='About' class='navBarElementNormal'/></td>" + Return +
                "<td id='Contact'><input type='button' value='Contact Us' class='navBarElementNormal'/></td></tr></table></td></tr></table></div></body> <script type='text/javascript' src='https://belooga.000webhostapp.com/js/commonLinks.js'></script><script type='text/javascript' src='https://belooga.000webhostapp.com/js/commonSignedIn.js'></script></html></body>" + Return
        }
    }


    /**
     * Sumbit button onclick function
     * Reads amount of correct answers and total answers
     * Alerts user of score
	 * @param {form} current form to write submit page from
 +   * @param {howMany} number of questions results to produc
     */
    function Submit(form, howMany) {
        var percentage = ((correctAns / howMany) * 100).toFixed(2) //Calculating the percentage of correct answers
        var windowtext = "<html><head><link rel='shortcut icon' href='https://belooga.000webhostapp.com/images/transparent_logo.png'/><title>MCQ - Result </title><link href='https://fonts.googleapis.com/css?family=Roboto:100,300,700|Oswald:300,400,700' rel='stylesheet'/>" + Return +
            "<link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'/>" + Return +
            "<link type='text/css' rel='stylesheet' href='https://belooga.000webhostapp.com/css/common.css'/>" + Return +
            "<link type='text/css' rel='stylesheet' href='https://belooga.000webhostapp.com/css/MCQ.css'/>" + Return +
			"<script type='text/javascript' src='https://belooga.000webhostapp.com/js/mcq.js'></script>"  + Return +
            "<script type='text/javascript' src='https://belooga.000webhostapp.com/jquery/jquery-3.1.1.min.js'></script>" + Return +
            "<script type='text/javascript' src='//cdn.auth0.com/w2/auth0-7.0.3.min.js'></script>" + Return +
            "<script type='text/javascript' src='https://belooga.000webhostapp.com/js/auth.js'></script></head><body>" + Return +
            "<div class='navbar'><table class='navContent'><tr><td><table class='navBarLeft'><tr><td id='logoNav'>" + Return +
            "<img src='https://belooga.000webhostapp.com/images/navLogo.png' /></td>" + Return +
            "<td id='appName'><input type='button' value='Belooga' class='navBarElement'/></td>" + Return +
            "<td id='createNav'><input type='button' value='Dashboard' class='navBarElementSmall' /></td></tr></table></td>" + Return +
            "<td><table class='navBarRight'><tr><td id='profilePicTD'><img id='profilePic' src='https://belooga.000webhostapp.com/images/profile.png' /></td>" + Return + "<td id='usernameTD'> <input type='button' value='k1502609' class='navBarElementNormal'/></td></tr></table></td></tr></table></div>" + Return + "<div class='signOutButton'><table><tr><td class='iconFont' id='lock'>lock</td><td><input class='button' id='logOutButton' type='button' value='Sign Out'/></td></tr></table></div>" + Return +
            "<div class='MCQResultsPage'><table class='MCQCreateTitleRow'><tr><td><table id='MCQCreateTitleRowLeft'><tr>" + Return +
            "<td> <img id='MCQIconCreate' src='https://belooga.000webhostapp.com/images/MCQ.jpg' /></td>" + Return +
            "<td id='MCQTitle'>" + document.getElementById('MCQTitle').innerHTML + "</td></tr></table></td></tr></table>" + Return +
            "<table class='MCQResultsTable'><tr id='header'><td id='questionResultTD' colspan='2'>Question</td><td>Correct Answer</td><td colspan='2'>Your Answer</td></tr>" + Return
        var correctAnswer; //Holds the correct answer
        var submittedAnswer; //Holds the submitted answer
		//For loop to go around for as many questions exists
        for (var i = 1; i <= howMany; i++) {
			//Displaying the correct answer based on which radio box was selected
            windowtext += "<tr class ='resultsTableRow'><td id='paddingTD'></td><td id='questionResultNo"+i+"'>" + i + "</td>" + Return
            if (document.getElementById('radioA' + i).innerHTML == 'true') {
                windowtext += "<td id='correctAnswerCol" + i + "'>" + document.getElementById('btnA' + i).value + "</td>" + Return
                correctAnswer = document.getElementById('btnA' + i).value;
            } else if (document.getElementById('radioB' + i).innerHTML == 'true') {
                windowtext += "<td id='correctAnswerCol" + i + "'>" + document.getElementById('btnB' + i).value + "</td>" + Return
                correctAnswer = document.getElementById('btnB' + i).value;
            } else if (document.getElementById('radioC' + i).innerHTML == 'true') {
                windowtext += "<td id='correctAnswerCol" + i + "'>" + document.getElementById('btnC' + i).value + "</td>" + Return
                correctAnswer = document.getElementById('btnC' + i).value
            } else if (document.getElementById('radioD' + i).innerHTML == 'true') {
                windowtext += "<td id='correctAnswerCol" + i + "'>" + document.getElementById('btnD' + i).value + "</td>" + Return
                correctAnswer = document.getElementById('btnD' + i).value
            } else if (document.getElementById('radioE' + i).innerHTML == 'true') {
                windowtext += "<td id='correctAnswerCol" + i + "'>" + document.getElementById('btnE' + i).value + "</td>" + Return
                correctAnswer = document.getElementById('btnE' + i).value
            }
			//Displaying the submitted answer based on which button was clicked by the user
            if (document.getElementById('answer' + i).value == 'A') {
                windowtext += "<td id='submittedAnswerCol" + i + "'>" + document.getElementById('btnA' + i).value + "</td>" + Return
                submittedAnswer = document.getElementById('btnA' + i).value;
            } else if (document.getElementById('answer' + i).value == 'B') {
                windowtext += "<td id='submittedAnswerCol" + i + "'>" + document.getElementById('btnB' + i).value + "</td>" + Return
                submittedAnswer = document.getElementById('btnB' + i).value;
            } else if (document.getElementById('answer' + i).value == 'C') {
                windowtext += "<td id='submittedAnswerCol" + i + "'>" + document.getElementById('btnC' + i).value + "</td>" + Return
                submittedAnswer = document.getElementById('btnC' + i).value;
            } else if (document.getElementById('answer' + i).value == 'D') {
                windowtext += "<td id='submittedAnswerCol" + i + "'>" + document.getElementById('btnD' + i).value + "</td>" + Return
                submittedAnswer = document.getElementById('btnD' + i).value;
            } else if (document.getElementById('answer' + i).value == 'E') {
                windowtext += "<td id='submittedAnswerCol" + i + "'>" + document.getElementById('btnE' + i).value + "</td>" + Return
                submittedAnswer = document.getElementById('btnE' + i).value;
            } else {//If no button was clicked
                windowtext += "<td id='submittedAnswerCol" + i + "'>No Answer Submitted</td>" + Return
            }

            if (submittedAnswer == correctAnswer) {//If submitted answer is equal to the correct answer display a tick
                windowtext += "<td id='resultCheck"+i+"' class='iconFont correct'>check</td><td id='paddingTD'></td>" + Return
            } else { //else display a cross
                windowtext += "<td id='resultCross' class='iconFont wrong'>clear</td><td id='paddingTD'></td></tr>" + Return
            }

            windowtext += "<tr id='paddingRow'></tr>" + Return
        }
		//Contact bar
        windowtext += "<table class='MCQResultsTab'><tr><td id='rightAnswersTD' class='questionNumberCreate'>Right Answers: " + correctAns + " / " + howMany + "</td>" + Return + "<td class='questionNumberCreate'><p>Overall Score: " + percentage + "%</p></td></tr></table>" + Return +
        "</table></div><div class='contactBar'><table class='contactTable'><tr><td id='KCL'>King&#39s&nbspCollege&nbspLondon&nbspModern&nbspLanguage&nbspCentre</td>" + Return +
            "<td><table><tr><td id='About'><input type='button' value='About' class='navBarElementNormal'/></td>" + Return +
            "<td id='Contact'><input type='button' value='Contact Us' class='navBarElementNormal'/></td></tr></table></td></tr></table></div></body><script type='text/javascript' src='https://belooga.000webhostapp.com/js/commonSignedIn.js'></script> <script type='text/javascript' src='https://belooga.000webhostapp.com/js/commonLinks.js'></script></html></body>" + Return

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
        var textToWrite = document.getElementById("quizFSource").value;
        if (textToWrite == "") {} else {
            var textFileAsBlob = new Blob([textToWrite], {
                type: "html"
            });
            var fileNameToSaveAs = document.forms[0].ExerciseTitle.value + "_Quiz.html";

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
        var html = $('#quizFSource').val();
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
	* Allows user to download html file for the quiz (Local Area)
	*
	*/
	function saveTextAsFileOffline() {
    var textToWrite = document.getElementById("quizFSource").value;
    if (textToWrite == "") {} else {
        var textFileAsBlob = new Blob([textToWrite], {
            type: "html"
        });
        var fileNameToSaveAs = document.forms[0].ExerciseTitle.value + "_Quiz.html";

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
