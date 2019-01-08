  //Array of letters to be pushed and displayed to the user on preview
  var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  /*
  *Special characters which can also be used as hangman characters
  */
  var eLetters = ['e', 'è', 'é', 'ê', 'ë', 'ē', 'ė', 'ę', 'E', 'È', 'É', 'Ê', 'Ë', 'Ē', 'Ė', 'Ę'];
  var uLetters = ['U', 'Û', 'Ü', 'Ù', 'Ú', 'Ū', 'u', 'û', 'ü', 'ù', 'ú', 'ū'];
  var iLetters = ['I', 'Î', 'Ï', 'Í', 'Ī', 'Į', 'Ì', 'i', 'î', 'ï', 'í', 'ī', 'į', 'ì'];
  var zLetters = ['Z', 'Ž', 'Ź', 'Ż', 'z', 'ž', 'ź', 'ż'];
  var aLetters = ['A', 'À', 'Á', 'Â', 'Ä', 'Æ', 'Ã', 'Å', 'Ā', 'a', 'à', 'á', 'â', 'ä', 'æ', 'ã', 'å', 'ā'];
  var sLetters = ['S', 'Ś', 'Š', 's', 'ß', 'ś', 'š'];
  var lLetters = ['L', 'Ł', 'l', 'ł'];
  var yLetters = ['Y', 'Ŷ', 'y', 'ŷ'];
  var cLetters = ['C', 'Ç', 'Ć', 'Č', 'c', 'ç', 'ć', 'č'];
  var nLetters = ['N', 'Ñ', 'Ń', 'n', 'ñ', 'ń'];
  var oLetters = ['O', 'Ô', 'Ö', 'Ò', 'Ó', 'Œ', 'Ø', 'Ō', 'Õ', 'o', 'ô', 'ö', 'ò', 'ó', 'œ', 'ø', 'ō', 'õ'];
  var specialChar; //Special character to be compared
  var categories; // Array of topics
  var chosenCategory; // Selected catagory
  var word; // Selected word
  var geusses = []; // Stored geusses
  var lives; // Lives
  var Return = "\r"; //For adding a new line
  var prev = 1; //Previous Question
  var current = 1; //Current Question
  var next; //Next Question
  var questionNumber = 0; //Holds value of the current question being displayed
  // Get elements
  var showTick = document.getElementById("tick"); //Get the tick icon
  var showCross = document.getElementById("cross"); //Get the cross icon
  var modal1 = document.getElementById('myModal1'); // Get the modal
  var btn1 = document.getElementById("myBtn1"); // Get the button that opens the modal
  var span1 = document.getElementsByClassName("close1")[0]; // Get the <span> element that closes the modal
  var numberOfQuestions = 0; //Set the number of questions to 0
  var showLives = document.getElementById("guesses"); //get the number of guesses
  var counter = 0; // Count correct geusses
  //Creating arrays for feedbacks, questions and hints
   feedbacks = [];
   questions = [];
   hints = [];
   categories = []; //Creating array to hold all of the answers
  /*
  * Window onload functions
  */
  window.onload = function() {
      span1.onclick = function() { // When the user clicks on <span> (x), close the modal
          modal1.style.display = "none";
      }
      window.onclick = function(event) { // When the user clicks anywhere outside of the modal, close it
          if (event.target == modal1) {
              modal1.style.display = "none";
          }
      }
  }
	/*
	* Preview onclick function, to write generated
	* code and open html page in new tab
	*
	*/
    function previews() {
          if (questions[0] != null) {
			    writeExercise(numberOfQuestions, true); //Function used to write generated code
				previewQuiz(); //gets generated code and writes to new tab.
	} else {
          displayInfo("Please add a question to the hangman Exercise."); //Validation in case no questions have been added.
	}
    }
	 /*
	   * Next question onclick function to display
	   * the next question in the array.
	   */
    function nextQuestions() {
          next = (document.getElementById('questionNumber').value * 1 + 1)
          if (next > current) { //Validation incase there are no more questions to display
              displayInfo("There are no more questions.");
              next = (document.getElementById('questionNumber').value * 1 - 1)
          } else { //Getting values from array and displaying in the user input
              next = (document.getElementById('questionNumber').value * 1 + 1)
              document.getElementById('question').value = questions[next - 1];
              document.getElementById('answer').value = categories[next - 1];
              document.getElementById('hintTextArea').value = hints[next - 1];
              document.getElementById('feedback').value = feedbacks[next - 1];
              document.getElementById('questionNumber').value = next;
              if (next == current) { //If the user is not on the latest question, enable add/clear buttons
                  document.getElementById("addQuestion").disabled = false;
                  document.getElementById("clear").disabled = false;
                  clearForm();
              }
          }
      }
  	  /*
	   * previous question onclick function to display
	   * the previous question in the array.
	   */
     function prevQuestions() {
          prev = document.getElementById('questionNumber').value - 1
          if (prev == 0) { //Validation in case there are no more previous questions.
              displayInfo("This is the first question.");
          } else { //Getting values from array and displaying in the user input
              document.getElementById("addQuestion").disabled = true; //Button disabled to prevent duplication in arrays
              document.getElementById("clear").disabled = true; //Button disabled to prevent duplication in arrays
              document.getElementById('question').value = questions[prev - 1];
              document.getElementById('answer').value = categories[prev - 1];
              document.getElementById('hintTextArea').value = hints[prev - 1];
              document.getElementById('feedback').value = feedbacks[prev - 1];
              document.getElementById('questionNumber').value = prev;
              next = (prev * 1 + 1);
          }
      }
	/*
	* function to display information
	* in the notification modal and set to hide/display
	* @param {string} holds the value of information to display
	*/
	function displayInfo(string){
		document.getElementById('modalText').innerHTML = string;
		modal1.style.display = "block"; //Sets the modal style to display (will slide in from the bottom of the screen)
		$('#myModal1').delay(2000).fadeOut('slow');//Waits two seconds then performs the fade out animation
		setTimeout(function(){modal1.style.display = "none";}, 2500);//Sets the modal style to 'none'
	}
  	  /*
	   * Clear onclick function to clear all
	   * user inputs.
	   */
      function clearForm() {
          document.getElementById('question').value = "";
          document.getElementById('answer').value = "";
          document.getElementById('hintTextArea').value = "";
          document.getElementById('feedback').value = "";
      }
    /*
	   * addQuestion function onclick,
	   * add inputs to corresponding arrays
	   */
      function addQuestions(){
          if (document.getElementById('exerciseTitle').value == "") { //Validation incase no exercise title is entered.
              displayInfo("Please enter a exercise title.");
          } else if (document.getElementById('question').value == "") { // Validation incase no question is entered
              displayInfo("Please enter a question.");
          } else if (document.getElementById('answer').value == "") { // Validation incase no answer is entered
              displayInfo("Please enter an answer.");
          } else if(!/^[a-zA-Z\u00C0-\u017F/\s]*$/g.test(document.getElementById('answer').value)){ //Validation incase any characters besides spaces and latin alphabet are entered
			  displayInfo("Please remove any special characters.");
		  }else {
			  //Pushing the user form inputs to the array
              categories.push([document.getElementById('answer').value]);
              hints.push([document.getElementById('hintTextArea').value]);
              feedbacks.push([document.getElementById('feedback').value]);
              questions.push([document.getElementById('question').value]);
              numberOfQuestions++; //Incrementing number of questions
              document.getElementById('questionNumber').value = numberOfQuestions + 1; //updating DOM
              document.getElementById('maxQuestion').value = numberOfQuestions + 1; //updating DOM
              clearForm();//Clearing the form
              current += 1;  //adding one to the current question
              displayInfo("Question " + numberOfQuestions + " added to the exercise."); //Notification displaying that question has been added.*/
          }
      }
  /*
   * Loops through every special character array, if letter matches a character from array,
   * returns english version of letter
   */
  function specialCharacters(letter) {
      for (var i = 0; i < eLetters.length; i++) {
          if (letter === eLetters[i]) {
              return 'E';
          }
      }
      for (var i = 0; i < uLetters.length; i++) {
          if (letter === uLetters[i]) {
              return 'U';
          }
      }
      for (var i = 0; i < iLetters.length; i++) {
          if (letter === iLetters[i]) {
              return 'I';
          }
      }
      for (var i = 0; i < zLetters.length; i++) {
          if (letter === zLetters[i]) {
              return 'Z';
          }
      }
      for (var i = 0; i < aLetters.length; i++) {
          if (letter === aLetters[i]) {
              return 'A';
          }
      }
      for (var i = 0; i < sLetters.length; i++) {
          if (letter === sLetters[i]) {
              return 'S';
          }
      }
      for (var i = 0; i < lLetters.length; i++) {
          if (letter === lLetters[i]) {
              return 'L';
          }
      }
      for (var i = 0; i < yLetters.length; i++) {
          if (letter === yLetters[i]) {
              return 'Y';
          }
      }
      for (var i = 0; i < cLetters.length; i++) {
          if (letter === cLetters[i]) {
              return 'C';
          }
      }
      for (var i = 0; i < nLetters.length; i++) {
          if (letter === nLetters[i]) {
              return 'N';
          }
      }
      for (var i = 0; i < oLetters.length; i++) {
          if (letter === oLetters[i]) {
              return 'O';
          }
      }
  }
  lives = 6; //Number of chances user had
  /*
   * Function to check how many guesses have been used
   * and display corresponding comments
   * @param {group} current increment of questions which is being displayed
   * @param {letter} Letter of the guess the function is being checked with
   * @param {word} word answer of the hangman.
   */
  function check(group, letter, word) {
      var geuss = letter;
      this.onclick = null;
      var j = -1;
      for (var i = 0; i < word.length; i++) {
          var caseInsensitive = word[i].toUpperCase();
          if (caseInsensitive === geuss) {
              j = i;
              document.getElementById(group + "guess" + i).innerHTML = word[i];
              counter += 1; //Incrementing counter
          } else if (specialCharacters(word[i]) === geuss) { //If any special characters have been used
              specialChar = word[i];
              j = word.indexOf(specialChar);
              document.getElementById(group + "guess" + i).innerHTML = word[i];
              counter += 1; //Incrementing counter
          }
      }
      if (j === -1) {
          lives -= 1;
          if (lives >= 0) { //If  guess is wrong
              document.getElementById('hangmanImage' + group).src = 'https://belooga.000webhostapp.com/images/Hangman' + lives + '.png'; //display next sequence of the hangman image.
          }
          comments(group, letter, word); //run comments function to display corresponding comments.
      } else {
          comments(group, letter, word); //run comments function to display corresponding comments.
      }
  }
  /*
   * Function to display how many lives are left and
   * if out of lives end game
   * @param {group} current increment of questions which is being displayed
   * @param {letter} Letter of the guess the function is being checked with
   * @param {word} word answer of the hangman.
   */
  function comments(group, letter, word) {
	  //Declaring variables
      showLives = document.getElementById("guesses" + group);
      showCross = document.getElementById("cross" + group)
      showLives.innerHTML = "You have " + lives + " guesses left";
      if (lives < 1) { //If lives is less than 1, show "game over"
          showLives.innerHTML = "Game Over!"; //
		  $("#alphabet" + group).addClass('disabled1'); //Disable the letters
          showLives.disabled = true; //Disable the lives
          showCross.style.display = "block"; //Show the cross to represent game over
          document.getElementById("feedback" + group).style.display = "block"; //Display feedback
      }
	  //Declaring variables
      showTick = document.getElementById("tick" + group)
	  var spaces = 0; // Number of spaces in word '-'
	  if(document.getElementById("spaces" + group) !== null){ //If spaces in word
          spaces = document.getElementById("spaces" + group).innerHTML * 1; //Declare variables
	  }
      for (var i = 0; i < word.length; i++) { //Loop round to check if word matches guesses
          if (counter + spaces === word.length) { //If counter + spaces are equal to the word.length
              showLives.innerHTML = "You Win!"; //Display you win
			  $("#alphabet" + group).addClass('disabled1'); // disable letters
              showLives.disabled = true; //disable lives
              showTick.style.display = "block"; //Show the cross to represent game won
              document.getElementById("feedback" + group).style.display = "block"; //Display feedback
          }
      }
	  //Disabling letter clicked to prevent user from using it again.
      var disableString = group + "letter" + letter;
      $("#" + disableString).addClass('disabled');
  }
  /*
   * Function to display hints when the button is clicked
   * @param {group} current increment of questions which is being displayed
   * @param {hint} hint to display
   */
  function hint(group, hint) {
      if (hint == "") { //If no hint exists
          document.getElementById("clue" + group).innerHTML = "There is no hint available for this question";
      } else { //If hint exists
          document.getElementById("clue" + group).innerHTML = "Hint: " + hint; //Display hint
      }
  }
  /**
   * button function to display a currently hidden element
   * @param {pageID} pageID desired questions to display
   */
  function displayPage(pageID) {
      if (document.getElementById('hangman' + pageID) !== null) { //As long as the page exists
          if (document.getElementById('hangman' + (pageID - 1)) !== null) { //Hiding the previous page
              var cur = document.getElementById('hangman' + (pageID - 1));
              cur.style.display = 'none';
          }
          if (document.getElementById('hangman' + (pageID + 1)) !== null) { //Hiding the next page
              var cur = document.getElementById('hangman' + (pageID + 1));
              cur.style.display = 'none';
          }
          var div = document.getElementById('hangman' + pageID); //Displaying the page passed through the parameters
          div.style.display = 'block';

      }
  }
     /**
     * button function to display the submit button
     * @param {i, howMany} i current question number
     * howMany the number of questions in total.
     */
    function checkSubmit(i, howMany) {
        if (howMany == 1) { //Hide next question button if only one question
            var div2 = document.getElementById('nextQuestion' + (i));
            div2.style.display = 'none';
			var div = document.getElementById('submitBtn' + i);
            div.style.display = 'block';
        }else if (i + 2 == howMany) { //Hide next question button on the last question
            var div = document.getElementById('submitBtn' + (i + 1));
            div.style.display = 'block';
            var div2 = document.getElementById('nextQuestion' + (i + 1));
            div2.style.display = 'none';
        }
    }
	/**
     * Uses array created to form the html code for the exercise to be produced
     *
     * @param {howMany} number of questions to produce
     * @param {online} whether the quiz generated should display login information for online use
     */
  function writeExercise(howMany, online) {
	  if(howMany == 0){ //If no questions exist
		  displayInfo("Please add a question to the hangman Exercise.");
	  }else{
      guesses = [];
      counter = 0;
      var space = 0; // Number of spaces in word '-'
      document.getElementById('exerciseSource').value = "<!DOCTYPE html><html><head><link rel='shortcut icon' href='https://belooga.000webhostapp.com/images/transparent_logo.png'/><title>" + document.getElementById('exerciseTitle').value + "</title>" + Return +
          "<link href='https://fonts.googleapis.com/css?family=Roboto:100,300,700|Oswald:300,400,700' rel='stylesheet'/>" + Return +
          "<link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'/>" + Return +
          "<link rel='stylesheet' href='https://belooga.000webhostapp.com/css/common.css' type='text/css'/>" + Return +
          "<link rel='stylesheet' href='https://belooga.000webhostapp.com/css/hangman.css' type='text/css'/>" + Return +
          "<script type='text/javascript' src='https://belooga.000webhostapp.com/js/hangman.js'></script>" + Return +
          "<script type='text/javascript' src='https://belooga.000webhostapp.com/jquery/jquery-3.1.1.min.js'></script>" + Return +
          "<script type='text/javascript' src='//cdn.auth0.com/w2/auth0-7.0.3.min.js'></script>" + Return +
          "<script type='text/javascript' src='https://belooga.000webhostapp.com/js/auth.js'></script>" + Return +
		  "<body onload='{displayPage(0);checkSubmit(0," + howMany + ");}'>" + Return +
		  "</head><body>" + Return +
          "<div class='navbar'><table class='navContent'><tr><td><table class='navBarLeft'><tr> <td id='logoNav'><img src='https://belooga.000webhostapp.com/images/navLogo.png' /></td>" + Return +
          "<td id='appName'><input type='button' value='Belooga' class='navBarElement'/></td><td id='createNav'><input type='button' value='Dashboard' class='navBarElementSmall' /></td></tr></table></td>" + Return +
          "<td><table class='navBarRight'><tr>" + Return
		  if(online == true){ //If online is true then display login information
				document.getElementById('exerciseSource').value += "<td id='profilePicTD'> <img id='profilePic' src='https://belooga.000webhostapp.com/images/profile.png' /> </td>" + Return +
                "<td id='usernameTD'> <input type='button' value='k1502609' class='navBarElementNormal'/></td>" + Return
				}else{ //Else do not display profile picture or username
					document.getElementById('exerciseSource').value += "<td></td><td></td>" + Return
				}
		  document.getElementById('exerciseSource').value += "</tr></table></td></tr></table>" + Return +
          "<div class='signOutButton'><table><tr><td class='iconFont' id='lock'>lock</td><td><input class='button' id='logOutButton' type='button' value='Sign Out'/>" + Return +
          "</td></tr></table></div></div>" + Return
      for (var i = 0; i <= (howMany - 1); i++) { //For loop to write html code as many questions exist
          chosenCategory = categories[i];
          word = chosenCategory[0];
          questionNumber++;
          word = word.replace(/\s/g, "-");
          console.log(categories[questionNumber]);
		  document.getElementById('exerciseSource').value += "<div id='hangman"+i+"' class='questionDiv'><table class='hangmanCreateTitleRow'>" + Return +
          "<tr><td><table id='hangmanCreateTitleRowLeft'><tr><td><img id='hangmanIconCreate' src='https://belooga.000webhostapp.com/images/hangman.jpg' /></td><td id='hangmanTitle2'>" + document.getElementById("exerciseTitle").value + "</td></tr></table></tr></table>" + Return
          document.getElementById('exerciseSource').value += "<div id='questionDiv" + i + "' class='wrapper'><table class='hangmanAnswerQuestion'><tr><td class='questionNumberCreate'>Question:</td>" + Return +
              "<td><input type='text' class='questionNumberCreateNumber' style='border: none' size=1 id='questNo1' value='" + (i + 1) + "' readonly></td><td>/</td>" + Return +
              "<td><input type='text' class='questionNumberCreateNumber' style='border: none' size=1 id='maxQuestNo1' value='" + howMany + "' readonly></td>" + Return +
              "</tr><tr><td colspan='4' id='question2' class='questionToAnswer'>" + questions[i] + "</td></tr></table></div>" + Return +
              "<div class='wrapper'><div id='buttons'><ul class='alphabet' id='alphabet"+i+"'>" + Return
          for (var j = 0; j < alphabet.length; j++) { //Loops through the letters to add them as buttons that check value and compare them to the letters in the word to guess
              document.getElementById('exerciseSource').value += "<li id='" + i + "letter" + alphabet[j] + "' onclick='check(\"" + i + "\",\"" + alphabet[j] + "\",\"" + word + "\");'>" + alphabet[j] + "</li>" + Return
          }
          document.getElementById('exerciseSource').value += "</ul></div>" + Return
          document.getElementById('exerciseSource').value += "<table id='playHangman'><tr><td rowspan='3'><img id='hangmanImage" + i + "' src = 'https://belooga.000webhostapp.com/images/Hangman6.png' /></td><div id='test'><ul id='my-word'><td id='hold' colspan='3'>" + Return
          for (var k = 0; k < word.length; k++) { //Loops through the letters of the word to be guessed
              if (word[k] === "-") { //If the word contains a space
				space += 1; // Number of spaces in word '-'
                  document.getElementById('exerciseSource').value += "<p hidden id='spaces"+i+"'>" + space + "</p><li id='" + i + "guess" + k + "' class='guess'>-</li>" + Return
              } else { //Else the word contains letters
                  document.getElementById('exerciseSource').value += "<li id='" + i + "guess" + k + "' class='guess'>_</li>" + Return
              }
          }

          document.getElementById('exerciseSource').value += "</td></ul></div><td id='rightTD' rowspan='3'></td></tr><tr>" + Return
          document.getElementById('exerciseSource').value += "<td class='clue' id='clue" + i + "'></td>" + Return
          document.getElementById('exerciseSource').value += "<td class='guesses' id='guesses" + i + "'>You have 6 guesses</td><td class='tickcross' id='tick" + i + "' style='display:none;'><img src='https://belooga.000webhostapp.com/images/tick2.png'></td><td class='tickcross' id='cross" + i + "' style='display:none;'><img src='https://belooga.000webhostapp.com/images/cross2.png'></td></tr><tr>" + Return
          //Feedback
          document.getElementById('exerciseSource').value += "<td id='bottomTD' colspan='3'></td></tr></table>" + Return +
              "<table class='feedback2' id='feedback" + i + "' style='display:none;'><tr><td>Feedback:</td></tr><tr><td><div id='feedbackAnswer' readonly rows='2' cols='83'>The correct answer is: " + chosenCategory[0] + "&#10;" + feedbacks[i] + "</div></td></tr></table>" + Return +

              "<table class='saveAndQuitButtons'><tr><td id='toTransparent'></td><td id='toTransparent'></td><td id='toTransparent'></td><td class='saveAndQuit effectButton'><input type='button' class = 'button' id='hint' onclick='hint(" + i + ",\"" + hints[i] + "\")' value='Hint'/>" + Return +
              "</td><td class='saveAndQuit effectButton' id='nextQuestion"+i+"'><input type='button' class='button' onClick='displayPage(" + (i + 1) + ");checkSubmit(" + i + "," + howMany + ");lives=6;counter=0;' value='Next Question'/></td>" + Return +
			  "<td class='saveAndQuit effectButton' style='display:none;' id='submitBtn"+i+"'><input type='button' class='button' onClick='Submit(" + howMany + ", \"" + word + "\");lives=6;counter=0;' value='Submit'/></td>" + Return +
			  "</tr></table></div> <!--end of wrapper --></div>" + Return
      }
      //Contact bar
      document.getElementById('exerciseSource').value += "<script type='text/javascript' src='https://belooga.000webhostapp.com/js/modal.js'></script><div class='contactBar'><table class='contactTable'><tr>" + Return +
          "<td id='KCL'>King&#39s&nbspCollege&nbspLondon&nbspModern&nbspLanguage&nbspCentre</td><td><table><tr><td id='About'><input type='button' value='About' class='navBarElementNormal'/>" + Return +
          "</td><td id='Contact'><input type='button' value='Contact Us' class='navBarElementNormal'/></td></tr></table></td></tr></table></div><script type='text/javascript' src='https://belooga.000webhostapp.com/js/commonSignedIn.js'></script><script type='text/javascript' src='https://belooga.000webhostapp.com/js/commonLinks.js'></script></html>" + Return
  }
  }
  /**
     *Submit
     * Uses information selected in write exercise to provide result feedback
     *
     * @param {form} current form to write exercise from
     * @param {howMany} number of results to return
     *
     */
  function Submit(howMany, word){
			var windowtext = "<html><head><link rel='shortcut icon' href='https://belooga.000webhostapp.com/images/transparent_logo.png'/><title>Hangman - Result </title><link href='https://fonts.googleapis.com/css?family=Roboto:100,300,700|Oswald:300,400,700' rel='stylesheet'>" + Return +
            "<link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>" + Return +
            "<link type='text/css' rel='stylesheet' href='https://belooga.000webhostapp.com/css/common.css'/>" + Return +
            "<link type='text/css' rel='stylesheet' href='https://belooga.000webhostapp.com/css/hangman.css'/>" + Return +
            "<script type='text/javascript' src='https://belooga.000webhostapp.com/js/hangman.js'></script>" + Return +
            "<script type='text/javascript' src='https://belooga.000webhostapp.com/jquery/jquery-3.1.1.min.js'></script>" + Return +
            "<script type='text/javascript' src='//cdn.auth0.com/w2/auth0-7.0.3.min.js'></script>" + Return +
            "<script type='text/javascript' src='https://belooga.000webhostapp.com/js/auth.js'></script></head><body>" + Return +
            "<div class='navbar'><table class='navContent'><tr><td><table class='navBarLeft'><tr><td id='logoNav'>" + Return +
            "<img src='https://belooga.000webhostapp.com/images/navLogo.png' /></td>" + Return +
            "<td id='appName'><input type='button' value='Belooga' class='navBarElement'/></td>" + Return +
            "<td id='createNav'><input type='button' value='Dashboard' class='navBarElementSmall' /></td></tr></table></td>" + Return +
            "<td><table class='navBarRight'><tr><td id='profilePicTD'><img id='profilePic' src='https://belooga.000webhostapp.com/images/profile.png' /></td>" + Return + "<td id='usernameTD'> <input type='button' value='k1502609' class='navBarElementNormal'/></td></tr></table></td></tr></table></div>" + Return + "<div class='signOutButton'><table><tr><td class='iconFont' id='lock'>lock</td><td><input class='button' id='logOutButton' type='button' value='Sign Out'/></td></tr></table></div>" + Return +
            "<div class='hangmanQResultsPage'><table class='hangmanCreateTitleRow'><tr><td><table id='hangmanCreateTitleRowLeft'><tr>" + Return +
            "<td> <img id='hangmanIconCreate' src='https://belooga.000webhostapp.com/images/hangman.jpg' /></td>" + Return +
            "<td id='hangmanTitle'>" + document.getElementById('hangmanTitle2').innerHTML + " - Results</td></tr></table></td></tr></table>" + Return +
			"<table class='hangmanResultsTable'><tr id='header'><td id='questionResultTD' colspan='2'>Question</td><td>Correct Answer</td></tr>" + Return
		var answerCorrect; //Stores the correct answer
		var correctAns = 0; //Number of correct answers
        for (var i = 1; i <= howMany; i++) { //Displays correct answers for the number of questions in quiz
            windowtext += "<tr class ='resultsTableRow'><td id='paddingTD'></td><td id='questionResultNo"+i+"'>" + i + "</td>" + Return
            windowtext += "<td id='correctAnswerCol" + (i-1) + "'>" + word + "</td>" + Return
			for(var k = 0; k < word.length; k++){ //Loops through word to guess
				if(document.getElementById((i-1) + 'guess' + k).innerHTML == "_"){ //If the word still contains "_", then the word has not been guessed
					answerCorrect = false;
				}else{ answerCorrect = true;} //Otherwise, the answer is correct
			}
            if (answerCorrect == true) { //If answer is correct, display result row with check
                windowtext += "<td id='resultCheck' class='iconFont correct'>check</td><td id='paddingTD'></td></tr><tr id='paddingRow'></tr>" + Return
				correctAns += 1;
            } else if(answerCorrect == false){ //Else if answer not correct, display rsult with cross
                windowtext += "<td id='resultCross' class='iconFont wrong'>clear</td><td id='paddingTD'></td></tr><tr id='paddingRow'></tr>" + Return
            }
        }
		windowtext += "</table></div>" + Return
		var percentage = (correctAns/howMany) * 100 //Holds the percentage of right answers
        windowtext += "<table class='hangmanResultsTab'><tr><td id='rightAnswersTD' class='questionNumberCreate'>Right Answers: " + correctAns + " / " + howMany + "</td>" + Return +
			"<td class='questionNumberCreate'><p>Overall Score: " + percentage + "%</p></td></tr></table>" + Return +
      //Contact bar
			"<div class='contactBar'><table class='contactTable'><tr><td id='KCL'>King&#39s&nbspCollege&nbspLondon&nbspModern&nbspLanguage&nbspCentre</td>" + Return +
            "<td><table><tr><td id='About'><input type='button' value='About' class='navBarElementNormal'/></td>" + Return +
            "<td id='Contact'><input type='button' value='Contact Us' class='navBarElementNormal'/></td></tr></table></td></tr></table></div></body><script type='text/javascript' src='https://belooga.000webhostapp.com/js/commonSignedIn.js'></script><script type='text/javascript' src='https://belooga.000webhostapp.com/js/commonLinks.js'></script></html></body>" + Return

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
   * Previews the curernt quiz in a new unopened tab
   *
   *
  **/
  function previewQuiz() {
      var previewWindow = window.open("", "")
      if (previewWindow != null) {
          previewWindow.document.open("text/html")
          previewWindow.document.write("</BASE>" + document.getElementById('exerciseSource').value)
          previewWindow.document.close()
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
            var fileNameToSaveAs = document.getElementById('exerciseTitle').value + "_hangman.html";

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
        var fileNameToSaveAs = document.getElementById('exerciseTitle').value + "_hangman.html";

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